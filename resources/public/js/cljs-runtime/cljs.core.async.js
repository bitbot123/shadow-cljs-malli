goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29575 = arguments.length;
switch (G__29575) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29581 = (function (f,blockable,meta29582){
this.f = f;
this.blockable = blockable;
this.meta29582 = meta29582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29583,meta29582__$1){
var self__ = this;
var _29583__$1 = this;
return (new cljs.core.async.t_cljs$core$async29581(self__.f,self__.blockable,meta29582__$1));
}));

(cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29583){
var self__ = this;
var _29583__$1 = this;
return self__.meta29582;
}));

(cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29582","meta29582",768753485,null)], null);
}));

(cljs.core.async.t_cljs$core$async29581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29581");

(cljs.core.async.t_cljs$core$async29581.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29581.
 */
cljs.core.async.__GT_t_cljs$core$async29581 = (function cljs$core$async$__GT_t_cljs$core$async29581(f__$1,blockable__$1,meta29582){
return (new cljs.core.async.t_cljs$core$async29581(f__$1,blockable__$1,meta29582));
});

}

return (new cljs.core.async.t_cljs$core$async29581(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29606 = arguments.length;
switch (G__29606) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29616 = arguments.length;
switch (G__29616) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29634 = arguments.length;
switch (G__29634) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32738 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32738) : fn1.call(null,val_32738));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32738) : fn1.call(null,val_32738));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29641 = arguments.length;
switch (G__29641) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___32744 = n;
var x_32745 = (0);
while(true){
if((x_32745 < n__4695__auto___32744)){
(a[x_32745] = x_32745);

var G__32746 = (x_32745 + (1));
x_32745 = G__32746;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29646 = (function (flag,meta29647){
this.flag = flag;
this.meta29647 = meta29647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29648,meta29647__$1){
var self__ = this;
var _29648__$1 = this;
return (new cljs.core.async.t_cljs$core$async29646(self__.flag,meta29647__$1));
}));

(cljs.core.async.t_cljs$core$async29646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29648){
var self__ = this;
var _29648__$1 = this;
return self__.meta29647;
}));

(cljs.core.async.t_cljs$core$async29646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29647","meta29647",-522289566,null)], null);
}));

(cljs.core.async.t_cljs$core$async29646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29646");

(cljs.core.async.t_cljs$core$async29646.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29646.
 */
cljs.core.async.__GT_t_cljs$core$async29646 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29646(flag__$1,meta29647){
return (new cljs.core.async.t_cljs$core$async29646(flag__$1,meta29647));
});

}

return (new cljs.core.async.t_cljs$core$async29646(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29674 = (function (flag,cb,meta29675){
this.flag = flag;
this.cb = cb;
this.meta29675 = meta29675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29676,meta29675__$1){
var self__ = this;
var _29676__$1 = this;
return (new cljs.core.async.t_cljs$core$async29674(self__.flag,self__.cb,meta29675__$1));
}));

(cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29676){
var self__ = this;
var _29676__$1 = this;
return self__.meta29675;
}));

(cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29675","meta29675",1721849556,null)], null);
}));

(cljs.core.async.t_cljs$core$async29674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29674");

(cljs.core.async.t_cljs$core$async29674.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29674.
 */
cljs.core.async.__GT_t_cljs$core$async29674 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29674(flag__$1,cb__$1,meta29675){
return (new cljs.core.async.t_cljs$core$async29674(flag__$1,cb__$1,meta29675));
});

}

return (new cljs.core.async.t_cljs$core$async29674(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29684_SHARP_){
var G__29729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29684_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29729) : fret.call(null,G__29729));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29685_SHARP_){
var G__29732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29685_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29732) : fret.call(null,G__29732));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32749 = (i + (1));
i = G__32749;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32761 = arguments.length;
var i__4819__auto___32762 = (0);
while(true){
if((i__4819__auto___32762 < len__4818__auto___32761)){
args__4824__auto__.push((arguments[i__4819__auto___32762]));

var G__32763 = (i__4819__auto___32762 + (1));
i__4819__auto___32762 = G__32763;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29737){
var map__29738 = p__29737;
var map__29738__$1 = cljs.core.__destructure_map(map__29738);
var opts = map__29738__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29733){
var G__29734 = cljs.core.first(seq29733);
var seq29733__$1 = cljs.core.next(seq29733);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29734,seq29733__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29748 = arguments.length;
switch (G__29748) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29466__auto___32765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_29825){
var state_val_29826 = (state_29825[(1)]);
if((state_val_29826 === (7))){
var inst_29821 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
var statearr_29835_32766 = state_29825__$1;
(statearr_29835_32766[(2)] = inst_29821);

(statearr_29835_32766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (1))){
var state_29825__$1 = state_29825;
var statearr_29836_32767 = state_29825__$1;
(statearr_29836_32767[(2)] = null);

(statearr_29836_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (4))){
var inst_29787 = (state_29825[(7)]);
var inst_29787__$1 = (state_29825[(2)]);
var inst_29792 = (inst_29787__$1 == null);
var state_29825__$1 = (function (){var statearr_29849 = state_29825;
(statearr_29849[(7)] = inst_29787__$1);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29792)){
var statearr_29850_32769 = state_29825__$1;
(statearr_29850_32769[(1)] = (5));

} else {
var statearr_29851_32770 = state_29825__$1;
(statearr_29851_32770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (13))){
var state_29825__$1 = state_29825;
var statearr_29853_32771 = state_29825__$1;
(statearr_29853_32771[(2)] = null);

(statearr_29853_32771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (6))){
var inst_29787 = (state_29825[(7)]);
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29825__$1,(11),to,inst_29787);
} else {
if((state_val_29826 === (3))){
var inst_29823 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29825__$1,inst_29823);
} else {
if((state_val_29826 === (12))){
var state_29825__$1 = state_29825;
var statearr_29856_32772 = state_29825__$1;
(statearr_29856_32772[(2)] = null);

(statearr_29856_32772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (2))){
var state_29825__$1 = state_29825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29825__$1,(4),from);
} else {
if((state_val_29826 === (11))){
var inst_29809 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
if(cljs.core.truth_(inst_29809)){
var statearr_29857_32773 = state_29825__$1;
(statearr_29857_32773[(1)] = (12));

} else {
var statearr_29858_32774 = state_29825__$1;
(statearr_29858_32774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (9))){
var state_29825__$1 = state_29825;
var statearr_29859_32775 = state_29825__$1;
(statearr_29859_32775[(2)] = null);

(statearr_29859_32775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (5))){
var state_29825__$1 = state_29825;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29860_32776 = state_29825__$1;
(statearr_29860_32776[(1)] = (8));

} else {
var statearr_29861_32777 = state_29825__$1;
(statearr_29861_32777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (14))){
var inst_29819 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
var statearr_29862_32778 = state_29825__$1;
(statearr_29862_32778[(2)] = inst_29819);

(statearr_29862_32778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (10))){
var inst_29804 = (state_29825[(2)]);
var state_29825__$1 = state_29825;
var statearr_29864_32779 = state_29825__$1;
(statearr_29864_32779[(2)] = inst_29804);

(statearr_29864_32779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29826 === (8))){
var inst_29800 = cljs.core.async.close_BANG_(to);
var state_29825__$1 = state_29825;
var statearr_29871_32780 = state_29825__$1;
(statearr_29871_32780[(2)] = inst_29800);

(statearr_29871_32780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_29879 = [null,null,null,null,null,null,null,null];
(statearr_29879[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_29879[(1)] = (1));

return statearr_29879;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_29825){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_29825);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e29880){var ex__29151__auto__ = e29880;
var statearr_29881_32782 = state_29825;
(statearr_29881_32782[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_29825[(4)]))){
var statearr_29882_32785 = state_29825;
(statearr_29882_32785[(1)] = cljs.core.first((state_29825[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32786 = state_29825;
state_29825 = G__32786;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_29825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_29825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_29895 = f__29467__auto__();
(statearr_29895[(6)] = c__29466__auto___32765);

return statearr_29895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29906){
var vec__29907 = p__29906;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29907,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29907,(1),null);
var job = vec__29907;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29466__auto___32787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_29923){
var state_val_29924 = (state_29923[(1)]);
if((state_val_29924 === (1))){
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29923__$1,(2),res,v);
} else {
if((state_val_29924 === (2))){
var inst_29920 = (state_29923[(2)]);
var inst_29921 = cljs.core.async.close_BANG_(res);
var state_29923__$1 = (function (){var statearr_29929 = state_29923;
(statearr_29929[(7)] = inst_29920);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29923__$1,inst_29921);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_29933 = [null,null,null,null,null,null,null,null];
(statearr_29933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_29933[(1)] = (1));

return statearr_29933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29923){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_29923);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e29934){var ex__29151__auto__ = e29934;
var statearr_29937_32788 = state_29923;
(statearr_29937_32788[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_29923[(4)]))){
var statearr_29940_32789 = state_29923;
(statearr_29940_32789[(1)] = cljs.core.first((state_29923[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32790 = state_29923;
state_29923 = G__32790;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_29941 = f__29467__auto__();
(statearr_29941[(6)] = c__29466__auto___32787);

return statearr_29941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29952){
var vec__29953 = p__29952;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29953,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29953,(1),null);
var job = vec__29953;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___32791 = n;
var __32792 = (0);
while(true){
if((__32792 < n__4695__auto___32791)){
var G__29956_32793 = type;
var G__29956_32794__$1 = (((G__29956_32793 instanceof cljs.core.Keyword))?G__29956_32793.fqn:null);
switch (G__29956_32794__$1) {
case "compute":
var c__29466__auto___32796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32792,c__29466__auto___32796,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async){
return (function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = ((function (__32792,c__29466__auto___32796,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async){
return (function (state_29974){
var state_val_29975 = (state_29974[(1)]);
if((state_val_29975 === (1))){
var state_29974__$1 = state_29974;
var statearr_29981_32797 = state_29974__$1;
(statearr_29981_32797[(2)] = null);

(statearr_29981_32797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (2))){
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29974__$1,(4),jobs);
} else {
if((state_val_29975 === (3))){
var inst_29971 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29974__$1,inst_29971);
} else {
if((state_val_29975 === (4))){
var inst_29959 = (state_29974[(2)]);
var inst_29962 = process(inst_29959);
var state_29974__$1 = state_29974;
if(cljs.core.truth_(inst_29962)){
var statearr_29996_32799 = state_29974__$1;
(statearr_29996_32799[(1)] = (5));

} else {
var statearr_29997_32800 = state_29974__$1;
(statearr_29997_32800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (5))){
var state_29974__$1 = state_29974;
var statearr_30010_32801 = state_29974__$1;
(statearr_30010_32801[(2)] = null);

(statearr_30010_32801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (6))){
var state_29974__$1 = state_29974;
var statearr_30012_32802 = state_29974__$1;
(statearr_30012_32802[(2)] = null);

(statearr_30012_32802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (7))){
var inst_29967 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_30014_32803 = state_29974__$1;
(statearr_30014_32803[(2)] = inst_29967);

(statearr_30014_32803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32792,c__29466__auto___32796,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async))
;
return ((function (__32792,switch__29146__auto__,c__29466__auto___32796,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_30019 = [null,null,null,null,null,null,null];
(statearr_30019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_30019[(1)] = (1));

return statearr_30019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_29974){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_29974);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30021){var ex__29151__auto__ = e30021;
var statearr_30022_32804 = state_29974;
(statearr_30022_32804[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_29974[(4)]))){
var statearr_30028_32805 = state_29974;
(statearr_30028_32805[(1)] = cljs.core.first((state_29974[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32806 = state_29974;
state_29974 = G__32806;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_29974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_29974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(__32792,switch__29146__auto__,c__29466__auto___32796,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async))
})();
var state__29468__auto__ = (function (){var statearr_30037 = f__29467__auto__();
(statearr_30037[(6)] = c__29466__auto___32796);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
});})(__32792,c__29466__auto___32796,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async))
);


break;
case "async":
var c__29466__auto___32807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32792,c__29466__auto___32807,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async){
return (function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = ((function (__32792,c__29466__auto___32807,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async){
return (function (state_30055){
var state_val_30056 = (state_30055[(1)]);
if((state_val_30056 === (1))){
var state_30055__$1 = state_30055;
var statearr_30057_32808 = state_30055__$1;
(statearr_30057_32808[(2)] = null);

(statearr_30057_32808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (2))){
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30055__$1,(4),jobs);
} else {
if((state_val_30056 === (3))){
var inst_30053 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30055__$1,inst_30053);
} else {
if((state_val_30056 === (4))){
var inst_30045 = (state_30055[(2)]);
var inst_30046 = async(inst_30045);
var state_30055__$1 = state_30055;
if(cljs.core.truth_(inst_30046)){
var statearr_30061_32810 = state_30055__$1;
(statearr_30061_32810[(1)] = (5));

} else {
var statearr_30062_32811 = state_30055__$1;
(statearr_30062_32811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (5))){
var state_30055__$1 = state_30055;
var statearr_30063_32812 = state_30055__$1;
(statearr_30063_32812[(2)] = null);

(statearr_30063_32812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (6))){
var state_30055__$1 = state_30055;
var statearr_30064_32813 = state_30055__$1;
(statearr_30064_32813[(2)] = null);

(statearr_30064_32813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (7))){
var inst_30051 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30162_32814 = state_30055__$1;
(statearr_30162_32814[(2)] = inst_30051);

(statearr_30162_32814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32792,c__29466__auto___32807,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async))
;
return ((function (__32792,switch__29146__auto__,c__29466__auto___32807,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_30175 = [null,null,null,null,null,null,null];
(statearr_30175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_30175[(1)] = (1));

return statearr_30175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_30055){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30055);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30185){var ex__29151__auto__ = e30185;
var statearr_30186_32815 = state_30055;
(statearr_30186_32815[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30055[(4)]))){
var statearr_30187_32816 = state_30055;
(statearr_30187_32816[(1)] = cljs.core.first((state_30055[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32817 = state_30055;
state_30055 = G__32817;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_30055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_30055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
;})(__32792,switch__29146__auto__,c__29466__auto___32807,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async))
})();
var state__29468__auto__ = (function (){var statearr_30188 = f__29467__auto__();
(statearr_30188[(6)] = c__29466__auto___32807);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
});})(__32792,c__29466__auto___32807,G__29956_32793,G__29956_32794__$1,n__4695__auto___32791,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29956_32794__$1)].join('')));

}

var G__32818 = (__32792 + (1));
__32792 = G__32818;
continue;
} else {
}
break;
}

var c__29466__auto___32819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30213){
var state_val_30214 = (state_30213[(1)]);
if((state_val_30214 === (7))){
var inst_30208 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30224_32820 = state_30213__$1;
(statearr_30224_32820[(2)] = inst_30208);

(statearr_30224_32820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (1))){
var state_30213__$1 = state_30213;
var statearr_30244_32821 = state_30213__$1;
(statearr_30244_32821[(2)] = null);

(statearr_30244_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (4))){
var inst_30192 = (state_30213[(7)]);
var inst_30192__$1 = (state_30213[(2)]);
var inst_30193 = (inst_30192__$1 == null);
var state_30213__$1 = (function (){var statearr_30245 = state_30213;
(statearr_30245[(7)] = inst_30192__$1);

return statearr_30245;
})();
if(cljs.core.truth_(inst_30193)){
var statearr_30246_32822 = state_30213__$1;
(statearr_30246_32822[(1)] = (5));

} else {
var statearr_30247_32823 = state_30213__$1;
(statearr_30247_32823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (6))){
var inst_30192 = (state_30213[(7)]);
var inst_30197 = (state_30213[(8)]);
var inst_30197__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30199 = [inst_30192,inst_30197__$1];
var inst_30200 = (new cljs.core.PersistentVector(null,2,(5),inst_30198,inst_30199,null));
var state_30213__$1 = (function (){var statearr_30248 = state_30213;
(statearr_30248[(8)] = inst_30197__$1);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30213__$1,(8),jobs,inst_30200);
} else {
if((state_val_30214 === (3))){
var inst_30210 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30213__$1,inst_30210);
} else {
if((state_val_30214 === (2))){
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30213__$1,(4),from);
} else {
if((state_val_30214 === (9))){
var inst_30205 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30249 = state_30213;
(statearr_30249[(9)] = inst_30205);

return statearr_30249;
})();
var statearr_30250_32825 = state_30213__$1;
(statearr_30250_32825[(2)] = null);

(statearr_30250_32825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (5))){
var inst_30195 = cljs.core.async.close_BANG_(jobs);
var state_30213__$1 = state_30213;
var statearr_30251_32826 = state_30213__$1;
(statearr_30251_32826[(2)] = inst_30195);

(statearr_30251_32826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (8))){
var inst_30197 = (state_30213[(8)]);
var inst_30202 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30253 = state_30213;
(statearr_30253[(10)] = inst_30202);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30213__$1,(9),results,inst_30197);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_30254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_30254[(1)] = (1));

return statearr_30254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_30213){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30213);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30255){var ex__29151__auto__ = e30255;
var statearr_30256_32827 = state_30213;
(statearr_30256_32827[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30213[(4)]))){
var statearr_30257_32828 = state_30213;
(statearr_30257_32828[(1)] = cljs.core.first((state_30213[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32829 = state_30213;
state_30213 = G__32829;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_30258 = f__29467__auto__();
(statearr_30258[(6)] = c__29466__auto___32819);

return statearr_30258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


var c__29466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30299_32830 = state_30296__$1;
(statearr_30299_32830[(2)] = inst_30292);

(statearr_30299_32830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (20))){
var state_30296__$1 = state_30296;
var statearr_30300_32831 = state_30296__$1;
(statearr_30300_32831[(2)] = null);

(statearr_30300_32831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30301_32832 = state_30296__$1;
(statearr_30301_32832[(2)] = null);

(statearr_30301_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30261 = (state_30296[(7)]);
var inst_30261__$1 = (state_30296[(2)]);
var inst_30262 = (inst_30261__$1 == null);
var state_30296__$1 = (function (){var statearr_30310 = state_30296;
(statearr_30310[(7)] = inst_30261__$1);

return statearr_30310;
})();
if(cljs.core.truth_(inst_30262)){
var statearr_30315_32837 = state_30296__$1;
(statearr_30315_32837[(1)] = (5));

} else {
var statearr_30320_32838 = state_30296__$1;
(statearr_30320_32838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (15))){
var inst_30274 = (state_30296[(8)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30296__$1,(18),to,inst_30274);
} else {
if((state_val_30297 === (21))){
var inst_30287 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30324_32841 = state_30296__$1;
(statearr_30324_32841[(2)] = inst_30287);

(statearr_30324_32841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (13))){
var inst_30289 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30325 = state_30296;
(statearr_30325[(9)] = inst_30289);

return statearr_30325;
})();
var statearr_30326_32843 = state_30296__$1;
(statearr_30326_32843[(2)] = null);

(statearr_30326_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var inst_30261 = (state_30296[(7)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30296__$1,(11),inst_30261);
} else {
if((state_val_30297 === (17))){
var inst_30282 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
if(cljs.core.truth_(inst_30282)){
var statearr_30327_32844 = state_30296__$1;
(statearr_30327_32844[(1)] = (19));

} else {
var statearr_30328_32845 = state_30296__$1;
(statearr_30328_32845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (12))){
var inst_30271 = (state_30296[(10)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30296__$1,(14),inst_30271);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30296__$1,(4),results);
} else {
if((state_val_30297 === (19))){
var state_30296__$1 = state_30296;
var statearr_30334_32846 = state_30296__$1;
(statearr_30334_32846[(2)] = null);

(statearr_30334_32846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (11))){
var inst_30271 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30335 = state_30296;
(statearr_30335[(10)] = inst_30271);

return statearr_30335;
})();
var statearr_30336_32847 = state_30296__$1;
(statearr_30336_32847[(2)] = null);

(statearr_30336_32847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (9))){
var state_30296__$1 = state_30296;
var statearr_30340_32848 = state_30296__$1;
(statearr_30340_32848[(2)] = null);

(statearr_30340_32848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var state_30296__$1 = state_30296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30341_32849 = state_30296__$1;
(statearr_30341_32849[(1)] = (8));

} else {
var statearr_30342_32850 = state_30296__$1;
(statearr_30342_32850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (14))){
var inst_30276 = (state_30296[(11)]);
var inst_30274 = (state_30296[(8)]);
var inst_30274__$1 = (state_30296[(2)]);
var inst_30275 = (inst_30274__$1 == null);
var inst_30276__$1 = cljs.core.not(inst_30275);
var state_30296__$1 = (function (){var statearr_30343 = state_30296;
(statearr_30343[(11)] = inst_30276__$1);

(statearr_30343[(8)] = inst_30274__$1);

return statearr_30343;
})();
if(inst_30276__$1){
var statearr_30348_32851 = state_30296__$1;
(statearr_30348_32851[(1)] = (15));

} else {
var statearr_30356_32853 = state_30296__$1;
(statearr_30356_32853[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (16))){
var inst_30276 = (state_30296[(11)]);
var state_30296__$1 = state_30296;
var statearr_30357_32855 = state_30296__$1;
(statearr_30357_32855[(2)] = inst_30276);

(statearr_30357_32855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (10))){
var inst_30268 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30358_32856 = state_30296__$1;
(statearr_30358_32856[(2)] = inst_30268);

(statearr_30358_32856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (18))){
var inst_30279 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30360_32857 = state_30296__$1;
(statearr_30360_32857[(2)] = inst_30279);

(statearr_30360_32857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (8))){
var inst_30265 = cljs.core.async.close_BANG_(to);
var state_30296__$1 = state_30296;
var statearr_30363_32858 = state_30296__$1;
(statearr_30363_32858[(2)] = inst_30265);

(statearr_30363_32858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_30370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__);

(statearr_30370[(1)] = (1));

return statearr_30370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1 = (function (state_30296){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30296);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30371){var ex__29151__auto__ = e30371;
var statearr_30372_32859 = state_30296;
(statearr_30372_32859[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30296[(4)]))){
var statearr_30377_32860 = state_30296;
(statearr_30377_32860[(1)] = cljs.core.first((state_30296[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_30296;
state_30296 = G__32861;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_30383 = f__29467__auto__();
(statearr_30383[(6)] = c__29466__auto__);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));

return c__29466__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30390 = arguments.length;
switch (G__30390) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30403 = arguments.length;
switch (G__30403) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30407 = arguments.length;
switch (G__30407) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29466__auto___32871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30438){
var state_val_30439 = (state_30438[(1)]);
if((state_val_30439 === (7))){
var inst_30434 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
var statearr_30440_32872 = state_30438__$1;
(statearr_30440_32872[(2)] = inst_30434);

(statearr_30440_32872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (1))){
var state_30438__$1 = state_30438;
var statearr_30441_32873 = state_30438__$1;
(statearr_30441_32873[(2)] = null);

(statearr_30441_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (4))){
var inst_30415 = (state_30438[(7)]);
var inst_30415__$1 = (state_30438[(2)]);
var inst_30416 = (inst_30415__$1 == null);
var state_30438__$1 = (function (){var statearr_30446 = state_30438;
(statearr_30446[(7)] = inst_30415__$1);

return statearr_30446;
})();
if(cljs.core.truth_(inst_30416)){
var statearr_30447_32874 = state_30438__$1;
(statearr_30447_32874[(1)] = (5));

} else {
var statearr_30450_32875 = state_30438__$1;
(statearr_30450_32875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (13))){
var state_30438__$1 = state_30438;
var statearr_30452_32876 = state_30438__$1;
(statearr_30452_32876[(2)] = null);

(statearr_30452_32876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (6))){
var inst_30415 = (state_30438[(7)]);
var inst_30421 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30415) : p.call(null,inst_30415));
var state_30438__$1 = state_30438;
if(cljs.core.truth_(inst_30421)){
var statearr_30453_32877 = state_30438__$1;
(statearr_30453_32877[(1)] = (9));

} else {
var statearr_30454_32878 = state_30438__$1;
(statearr_30454_32878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (3))){
var inst_30436 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30438__$1,inst_30436);
} else {
if((state_val_30439 === (12))){
var state_30438__$1 = state_30438;
var statearr_30458_32879 = state_30438__$1;
(statearr_30458_32879[(2)] = null);

(statearr_30458_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (2))){
var state_30438__$1 = state_30438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30438__$1,(4),ch);
} else {
if((state_val_30439 === (11))){
var inst_30415 = (state_30438[(7)]);
var inst_30425 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30438__$1,(8),inst_30425,inst_30415);
} else {
if((state_val_30439 === (9))){
var state_30438__$1 = state_30438;
var statearr_30459_32882 = state_30438__$1;
(statearr_30459_32882[(2)] = tc);

(statearr_30459_32882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (5))){
var inst_30418 = cljs.core.async.close_BANG_(tc);
var inst_30419 = cljs.core.async.close_BANG_(fc);
var state_30438__$1 = (function (){var statearr_30460 = state_30438;
(statearr_30460[(8)] = inst_30418);

return statearr_30460;
})();
var statearr_30461_32883 = state_30438__$1;
(statearr_30461_32883[(2)] = inst_30419);

(statearr_30461_32883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (14))){
var inst_30432 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
var statearr_30462_32884 = state_30438__$1;
(statearr_30462_32884[(2)] = inst_30432);

(statearr_30462_32884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (10))){
var state_30438__$1 = state_30438;
var statearr_30463_32885 = state_30438__$1;
(statearr_30463_32885[(2)] = fc);

(statearr_30463_32885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (8))){
var inst_30427 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
if(cljs.core.truth_(inst_30427)){
var statearr_30468_32886 = state_30438__$1;
(statearr_30468_32886[(1)] = (12));

} else {
var statearr_30473_32887 = state_30438__$1;
(statearr_30473_32887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_30489 = [null,null,null,null,null,null,null,null,null];
(statearr_30489[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_30489[(1)] = (1));

return statearr_30489;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_30438){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30438);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30492){var ex__29151__auto__ = e30492;
var statearr_30493_32888 = state_30438;
(statearr_30493_32888[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30438[(4)]))){
var statearr_30496_32889 = state_30438;
(statearr_30496_32889[(1)] = cljs.core.first((state_30438[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32890 = state_30438;
state_30438 = G__32890;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_30438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_30438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_30500 = f__29467__auto__();
(statearr_30500[(6)] = c__29466__auto___32871);

return statearr_30500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30528){
var state_val_30529 = (state_30528[(1)]);
if((state_val_30529 === (7))){
var inst_30524 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30530_32891 = state_30528__$1;
(statearr_30530_32891[(2)] = inst_30524);

(statearr_30530_32891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (1))){
var inst_30506 = init;
var inst_30507 = inst_30506;
var state_30528__$1 = (function (){var statearr_30531 = state_30528;
(statearr_30531[(7)] = inst_30507);

return statearr_30531;
})();
var statearr_30539_32892 = state_30528__$1;
(statearr_30539_32892[(2)] = null);

(statearr_30539_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (4))){
var inst_30510 = (state_30528[(8)]);
var inst_30510__$1 = (state_30528[(2)]);
var inst_30512 = (inst_30510__$1 == null);
var state_30528__$1 = (function (){var statearr_30541 = state_30528;
(statearr_30541[(8)] = inst_30510__$1);

return statearr_30541;
})();
if(cljs.core.truth_(inst_30512)){
var statearr_30542_32893 = state_30528__$1;
(statearr_30542_32893[(1)] = (5));

} else {
var statearr_30544_32894 = state_30528__$1;
(statearr_30544_32894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (6))){
var inst_30515 = (state_30528[(9)]);
var inst_30507 = (state_30528[(7)]);
var inst_30510 = (state_30528[(8)]);
var inst_30515__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30507,inst_30510) : f.call(null,inst_30507,inst_30510));
var inst_30516 = cljs.core.reduced_QMARK_(inst_30515__$1);
var state_30528__$1 = (function (){var statearr_30549 = state_30528;
(statearr_30549[(9)] = inst_30515__$1);

return statearr_30549;
})();
if(inst_30516){
var statearr_30559_32896 = state_30528__$1;
(statearr_30559_32896[(1)] = (8));

} else {
var statearr_30564_32897 = state_30528__$1;
(statearr_30564_32897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (3))){
var inst_30526 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30528__$1,inst_30526);
} else {
if((state_val_30529 === (2))){
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30528__$1,(4),ch);
} else {
if((state_val_30529 === (9))){
var inst_30515 = (state_30528[(9)]);
var inst_30507 = inst_30515;
var state_30528__$1 = (function (){var statearr_30566 = state_30528;
(statearr_30566[(7)] = inst_30507);

return statearr_30566;
})();
var statearr_30567_32899 = state_30528__$1;
(statearr_30567_32899[(2)] = null);

(statearr_30567_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (5))){
var inst_30507 = (state_30528[(7)]);
var state_30528__$1 = state_30528;
var statearr_30568_32900 = state_30528__$1;
(statearr_30568_32900[(2)] = inst_30507);

(statearr_30568_32900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (10))){
var inst_30522 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30570_32901 = state_30528__$1;
(statearr_30570_32901[(2)] = inst_30522);

(statearr_30570_32901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (8))){
var inst_30515 = (state_30528[(9)]);
var inst_30518 = cljs.core.deref(inst_30515);
var state_30528__$1 = state_30528;
var statearr_30572_32902 = state_30528__$1;
(statearr_30572_32902[(2)] = inst_30518);

(statearr_30572_32902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29147__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29147__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$reduce_$_state_machine__29147__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$reduce_$_state_machine__29147__auto____1 = (function (state_30528){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30528);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30574){var ex__29151__auto__ = e30574;
var statearr_30575_32903 = state_30528;
(statearr_30575_32903[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30528[(4)]))){
var statearr_30576_32904 = state_30528;
(statearr_30576_32904[(1)] = cljs.core.first((state_30528[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_30528;
state_30528 = G__32905;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29147__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29147__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29147__auto____0;
cljs$core$async$reduce_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29147__auto____1;
return cljs$core$async$reduce_$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_30588 = f__29467__auto__();
(statearr_30588[(6)] = c__29466__auto__);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));

return c__29466__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30598){
var state_val_30599 = (state_30598[(1)]);
if((state_val_30599 === (1))){
var inst_30593 = cljs.core.async.reduce(f__$1,init,ch);
var state_30598__$1 = state_30598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30598__$1,(2),inst_30593);
} else {
if((state_val_30599 === (2))){
var inst_30595 = (state_30598[(2)]);
var inst_30596 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30595) : f__$1.call(null,inst_30595));
var state_30598__$1 = state_30598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30598__$1,inst_30596);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29147__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29147__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null];
(statearr_30601[(0)] = cljs$core$async$transduce_$_state_machine__29147__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var cljs$core$async$transduce_$_state_machine__29147__auto____1 = (function (state_30598){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30598);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30603){var ex__29151__auto__ = e30603;
var statearr_30604_32909 = state_30598;
(statearr_30604_32909[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30598[(4)]))){
var statearr_30605_32910 = state_30598;
(statearr_30605_32910[(1)] = cljs.core.first((state_30598[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32911 = state_30598;
state_30598 = G__32911;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29147__auto__ = function(state_30598){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29147__auto____1.call(this,state_30598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29147__auto____0;
cljs$core$async$transduce_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29147__auto____1;
return cljs$core$async$transduce_$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_30613 = f__29467__auto__();
(statearr_30613[(6)] = c__29466__auto__);

return statearr_30613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));

return c__29466__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30621 = arguments.length;
switch (G__30621) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30657){
var state_val_30658 = (state_30657[(1)]);
if((state_val_30658 === (7))){
var inst_30636 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30659_32913 = state_30657__$1;
(statearr_30659_32913[(2)] = inst_30636);

(statearr_30659_32913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (1))){
var inst_30626 = cljs.core.seq(coll);
var inst_30627 = inst_30626;
var state_30657__$1 = (function (){var statearr_30661 = state_30657;
(statearr_30661[(7)] = inst_30627);

return statearr_30661;
})();
var statearr_30664_32914 = state_30657__$1;
(statearr_30664_32914[(2)] = null);

(statearr_30664_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (4))){
var inst_30627 = (state_30657[(7)]);
var inst_30634 = cljs.core.first(inst_30627);
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30657__$1,(7),ch,inst_30634);
} else {
if((state_val_30658 === (13))){
var inst_30648 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30666_32915 = state_30657__$1;
(statearr_30666_32915[(2)] = inst_30648);

(statearr_30666_32915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (6))){
var inst_30639 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
if(cljs.core.truth_(inst_30639)){
var statearr_30667_32916 = state_30657__$1;
(statearr_30667_32916[(1)] = (8));

} else {
var statearr_30668_32917 = state_30657__$1;
(statearr_30668_32917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (3))){
var inst_30654 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30657__$1,inst_30654);
} else {
if((state_val_30658 === (12))){
var state_30657__$1 = state_30657;
var statearr_30670_32918 = state_30657__$1;
(statearr_30670_32918[(2)] = null);

(statearr_30670_32918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (2))){
var inst_30627 = (state_30657[(7)]);
var state_30657__$1 = state_30657;
if(cljs.core.truth_(inst_30627)){
var statearr_30672_32922 = state_30657__$1;
(statearr_30672_32922[(1)] = (4));

} else {
var statearr_30673_32923 = state_30657__$1;
(statearr_30673_32923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (11))){
var inst_30645 = cljs.core.async.close_BANG_(ch);
var state_30657__$1 = state_30657;
var statearr_30674_32924 = state_30657__$1;
(statearr_30674_32924[(2)] = inst_30645);

(statearr_30674_32924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (9))){
var state_30657__$1 = state_30657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30676_32931 = state_30657__$1;
(statearr_30676_32931[(1)] = (11));

} else {
var statearr_30677_32932 = state_30657__$1;
(statearr_30677_32932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (5))){
var inst_30627 = (state_30657[(7)]);
var state_30657__$1 = state_30657;
var statearr_30679_32933 = state_30657__$1;
(statearr_30679_32933[(2)] = inst_30627);

(statearr_30679_32933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (10))){
var inst_30651 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30680_32934 = state_30657__$1;
(statearr_30680_32934[(2)] = inst_30651);

(statearr_30680_32934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (8))){
var inst_30627 = (state_30657[(7)]);
var inst_30641 = cljs.core.next(inst_30627);
var inst_30627__$1 = inst_30641;
var state_30657__$1 = (function (){var statearr_30681 = state_30657;
(statearr_30681[(7)] = inst_30627__$1);

return statearr_30681;
})();
var statearr_30682_32935 = state_30657__$1;
(statearr_30682_32935[(2)] = null);

(statearr_30682_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_30684 = [null,null,null,null,null,null,null,null];
(statearr_30684[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_30684[(1)] = (1));

return statearr_30684;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_30657){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30657);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e30685){var ex__29151__auto__ = e30685;
var statearr_30686_32937 = state_30657;
(statearr_30686_32937[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30657[(4)]))){
var statearr_30687_32940 = state_30657;
(statearr_30687_32940[(1)] = cljs.core.first((state_30657[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32942 = state_30657;
state_30657 = G__32942;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_30657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_30657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_30689 = f__29467__auto__();
(statearr_30689[(6)] = c__29466__auto__);

return statearr_30689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));

return c__29466__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30700 = arguments.length;
switch (G__30700) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32948 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32948(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32950 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32950(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32959 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32959(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32972 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32972(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30736 = (function (ch,cs,meta30737){
this.ch = ch;
this.cs = cs;
this.meta30737 = meta30737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30738,meta30737__$1){
var self__ = this;
var _30738__$1 = this;
return (new cljs.core.async.t_cljs$core$async30736(self__.ch,self__.cs,meta30737__$1));
}));

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30738){
var self__ = this;
var _30738__$1 = this;
return self__.meta30737;
}));

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30736.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30737","meta30737",-337220587,null)], null);
}));

(cljs.core.async.t_cljs$core$async30736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30736");

(cljs.core.async.t_cljs$core$async30736.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30736.
 */
cljs.core.async.__GT_t_cljs$core$async30736 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30736(ch__$1,cs__$1,meta30737){
return (new cljs.core.async.t_cljs$core$async30736(ch__$1,cs__$1,meta30737));
});

}

return (new cljs.core.async.t_cljs$core$async30736(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29466__auto___32973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_30957){
var state_val_30958 = (state_30957[(1)]);
if((state_val_30958 === (7))){
var inst_30953 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30975_32994 = state_30957__$1;
(statearr_30975_32994[(2)] = inst_30953);

(statearr_30975_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (20))){
var inst_30832 = (state_30957[(7)]);
var inst_30861 = cljs.core.first(inst_30832);
var inst_30862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30861,(0),null);
var inst_30863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30861,(1),null);
var state_30957__$1 = (function (){var statearr_30977 = state_30957;
(statearr_30977[(8)] = inst_30862);

return statearr_30977;
})();
if(cljs.core.truth_(inst_30863)){
var statearr_30978_32995 = state_30957__$1;
(statearr_30978_32995[(1)] = (22));

} else {
var statearr_30981_32996 = state_30957__$1;
(statearr_30981_32996[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (27))){
var inst_30784 = (state_30957[(9)]);
var inst_30896 = (state_30957[(10)]);
var inst_30894 = (state_30957[(11)]);
var inst_30903 = (state_30957[(12)]);
var inst_30903__$1 = cljs.core._nth(inst_30894,inst_30896);
var inst_30904 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30903__$1,inst_30784,done);
var state_30957__$1 = (function (){var statearr_30985 = state_30957;
(statearr_30985[(12)] = inst_30903__$1);

return statearr_30985;
})();
if(cljs.core.truth_(inst_30904)){
var statearr_30986_32997 = state_30957__$1;
(statearr_30986_32997[(1)] = (30));

} else {
var statearr_30987_32998 = state_30957__$1;
(statearr_30987_32998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (1))){
var state_30957__$1 = state_30957;
var statearr_30988_32999 = state_30957__$1;
(statearr_30988_32999[(2)] = null);

(statearr_30988_32999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (24))){
var inst_30832 = (state_30957[(7)]);
var inst_30868 = (state_30957[(2)]);
var inst_30869 = cljs.core.next(inst_30832);
var inst_30793 = inst_30869;
var inst_30794 = null;
var inst_30795 = (0);
var inst_30796 = (0);
var state_30957__$1 = (function (){var statearr_30991 = state_30957;
(statearr_30991[(13)] = inst_30794);

(statearr_30991[(14)] = inst_30868);

(statearr_30991[(15)] = inst_30795);

(statearr_30991[(16)] = inst_30796);

(statearr_30991[(17)] = inst_30793);

return statearr_30991;
})();
var statearr_30992_33000 = state_30957__$1;
(statearr_30992_33000[(2)] = null);

(statearr_30992_33000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (39))){
var state_30957__$1 = state_30957;
var statearr_30999_33001 = state_30957__$1;
(statearr_30999_33001[(2)] = null);

(statearr_30999_33001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (4))){
var inst_30784 = (state_30957[(9)]);
var inst_30784__$1 = (state_30957[(2)]);
var inst_30785 = (inst_30784__$1 == null);
var state_30957__$1 = (function (){var statearr_31000 = state_30957;
(statearr_31000[(9)] = inst_30784__$1);

return statearr_31000;
})();
if(cljs.core.truth_(inst_30785)){
var statearr_31003_33002 = state_30957__$1;
(statearr_31003_33002[(1)] = (5));

} else {
var statearr_31007_33003 = state_30957__$1;
(statearr_31007_33003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (15))){
var inst_30794 = (state_30957[(13)]);
var inst_30795 = (state_30957[(15)]);
var inst_30796 = (state_30957[(16)]);
var inst_30793 = (state_30957[(17)]);
var inst_30826 = (state_30957[(2)]);
var inst_30828 = (inst_30796 + (1));
var tmp30993 = inst_30794;
var tmp30994 = inst_30795;
var tmp30995 = inst_30793;
var inst_30793__$1 = tmp30995;
var inst_30794__$1 = tmp30993;
var inst_30795__$1 = tmp30994;
var inst_30796__$1 = inst_30828;
var state_30957__$1 = (function (){var statearr_31008 = state_30957;
(statearr_31008[(18)] = inst_30826);

(statearr_31008[(13)] = inst_30794__$1);

(statearr_31008[(15)] = inst_30795__$1);

(statearr_31008[(16)] = inst_30796__$1);

(statearr_31008[(17)] = inst_30793__$1);

return statearr_31008;
})();
var statearr_31009_33005 = state_30957__$1;
(statearr_31009_33005[(2)] = null);

(statearr_31009_33005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (21))){
var inst_30872 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31013_33007 = state_30957__$1;
(statearr_31013_33007[(2)] = inst_30872);

(statearr_31013_33007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (31))){
var inst_30903 = (state_30957[(12)]);
var inst_30907 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30903);
var state_30957__$1 = state_30957;
var statearr_31017_33008 = state_30957__$1;
(statearr_31017_33008[(2)] = inst_30907);

(statearr_31017_33008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (32))){
var inst_30895 = (state_30957[(19)]);
var inst_30896 = (state_30957[(10)]);
var inst_30893 = (state_30957[(20)]);
var inst_30894 = (state_30957[(11)]);
var inst_30909 = (state_30957[(2)]);
var inst_30910 = (inst_30896 + (1));
var tmp31010 = inst_30895;
var tmp31011 = inst_30893;
var tmp31012 = inst_30894;
var inst_30893__$1 = tmp31011;
var inst_30894__$1 = tmp31012;
var inst_30895__$1 = tmp31010;
var inst_30896__$1 = inst_30910;
var state_30957__$1 = (function (){var statearr_31021 = state_30957;
(statearr_31021[(19)] = inst_30895__$1);

(statearr_31021[(10)] = inst_30896__$1);

(statearr_31021[(21)] = inst_30909);

(statearr_31021[(20)] = inst_30893__$1);

(statearr_31021[(11)] = inst_30894__$1);

return statearr_31021;
})();
var statearr_31029_33016 = state_30957__$1;
(statearr_31029_33016[(2)] = null);

(statearr_31029_33016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (40))){
var inst_30925 = (state_30957[(22)]);
var inst_30930 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30925);
var state_30957__$1 = state_30957;
var statearr_31030_33017 = state_30957__$1;
(statearr_31030_33017[(2)] = inst_30930);

(statearr_31030_33017[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (33))){
var inst_30913 = (state_30957[(23)]);
var inst_30915 = cljs.core.chunked_seq_QMARK_(inst_30913);
var state_30957__$1 = state_30957;
if(inst_30915){
var statearr_31031_33023 = state_30957__$1;
(statearr_31031_33023[(1)] = (36));

} else {
var statearr_31032_33024 = state_30957__$1;
(statearr_31032_33024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (13))){
var inst_30814 = (state_30957[(24)]);
var inst_30822 = cljs.core.async.close_BANG_(inst_30814);
var state_30957__$1 = state_30957;
var statearr_31033_33026 = state_30957__$1;
(statearr_31033_33026[(2)] = inst_30822);

(statearr_31033_33026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (22))){
var inst_30862 = (state_30957[(8)]);
var inst_30865 = cljs.core.async.close_BANG_(inst_30862);
var state_30957__$1 = state_30957;
var statearr_31034_33029 = state_30957__$1;
(statearr_31034_33029[(2)] = inst_30865);

(statearr_31034_33029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (36))){
var inst_30913 = (state_30957[(23)]);
var inst_30918 = cljs.core.chunk_first(inst_30913);
var inst_30921 = cljs.core.chunk_rest(inst_30913);
var inst_30922 = cljs.core.count(inst_30918);
var inst_30893 = inst_30921;
var inst_30894 = inst_30918;
var inst_30895 = inst_30922;
var inst_30896 = (0);
var state_30957__$1 = (function (){var statearr_31035 = state_30957;
(statearr_31035[(19)] = inst_30895);

(statearr_31035[(10)] = inst_30896);

(statearr_31035[(20)] = inst_30893);

(statearr_31035[(11)] = inst_30894);

return statearr_31035;
})();
var statearr_31036_33031 = state_30957__$1;
(statearr_31036_33031[(2)] = null);

(statearr_31036_33031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (41))){
var inst_30913 = (state_30957[(23)]);
var inst_30932 = (state_30957[(2)]);
var inst_30933 = cljs.core.next(inst_30913);
var inst_30893 = inst_30933;
var inst_30894 = null;
var inst_30895 = (0);
var inst_30896 = (0);
var state_30957__$1 = (function (){var statearr_31040 = state_30957;
(statearr_31040[(19)] = inst_30895);

(statearr_31040[(10)] = inst_30896);

(statearr_31040[(20)] = inst_30893);

(statearr_31040[(11)] = inst_30894);

(statearr_31040[(25)] = inst_30932);

return statearr_31040;
})();
var statearr_31041_33039 = state_30957__$1;
(statearr_31041_33039[(2)] = null);

(statearr_31041_33039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (43))){
var state_30957__$1 = state_30957;
var statearr_31048_33040 = state_30957__$1;
(statearr_31048_33040[(2)] = null);

(statearr_31048_33040[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (29))){
var inst_30941 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31049_33042 = state_30957__$1;
(statearr_31049_33042[(2)] = inst_30941);

(statearr_31049_33042[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (44))){
var inst_30950 = (state_30957[(2)]);
var state_30957__$1 = (function (){var statearr_31050 = state_30957;
(statearr_31050[(26)] = inst_30950);

return statearr_31050;
})();
var statearr_31051_33046 = state_30957__$1;
(statearr_31051_33046[(2)] = null);

(statearr_31051_33046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (6))){
var inst_30885 = (state_30957[(27)]);
var inst_30884 = cljs.core.deref(cs);
var inst_30885__$1 = cljs.core.keys(inst_30884);
var inst_30886 = cljs.core.count(inst_30885__$1);
var inst_30887 = cljs.core.reset_BANG_(dctr,inst_30886);
var inst_30892 = cljs.core.seq(inst_30885__$1);
var inst_30893 = inst_30892;
var inst_30894 = null;
var inst_30895 = (0);
var inst_30896 = (0);
var state_30957__$1 = (function (){var statearr_31053 = state_30957;
(statearr_31053[(19)] = inst_30895);

(statearr_31053[(28)] = inst_30887);

(statearr_31053[(10)] = inst_30896);

(statearr_31053[(27)] = inst_30885__$1);

(statearr_31053[(20)] = inst_30893);

(statearr_31053[(11)] = inst_30894);

return statearr_31053;
})();
var statearr_31054_33050 = state_30957__$1;
(statearr_31054_33050[(2)] = null);

(statearr_31054_33050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (28))){
var inst_30913 = (state_30957[(23)]);
var inst_30893 = (state_30957[(20)]);
var inst_30913__$1 = cljs.core.seq(inst_30893);
var state_30957__$1 = (function (){var statearr_31058 = state_30957;
(statearr_31058[(23)] = inst_30913__$1);

return statearr_31058;
})();
if(inst_30913__$1){
var statearr_31059_33051 = state_30957__$1;
(statearr_31059_33051[(1)] = (33));

} else {
var statearr_31060_33052 = state_30957__$1;
(statearr_31060_33052[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (25))){
var inst_30895 = (state_30957[(19)]);
var inst_30896 = (state_30957[(10)]);
var inst_30898 = (inst_30896 < inst_30895);
var inst_30899 = inst_30898;
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30899)){
var statearr_31061_33053 = state_30957__$1;
(statearr_31061_33053[(1)] = (27));

} else {
var statearr_31062_33057 = state_30957__$1;
(statearr_31062_33057[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (34))){
var state_30957__$1 = state_30957;
var statearr_31063_33058 = state_30957__$1;
(statearr_31063_33058[(2)] = null);

(statearr_31063_33058[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (17))){
var state_30957__$1 = state_30957;
var statearr_31064_33059 = state_30957__$1;
(statearr_31064_33059[(2)] = null);

(statearr_31064_33059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (3))){
var inst_30955 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30957__$1,inst_30955);
} else {
if((state_val_30958 === (12))){
var inst_30877 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31065_33060 = state_30957__$1;
(statearr_31065_33060[(2)] = inst_30877);

(statearr_31065_33060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (2))){
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30957__$1,(4),ch);
} else {
if((state_val_30958 === (23))){
var state_30957__$1 = state_30957;
var statearr_31066_33061 = state_30957__$1;
(statearr_31066_33061[(2)] = null);

(statearr_31066_33061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (35))){
var inst_30939 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31067_33062 = state_30957__$1;
(statearr_31067_33062[(2)] = inst_30939);

(statearr_31067_33062[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (19))){
var inst_30832 = (state_30957[(7)]);
var inst_30845 = cljs.core.chunk_first(inst_30832);
var inst_30850 = cljs.core.chunk_rest(inst_30832);
var inst_30855 = cljs.core.count(inst_30845);
var inst_30793 = inst_30850;
var inst_30794 = inst_30845;
var inst_30795 = inst_30855;
var inst_30796 = (0);
var state_30957__$1 = (function (){var statearr_31068 = state_30957;
(statearr_31068[(13)] = inst_30794);

(statearr_31068[(15)] = inst_30795);

(statearr_31068[(16)] = inst_30796);

(statearr_31068[(17)] = inst_30793);

return statearr_31068;
})();
var statearr_31069_33066 = state_30957__$1;
(statearr_31069_33066[(2)] = null);

(statearr_31069_33066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (11))){
var inst_30832 = (state_30957[(7)]);
var inst_30793 = (state_30957[(17)]);
var inst_30832__$1 = cljs.core.seq(inst_30793);
var state_30957__$1 = (function (){var statearr_31070 = state_30957;
(statearr_31070[(7)] = inst_30832__$1);

return statearr_31070;
})();
if(inst_30832__$1){
var statearr_31071_33068 = state_30957__$1;
(statearr_31071_33068[(1)] = (16));

} else {
var statearr_31072_33070 = state_30957__$1;
(statearr_31072_33070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (9))){
var inst_30879 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31073_33073 = state_30957__$1;
(statearr_31073_33073[(2)] = inst_30879);

(statearr_31073_33073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (5))){
var inst_30791 = cljs.core.deref(cs);
var inst_30792 = cljs.core.seq(inst_30791);
var inst_30793 = inst_30792;
var inst_30794 = null;
var inst_30795 = (0);
var inst_30796 = (0);
var state_30957__$1 = (function (){var statearr_31074 = state_30957;
(statearr_31074[(13)] = inst_30794);

(statearr_31074[(15)] = inst_30795);

(statearr_31074[(16)] = inst_30796);

(statearr_31074[(17)] = inst_30793);

return statearr_31074;
})();
var statearr_31075_33075 = state_30957__$1;
(statearr_31075_33075[(2)] = null);

(statearr_31075_33075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (14))){
var state_30957__$1 = state_30957;
var statearr_31077_33078 = state_30957__$1;
(statearr_31077_33078[(2)] = null);

(statearr_31077_33078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (45))){
var inst_30947 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31078_33081 = state_30957__$1;
(statearr_31078_33081[(2)] = inst_30947);

(statearr_31078_33081[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (26))){
var inst_30885 = (state_30957[(27)]);
var inst_30943 = (state_30957[(2)]);
var inst_30944 = cljs.core.seq(inst_30885);
var state_30957__$1 = (function (){var statearr_31079 = state_30957;
(statearr_31079[(29)] = inst_30943);

return statearr_31079;
})();
if(inst_30944){
var statearr_31080_33084 = state_30957__$1;
(statearr_31080_33084[(1)] = (42));

} else {
var statearr_31081_33086 = state_30957__$1;
(statearr_31081_33086[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (16))){
var inst_30832 = (state_30957[(7)]);
var inst_30839 = cljs.core.chunked_seq_QMARK_(inst_30832);
var state_30957__$1 = state_30957;
if(inst_30839){
var statearr_31082_33087 = state_30957__$1;
(statearr_31082_33087[(1)] = (19));

} else {
var statearr_31083_33089 = state_30957__$1;
(statearr_31083_33089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (38))){
var inst_30936 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31084_33091 = state_30957__$1;
(statearr_31084_33091[(2)] = inst_30936);

(statearr_31084_33091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (30))){
var state_30957__$1 = state_30957;
var statearr_31085_33092 = state_30957__$1;
(statearr_31085_33092[(2)] = null);

(statearr_31085_33092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (10))){
var inst_30794 = (state_30957[(13)]);
var inst_30796 = (state_30957[(16)]);
var inst_30813 = cljs.core._nth(inst_30794,inst_30796);
var inst_30814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30813,(0),null);
var inst_30818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30813,(1),null);
var state_30957__$1 = (function (){var statearr_31086 = state_30957;
(statearr_31086[(24)] = inst_30814);

return statearr_31086;
})();
if(cljs.core.truth_(inst_30818)){
var statearr_31087_33100 = state_30957__$1;
(statearr_31087_33100[(1)] = (13));

} else {
var statearr_31088_33101 = state_30957__$1;
(statearr_31088_33101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (18))){
var inst_30875 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31092_33103 = state_30957__$1;
(statearr_31092_33103[(2)] = inst_30875);

(statearr_31092_33103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (42))){
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30957__$1,(45),dchan);
} else {
if((state_val_30958 === (37))){
var inst_30925 = (state_30957[(22)]);
var inst_30784 = (state_30957[(9)]);
var inst_30913 = (state_30957[(23)]);
var inst_30925__$1 = cljs.core.first(inst_30913);
var inst_30927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30925__$1,inst_30784,done);
var state_30957__$1 = (function (){var statearr_31095 = state_30957;
(statearr_31095[(22)] = inst_30925__$1);

return statearr_31095;
})();
if(cljs.core.truth_(inst_30927)){
var statearr_31096_33107 = state_30957__$1;
(statearr_31096_33107[(1)] = (39));

} else {
var statearr_31097_33108 = state_30957__$1;
(statearr_31097_33108[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (8))){
var inst_30795 = (state_30957[(15)]);
var inst_30796 = (state_30957[(16)]);
var inst_30798 = (inst_30796 < inst_30795);
var inst_30799 = inst_30798;
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30799)){
var statearr_31098_33110 = state_30957__$1;
(statearr_31098_33110[(1)] = (10));

} else {
var statearr_31099_33111 = state_30957__$1;
(statearr_31099_33111[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29147__auto__ = null;
var cljs$core$async$mult_$_state_machine__29147__auto____0 = (function (){
var statearr_31100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31100[(0)] = cljs$core$async$mult_$_state_machine__29147__auto__);

(statearr_31100[(1)] = (1));

return statearr_31100;
});
var cljs$core$async$mult_$_state_machine__29147__auto____1 = (function (state_30957){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_30957);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e31101){var ex__29151__auto__ = e31101;
var statearr_31102_33135 = state_30957;
(statearr_31102_33135[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_30957[(4)]))){
var statearr_31103_33136 = state_30957;
(statearr_31103_33136[(1)] = cljs.core.first((state_30957[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33137 = state_30957;
state_30957 = G__33137;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29147__auto__ = function(state_30957){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29147__auto____1.call(this,state_30957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29147__auto____0;
cljs$core$async$mult_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29147__auto____1;
return cljs$core$async$mult_$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_31104 = f__29467__auto__();
(statearr_31104[(6)] = c__29466__auto___32973);

return statearr_31104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31113 = arguments.length;
switch (G__31113) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33139 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33139(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33144 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33144(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33145 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33145(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33150 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33150(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33151 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33151(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33155 = arguments.length;
var i__4819__auto___33156 = (0);
while(true){
if((i__4819__auto___33156 < len__4818__auto___33155)){
args__4824__auto__.push((arguments[i__4819__auto___33156]));

var G__33157 = (i__4819__auto___33156 + (1));
i__4819__auto___33156 = G__33157;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31151){
var map__31152 = p__31151;
var map__31152__$1 = cljs.core.__destructure_map(map__31152);
var opts = map__31152__$1;
var statearr_31153_33158 = state;
(statearr_31153_33158[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31154_33159 = state;
(statearr_31154_33159[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31155_33163 = state;
(statearr_31155_33163[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31147){
var G__31148 = cljs.core.first(seq31147);
var seq31147__$1 = cljs.core.next(seq31147);
var G__31149 = cljs.core.first(seq31147__$1);
var seq31147__$2 = cljs.core.next(seq31147__$1);
var G__31150 = cljs.core.first(seq31147__$2);
var seq31147__$3 = cljs.core.next(seq31147__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31148,G__31149,G__31150,seq31147__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31210 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31211){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31211 = meta31211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31212,meta31211__$1){
var self__ = this;
var _31212__$1 = this;
return (new cljs.core.async.t_cljs$core$async31210(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31211__$1));
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31212){
var self__ = this;
var _31212__$1 = this;
return self__.meta31211;
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31210.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31211","meta31211",278764622,null)], null);
}));

(cljs.core.async.t_cljs$core$async31210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31210");

(cljs.core.async.t_cljs$core$async31210.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31210.
 */
cljs.core.async.__GT_t_cljs$core$async31210 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31210(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31211){
return (new cljs.core.async.t_cljs$core$async31210(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31211));
});

}

return (new cljs.core.async.t_cljs$core$async31210(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29466__auto___33184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_31364){
var state_val_31365 = (state_31364[(1)]);
if((state_val_31365 === (7))){
var inst_31318 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
if(cljs.core.truth_(inst_31318)){
var statearr_31366_33187 = state_31364__$1;
(statearr_31366_33187[(1)] = (8));

} else {
var statearr_31367_33189 = state_31364__$1;
(statearr_31367_33189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (20))){
var inst_31309 = (state_31364[(7)]);
var state_31364__$1 = state_31364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31364__$1,(23),out,inst_31309);
} else {
if((state_val_31365 === (1))){
var inst_31283 = calc_state();
var inst_31285 = cljs.core.__destructure_map(inst_31283);
var inst_31286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31285,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31285,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31285,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31289 = inst_31283;
var state_31364__$1 = (function (){var statearr_31370 = state_31364;
(statearr_31370[(8)] = inst_31288);

(statearr_31370[(9)] = inst_31289);

(statearr_31370[(10)] = inst_31286);

(statearr_31370[(11)] = inst_31287);

return statearr_31370;
})();
var statearr_31372_33194 = state_31364__$1;
(statearr_31372_33194[(2)] = null);

(statearr_31372_33194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (24))){
var inst_31300 = (state_31364[(12)]);
var inst_31289 = inst_31300;
var state_31364__$1 = (function (){var statearr_31376 = state_31364;
(statearr_31376[(9)] = inst_31289);

return statearr_31376;
})();
var statearr_31378_33200 = state_31364__$1;
(statearr_31378_33200[(2)] = null);

(statearr_31378_33200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (4))){
var inst_31309 = (state_31364[(7)]);
var inst_31313 = (state_31364[(13)]);
var inst_31308 = (state_31364[(2)]);
var inst_31309__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31308,(0),null);
var inst_31310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31308,(1),null);
var inst_31313__$1 = (inst_31309__$1 == null);
var state_31364__$1 = (function (){var statearr_31381 = state_31364;
(statearr_31381[(7)] = inst_31309__$1);

(statearr_31381[(14)] = inst_31310);

(statearr_31381[(13)] = inst_31313__$1);

return statearr_31381;
})();
if(cljs.core.truth_(inst_31313__$1)){
var statearr_31382_33215 = state_31364__$1;
(statearr_31382_33215[(1)] = (5));

} else {
var statearr_31383_33216 = state_31364__$1;
(statearr_31383_33216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (15))){
var inst_31301 = (state_31364[(15)]);
var inst_31337 = (state_31364[(16)]);
var inst_31337__$1 = cljs.core.empty_QMARK_(inst_31301);
var state_31364__$1 = (function (){var statearr_31386 = state_31364;
(statearr_31386[(16)] = inst_31337__$1);

return statearr_31386;
})();
if(inst_31337__$1){
var statearr_31387_33217 = state_31364__$1;
(statearr_31387_33217[(1)] = (17));

} else {
var statearr_31388_33218 = state_31364__$1;
(statearr_31388_33218[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (21))){
var inst_31300 = (state_31364[(12)]);
var inst_31289 = inst_31300;
var state_31364__$1 = (function (){var statearr_31392 = state_31364;
(statearr_31392[(9)] = inst_31289);

return statearr_31392;
})();
var statearr_31393_33219 = state_31364__$1;
(statearr_31393_33219[(2)] = null);

(statearr_31393_33219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (13))){
var inst_31325 = (state_31364[(2)]);
var inst_31327 = calc_state();
var inst_31289 = inst_31327;
var state_31364__$1 = (function (){var statearr_31396 = state_31364;
(statearr_31396[(17)] = inst_31325);

(statearr_31396[(9)] = inst_31289);

return statearr_31396;
})();
var statearr_31397_33224 = state_31364__$1;
(statearr_31397_33224[(2)] = null);

(statearr_31397_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (22))){
var inst_31357 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
var statearr_31403_33225 = state_31364__$1;
(statearr_31403_33225[(2)] = inst_31357);

(statearr_31403_33225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (6))){
var inst_31310 = (state_31364[(14)]);
var inst_31316 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31310,change);
var state_31364__$1 = state_31364;
var statearr_31404_33230 = state_31364__$1;
(statearr_31404_33230[(2)] = inst_31316);

(statearr_31404_33230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (25))){
var state_31364__$1 = state_31364;
var statearr_31406_33231 = state_31364__$1;
(statearr_31406_33231[(2)] = null);

(statearr_31406_33231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (17))){
var inst_31302 = (state_31364[(18)]);
var inst_31310 = (state_31364[(14)]);
var inst_31339 = (inst_31302.cljs$core$IFn$_invoke$arity$1 ? inst_31302.cljs$core$IFn$_invoke$arity$1(inst_31310) : inst_31302.call(null,inst_31310));
var inst_31340 = cljs.core.not(inst_31339);
var state_31364__$1 = state_31364;
var statearr_31408_33243 = state_31364__$1;
(statearr_31408_33243[(2)] = inst_31340);

(statearr_31408_33243[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (3))){
var inst_31361 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31364__$1,inst_31361);
} else {
if((state_val_31365 === (12))){
var state_31364__$1 = state_31364;
var statearr_31411_33245 = state_31364__$1;
(statearr_31411_33245[(2)] = null);

(statearr_31411_33245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (2))){
var inst_31289 = (state_31364[(9)]);
var inst_31300 = (state_31364[(12)]);
var inst_31300__$1 = cljs.core.__destructure_map(inst_31289);
var inst_31301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31300__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31300__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31300__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31364__$1 = (function (){var statearr_31413 = state_31364;
(statearr_31413[(18)] = inst_31302);

(statearr_31413[(15)] = inst_31301);

(statearr_31413[(12)] = inst_31300__$1);

return statearr_31413;
})();
return cljs.core.async.ioc_alts_BANG_(state_31364__$1,(4),inst_31303);
} else {
if((state_val_31365 === (23))){
var inst_31348 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
if(cljs.core.truth_(inst_31348)){
var statearr_31414_33262 = state_31364__$1;
(statearr_31414_33262[(1)] = (24));

} else {
var statearr_31415_33264 = state_31364__$1;
(statearr_31415_33264[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (19))){
var inst_31343 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
var statearr_31416_33265 = state_31364__$1;
(statearr_31416_33265[(2)] = inst_31343);

(statearr_31416_33265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (11))){
var inst_31310 = (state_31364[(14)]);
var inst_31322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31310);
var state_31364__$1 = state_31364;
var statearr_31421_33267 = state_31364__$1;
(statearr_31421_33267[(2)] = inst_31322);

(statearr_31421_33267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (9))){
var inst_31330 = (state_31364[(19)]);
var inst_31301 = (state_31364[(15)]);
var inst_31310 = (state_31364[(14)]);
var inst_31330__$1 = (inst_31301.cljs$core$IFn$_invoke$arity$1 ? inst_31301.cljs$core$IFn$_invoke$arity$1(inst_31310) : inst_31301.call(null,inst_31310));
var state_31364__$1 = (function (){var statearr_31427 = state_31364;
(statearr_31427[(19)] = inst_31330__$1);

return statearr_31427;
})();
if(cljs.core.truth_(inst_31330__$1)){
var statearr_31428_33270 = state_31364__$1;
(statearr_31428_33270[(1)] = (14));

} else {
var statearr_31429_33271 = state_31364__$1;
(statearr_31429_33271[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (5))){
var inst_31313 = (state_31364[(13)]);
var state_31364__$1 = state_31364;
var statearr_31432_33273 = state_31364__$1;
(statearr_31432_33273[(2)] = inst_31313);

(statearr_31432_33273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (14))){
var inst_31330 = (state_31364[(19)]);
var state_31364__$1 = state_31364;
var statearr_31433_33274 = state_31364__$1;
(statearr_31433_33274[(2)] = inst_31330);

(statearr_31433_33274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (26))){
var inst_31353 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
var statearr_31434_33276 = state_31364__$1;
(statearr_31434_33276[(2)] = inst_31353);

(statearr_31434_33276[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (16))){
var inst_31345 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
if(cljs.core.truth_(inst_31345)){
var statearr_31438_33277 = state_31364__$1;
(statearr_31438_33277[(1)] = (20));

} else {
var statearr_31439_33279 = state_31364__$1;
(statearr_31439_33279[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (10))){
var inst_31359 = (state_31364[(2)]);
var state_31364__$1 = state_31364;
var statearr_31444_33282 = state_31364__$1;
(statearr_31444_33282[(2)] = inst_31359);

(statearr_31444_33282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (18))){
var inst_31337 = (state_31364[(16)]);
var state_31364__$1 = state_31364;
var statearr_31445_33284 = state_31364__$1;
(statearr_31445_33284[(2)] = inst_31337);

(statearr_31445_33284[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31365 === (8))){
var inst_31309 = (state_31364[(7)]);
var inst_31320 = (inst_31309 == null);
var state_31364__$1 = state_31364;
if(cljs.core.truth_(inst_31320)){
var statearr_31446_33285 = state_31364__$1;
(statearr_31446_33285[(1)] = (11));

} else {
var statearr_31447_33288 = state_31364__$1;
(statearr_31447_33288[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29147__auto__ = null;
var cljs$core$async$mix_$_state_machine__29147__auto____0 = (function (){
var statearr_31456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31456[(0)] = cljs$core$async$mix_$_state_machine__29147__auto__);

(statearr_31456[(1)] = (1));

return statearr_31456;
});
var cljs$core$async$mix_$_state_machine__29147__auto____1 = (function (state_31364){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_31364);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e31458){var ex__29151__auto__ = e31458;
var statearr_31459_33291 = state_31364;
(statearr_31459_33291[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_31364[(4)]))){
var statearr_31465_33292 = state_31364;
(statearr_31465_33292[(1)] = cljs.core.first((state_31364[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33293 = state_31364;
state_31364 = G__33293;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29147__auto__ = function(state_31364){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29147__auto____1.call(this,state_31364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29147__auto____0;
cljs$core$async$mix_$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29147__auto____1;
return cljs$core$async$mix_$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_31466 = f__29467__auto__();
(statearr_31466[(6)] = c__29466__auto___33184);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33294 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33294(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33295 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33295(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33296 = (function() {
var G__33297 = null;
var G__33297__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33297__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33297 = function(p,v){
switch(arguments.length){
case 1:
return G__33297__1.call(this,p);
case 2:
return G__33297__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33297.cljs$core$IFn$_invoke$arity$1 = G__33297__1;
G__33297.cljs$core$IFn$_invoke$arity$2 = G__33297__2;
return G__33297;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31494 = arguments.length;
switch (G__31494) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33296(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33296(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31510 = arguments.length;
switch (G__31510) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31504_SHARP_){
if(cljs.core.truth_((p1__31504_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31504_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31504_SHARP_.call(null,topic)))){
return p1__31504_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31504_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31517 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31518){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31518 = meta31518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31519,meta31518__$1){
var self__ = this;
var _31519__$1 = this;
return (new cljs.core.async.t_cljs$core$async31517(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31518__$1));
}));

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31519){
var self__ = this;
var _31519__$1 = this;
return self__.meta31518;
}));

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31518","meta31518",536170084,null)], null);
}));

(cljs.core.async.t_cljs$core$async31517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31517");

(cljs.core.async.t_cljs$core$async31517.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31517.
 */
cljs.core.async.__GT_t_cljs$core$async31517 = (function cljs$core$async$__GT_t_cljs$core$async31517(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31518){
return (new cljs.core.async.t_cljs$core$async31517(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31518));
});

}

return (new cljs.core.async.t_cljs$core$async31517(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29466__auto___33306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_31634){
var state_val_31635 = (state_31634[(1)]);
if((state_val_31635 === (7))){
var inst_31621 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31648_33307 = state_31634__$1;
(statearr_31648_33307[(2)] = inst_31621);

(statearr_31648_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (20))){
var state_31634__$1 = state_31634;
var statearr_31649_33308 = state_31634__$1;
(statearr_31649_33308[(2)] = null);

(statearr_31649_33308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (1))){
var state_31634__$1 = state_31634;
var statearr_31650_33309 = state_31634__$1;
(statearr_31650_33309[(2)] = null);

(statearr_31650_33309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (24))){
var inst_31594 = (state_31634[(7)]);
var inst_31608 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31594);
var state_31634__$1 = state_31634;
var statearr_31651_33310 = state_31634__$1;
(statearr_31651_33310[(2)] = inst_31608);

(statearr_31651_33310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (4))){
var inst_31537 = (state_31634[(8)]);
var inst_31537__$1 = (state_31634[(2)]);
var inst_31538 = (inst_31537__$1 == null);
var state_31634__$1 = (function (){var statearr_31653 = state_31634;
(statearr_31653[(8)] = inst_31537__$1);

return statearr_31653;
})();
if(cljs.core.truth_(inst_31538)){
var statearr_31656_33311 = state_31634__$1;
(statearr_31656_33311[(1)] = (5));

} else {
var statearr_31657_33312 = state_31634__$1;
(statearr_31657_33312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (15))){
var inst_31584 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31658_33313 = state_31634__$1;
(statearr_31658_33313[(2)] = inst_31584);

(statearr_31658_33313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (21))){
var inst_31617 = (state_31634[(2)]);
var state_31634__$1 = (function (){var statearr_31659 = state_31634;
(statearr_31659[(9)] = inst_31617);

return statearr_31659;
})();
var statearr_31661_33314 = state_31634__$1;
(statearr_31661_33314[(2)] = null);

(statearr_31661_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (13))){
var inst_31563 = (state_31634[(10)]);
var inst_31565 = cljs.core.chunked_seq_QMARK_(inst_31563);
var state_31634__$1 = state_31634;
if(inst_31565){
var statearr_31667_33315 = state_31634__$1;
(statearr_31667_33315[(1)] = (16));

} else {
var statearr_31669_33316 = state_31634__$1;
(statearr_31669_33316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (22))){
var inst_31604 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
if(cljs.core.truth_(inst_31604)){
var statearr_31677_33317 = state_31634__$1;
(statearr_31677_33317[(1)] = (23));

} else {
var statearr_31684_33318 = state_31634__$1;
(statearr_31684_33318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (6))){
var inst_31594 = (state_31634[(7)]);
var inst_31596 = (state_31634[(11)]);
var inst_31537 = (state_31634[(8)]);
var inst_31594__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31537) : topic_fn.call(null,inst_31537));
var inst_31595 = cljs.core.deref(mults);
var inst_31596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31595,inst_31594__$1);
var state_31634__$1 = (function (){var statearr_31691 = state_31634;
(statearr_31691[(7)] = inst_31594__$1);

(statearr_31691[(11)] = inst_31596__$1);

return statearr_31691;
})();
if(cljs.core.truth_(inst_31596__$1)){
var statearr_31713_33321 = state_31634__$1;
(statearr_31713_33321[(1)] = (19));

} else {
var statearr_31714_33322 = state_31634__$1;
(statearr_31714_33322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (25))){
var inst_31614 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31719_33323 = state_31634__$1;
(statearr_31719_33323[(2)] = inst_31614);

(statearr_31719_33323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (17))){
var inst_31563 = (state_31634[(10)]);
var inst_31574 = cljs.core.first(inst_31563);
var inst_31576 = cljs.core.async.muxch_STAR_(inst_31574);
var inst_31577 = cljs.core.async.close_BANG_(inst_31576);
var inst_31578 = cljs.core.next(inst_31563);
var inst_31547 = inst_31578;
var inst_31548 = null;
var inst_31549 = (0);
var inst_31550 = (0);
var state_31634__$1 = (function (){var statearr_31728 = state_31634;
(statearr_31728[(12)] = inst_31577);

(statearr_31728[(13)] = inst_31549);

(statearr_31728[(14)] = inst_31547);

(statearr_31728[(15)] = inst_31548);

(statearr_31728[(16)] = inst_31550);

return statearr_31728;
})();
var statearr_31729_33324 = state_31634__$1;
(statearr_31729_33324[(2)] = null);

(statearr_31729_33324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (3))){
var inst_31627 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31634__$1,inst_31627);
} else {
if((state_val_31635 === (12))){
var inst_31586 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31730_33325 = state_31634__$1;
(statearr_31730_33325[(2)] = inst_31586);

(statearr_31730_33325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (2))){
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31634__$1,(4),ch);
} else {
if((state_val_31635 === (23))){
var state_31634__$1 = state_31634;
var statearr_31731_33326 = state_31634__$1;
(statearr_31731_33326[(2)] = null);

(statearr_31731_33326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (19))){
var inst_31596 = (state_31634[(11)]);
var inst_31537 = (state_31634[(8)]);
var inst_31602 = cljs.core.async.muxch_STAR_(inst_31596);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31634__$1,(22),inst_31602,inst_31537);
} else {
if((state_val_31635 === (11))){
var inst_31563 = (state_31634[(10)]);
var inst_31547 = (state_31634[(14)]);
var inst_31563__$1 = cljs.core.seq(inst_31547);
var state_31634__$1 = (function (){var statearr_31732 = state_31634;
(statearr_31732[(10)] = inst_31563__$1);

return statearr_31732;
})();
if(inst_31563__$1){
var statearr_31739_33327 = state_31634__$1;
(statearr_31739_33327[(1)] = (13));

} else {
var statearr_31742_33328 = state_31634__$1;
(statearr_31742_33328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (9))){
var inst_31588 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31747_33335 = state_31634__$1;
(statearr_31747_33335[(2)] = inst_31588);

(statearr_31747_33335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (5))){
var inst_31544 = cljs.core.deref(mults);
var inst_31545 = cljs.core.vals(inst_31544);
var inst_31546 = cljs.core.seq(inst_31545);
var inst_31547 = inst_31546;
var inst_31548 = null;
var inst_31549 = (0);
var inst_31550 = (0);
var state_31634__$1 = (function (){var statearr_31748 = state_31634;
(statearr_31748[(13)] = inst_31549);

(statearr_31748[(14)] = inst_31547);

(statearr_31748[(15)] = inst_31548);

(statearr_31748[(16)] = inst_31550);

return statearr_31748;
})();
var statearr_31749_33340 = state_31634__$1;
(statearr_31749_33340[(2)] = null);

(statearr_31749_33340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (14))){
var state_31634__$1 = state_31634;
var statearr_31753_33341 = state_31634__$1;
(statearr_31753_33341[(2)] = null);

(statearr_31753_33341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (16))){
var inst_31563 = (state_31634[(10)]);
var inst_31568 = cljs.core.chunk_first(inst_31563);
var inst_31570 = cljs.core.chunk_rest(inst_31563);
var inst_31571 = cljs.core.count(inst_31568);
var inst_31547 = inst_31570;
var inst_31548 = inst_31568;
var inst_31549 = inst_31571;
var inst_31550 = (0);
var state_31634__$1 = (function (){var statearr_31754 = state_31634;
(statearr_31754[(13)] = inst_31549);

(statearr_31754[(14)] = inst_31547);

(statearr_31754[(15)] = inst_31548);

(statearr_31754[(16)] = inst_31550);

return statearr_31754;
})();
var statearr_31755_33347 = state_31634__$1;
(statearr_31755_33347[(2)] = null);

(statearr_31755_33347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (10))){
var inst_31549 = (state_31634[(13)]);
var inst_31547 = (state_31634[(14)]);
var inst_31548 = (state_31634[(15)]);
var inst_31550 = (state_31634[(16)]);
var inst_31555 = cljs.core._nth(inst_31548,inst_31550);
var inst_31556 = cljs.core.async.muxch_STAR_(inst_31555);
var inst_31557 = cljs.core.async.close_BANG_(inst_31556);
var inst_31559 = (inst_31550 + (1));
var tmp31750 = inst_31549;
var tmp31751 = inst_31547;
var tmp31752 = inst_31548;
var inst_31547__$1 = tmp31751;
var inst_31548__$1 = tmp31752;
var inst_31549__$1 = tmp31750;
var inst_31550__$1 = inst_31559;
var state_31634__$1 = (function (){var statearr_31756 = state_31634;
(statearr_31756[(17)] = inst_31557);

(statearr_31756[(13)] = inst_31549__$1);

(statearr_31756[(14)] = inst_31547__$1);

(statearr_31756[(15)] = inst_31548__$1);

(statearr_31756[(16)] = inst_31550__$1);

return statearr_31756;
})();
var statearr_31757_33348 = state_31634__$1;
(statearr_31757_33348[(2)] = null);

(statearr_31757_33348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (18))){
var inst_31581 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31758_33349 = state_31634__$1;
(statearr_31758_33349[(2)] = inst_31581);

(statearr_31758_33349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (8))){
var inst_31549 = (state_31634[(13)]);
var inst_31550 = (state_31634[(16)]);
var inst_31552 = (inst_31550 < inst_31549);
var inst_31553 = inst_31552;
var state_31634__$1 = state_31634;
if(cljs.core.truth_(inst_31553)){
var statearr_31759_33350 = state_31634__$1;
(statearr_31759_33350[(1)] = (10));

} else {
var statearr_31760_33351 = state_31634__$1;
(statearr_31760_33351[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31761[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31761[(1)] = (1));

return statearr_31761;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31634){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_31634);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e31762){var ex__29151__auto__ = e31762;
var statearr_31763_33352 = state_31634;
(statearr_31763_33352[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_31634[(4)]))){
var statearr_31764_33353 = state_31634;
(statearr_31764_33353[(1)] = cljs.core.first((state_31634[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33354 = state_31634;
state_31634 = G__33354;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_31785 = f__29467__auto__();
(statearr_31785[(6)] = c__29466__auto___33306);

return statearr_31785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31792 = arguments.length;
switch (G__31792) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31809 = arguments.length;
switch (G__31809) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31815 = arguments.length;
switch (G__31815) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29466__auto___33362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_31860){
var state_val_31861 = (state_31860[(1)]);
if((state_val_31861 === (7))){
var state_31860__$1 = state_31860;
var statearr_31863_33363 = state_31860__$1;
(statearr_31863_33363[(2)] = null);

(statearr_31863_33363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (1))){
var state_31860__$1 = state_31860;
var statearr_31864_33364 = state_31860__$1;
(statearr_31864_33364[(2)] = null);

(statearr_31864_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (4))){
var inst_31820 = (state_31860[(7)]);
var inst_31821 = (state_31860[(8)]);
var inst_31823 = (inst_31821 < inst_31820);
var state_31860__$1 = state_31860;
if(cljs.core.truth_(inst_31823)){
var statearr_31865_33365 = state_31860__$1;
(statearr_31865_33365[(1)] = (6));

} else {
var statearr_31866_33366 = state_31860__$1;
(statearr_31866_33366[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (15))){
var inst_31846 = (state_31860[(9)]);
var inst_31851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31846);
var state_31860__$1 = state_31860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31860__$1,(17),out,inst_31851);
} else {
if((state_val_31861 === (13))){
var inst_31846 = (state_31860[(9)]);
var inst_31846__$1 = (state_31860[(2)]);
var inst_31847 = cljs.core.some(cljs.core.nil_QMARK_,inst_31846__$1);
var state_31860__$1 = (function (){var statearr_31867 = state_31860;
(statearr_31867[(9)] = inst_31846__$1);

return statearr_31867;
})();
if(cljs.core.truth_(inst_31847)){
var statearr_31868_33367 = state_31860__$1;
(statearr_31868_33367[(1)] = (14));

} else {
var statearr_31869_33368 = state_31860__$1;
(statearr_31869_33368[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (6))){
var state_31860__$1 = state_31860;
var statearr_31870_33369 = state_31860__$1;
(statearr_31870_33369[(2)] = null);

(statearr_31870_33369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (17))){
var inst_31853 = (state_31860[(2)]);
var state_31860__$1 = (function (){var statearr_31873 = state_31860;
(statearr_31873[(10)] = inst_31853);

return statearr_31873;
})();
var statearr_31874_33370 = state_31860__$1;
(statearr_31874_33370[(2)] = null);

(statearr_31874_33370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (3))){
var inst_31858 = (state_31860[(2)]);
var state_31860__$1 = state_31860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31860__$1,inst_31858);
} else {
if((state_val_31861 === (12))){
var _ = (function (){var statearr_31875 = state_31860;
(statearr_31875[(4)] = cljs.core.rest((state_31860[(4)])));

return statearr_31875;
})();
var state_31860__$1 = state_31860;
var ex31872 = (state_31860__$1[(2)]);
var statearr_31876_33371 = state_31860__$1;
(statearr_31876_33371[(5)] = ex31872);


if((ex31872 instanceof Object)){
var statearr_31877_33372 = state_31860__$1;
(statearr_31877_33372[(1)] = (11));

(statearr_31877_33372[(5)] = null);

} else {
throw ex31872;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (2))){
var inst_31819 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31820 = cnt;
var inst_31821 = (0);
var state_31860__$1 = (function (){var statearr_31878 = state_31860;
(statearr_31878[(7)] = inst_31820);

(statearr_31878[(11)] = inst_31819);

(statearr_31878[(8)] = inst_31821);

return statearr_31878;
})();
var statearr_31879_33373 = state_31860__$1;
(statearr_31879_33373[(2)] = null);

(statearr_31879_33373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (11))){
var inst_31825 = (state_31860[(2)]);
var inst_31826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31860__$1 = (function (){var statearr_31880 = state_31860;
(statearr_31880[(12)] = inst_31825);

return statearr_31880;
})();
var statearr_31881_33374 = state_31860__$1;
(statearr_31881_33374[(2)] = inst_31826);

(statearr_31881_33374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (9))){
var inst_31821 = (state_31860[(8)]);
var _ = (function (){var statearr_31882 = state_31860;
(statearr_31882[(4)] = cljs.core.cons((12),(state_31860[(4)])));

return statearr_31882;
})();
var inst_31832 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31821) : chs__$1.call(null,inst_31821));
var inst_31833 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31821) : done.call(null,inst_31821));
var inst_31834 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31832,inst_31833);
var ___$1 = (function (){var statearr_31885 = state_31860;
(statearr_31885[(4)] = cljs.core.rest((state_31860[(4)])));

return statearr_31885;
})();
var state_31860__$1 = state_31860;
var statearr_31887_33375 = state_31860__$1;
(statearr_31887_33375[(2)] = inst_31834);

(statearr_31887_33375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (5))){
var inst_31844 = (state_31860[(2)]);
var state_31860__$1 = (function (){var statearr_31890 = state_31860;
(statearr_31890[(13)] = inst_31844);

return statearr_31890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31860__$1,(13),dchan);
} else {
if((state_val_31861 === (14))){
var inst_31849 = cljs.core.async.close_BANG_(out);
var state_31860__$1 = state_31860;
var statearr_31898_33386 = state_31860__$1;
(statearr_31898_33386[(2)] = inst_31849);

(statearr_31898_33386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (16))){
var inst_31856 = (state_31860[(2)]);
var state_31860__$1 = state_31860;
var statearr_31900_33387 = state_31860__$1;
(statearr_31900_33387[(2)] = inst_31856);

(statearr_31900_33387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (10))){
var inst_31821 = (state_31860[(8)]);
var inst_31837 = (state_31860[(2)]);
var inst_31838 = (inst_31821 + (1));
var inst_31821__$1 = inst_31838;
var state_31860__$1 = (function (){var statearr_31901 = state_31860;
(statearr_31901[(14)] = inst_31837);

(statearr_31901[(8)] = inst_31821__$1);

return statearr_31901;
})();
var statearr_31902_33388 = state_31860__$1;
(statearr_31902_33388[(2)] = null);

(statearr_31902_33388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31861 === (8))){
var inst_31842 = (state_31860[(2)]);
var state_31860__$1 = state_31860;
var statearr_31903_33389 = state_31860__$1;
(statearr_31903_33389[(2)] = inst_31842);

(statearr_31903_33389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_31904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31904[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_31904[(1)] = (1));

return statearr_31904;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31860){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_31860);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e31905){var ex__29151__auto__ = e31905;
var statearr_31906_33397 = state_31860;
(statearr_31906_33397[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_31860[(4)]))){
var statearr_31907_33399 = state_31860;
(statearr_31907_33399[(1)] = cljs.core.first((state_31860[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33400 = state_31860;
state_31860 = G__33400;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_31912 = f__29467__auto__();
(statearr_31912[(6)] = c__29466__auto___33362);

return statearr_31912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31919 = arguments.length;
switch (G__31919) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29466__auto___33402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_31977){
var state_val_31978 = (state_31977[(1)]);
if((state_val_31978 === (7))){
var inst_31943 = (state_31977[(7)]);
var inst_31942 = (state_31977[(8)]);
var inst_31942__$1 = (state_31977[(2)]);
var inst_31943__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31942__$1,(0),null);
var inst_31944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31942__$1,(1),null);
var inst_31945 = (inst_31943__$1 == null);
var state_31977__$1 = (function (){var statearr_31980 = state_31977;
(statearr_31980[(9)] = inst_31944);

(statearr_31980[(7)] = inst_31943__$1);

(statearr_31980[(8)] = inst_31942__$1);

return statearr_31980;
})();
if(cljs.core.truth_(inst_31945)){
var statearr_31981_33403 = state_31977__$1;
(statearr_31981_33403[(1)] = (8));

} else {
var statearr_31982_33404 = state_31977__$1;
(statearr_31982_33404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (1))){
var inst_31929 = cljs.core.vec(chs);
var inst_31930 = inst_31929;
var state_31977__$1 = (function (){var statearr_31983 = state_31977;
(statearr_31983[(10)] = inst_31930);

return statearr_31983;
})();
var statearr_31984_33405 = state_31977__$1;
(statearr_31984_33405[(2)] = null);

(statearr_31984_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (4))){
var inst_31930 = (state_31977[(10)]);
var state_31977__$1 = state_31977;
return cljs.core.async.ioc_alts_BANG_(state_31977__$1,(7),inst_31930);
} else {
if((state_val_31978 === (6))){
var inst_31971 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_31985_33406 = state_31977__$1;
(statearr_31985_33406[(2)] = inst_31971);

(statearr_31985_33406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (3))){
var inst_31973 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31977__$1,inst_31973);
} else {
if((state_val_31978 === (2))){
var inst_31930 = (state_31977[(10)]);
var inst_31935 = cljs.core.count(inst_31930);
var inst_31936 = (inst_31935 > (0));
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31936)){
var statearr_32021_33407 = state_31977__$1;
(statearr_32021_33407[(1)] = (4));

} else {
var statearr_32022_33408 = state_31977__$1;
(statearr_32022_33408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (11))){
var inst_31930 = (state_31977[(10)]);
var inst_31964 = (state_31977[(2)]);
var tmp31986 = inst_31930;
var inst_31930__$1 = tmp31986;
var state_31977__$1 = (function (){var statearr_32023 = state_31977;
(statearr_32023[(11)] = inst_31964);

(statearr_32023[(10)] = inst_31930__$1);

return statearr_32023;
})();
var statearr_32024_33409 = state_31977__$1;
(statearr_32024_33409[(2)] = null);

(statearr_32024_33409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (9))){
var inst_31943 = (state_31977[(7)]);
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31977__$1,(11),out,inst_31943);
} else {
if((state_val_31978 === (5))){
var inst_31969 = cljs.core.async.close_BANG_(out);
var state_31977__$1 = state_31977;
var statearr_32031_33410 = state_31977__$1;
(statearr_32031_33410[(2)] = inst_31969);

(statearr_32031_33410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (10))){
var inst_31967 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_32032_33411 = state_31977__$1;
(statearr_32032_33411[(2)] = inst_31967);

(statearr_32032_33411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (8))){
var inst_31944 = (state_31977[(9)]);
var inst_31943 = (state_31977[(7)]);
var inst_31942 = (state_31977[(8)]);
var inst_31930 = (state_31977[(10)]);
var inst_31956 = (function (){var cs = inst_31930;
var vec__31938 = inst_31942;
var v = inst_31943;
var c = inst_31944;
return (function (p1__31917_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31917_SHARP_);
});
})();
var inst_31960 = cljs.core.filterv(inst_31956,inst_31930);
var inst_31930__$1 = inst_31960;
var state_31977__$1 = (function (){var statearr_32034 = state_31977;
(statearr_32034[(10)] = inst_31930__$1);

return statearr_32034;
})();
var statearr_32035_33412 = state_31977__$1;
(statearr_32035_33412[(2)] = null);

(statearr_32035_33412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32036[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_31977){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_31977);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32037){var ex__29151__auto__ = e32037;
var statearr_32038_33416 = state_31977;
(statearr_32038_33416[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_31977[(4)]))){
var statearr_32039_33417 = state_31977;
(statearr_32039_33417[(1)] = cljs.core.first((state_31977[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_31977;
state_31977 = G__33419;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_31977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_31977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32040 = f__29467__auto__();
(statearr_32040[(6)] = c__29466__auto___33402);

return statearr_32040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32063 = arguments.length;
switch (G__32063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29466__auto___33421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_32091){
var state_val_32092 = (state_32091[(1)]);
if((state_val_32092 === (7))){
var inst_32072 = (state_32091[(7)]);
var inst_32072__$1 = (state_32091[(2)]);
var inst_32073 = (inst_32072__$1 == null);
var inst_32074 = cljs.core.not(inst_32073);
var state_32091__$1 = (function (){var statearr_32093 = state_32091;
(statearr_32093[(7)] = inst_32072__$1);

return statearr_32093;
})();
if(inst_32074){
var statearr_32094_33422 = state_32091__$1;
(statearr_32094_33422[(1)] = (8));

} else {
var statearr_32095_33423 = state_32091__$1;
(statearr_32095_33423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (1))){
var inst_32066 = (0);
var state_32091__$1 = (function (){var statearr_32096 = state_32091;
(statearr_32096[(8)] = inst_32066);

return statearr_32096;
})();
var statearr_32097_33424 = state_32091__$1;
(statearr_32097_33424[(2)] = null);

(statearr_32097_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (4))){
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32091__$1,(7),ch);
} else {
if((state_val_32092 === (6))){
var inst_32086 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32098_33425 = state_32091__$1;
(statearr_32098_33425[(2)] = inst_32086);

(statearr_32098_33425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (3))){
var inst_32088 = (state_32091[(2)]);
var inst_32089 = cljs.core.async.close_BANG_(out);
var state_32091__$1 = (function (){var statearr_32099 = state_32091;
(statearr_32099[(9)] = inst_32088);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32091__$1,inst_32089);
} else {
if((state_val_32092 === (2))){
var inst_32066 = (state_32091[(8)]);
var inst_32068 = (inst_32066 < n);
var state_32091__$1 = state_32091;
if(cljs.core.truth_(inst_32068)){
var statearr_32100_33426 = state_32091__$1;
(statearr_32100_33426[(1)] = (4));

} else {
var statearr_32101_33428 = state_32091__$1;
(statearr_32101_33428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (11))){
var inst_32066 = (state_32091[(8)]);
var inst_32077 = (state_32091[(2)]);
var inst_32078 = (inst_32066 + (1));
var inst_32066__$1 = inst_32078;
var state_32091__$1 = (function (){var statearr_32102 = state_32091;
(statearr_32102[(8)] = inst_32066__$1);

(statearr_32102[(10)] = inst_32077);

return statearr_32102;
})();
var statearr_32103_33429 = state_32091__$1;
(statearr_32103_33429[(2)] = null);

(statearr_32103_33429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (9))){
var state_32091__$1 = state_32091;
var statearr_32104_33430 = state_32091__$1;
(statearr_32104_33430[(2)] = null);

(statearr_32104_33430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (5))){
var state_32091__$1 = state_32091;
var statearr_32105_33431 = state_32091__$1;
(statearr_32105_33431[(2)] = null);

(statearr_32105_33431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (10))){
var inst_32083 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32106_33432 = state_32091__$1;
(statearr_32106_33432[(2)] = inst_32083);

(statearr_32106_33432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (8))){
var inst_32072 = (state_32091[(7)]);
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32091__$1,(11),out,inst_32072);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32108[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32108[(1)] = (1));

return statearr_32108;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_32091){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_32091);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32109){var ex__29151__auto__ = e32109;
var statearr_32110_33433 = state_32091;
(statearr_32110_33433[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_32091[(4)]))){
var statearr_32111_33434 = state_32091;
(statearr_32111_33434[(1)] = cljs.core.first((state_32091[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33435 = state_32091;
state_32091 = G__33435;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_32091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_32091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32112 = f__29467__auto__();
(statearr_32112[(6)] = c__29466__auto___33421);

return statearr_32112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32114 = (function (f,ch,meta32115){
this.f = f;
this.ch = ch;
this.meta32115 = meta32115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32116,meta32115__$1){
var self__ = this;
var _32116__$1 = this;
return (new cljs.core.async.t_cljs$core$async32114(self__.f,self__.ch,meta32115__$1));
}));

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32116){
var self__ = this;
var _32116__$1 = this;
return self__.meta32115;
}));

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32117 = (function (f,ch,meta32115,_,fn1,meta32118){
this.f = f;
this.ch = ch;
this.meta32115 = meta32115;
this._ = _;
this.fn1 = fn1;
this.meta32118 = meta32118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32119,meta32118__$1){
var self__ = this;
var _32119__$1 = this;
return (new cljs.core.async.t_cljs$core$async32117(self__.f,self__.ch,self__.meta32115,self__._,self__.fn1,meta32118__$1));
}));

(cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32119){
var self__ = this;
var _32119__$1 = this;
return self__.meta32118;
}));

(cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32113_SHARP_){
var G__32121 = (((p1__32113_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32113_SHARP_) : self__.f.call(null,p1__32113_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32121) : f1.call(null,G__32121));
});
}));

(cljs.core.async.t_cljs$core$async32117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32115","meta32115",503995675,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32114","cljs.core.async/t_cljs$core$async32114",235795067,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32118","meta32118",-1102918049,null)], null);
}));

(cljs.core.async.t_cljs$core$async32117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32117");

(cljs.core.async.t_cljs$core$async32117.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32117.
 */
cljs.core.async.__GT_t_cljs$core$async32117 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32117(f__$1,ch__$1,meta32115__$1,___$2,fn1__$1,meta32118){
return (new cljs.core.async.t_cljs$core$async32117(f__$1,ch__$1,meta32115__$1,___$2,fn1__$1,meta32118));
});

}

return (new cljs.core.async.t_cljs$core$async32117(self__.f,self__.ch,self__.meta32115,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32135 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32135) : self__.f.call(null,G__32135));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32115","meta32115",503995675,null)], null);
}));

(cljs.core.async.t_cljs$core$async32114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32114");

(cljs.core.async.t_cljs$core$async32114.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32114.
 */
cljs.core.async.__GT_t_cljs$core$async32114 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32114(f__$1,ch__$1,meta32115){
return (new cljs.core.async.t_cljs$core$async32114(f__$1,ch__$1,meta32115));
});

}

return (new cljs.core.async.t_cljs$core$async32114(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32137 = (function (f,ch,meta32138){
this.f = f;
this.ch = ch;
this.meta32138 = meta32138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32139,meta32138__$1){
var self__ = this;
var _32139__$1 = this;
return (new cljs.core.async.t_cljs$core$async32137(self__.f,self__.ch,meta32138__$1));
}));

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32139){
var self__ = this;
var _32139__$1 = this;
return self__.meta32138;
}));

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32138","meta32138",2125257412,null)], null);
}));

(cljs.core.async.t_cljs$core$async32137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32137");

(cljs.core.async.t_cljs$core$async32137.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32137.
 */
cljs.core.async.__GT_t_cljs$core$async32137 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32137(f__$1,ch__$1,meta32138){
return (new cljs.core.async.t_cljs$core$async32137(f__$1,ch__$1,meta32138));
});

}

return (new cljs.core.async.t_cljs$core$async32137(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32141 = (function (p,ch,meta32142){
this.p = p;
this.ch = ch;
this.meta32142 = meta32142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32143,meta32142__$1){
var self__ = this;
var _32143__$1 = this;
return (new cljs.core.async.t_cljs$core$async32141(self__.p,self__.ch,meta32142__$1));
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32143){
var self__ = this;
var _32143__$1 = this;
return self__.meta32142;
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32142","meta32142",1230716413,null)], null);
}));

(cljs.core.async.t_cljs$core$async32141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32141");

(cljs.core.async.t_cljs$core$async32141.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32141.
 */
cljs.core.async.__GT_t_cljs$core$async32141 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32141(p__$1,ch__$1,meta32142){
return (new cljs.core.async.t_cljs$core$async32141(p__$1,ch__$1,meta32142));
});

}

return (new cljs.core.async.t_cljs$core$async32141(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32157 = arguments.length;
switch (G__32157) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29466__auto___33491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_32179){
var state_val_32180 = (state_32179[(1)]);
if((state_val_32180 === (7))){
var inst_32175 = (state_32179[(2)]);
var state_32179__$1 = state_32179;
var statearr_32181_33492 = state_32179__$1;
(statearr_32181_33492[(2)] = inst_32175);

(statearr_32181_33492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (1))){
var state_32179__$1 = state_32179;
var statearr_32182_33493 = state_32179__$1;
(statearr_32182_33493[(2)] = null);

(statearr_32182_33493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (4))){
var inst_32161 = (state_32179[(7)]);
var inst_32161__$1 = (state_32179[(2)]);
var inst_32162 = (inst_32161__$1 == null);
var state_32179__$1 = (function (){var statearr_32183 = state_32179;
(statearr_32183[(7)] = inst_32161__$1);

return statearr_32183;
})();
if(cljs.core.truth_(inst_32162)){
var statearr_32184_33498 = state_32179__$1;
(statearr_32184_33498[(1)] = (5));

} else {
var statearr_32185_33499 = state_32179__$1;
(statearr_32185_33499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (6))){
var inst_32161 = (state_32179[(7)]);
var inst_32166 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32161) : p.call(null,inst_32161));
var state_32179__$1 = state_32179;
if(cljs.core.truth_(inst_32166)){
var statearr_32186_33503 = state_32179__$1;
(statearr_32186_33503[(1)] = (8));

} else {
var statearr_32187_33504 = state_32179__$1;
(statearr_32187_33504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (3))){
var inst_32177 = (state_32179[(2)]);
var state_32179__$1 = state_32179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32179__$1,inst_32177);
} else {
if((state_val_32180 === (2))){
var state_32179__$1 = state_32179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32179__$1,(4),ch);
} else {
if((state_val_32180 === (11))){
var inst_32169 = (state_32179[(2)]);
var state_32179__$1 = state_32179;
var statearr_32189_33510 = state_32179__$1;
(statearr_32189_33510[(2)] = inst_32169);

(statearr_32189_33510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (9))){
var state_32179__$1 = state_32179;
var statearr_32190_33511 = state_32179__$1;
(statearr_32190_33511[(2)] = null);

(statearr_32190_33511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (5))){
var inst_32164 = cljs.core.async.close_BANG_(out);
var state_32179__$1 = state_32179;
var statearr_32191_33512 = state_32179__$1;
(statearr_32191_33512[(2)] = inst_32164);

(statearr_32191_33512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (10))){
var inst_32172 = (state_32179[(2)]);
var state_32179__$1 = (function (){var statearr_32192 = state_32179;
(statearr_32192[(8)] = inst_32172);

return statearr_32192;
})();
var statearr_32193_33513 = state_32179__$1;
(statearr_32193_33513[(2)] = null);

(statearr_32193_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32180 === (8))){
var inst_32161 = (state_32179[(7)]);
var state_32179__$1 = state_32179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32179__$1,(11),out,inst_32161);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32194 = [null,null,null,null,null,null,null,null,null];
(statearr_32194[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32194[(1)] = (1));

return statearr_32194;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_32179){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_32179);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32195){var ex__29151__auto__ = e32195;
var statearr_32196_33518 = state_32179;
(statearr_32196_33518[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_32179[(4)]))){
var statearr_32198_33519 = state_32179;
(statearr_32198_33519[(1)] = cljs.core.first((state_32179[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33520 = state_32179;
state_32179 = G__33520;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_32179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_32179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32199 = f__29467__auto__();
(statearr_32199[(6)] = c__29466__auto___33491);

return statearr_32199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32202 = arguments.length;
switch (G__32202) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_32265){
var state_val_32266 = (state_32265[(1)]);
if((state_val_32266 === (7))){
var inst_32261 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32267_33525 = state_32265__$1;
(statearr_32267_33525[(2)] = inst_32261);

(statearr_32267_33525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (20))){
var inst_32231 = (state_32265[(7)]);
var inst_32242 = (state_32265[(2)]);
var inst_32243 = cljs.core.next(inst_32231);
var inst_32217 = inst_32243;
var inst_32218 = null;
var inst_32219 = (0);
var inst_32220 = (0);
var state_32265__$1 = (function (){var statearr_32269 = state_32265;
(statearr_32269[(8)] = inst_32217);

(statearr_32269[(9)] = inst_32218);

(statearr_32269[(10)] = inst_32242);

(statearr_32269[(11)] = inst_32219);

(statearr_32269[(12)] = inst_32220);

return statearr_32269;
})();
var statearr_32270_33526 = state_32265__$1;
(statearr_32270_33526[(2)] = null);

(statearr_32270_33526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (1))){
var state_32265__$1 = state_32265;
var statearr_32271_33527 = state_32265__$1;
(statearr_32271_33527[(2)] = null);

(statearr_32271_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (4))){
var inst_32206 = (state_32265[(13)]);
var inst_32206__$1 = (state_32265[(2)]);
var inst_32207 = (inst_32206__$1 == null);
var state_32265__$1 = (function (){var statearr_32272 = state_32265;
(statearr_32272[(13)] = inst_32206__$1);

return statearr_32272;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32273_33528 = state_32265__$1;
(statearr_32273_33528[(1)] = (5));

} else {
var statearr_32274_33529 = state_32265__$1;
(statearr_32274_33529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (15))){
var state_32265__$1 = state_32265;
var statearr_32278_33530 = state_32265__$1;
(statearr_32278_33530[(2)] = null);

(statearr_32278_33530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (21))){
var state_32265__$1 = state_32265;
var statearr_32282_33535 = state_32265__$1;
(statearr_32282_33535[(2)] = null);

(statearr_32282_33535[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (13))){
var inst_32217 = (state_32265[(8)]);
var inst_32218 = (state_32265[(9)]);
var inst_32219 = (state_32265[(11)]);
var inst_32220 = (state_32265[(12)]);
var inst_32227 = (state_32265[(2)]);
var inst_32228 = (inst_32220 + (1));
var tmp32275 = inst_32217;
var tmp32276 = inst_32218;
var tmp32277 = inst_32219;
var inst_32217__$1 = tmp32275;
var inst_32218__$1 = tmp32276;
var inst_32219__$1 = tmp32277;
var inst_32220__$1 = inst_32228;
var state_32265__$1 = (function (){var statearr_32283 = state_32265;
(statearr_32283[(8)] = inst_32217__$1);

(statearr_32283[(9)] = inst_32218__$1);

(statearr_32283[(14)] = inst_32227);

(statearr_32283[(11)] = inst_32219__$1);

(statearr_32283[(12)] = inst_32220__$1);

return statearr_32283;
})();
var statearr_32284_33539 = state_32265__$1;
(statearr_32284_33539[(2)] = null);

(statearr_32284_33539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (22))){
var state_32265__$1 = state_32265;
var statearr_32285_33540 = state_32265__$1;
(statearr_32285_33540[(2)] = null);

(statearr_32285_33540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (6))){
var inst_32206 = (state_32265[(13)]);
var inst_32215 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32206) : f.call(null,inst_32206));
var inst_32216 = cljs.core.seq(inst_32215);
var inst_32217 = inst_32216;
var inst_32218 = null;
var inst_32219 = (0);
var inst_32220 = (0);
var state_32265__$1 = (function (){var statearr_32286 = state_32265;
(statearr_32286[(8)] = inst_32217);

(statearr_32286[(9)] = inst_32218);

(statearr_32286[(11)] = inst_32219);

(statearr_32286[(12)] = inst_32220);

return statearr_32286;
})();
var statearr_32287_33542 = state_32265__$1;
(statearr_32287_33542[(2)] = null);

(statearr_32287_33542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (17))){
var inst_32231 = (state_32265[(7)]);
var inst_32235 = cljs.core.chunk_first(inst_32231);
var inst_32236 = cljs.core.chunk_rest(inst_32231);
var inst_32237 = cljs.core.count(inst_32235);
var inst_32217 = inst_32236;
var inst_32218 = inst_32235;
var inst_32219 = inst_32237;
var inst_32220 = (0);
var state_32265__$1 = (function (){var statearr_32330 = state_32265;
(statearr_32330[(8)] = inst_32217);

(statearr_32330[(9)] = inst_32218);

(statearr_32330[(11)] = inst_32219);

(statearr_32330[(12)] = inst_32220);

return statearr_32330;
})();
var statearr_32331_33546 = state_32265__$1;
(statearr_32331_33546[(2)] = null);

(statearr_32331_33546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (3))){
var inst_32263 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32265__$1,inst_32263);
} else {
if((state_val_32266 === (12))){
var inst_32251 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32332_33547 = state_32265__$1;
(statearr_32332_33547[(2)] = inst_32251);

(statearr_32332_33547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (2))){
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32265__$1,(4),in$);
} else {
if((state_val_32266 === (23))){
var inst_32259 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32334_33554 = state_32265__$1;
(statearr_32334_33554[(2)] = inst_32259);

(statearr_32334_33554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (19))){
var inst_32246 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32335_33556 = state_32265__$1;
(statearr_32335_33556[(2)] = inst_32246);

(statearr_32335_33556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (11))){
var inst_32217 = (state_32265[(8)]);
var inst_32231 = (state_32265[(7)]);
var inst_32231__$1 = cljs.core.seq(inst_32217);
var state_32265__$1 = (function (){var statearr_32336 = state_32265;
(statearr_32336[(7)] = inst_32231__$1);

return statearr_32336;
})();
if(inst_32231__$1){
var statearr_32337_33557 = state_32265__$1;
(statearr_32337_33557[(1)] = (14));

} else {
var statearr_32338_33558 = state_32265__$1;
(statearr_32338_33558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (9))){
var inst_32253 = (state_32265[(2)]);
var inst_32254 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32265__$1 = (function (){var statearr_32339 = state_32265;
(statearr_32339[(15)] = inst_32253);

return statearr_32339;
})();
if(cljs.core.truth_(inst_32254)){
var statearr_32340_33559 = state_32265__$1;
(statearr_32340_33559[(1)] = (21));

} else {
var statearr_32343_33560 = state_32265__$1;
(statearr_32343_33560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (5))){
var inst_32209 = cljs.core.async.close_BANG_(out);
var state_32265__$1 = state_32265;
var statearr_32347_33561 = state_32265__$1;
(statearr_32347_33561[(2)] = inst_32209);

(statearr_32347_33561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (14))){
var inst_32231 = (state_32265[(7)]);
var inst_32233 = cljs.core.chunked_seq_QMARK_(inst_32231);
var state_32265__$1 = state_32265;
if(inst_32233){
var statearr_32352_33562 = state_32265__$1;
(statearr_32352_33562[(1)] = (17));

} else {
var statearr_32356_33563 = state_32265__$1;
(statearr_32356_33563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (16))){
var inst_32249 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32358_33575 = state_32265__$1;
(statearr_32358_33575[(2)] = inst_32249);

(statearr_32358_33575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (10))){
var inst_32218 = (state_32265[(9)]);
var inst_32220 = (state_32265[(12)]);
var inst_32225 = cljs.core._nth(inst_32218,inst_32220);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32265__$1,(13),out,inst_32225);
} else {
if((state_val_32266 === (18))){
var inst_32231 = (state_32265[(7)]);
var inst_32240 = cljs.core.first(inst_32231);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32265__$1,(20),out,inst_32240);
} else {
if((state_val_32266 === (8))){
var inst_32219 = (state_32265[(11)]);
var inst_32220 = (state_32265[(12)]);
var inst_32222 = (inst_32220 < inst_32219);
var inst_32223 = inst_32222;
var state_32265__$1 = state_32265;
if(cljs.core.truth_(inst_32223)){
var statearr_32359_33579 = state_32265__$1;
(statearr_32359_33579[(1)] = (10));

} else {
var statearr_32360_33580 = state_32265__$1;
(statearr_32360_33580[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____0 = (function (){
var statearr_32367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32367[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__);

(statearr_32367[(1)] = (1));

return statearr_32367;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____1 = (function (state_32265){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_32265);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32372){var ex__29151__auto__ = e32372;
var statearr_32373_33581 = state_32265;
(statearr_32373_33581[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_32265[(4)]))){
var statearr_32377_33582 = state_32265;
(statearr_32377_33582[(1)] = cljs.core.first((state_32265[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33583 = state_32265;
state_32265 = G__33583;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__ = function(state_32265){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____1.call(this,state_32265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29147__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32381 = f__29467__auto__();
(statearr_32381[(6)] = c__29466__auto__);

return statearr_32381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));

return c__29466__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32387 = arguments.length;
switch (G__32387) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32391 = arguments.length;
switch (G__32391) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32454 = arguments.length;
switch (G__32454) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29466__auto___33589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_32478){
var state_val_32479 = (state_32478[(1)]);
if((state_val_32479 === (7))){
var inst_32473 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32492_33590 = state_32478__$1;
(statearr_32492_33590[(2)] = inst_32473);

(statearr_32492_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (1))){
var inst_32455 = null;
var state_32478__$1 = (function (){var statearr_32494 = state_32478;
(statearr_32494[(7)] = inst_32455);

return statearr_32494;
})();
var statearr_32497_33591 = state_32478__$1;
(statearr_32497_33591[(2)] = null);

(statearr_32497_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (4))){
var inst_32458 = (state_32478[(8)]);
var inst_32458__$1 = (state_32478[(2)]);
var inst_32459 = (inst_32458__$1 == null);
var inst_32460 = cljs.core.not(inst_32459);
var state_32478__$1 = (function (){var statearr_32508 = state_32478;
(statearr_32508[(8)] = inst_32458__$1);

return statearr_32508;
})();
if(inst_32460){
var statearr_32509_33592 = state_32478__$1;
(statearr_32509_33592[(1)] = (5));

} else {
var statearr_32511_33593 = state_32478__$1;
(statearr_32511_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (6))){
var state_32478__$1 = state_32478;
var statearr_32514_33594 = state_32478__$1;
(statearr_32514_33594[(2)] = null);

(statearr_32514_33594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (3))){
var inst_32475 = (state_32478[(2)]);
var inst_32476 = cljs.core.async.close_BANG_(out);
var state_32478__$1 = (function (){var statearr_32520 = state_32478;
(statearr_32520[(9)] = inst_32475);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32478__$1,inst_32476);
} else {
if((state_val_32479 === (2))){
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32478__$1,(4),ch);
} else {
if((state_val_32479 === (11))){
var inst_32458 = (state_32478[(8)]);
var inst_32467 = (state_32478[(2)]);
var inst_32455 = inst_32458;
var state_32478__$1 = (function (){var statearr_32531 = state_32478;
(statearr_32531[(10)] = inst_32467);

(statearr_32531[(7)] = inst_32455);

return statearr_32531;
})();
var statearr_32532_33595 = state_32478__$1;
(statearr_32532_33595[(2)] = null);

(statearr_32532_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (9))){
var inst_32458 = (state_32478[(8)]);
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32478__$1,(11),out,inst_32458);
} else {
if((state_val_32479 === (5))){
var inst_32458 = (state_32478[(8)]);
var inst_32455 = (state_32478[(7)]);
var inst_32462 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32458,inst_32455);
var state_32478__$1 = state_32478;
if(inst_32462){
var statearr_32535_33596 = state_32478__$1;
(statearr_32535_33596[(1)] = (8));

} else {
var statearr_32538_33597 = state_32478__$1;
(statearr_32538_33597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (10))){
var inst_32470 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32543_33598 = state_32478__$1;
(statearr_32543_33598[(2)] = inst_32470);

(statearr_32543_33598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (8))){
var inst_32455 = (state_32478[(7)]);
var tmp32533 = inst_32455;
var inst_32455__$1 = tmp32533;
var state_32478__$1 = (function (){var statearr_32547 = state_32478;
(statearr_32547[(7)] = inst_32455__$1);

return statearr_32547;
})();
var statearr_32548_33599 = state_32478__$1;
(statearr_32548_33599[(2)] = null);

(statearr_32548_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32551[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32551[(1)] = (1));

return statearr_32551;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_32478){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_32478);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32552){var ex__29151__auto__ = e32552;
var statearr_32553_33600 = state_32478;
(statearr_32553_33600[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_32478[(4)]))){
var statearr_32555_33601 = state_32478;
(statearr_32555_33601[(1)] = cljs.core.first((state_32478[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33602 = state_32478;
state_32478 = G__33602;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_32478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_32478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32556 = f__29467__auto__();
(statearr_32556[(6)] = c__29466__auto___33589);

return statearr_32556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32558 = arguments.length;
switch (G__32558) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29466__auto___33604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_32596){
var state_val_32597 = (state_32596[(1)]);
if((state_val_32597 === (7))){
var inst_32592 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32598_33605 = state_32596__$1;
(statearr_32598_33605[(2)] = inst_32592);

(statearr_32598_33605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (1))){
var inst_32559 = (new Array(n));
var inst_32560 = inst_32559;
var inst_32561 = (0);
var state_32596__$1 = (function (){var statearr_32600 = state_32596;
(statearr_32600[(7)] = inst_32560);

(statearr_32600[(8)] = inst_32561);

return statearr_32600;
})();
var statearr_32601_33606 = state_32596__$1;
(statearr_32601_33606[(2)] = null);

(statearr_32601_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (4))){
var inst_32564 = (state_32596[(9)]);
var inst_32564__$1 = (state_32596[(2)]);
var inst_32565 = (inst_32564__$1 == null);
var inst_32566 = cljs.core.not(inst_32565);
var state_32596__$1 = (function (){var statearr_32602 = state_32596;
(statearr_32602[(9)] = inst_32564__$1);

return statearr_32602;
})();
if(inst_32566){
var statearr_32617_33611 = state_32596__$1;
(statearr_32617_33611[(1)] = (5));

} else {
var statearr_32618_33612 = state_32596__$1;
(statearr_32618_33612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (15))){
var inst_32586 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32619_33613 = state_32596__$1;
(statearr_32619_33613[(2)] = inst_32586);

(statearr_32619_33613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (13))){
var state_32596__$1 = state_32596;
var statearr_32621_33614 = state_32596__$1;
(statearr_32621_33614[(2)] = null);

(statearr_32621_33614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (6))){
var inst_32561 = (state_32596[(8)]);
var inst_32582 = (inst_32561 > (0));
var state_32596__$1 = state_32596;
if(cljs.core.truth_(inst_32582)){
var statearr_32622_33615 = state_32596__$1;
(statearr_32622_33615[(1)] = (12));

} else {
var statearr_32623_33616 = state_32596__$1;
(statearr_32623_33616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (3))){
var inst_32594 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32596__$1,inst_32594);
} else {
if((state_val_32597 === (12))){
var inst_32560 = (state_32596[(7)]);
var inst_32584 = cljs.core.vec(inst_32560);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32596__$1,(15),out,inst_32584);
} else {
if((state_val_32597 === (2))){
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32596__$1,(4),ch);
} else {
if((state_val_32597 === (11))){
var inst_32576 = (state_32596[(2)]);
var inst_32577 = (new Array(n));
var inst_32560 = inst_32577;
var inst_32561 = (0);
var state_32596__$1 = (function (){var statearr_32624 = state_32596;
(statearr_32624[(7)] = inst_32560);

(statearr_32624[(8)] = inst_32561);

(statearr_32624[(10)] = inst_32576);

return statearr_32624;
})();
var statearr_32625_33622 = state_32596__$1;
(statearr_32625_33622[(2)] = null);

(statearr_32625_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (9))){
var inst_32560 = (state_32596[(7)]);
var inst_32574 = cljs.core.vec(inst_32560);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32596__$1,(11),out,inst_32574);
} else {
if((state_val_32597 === (5))){
var inst_32569 = (state_32596[(11)]);
var inst_32564 = (state_32596[(9)]);
var inst_32560 = (state_32596[(7)]);
var inst_32561 = (state_32596[(8)]);
var inst_32568 = (inst_32560[inst_32561] = inst_32564);
var inst_32569__$1 = (inst_32561 + (1));
var inst_32570 = (inst_32569__$1 < n);
var state_32596__$1 = (function (){var statearr_32627 = state_32596;
(statearr_32627[(11)] = inst_32569__$1);

(statearr_32627[(12)] = inst_32568);

return statearr_32627;
})();
if(cljs.core.truth_(inst_32570)){
var statearr_32628_33623 = state_32596__$1;
(statearr_32628_33623[(1)] = (8));

} else {
var statearr_32629_33624 = state_32596__$1;
(statearr_32629_33624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (14))){
var inst_32589 = (state_32596[(2)]);
var inst_32590 = cljs.core.async.close_BANG_(out);
var state_32596__$1 = (function (){var statearr_32631 = state_32596;
(statearr_32631[(13)] = inst_32589);

return statearr_32631;
})();
var statearr_32632_33625 = state_32596__$1;
(statearr_32632_33625[(2)] = inst_32590);

(statearr_32632_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (10))){
var inst_32580 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32633_33626 = state_32596__$1;
(statearr_32633_33626[(2)] = inst_32580);

(statearr_32633_33626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (8))){
var inst_32569 = (state_32596[(11)]);
var inst_32560 = (state_32596[(7)]);
var tmp32630 = inst_32560;
var inst_32560__$1 = tmp32630;
var inst_32561 = inst_32569;
var state_32596__$1 = (function (){var statearr_32634 = state_32596;
(statearr_32634[(7)] = inst_32560__$1);

(statearr_32634[(8)] = inst_32561);

return statearr_32634;
})();
var statearr_32635_33627 = state_32596__$1;
(statearr_32635_33627[(2)] = null);

(statearr_32635_33627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32637[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32637[(1)] = (1));

return statearr_32637;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_32596){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_32596);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32638){var ex__29151__auto__ = e32638;
var statearr_32639_33629 = state_32596;
(statearr_32639_33629[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_32596[(4)]))){
var statearr_32640_33630 = state_32596;
(statearr_32640_33630[(1)] = cljs.core.first((state_32596[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33631 = state_32596;
state_32596 = G__33631;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_32596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_32596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32641 = f__29467__auto__();
(statearr_32641[(6)] = c__29466__auto___33604);

return statearr_32641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32644 = arguments.length;
switch (G__32644) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29466__auto___33633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_32690){
var state_val_32691 = (state_32690[(1)]);
if((state_val_32691 === (7))){
var inst_32686 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32692_33634 = state_32690__$1;
(statearr_32692_33634[(2)] = inst_32686);

(statearr_32692_33634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (1))){
var inst_32645 = [];
var inst_32646 = inst_32645;
var inst_32647 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32690__$1 = (function (){var statearr_32693 = state_32690;
(statearr_32693[(7)] = inst_32647);

(statearr_32693[(8)] = inst_32646);

return statearr_32693;
})();
var statearr_32694_33635 = state_32690__$1;
(statearr_32694_33635[(2)] = null);

(statearr_32694_33635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (4))){
var inst_32650 = (state_32690[(9)]);
var inst_32650__$1 = (state_32690[(2)]);
var inst_32651 = (inst_32650__$1 == null);
var inst_32652 = cljs.core.not(inst_32651);
var state_32690__$1 = (function (){var statearr_32695 = state_32690;
(statearr_32695[(9)] = inst_32650__$1);

return statearr_32695;
})();
if(inst_32652){
var statearr_32696_33636 = state_32690__$1;
(statearr_32696_33636[(1)] = (5));

} else {
var statearr_32697_33637 = state_32690__$1;
(statearr_32697_33637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (15))){
var inst_32646 = (state_32690[(8)]);
var inst_32678 = cljs.core.vec(inst_32646);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32690__$1,(18),out,inst_32678);
} else {
if((state_val_32691 === (13))){
var inst_32672 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32699_33642 = state_32690__$1;
(statearr_32699_33642[(2)] = inst_32672);

(statearr_32699_33642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (6))){
var inst_32646 = (state_32690[(8)]);
var inst_32674 = inst_32646.length;
var inst_32675 = (inst_32674 > (0));
var state_32690__$1 = state_32690;
if(cljs.core.truth_(inst_32675)){
var statearr_32700_33643 = state_32690__$1;
(statearr_32700_33643[(1)] = (15));

} else {
var statearr_32701_33644 = state_32690__$1;
(statearr_32701_33644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (17))){
var inst_32683 = (state_32690[(2)]);
var inst_32684 = cljs.core.async.close_BANG_(out);
var state_32690__$1 = (function (){var statearr_32702 = state_32690;
(statearr_32702[(10)] = inst_32683);

return statearr_32702;
})();
var statearr_32703_33645 = state_32690__$1;
(statearr_32703_33645[(2)] = inst_32684);

(statearr_32703_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (3))){
var inst_32688 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32690__$1,inst_32688);
} else {
if((state_val_32691 === (12))){
var inst_32646 = (state_32690[(8)]);
var inst_32665 = cljs.core.vec(inst_32646);
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32690__$1,(14),out,inst_32665);
} else {
if((state_val_32691 === (2))){
var state_32690__$1 = state_32690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32690__$1,(4),ch);
} else {
if((state_val_32691 === (11))){
var inst_32654 = (state_32690[(11)]);
var inst_32650 = (state_32690[(9)]);
var inst_32646 = (state_32690[(8)]);
var inst_32662 = inst_32646.push(inst_32650);
var tmp32704 = inst_32646;
var inst_32646__$1 = tmp32704;
var inst_32647 = inst_32654;
var state_32690__$1 = (function (){var statearr_32706 = state_32690;
(statearr_32706[(7)] = inst_32647);

(statearr_32706[(8)] = inst_32646__$1);

(statearr_32706[(12)] = inst_32662);

return statearr_32706;
})();
var statearr_32707_33646 = state_32690__$1;
(statearr_32707_33646[(2)] = null);

(statearr_32707_33646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (9))){
var inst_32647 = (state_32690[(7)]);
var inst_32658 = cljs.core.keyword_identical_QMARK_(inst_32647,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32690__$1 = state_32690;
var statearr_32708_33647 = state_32690__$1;
(statearr_32708_33647[(2)] = inst_32658);

(statearr_32708_33647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (5))){
var inst_32647 = (state_32690[(7)]);
var inst_32655 = (state_32690[(13)]);
var inst_32654 = (state_32690[(11)]);
var inst_32650 = (state_32690[(9)]);
var inst_32654__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32650) : f.call(null,inst_32650));
var inst_32655__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32654__$1,inst_32647);
var state_32690__$1 = (function (){var statearr_32709 = state_32690;
(statearr_32709[(13)] = inst_32655__$1);

(statearr_32709[(11)] = inst_32654__$1);

return statearr_32709;
})();
if(inst_32655__$1){
var statearr_32710_33648 = state_32690__$1;
(statearr_32710_33648[(1)] = (8));

} else {
var statearr_32711_33649 = state_32690__$1;
(statearr_32711_33649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (14))){
var inst_32654 = (state_32690[(11)]);
var inst_32650 = (state_32690[(9)]);
var inst_32667 = (state_32690[(2)]);
var inst_32668 = [];
var inst_32669 = inst_32668.push(inst_32650);
var inst_32646 = inst_32668;
var inst_32647 = inst_32654;
var state_32690__$1 = (function (){var statearr_32712 = state_32690;
(statearr_32712[(7)] = inst_32647);

(statearr_32712[(14)] = inst_32667);

(statearr_32712[(15)] = inst_32669);

(statearr_32712[(8)] = inst_32646);

return statearr_32712;
})();
var statearr_32714_33650 = state_32690__$1;
(statearr_32714_33650[(2)] = null);

(statearr_32714_33650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (16))){
var state_32690__$1 = state_32690;
var statearr_32715_33652 = state_32690__$1;
(statearr_32715_33652[(2)] = null);

(statearr_32715_33652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (10))){
var inst_32660 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
if(cljs.core.truth_(inst_32660)){
var statearr_32716_33654 = state_32690__$1;
(statearr_32716_33654[(1)] = (11));

} else {
var statearr_32717_33655 = state_32690__$1;
(statearr_32717_33655[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (18))){
var inst_32680 = (state_32690[(2)]);
var state_32690__$1 = state_32690;
var statearr_32718_33656 = state_32690__$1;
(statearr_32718_33656[(2)] = inst_32680);

(statearr_32718_33656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32691 === (8))){
var inst_32655 = (state_32690[(13)]);
var state_32690__$1 = state_32690;
var statearr_32719_33657 = state_32690__$1;
(statearr_32719_33657[(2)] = inst_32655);

(statearr_32719_33657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29147__auto__ = null;
var cljs$core$async$state_machine__29147__auto____0 = (function (){
var statearr_32720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32720[(0)] = cljs$core$async$state_machine__29147__auto__);

(statearr_32720[(1)] = (1));

return statearr_32720;
});
var cljs$core$async$state_machine__29147__auto____1 = (function (state_32690){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_32690);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e32721){var ex__29151__auto__ = e32721;
var statearr_32722_33658 = state_32690;
(statearr_32722_33658[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_32690[(4)]))){
var statearr_32723_33659 = state_32690;
(statearr_32723_33659[(1)] = cljs.core.first((state_32690[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33660 = state_32690;
state_32690 = G__33660;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
cljs$core$async$state_machine__29147__auto__ = function(state_32690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29147__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29147__auto____1.call(this,state_32690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29147__auto____0;
cljs$core$async$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29147__auto____1;
return cljs$core$async$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_32725 = f__29467__auto__();
(statearr_32725[(6)] = c__29466__auto___33633);

return statearr_32725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
