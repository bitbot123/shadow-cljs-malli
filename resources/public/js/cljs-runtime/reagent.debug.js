goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26374__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26375__i = 0, G__26375__a = new Array(arguments.length -  0);
while (G__26375__i < G__26375__a.length) {G__26375__a[G__26375__i] = arguments[G__26375__i + 0]; ++G__26375__i;}
  args = new cljs.core.IndexedSeq(G__26375__a,0,null);
} 
return G__26374__delegate.call(this,args);};
G__26374.cljs$lang$maxFixedArity = 0;
G__26374.cljs$lang$applyTo = (function (arglist__26376){
var args = cljs.core.seq(arglist__26376);
return G__26374__delegate(args);
});
G__26374.cljs$core$IFn$_invoke$arity$variadic = G__26374__delegate;
return G__26374;
})()
);

(o.error = (function() { 
var G__26377__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26378__i = 0, G__26378__a = new Array(arguments.length -  0);
while (G__26378__i < G__26378__a.length) {G__26378__a[G__26378__i] = arguments[G__26378__i + 0]; ++G__26378__i;}
  args = new cljs.core.IndexedSeq(G__26378__a,0,null);
} 
return G__26377__delegate.call(this,args);};
G__26377.cljs$lang$maxFixedArity = 0;
G__26377.cljs$lang$applyTo = (function (arglist__26379){
var args = cljs.core.seq(arglist__26379);
return G__26377__delegate(args);
});
G__26377.cljs$core$IFn$_invoke$arity$variadic = G__26377__delegate;
return G__26377;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
