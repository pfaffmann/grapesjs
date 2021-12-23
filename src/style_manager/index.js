/**
 * With Style Manager you build categories (called sectors) of CSS properties which could be used to customize the style of components.
 * You can customize the initial state of the module from the editor initialization, by passing the following [Configuration Object](https://github.com/artf/grapesjs/blob/master/src/style_manager/config/config.js)
 * ```js
 * const editor = grapesjs.init({
 *  styleManager: {
 *    // options
 *  }
 * })
 * ```
 *
 * Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance
 *
 * ```js
 * const styleManager = editor.StyleManager;
 * ```
 *
 * * [getConfig](#getconfig)
 * * [addSector](#addsector)
 * * [getSector](#getsector)
 * * [removeSector](#removesector)
 * * [getSectors](#getsectors)
 * * [addProperty](#addproperty)
 * * [getProperty](#getproperty)
 * * [removeProperty](#removeproperty)
 * * [getProperties](#getproperties)
 * * [getModelToStyle](#getmodeltostyle)
 * * [addType](#addtype)
 * * [getType](#gettype)
 * * [getTypes](#gettypes)
 * * [createType](#createtype)
 *
 * [Sector]: sector.html
 * [CssRule]: css_rule.html
 * [Component]: component.html
 * [Property]: property.html
 *
 * @module StyleManager
 */

import { isElement, isUndefined, isArray, isString, debounce } from 'underscore';
import Module from 'common/module';
import { Model } from 'common';
import defaults from './config/config';
import Sector from './model/Sector';
import Sectors from './model/Sectors';
import Properties from './model/Properties';
import PropertyFactory from './model/PropertyFactory';
import SectorsView from './view/SectorsView';

export const evAll = 'style';
export const evPfx = `${evAll}:`;
export const evPropUp = `${evPfx}property:update`;
export const evLayerSelect = `${evPfx}layer:select`;
export const evCustom = `${evPfx}custom`;

const propDef = value => value || value === 0;

export default () => {
  let properties;
  var sectors, SectView;

  return {
    ...Module,

    Sector,

    PropertyFactory: PropertyFactory(),

    events: {
      all: evAll,
      propertyUpdate: evPropUp,
      layerSelect: evLayerSelect,
      custom: evCustom,
    },

    name: 'StyleManager',

    /**
     * Get configuration object
     * @name getConfig
     * @function
     * @return {Object}
     */

    /**
     * Initialize module. Automatically called with a new instance of the editor
     * @param {Object} config Configurations
     * @private
     */
    init(config = {}) {
      this.__initConfig(defaults, config);
      const c = this.config;
      const { em } = c;
      const ppfx = c.pStylePrefix;
      if (ppfx) c.stylePrefix = ppfx + c.stylePrefix;
      properties = new Properties();
      sectors = new Sectors([], c);
      this.model = new Model({ targets: [] });

      // Triggers for the selection refresh and properties
      const ev = 'component:toggled component:update:classes change:state change:device frame:resized selector:type';
      const upAll = debounce(() => this.__upSel());
      this.model.listenTo(em, ev, upAll);

      // Triggers only for properties (avoid selection refresh)
      const upProps = debounce(() => {
        this.__upProps();
        this.__trgCustom();
      });
      this.model.listenTo(em, 'styleable:change', upProps);

      // Triggers only custom event
      const trgCustom = debounce(() => this.__trgCustom());
      this.model.listenTo(em, evLayerSelect, trgCustom);

      return this;
    },

    __upSel() {
      this.select(this.em.getSelectedAll());
      this.__trgCustom();
    },

    __trgCustom() {
      this.em.trigger(this.events.custom);
    },

    __trgEv(event, ...data) {
      this.em.trigger(event, ...data);
    },

    onLoad() {
      // Use silent as sectors' view will be created and rendered on StyleManager.render
      sectors.add(this.config.sectors, { silent: true });
    },

    postRender() {
      const elTo = this.getConfig().appendTo;

      if (elTo) {
        const el = isElement(elTo) ? elTo : document.querySelector(elTo);
        if (!el) return this.__logWarn('"appendTo" element not found');
        el.appendChild(this.render());
      }
    },

    /**
     * Add new sector to the collection. If the sector with the same id already exists,
     * that one will be returned.
     * @param {string} id Sector id
     * @param  {Object} sector  Object representing sector
     * @param  {string} [sector.name='']  Sector's label
     * @param  {Boolean} [sector.open=true] Indicates if the sector should be opened
     * @param  {Array<Object>} [sector.properties=[]] Array of properties
     * @param  {Object} [options={}] Options
     * @return {[Sector]} Added Sector
     * @example
     * const sector = styleManager.addSector('mySector',{
     *   name: 'My sector',
     *   open: true,
     *   properties: [{ name: 'My property'}]
     * }, { at: 0 });
     * // With `at: 0` we place the new sector at the beginning of the collection
     * */
    addSector(id, sector, options = {}) {
      let result = this.getSector(id);

      if (!result) {
        sector.id = id;
        result = sectors.add(sector, options);
      }

      return result;
    },

    /**
     * Get sector by id
     * @param {string} id  Sector id
     * @return {[Sector]|null}
     * @example
     * const sector = styleManager.getSector('mySector');
     * */
    getSector(id, opts = {}) {
      const res = sectors.where({ id })[0];
      !res && opts.warn && this._logNoSector(id);
      return res || null;
    },

    /**
     * Remove a sector by id
     * @param  {string} id Sector id
     * @return {[Sector]} Removed sector
     * @example
     * const removed = styleManager.removeSector('mySector');
     */
    removeSector(id) {
      return this.getSectors().remove(this.getSector(id, { warn: 1 }));
    },

    /**
     * Get all sectors
     * @returns {Collection<[Sector]>} Collection of sectors
     * @example
     * const sectors = styleManager.getSectors();
     * */
    getSectors(opts = {}) {
      return sectors && sectors.models ? (opts.array ? [...sectors.models] : sectors) : [];
    },

    /**
     * Add property to the sector identified by id
     * @param {string} sectorId Sector id
     * @param {Object} property Property object
     * @param {string} [property.name=''] Name of the property
     * @param {string} [property.property=''] CSS property, eg. `min-height`
     * @param {string} [property.type=''] Type of the property: integer | radio | select | color | file | composite | stack
     * @param {Array<string>} [property.units=[]] Unit of measure available, eg. ['px','%','em']. Only for integer type
     * @param {string} [property.unit=''] Default selected unit from `units`. Only for integer type
     * @param {number} [property.min=null] Min possible value. Only for integer type
     * @param {number} [property.max=null] Max possible value. Only for integer type
     * @param {string} [property.defaults=''] Default value
     * @param {string} [property.info=''] Some description
     * @param {string} [property.icon=''] Class name. If exists no text will be displayed
     * @param {Boolean} [property.preview=false] Show layers preview. Only for stack type
     * @param {string} [property.functionName=''] Indicates if value need to be wrapped in some function, for istance `transform: rotate(90deg)`
     * @param {Array<Object>} [property.properties=[]] Nested properties for composite and stack type
     * @param {Array<Object>} [property.layers=[]] Layers for stack properties
     * @param {Array<Object>} [property.list=[]] List of possible options for radio and select types
     * @param  {Object} [options={}] Options
     * @return {Property|null} Added Property or `null` in case sector doesn't exist
     * @example
     * var property = styleManager.addProperty('mySector',{
     *   name: 'Minimum height',
     *   property: 'min-height',
     *   type: 'select',
     *   defaults: '100px',
     *   list: [{
     *     value: '100px',
     *     name: '100',
     *    },{
     *      value: '200px',
     *      name: '200',
     *    }],
     * }, { at: 0 });
     * // With `at: 0` we place the new property at the beginning of the collection
     */
    addProperty(sectorId, property, opts = {}) {
      const sector = this.getSector(sectorId, { warn: 1 });
      let prop = null;
      if (sector) prop = sector.get('properties').add(property, opts);

      return prop;
    },

    /**
     * Get property by its CSS name and sector id
     * @param  {string} sectorId Sector id
     * @param  {string} name CSS property name (or id), eg. 'min-height'
     * @return {Property|null}
     * @example
     * var property = styleManager.getProperty('mySector','min-height');
     */
    getProperty(sectorId, name) {
      const sector = this.getSector(sectorId, { warn: 1 });
      let prop;

      if (sector) {
        prop = sector.get('properties').filter(prop => prop.get('property') === name || prop.get('id') === name)[0];
      }

      return prop || null;
    },

    /**
     * Remove a property from the sector
     * @param  {string} sectorId Sector id
     * @param  {string} name CSS property name, eg. 'min-height'
     * @return {Property} Removed property
     * @example
     * const property = styleManager.removeProperty('mySector', 'min-height');
     */
    removeProperty(sectorId, name) {
      const props = this.getProperties(sectorId);
      return props && props.remove(this.getProperty(sectorId, name));
    },

    /**
     * Get properties of the sector
     * @param  {string} sectorId Sector id
     * @return {Properties} Collection of properties
     * @example
     * var properties = styleManager.getProperties('mySector');
     */
    getProperties(sectorId) {
      let props = null;
      const sector = this.getSector(sectorId, { warn: 1 });
      if (sector) props = sector.get('properties');

      return props;
    },

    /**
     * Get what to style inside Style Manager. If you select the component
     * without classes the entity is the Component itself and all changes will
     * go inside its 'style' property. Otherwise, if the selected component has
     * one or more classes, the function will return the corresponding CSS Rule
     * @param  {Model} model
     * @return {Model}
     */
    getModelToStyle(model, options = {}) {
      const { em } = this;
      const { skipAdd } = options;
      const classes = model.get('classes');
      const id = model.getId();

      if (em && classes) {
        const config = em.getConfig();
        const um = em.get('UndoManager');
        const cssC = em.get('CssComposer');
        const sm = em.get('SelectorManager');
        const smConf = sm ? sm.getConfig() : {};
        const state = !config.devicePreviewMode ? em.get('state') : '';
        const valid = classes.getStyleable();
        const hasClasses = valid.length;
        const useClasses = !smConf.componentFirst || options.useClasses;
        const addOpts = { noCount: 1 };
        const opts = { state, addOpts };
        let rule;

        // I stop undo manager here as after adding the CSSRule (generally after
        // selecting the component) and calling undo() it will remove the rule from
        // the collection, therefore updating it in style manager will not affect it
        // #268
        um.stop();

        if (hasClasses && useClasses) {
          const deviceW = em.getCurrentMedia();
          rule = cssC.get(valid, state, deviceW);

          if (!rule && !skipAdd) {
            rule = cssC.add(valid, state, deviceW, {}, addOpts);
          }
        } else if (config.avoidInlineStyle) {
          rule = cssC.getIdRule(id, opts);
          !rule && !skipAdd && (rule = cssC.setIdRule(id, {}, opts));
          if (model.is('wrapper')) rule.set('wrapper', 1, addOpts);
        }

        rule && (model = rule);
        um.start();
      }

      return model;
    },

    getParentRules(target, state) {
      const { em } = this;
      let result = [];

      if (em && target) {
        const cssC = em.get('CssComposer');
        const cssGen = em.get('CodeManager').getGenerator('css');
        const cmp = target.toHTML ? target : target.getComponent();
        const sel = em.getSelected();
        const optsSel = { combination: true, array: true };
        let cmpRules = [];
        let otherRules = [];
        let rules = [];

        // Componente related rule
        if (cmp) {
          cmpRules = cssC.getRules(`#${cmp.getId()}`);
          otherRules = cssC.getRules(sel.getSelectors().getFullName(optsSel));
          rules = otherRules.concat(cmpRules);
        } else {
          cmpRules = cssC.getRules(`#${sel.getId()}`);
          otherRules = cssC.getRules(target.getSelectors().getFullName(optsSel));
          rules = cmpRules.concat(otherRules);
        }

        const all = rules
          .filter(rule => (!isUndefined(state) ? rule.get('state') === state : 1))
          .sort(cssGen.sortRules)
          .reverse();

        // Slice removes rules not related to the current device
        result = all.slice(all.indexOf(target) + 1);
      }

      return result;
    },

    /**
     * Add new property type
     * @param {string} id Type ID
     * @param {Object} definition Definition of the type. Each definition contains
     *                            `model` (business logic), `view` (presentation logic)
     *                            and `isType` function which recognize the type of the
     *                            passed entity
     *@example
     * styleManager.addType('my-custom-prop', {
     *    create({ props, change }) {
     *      const el = document.createElement('div');
     *      el.innerHTML = '<input type="range" class="my-input" min="10" max="50"/>';
     *      const inputEl = el.querySelector('.my-input');
     *      inputEl.addEventListener('change', event => change({ event })); // change will trigger the emit
     *      inputEl.addEventListener('input', event => change({ event, complete: false }));
     *      return el;
     *    },
     *    emit({ props, updateStyle }, { event, complete }) {
     *      const { value } = event.target;
     *      const valueRes = value + 'px';
     *      // Pass a string value for the exact CSS property or an object containing multiple properties
     *      // eg. updateStyle({ [props.property]: valueRes, color: 'red' });
     *      updateStyle(valueRes, { complete });
     *    },
     *    update({ value, el }) {
     *      el.querySelector('.my-input').value = parseInt(value, 10);
     *    },
     *    destroy() {
     *      // In order to prevent memory leaks, use this method to clean, eventually, created instances, global event listeners, etc.
     *    }
     *})
     */
    addType(id, definition) {
      properties.addType(id, definition);
    },

    /**
     * Get type
     * @param {string} id Type ID
     * @return {Object} Type definition
     */
    getType(id) {
      return properties.getType(id);
    },

    /**
     * Get all types
     * @return {Array}
     */
    getTypes() {
      return properties.getTypes();
    },

    /**
     * Create new property from type
     * @param {string} id Type ID
     * @param  {Object} [options={}] Options
     * @param  {Object} [options.model={}] Custom model object
     * @param  {Object} [options.view={}] Custom view object
     * @return {PropertyView}
     * @example
     * const propView = styleManager.createType('integer', {
     *  model: {units: ['px', 'rem']}
     * });
     * propView.render();
     * propView.model.on('change:value', ...);
     * someContainer.appendChild(propView.el);
     */
    createType(id, { model = {}, view = {} } = {}) {
      const { config } = this;
      const type = this.getType(id);

      if (type) {
        return new type.view({
          model: new type.model(model),
          config,
          ...view,
        });
      }
    },

    setTarget(target, opts) {
      return SectView.setTarget(target, opts);
    },

    getTargets() {
      const { propTarget } = SectView || {};
      return (propTarget && propTarget.targets) || [];
    },

    /**
     * Select different target for the Style Manager.
     * It could be a Component, CSSRule, or a string of any CSS selector
     * @param {[Component]|[CSSRule]|String} target
     * @return {Array<[Component]|[CSSRule]>} Array containing selected Components or CSSRules
     * @private
     */
    select(target, opts = {}) {
      const { em } = this;
      const trgs = isArray(target) ? target : [target];
      const { stylable } = opts;
      const cssc = em.get('CssComposer');
      let targets = [];

      trgs.filter(Boolean).forEach(target => {
        let model = target;

        if (isString(target)) {
          const rule = cssc.getRule(target) || cssc.setRule(target);
          !isUndefined(stylable) && rule.set({ stylable });
          model = rule;
        }

        targets.push(model);
      });

      targets = targets.map(t => this.getModelToStyle(t));
      const lastTarget = targets.slice().reverse()[0];
      const lastTargetParents = this.getParentRules(lastTarget, em.getState());
      this.model.set({ targets, lastTarget, lastTargetParents });
      this.__upProps(opts);

      return targets;
    },

    addStyleTargets(style, opts) {
      this.getSelected().map(t => t.addStyle(style, opts));
    },

    getSelected() {
      return this.model.get('targets');
    },

    getLastSelected() {
      return this.model.get('lastTarget') || null;
    },

    getSelectedParents() {
      return this.model.get('lastTargetParents') || [];
    },

    getEmitter() {
      return SectView.propTarget;
    },

    /**
     * Render sectors and properties
     * @return  {HTMLElement}
     * @private
     * */
    render() {
      const { config, em } = this;
      const el = SectView && SectView.el;
      SectView = new SectorsView({
        el,
        collection: sectors,
        target: em,
        config,
      });
      return SectView.render().el;
    },

    _logNoSector(sectorId) {
      const { em } = this;
      em && em.logWarning(`'${sectorId}' sector not found`);
    },

    __upProps(opts) {
      const lastTarget = this.getLastSelected();
      if (!lastTarget || !this.getConfig().custom) return;

      const lastTargetParents = this.getSelectedParents();
      const style = lastTarget.getStyle();
      const parentStyles = lastTargetParents.map(p => ({
        target: p,
        style: p.getStyle(),
      }));

      sectors.map(sector => {
        sector.getProperties().map(prop => {
          this.__upProp(prop, style, parentStyles, opts);
        });
      });
    },

    getBuiltIn(prop = '') {
      return this.PropertyFactory.build(prop)[0] || null;
    },

    __upProp(prop, style, parentStyles, opts) {
      const name = prop.getName();
      const value = style[name];
      const hasVal = propDef(value);
      const isStack = prop.getType() === 'stack';
      const isComposite = prop.getType() === 'composite';
      const opt = { ...opts, __up: true };
      const canUpdate = !isComposite;
      let newLayers = isStack ? prop.__getLayersFromStyle(style) : [];
      let newProps = isComposite ? prop.__getPropsFromStyle(style) : {};
      let newValue = hasVal ? value : null;
      let parentTarget = null;

      if ((isStack && newLayers === null) || (isComposite && newProps === null)) {
        const method = isStack ? '__getLayersFromStyle' : '__getPropsFromStyle';
        const parentItem = parentStyles.filter(p => prop[method](p.style) !== null)[0];

        if (parentItem) {
          newValue = parentItem.style[name];
          parentTarget = parentItem.target;
          const val = prop[method](parentItem.style);
          if (isStack) {
            newLayers = val;
          } else {
            newProps = val;
          }
        }
      } else if (!hasVal) {
        newValue = null;
        const parentItem = parentStyles.filter(p => propDef(p.style[name]))[0];

        if (parentItem) {
          newValue = parentItem.style[name];
          parentTarget = parentItem.target;
        }
      }

      prop.__setParentTarget(parentTarget);
      canUpdate && prop.__getFullValue() !== newValue && prop.upValue(newValue, opt);
      isStack && prop.__setLayers(newLayers || []);
      if (isComposite) {
        const props = prop.getProperties();

        // Detached has to be treathed as separate properties
        if (prop.isDetached()) {
          const newStyle = prop.__getPropsFromStyle(style) || {};
          const newParentStyles = parentStyles.map(p => ({
            ...p,
            style: prop.__getPropsFromStyle(p.style) || {},
          }));
          props.map(pr => this.__upProp(pr, newStyle, newParentStyles, opts));
        } else {
          prop.__setProperties(newProps || {}, opt);
          prop.getProperties().map(pr => pr.__setParentTarget(parentTarget));
        }
      }
    },

    destroy() {
      [properties, sectors].forEach(coll => {
        coll.reset();
        coll.stopListening();
      });
      SectView && SectView.remove();
      [properties, sectors, SectView].forEach(i => (i = {}));
      this.em = {};
      this.config = {};
    },
  };
};
