goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26709 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26710 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26710);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26713 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26714 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26714);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26713);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26709);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26732 = arguments.length;
switch (G__26732) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__26741 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26741,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26741,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26750_26771 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26751_26772 = null;
var count__26752_26773 = (0);
var i__26753_26774 = (0);
while(true){
if((i__26753_26774 < count__26752_26773)){
var vec__26760_26775 = chunk__26751_26772.cljs$core$IIndexed$_nth$arity$2(null,i__26753_26774);
var container_26776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26760_26775,(0),null);
var comp_26777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26760_26775,(1),null);
reagent.dom.re_render_component(comp_26777,container_26776);


var G__26778 = seq__26750_26771;
var G__26779 = chunk__26751_26772;
var G__26780 = count__26752_26773;
var G__26781 = (i__26753_26774 + (1));
seq__26750_26771 = G__26778;
chunk__26751_26772 = G__26779;
count__26752_26773 = G__26780;
i__26753_26774 = G__26781;
continue;
} else {
var temp__5753__auto___26782 = cljs.core.seq(seq__26750_26771);
if(temp__5753__auto___26782){
var seq__26750_26783__$1 = temp__5753__auto___26782;
if(cljs.core.chunked_seq_QMARK_(seq__26750_26783__$1)){
var c__4638__auto___26784 = cljs.core.chunk_first(seq__26750_26783__$1);
var G__26785 = cljs.core.chunk_rest(seq__26750_26783__$1);
var G__26786 = c__4638__auto___26784;
var G__26787 = cljs.core.count(c__4638__auto___26784);
var G__26788 = (0);
seq__26750_26771 = G__26785;
chunk__26751_26772 = G__26786;
count__26752_26773 = G__26787;
i__26753_26774 = G__26788;
continue;
} else {
var vec__26764_26789 = cljs.core.first(seq__26750_26783__$1);
var container_26790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764_26789,(0),null);
var comp_26791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764_26789,(1),null);
reagent.dom.re_render_component(comp_26791,container_26790);


var G__26792 = cljs.core.next(seq__26750_26783__$1);
var G__26793 = null;
var G__26794 = (0);
var G__26795 = (0);
seq__26750_26771 = G__26792;
chunk__26751_26772 = G__26793;
count__26752_26773 = G__26794;
i__26753_26774 = G__26795;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
