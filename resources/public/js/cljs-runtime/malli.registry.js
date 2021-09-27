goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_27024 = (function (this$,type){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (malli.registry._schema[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4510__auto__.call(null,this$,type));
} else {
var m__4508__auto__ = (malli.registry._schema["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4508__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_27024(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_27026 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (malli.registry._schemas[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (malli.registry._schemas["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_27026(this$);
}
});

malli.registry.simple_registry = (function malli$registry$simple_registry(schemas){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry26910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26910 = (function (schemas,meta26911){
this.schemas = schemas;
this.meta26911 = meta26911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26912,meta26911__$1){
var self__ = this;
var _26912__$1 = this;
return (new malli.registry.t_malli$registry26910(self__.schemas,meta26911__$1));
}));

(malli.registry.t_malli$registry26910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26912){
var self__ = this;
var _26912__$1 = this;
return self__.meta26911;
}));

(malli.registry.t_malli$registry26910.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26910.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.schemas,type);
}));

(malli.registry.t_malli$registry26910.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schemas;
}));

(malli.registry.t_malli$registry26910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null),new cljs.core.Symbol(null,"meta26911","meta26911",-2025436564,null)], null);
}));

(malli.registry.t_malli$registry26910.cljs$lang$type = true);

(malli.registry.t_malli$registry26910.cljs$lang$ctorStr = "malli.registry/t_malli$registry26910");

(malli.registry.t_malli$registry26910.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry26910");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26910.
 */
malli.registry.__GT_t_malli$registry26910 = (function malli$registry$simple_registry_$___GT_t_malli$registry26910(schemas__$1,meta26911){
return (new malli.registry.t_malli$registry26910(schemas__$1,meta26911));
});

}

return (new malli.registry.t_malli$registry26910(schemas,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
return null;
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((malli.registry.type === "custom")){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry26946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26946 = (function (meta26947){
this.meta26947 = meta26947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26948,meta26947__$1){
var self__ = this;
var _26948__$1 = this;
return (new malli.registry.t_malli$registry26946(meta26947__$1));
}));

(malli.registry.t_malli$registry26946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26948){
var self__ = this;
var _26948__$1 = this;
return self__.meta26947;
}));

(malli.registry.t_malli$registry26946.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26946.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry26946.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry26946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26947","meta26947",567677820,null)], null);
}));

(malli.registry.t_malli$registry26946.cljs$lang$type = true);

(malli.registry.t_malli$registry26946.cljs$lang$ctorStr = "malli.registry/t_malli$registry26946");

(malli.registry.t_malli$registry26946.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry26946");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26946.
 */
malli.registry.__GT_t_malli$registry26946 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry26946(meta26947){
return (new malli.registry.t_malli$registry26946(meta26947));
});

}

return (new malli.registry.t_malli$registry26946(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4824__auto__ = [];
var len__4818__auto___27032 = arguments.length;
var i__4819__auto___27033 = (0);
while(true){
if((i__4819__auto___27033 < len__4818__auto___27032)){
args__4824__auto__.push((arguments[i__4819__auto___27033]));

var G__27034 = (i__4819__auto___27033 + (1));
i__4819__auto___27033 = G__27034;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry26959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26959 = (function (_QMARK_registries,registries,meta26960){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta26960 = meta26960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26961,meta26960__$1){
var self__ = this;
var _26961__$1 = this;
return (new malli.registry.t_malli$registry26959(self__._QMARK_registries,self__.registries,meta26960__$1));
}));

(malli.registry.t_malli$registry26959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26961){
var self__ = this;
var _26961__$1 = this;
return self__.meta26960;
}));

(malli.registry.t_malli$registry26959.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26959.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__26957_SHARP_){
return malli.registry._schema(p1__26957_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry26959.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry26959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta26960","meta26960",33367722,null)], null);
}));

(malli.registry.t_malli$registry26959.cljs$lang$type = true);

(malli.registry.t_malli$registry26959.cljs$lang$ctorStr = "malli.registry/t_malli$registry26959");

(malli.registry.t_malli$registry26959.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry26959");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26959.
 */
malli.registry.__GT_t_malli$registry26959 = (function malli$registry$__GT_t_malli$registry26959(_QMARK_registries__$1,registries__$1,meta26960){
return (new malli.registry.t_malli$registry26959(_QMARK_registries__$1,registries__$1,meta26960));
});

}

return (new malli.registry.t_malli$registry26959(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq26958){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26958));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry26967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26967 = (function (db,meta26968){
this.db = db;
this.meta26968 = meta26968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26969,meta26968__$1){
var self__ = this;
var _26969__$1 = this;
return (new malli.registry.t_malli$registry26967(self__.db,meta26968__$1));
}));

(malli.registry.t_malli$registry26967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26969){
var self__ = this;
var _26969__$1 = this;
return self__.meta26968;
}));

(malli.registry.t_malli$registry26967.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26967.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry26967.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry26967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta26968","meta26968",-2135404899,null)], null);
}));

(malli.registry.t_malli$registry26967.cljs$lang$type = true);

(malli.registry.t_malli$registry26967.cljs$lang$ctorStr = "malli.registry/t_malli$registry26967");

(malli.registry.t_malli$registry26967.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry26967");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26967.
 */
malli.registry.__GT_t_malli$registry26967 = (function malli$registry$mutable_registry_$___GT_t_malli$registry26967(db__$1,meta26968){
return (new malli.registry.t_malli$registry26967(db__$1,meta26968));
});

}

return (new malli.registry.t_malli$registry26967(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry26979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26979 = (function (meta26980){
this.meta26980 = meta26980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26981,meta26980__$1){
var self__ = this;
var _26981__$1 = this;
return (new malli.registry.t_malli$registry26979(meta26980__$1));
}));

(malli.registry.t_malli$registry26979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26981){
var self__ = this;
var _26981__$1 = this;
return self__.meta26980;
}));

(malli.registry.t_malli$registry26979.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26979.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry26979.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry26979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26980","meta26980",-1458719237,null)], null);
}));

(malli.registry.t_malli$registry26979.cljs$lang$type = true);

(malli.registry.t_malli$registry26979.cljs$lang$ctorStr = "malli.registry/t_malli$registry26979");

(malli.registry.t_malli$registry26979.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry26979");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26979.
 */
malli.registry.__GT_t_malli$registry26979 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry26979(meta26980){
return (new malli.registry.t_malli$registry26979(meta26980));
});

}

return (new malli.registry.t_malli$registry26979(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry26998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry26998 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta26999){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta26999 = meta26999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry26998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27000,meta26999__$1){
var self__ = this;
var _27000__$1 = this;
return (new malli.registry.t_malli$registry26998(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta26999__$1));
}));

(malli.registry.t_malli$registry26998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27000){
var self__ = this;
var _27000__$1 = this;
return self__.meta26999;
}));

(malli.registry.t_malli$registry26998.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry26998.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = (function (){var fexpr__27003 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__27003.cljs$core$IFn$_invoke$arity$1 ? fexpr__27003.cljs$core$IFn$_invoke$arity$1(name) : fexpr__27003.call(null,name));
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var temp__5753__auto__ = (function (){var G__27005 = name;
var G__27006 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__27005,G__27006) : self__.provider.call(null,G__27005,G__27006));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry26998.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry26998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta26999","meta26999",-2095292794,null)], null);
}));

(malli.registry.t_malli$registry26998.cljs$lang$type = true);

(malli.registry.t_malli$registry26998.cljs$lang$ctorStr = "malli.registry/t_malli$registry26998");

(malli.registry.t_malli$registry26998.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry26998");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry26998.
 */
malli.registry.__GT_t_malli$registry26998 = (function malli$registry$lazy_registry_$___GT_t_malli$registry26998(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta26999){
return (new malli.registry.t_malli$registry26998(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta26999));
});

}

return (new malli.registry.t_malli$registry26998(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
