goog.provide('core');
core.simple_component = (function core$simple_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"my first component"], null);
});
core.run = (function core$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [core.simple_component], null),document.getElementById("app"));
});
goog.exportSymbol('core.run', core.run);

//# sourceMappingURL=core.js.map
