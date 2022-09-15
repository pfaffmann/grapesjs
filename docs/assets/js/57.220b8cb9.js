(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{404:function(a,t,s){"use strict";s.r(t);var e=s(13),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"undomanager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undomanager"}},[a._v("#")]),a._v(" UndoManager")]),a._v(" "),t("p",[a._v("This module allows to manage the stack of changes applied in canvas.\nOnce the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" um "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" editor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("UndoManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ul",[t("li",[t("a",{attrs:{href:"#getconfig"}},[a._v("getConfig")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#add"}},[a._v("add")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#remove"}},[a._v("remove")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#removeall"}},[a._v("removeAll")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#start"}},[a._v("start")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#stop"}},[a._v("stop")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#undo"}},[a._v("undo")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#undoall"}},[a._v("undoAll")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#redo"}},[a._v("redo")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#redoall"}},[a._v("redoAll")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#hasundo"}},[a._v("hasUndo")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#hasredo"}},[a._v("hasRedo")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#getstack"}},[a._v("getStack")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#clear"}},[a._v("clear")])])]),a._v(" "),t("h2",{attrs:{id:"getconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getconfig"}},[a._v("#")]),a._v(" getConfig")]),a._v(" "),t("p",[a._v("Get module configurations")]),a._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// { ... }")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[a._v("Object"),t("OutboundLink")],1)]),a._v(" Configuration object")]),a._v(" "),t("h2",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" add")]),a._v(" "),t("p",[a._v("Add an entity (Model/Collection) to track\nNote: New Components and CSSRules will be added automatically")]),a._v(" "),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("entity")]),a._v(" "),t("strong",[a._v("(Model | Collection)")]),a._v(" Entity to track")])]),a._v(" "),t("h3",{attrs:{id:"examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("someModelOrCollection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"remove"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[a._v("#")]),a._v(" remove")]),a._v(" "),t("p",[a._v("Remove and stop tracking the entity (Model/Collection)")]),a._v(" "),t("h3",{attrs:{id:"parameters-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("entity")]),a._v(" "),t("strong",[a._v("(Model | Collection)")]),a._v(" Entity to remove")])]),a._v(" "),t("h3",{attrs:{id:"examples-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("someModelOrCollection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"removeall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removeall"}},[a._v("#")]),a._v(" removeAll")]),a._v(" "),t("p",[a._v("Remove all entities")]),a._v(" "),t("h3",{attrs:{id:"examples-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[a._v("#")]),a._v(" start")]),a._v(" "),t("p",[a._v("Start/resume tracking changes")]),a._v(" "),t("h3",{attrs:{id:"examples-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[a._v("#")]),a._v(" stop")]),a._v(" "),t("p",[a._v("Stop tracking changes")]),a._v(" "),t("h3",{attrs:{id:"examples-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("stop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"undo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[a._v("#")]),a._v(" undo")]),a._v(" "),t("p",[a._v("Undo last change")]),a._v(" "),t("h3",{attrs:{id:"parameters-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("all")]),a._v("   (optional, default "),t("code",[a._v("true")]),a._v(")")])]),a._v(" "),t("h3",{attrs:{id:"examples-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-7"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("undo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"undoall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undoall"}},[a._v("#")]),a._v(" undoAll")]),a._v(" "),t("p",[a._v("Undo all changes")]),a._v(" "),t("h3",{attrs:{id:"examples-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-8"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("undoAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"redo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo"}},[a._v("#")]),a._v(" redo")]),a._v(" "),t("p",[a._v("Redo last change")]),a._v(" "),t("h3",{attrs:{id:"parameters-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("all")]),a._v("   (optional, default "),t("code",[a._v("true")]),a._v(")")])]),a._v(" "),t("h3",{attrs:{id:"examples-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-9"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("redo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"redoall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redoall"}},[a._v("#")]),a._v(" redoAll")]),a._v(" "),t("p",[a._v("Redo all changes")]),a._v(" "),t("h3",{attrs:{id:"examples-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-10"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("redoAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])]),a._v(" "),t("h2",{attrs:{id:"hasundo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hasundo"}},[a._v("#")]),a._v(" hasUndo")]),a._v(" "),t("p",[a._v("Checks if exists an available undo")]),a._v(" "),t("h3",{attrs:{id:"examples-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-11"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hasUndo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[a._v("Boolean"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"hasredo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hasredo"}},[a._v("#")]),a._v(" hasRedo")]),a._v(" "),t("p",[a._v("Checks if exists an available redo")]),a._v(" "),t("h3",{attrs:{id:"examples-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-12"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hasRedo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[a._v("Boolean"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"isregistered"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isregistered"}},[a._v("#")]),a._v(" isRegistered")]),a._v(" "),t("p",[a._v("Check if the entity (Model/Collection) to tracked\nNote: New Components and CSSRules will be added automatically")]),a._v(" "),t("h3",{attrs:{id:"parameters-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("obj")])]),a._v(" "),t("li",[t("code",[a._v("entity")]),a._v(" "),t("strong",[a._v("(Model | Collection)")]),a._v(" Entity to track")])]),a._v(" "),t("p",[a._v("Returns "),t("strong",[t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[a._v("Boolean"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"getstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getstack"}},[a._v("#")]),a._v(" getStack")]),a._v(" "),t("p",[a._v("Get stack of changes")]),a._v(" "),t("h3",{attrs:{id:"examples-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-13"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" stack "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getStack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nstack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("each")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("item")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("Collection")])]),a._v(" "),t("h2",{attrs:{id:"clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[a._v("#")]),a._v(" clear")]),a._v(" "),t("p",[a._v("Clear the stack")]),a._v(" "),t("h3",{attrs:{id:"examples-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-14"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("um"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Returns "),t("strong",[a._v("this")])])])}),[],!1,null,null,null);t.default=r.exports}}]);