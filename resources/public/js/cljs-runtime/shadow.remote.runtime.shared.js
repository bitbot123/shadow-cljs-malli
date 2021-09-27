goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31171,res){
var map__31176 = p__31171;
var map__31176__$1 = cljs.core.__destructure_map(map__31176);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31176__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31176__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31219 = res;
var G__31219__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31219,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31219);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31219__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31219__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31231 = arguments.length;
switch (G__31231) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31237,msg,handlers,timeout_after_ms){
var map__31238 = p__31237;
var map__31238__$1 = cljs.core.__destructure_map(map__31238);
var runtime = map__31238__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31238__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___31532 = arguments.length;
var i__4819__auto___31533 = (0);
while(true){
if((i__4819__auto___31533 < len__4818__auto___31532)){
args__4824__auto__.push((arguments[i__4819__auto___31533]));

var G__31534 = (i__4819__auto___31533 + (1));
i__4819__auto___31533 = G__31534;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31260,ev,args){
var map__31261 = p__31260;
var map__31261__$1 = cljs.core.__destructure_map(map__31261);
var runtime = map__31261__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31261__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31291 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31294 = null;
var count__31295 = (0);
var i__31296 = (0);
while(true){
if((i__31296 < count__31295)){
var ext = chunk__31294.cljs$core$IIndexed$_nth$arity$2(null,i__31296);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31610 = seq__31291;
var G__31611 = chunk__31294;
var G__31612 = count__31295;
var G__31613 = (i__31296 + (1));
seq__31291 = G__31610;
chunk__31294 = G__31611;
count__31295 = G__31612;
i__31296 = G__31613;
continue;
} else {
var G__31622 = seq__31291;
var G__31624 = chunk__31294;
var G__31625 = count__31295;
var G__31626 = (i__31296 + (1));
seq__31291 = G__31622;
chunk__31294 = G__31624;
count__31295 = G__31625;
i__31296 = G__31626;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31291);
if(temp__5753__auto__){
var seq__31291__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31291__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31291__$1);
var G__31636 = cljs.core.chunk_rest(seq__31291__$1);
var G__31637 = c__4638__auto__;
var G__31638 = cljs.core.count(c__4638__auto__);
var G__31639 = (0);
seq__31291 = G__31636;
chunk__31294 = G__31637;
count__31295 = G__31638;
i__31296 = G__31639;
continue;
} else {
var ext = cljs.core.first(seq__31291__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31640 = cljs.core.next(seq__31291__$1);
var G__31641 = null;
var G__31642 = (0);
var G__31643 = (0);
seq__31291 = G__31640;
chunk__31294 = G__31641;
count__31295 = G__31642;
i__31296 = G__31643;
continue;
} else {
var G__31644 = cljs.core.next(seq__31291__$1);
var G__31645 = null;
var G__31646 = (0);
var G__31647 = (0);
seq__31291 = G__31644;
chunk__31294 = G__31645;
count__31295 = G__31646;
i__31296 = G__31647;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31252){
var G__31253 = cljs.core.first(seq31252);
var seq31252__$1 = cljs.core.next(seq31252);
var G__31254 = cljs.core.first(seq31252__$1);
var seq31252__$2 = cljs.core.next(seq31252__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31253,G__31254,seq31252__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31331,p__31332){
var map__31335 = p__31331;
var map__31335__$1 = cljs.core.__destructure_map(map__31335);
var runtime = map__31335__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31335__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31336 = p__31332;
var map__31336__$1 = cljs.core.__destructure_map(map__31336);
var msg = map__31336__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31336__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31363 = cljs.core.deref(state_ref);
var map__31363__$1 = cljs.core.__destructure_map(map__31363);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31375){
var map__31377 = p__31375;
var map__31377__$1 = cljs.core.__destructure_map(map__31377);
var runtime = map__31377__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31394,msg){
var map__31395 = p__31394;
var map__31395__$1 = cljs.core.__destructure_map(map__31395);
var runtime = map__31395__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31395__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31440,key,p__31441){
var map__31442 = p__31440;
var map__31442__$1 = cljs.core.__destructure_map(map__31442);
var state = map__31442__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31442__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31443 = p__31441;
var map__31443__$1 = cljs.core.__destructure_map(map__31443);
var spec = map__31443__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31443__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31455,key,spec){
var map__31457 = p__31455;
var map__31457__$1 = cljs.core.__destructure_map(map__31457);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31460_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31460_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31461_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31461_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31462_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31462_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31463_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31463_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31464_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31464_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31467,key){
var map__31468 = p__31467;
var map__31468__$1 = cljs.core.__destructure_map(map__31468);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31468__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31471,msg){
var map__31472 = p__31471;
var map__31472__$1 = cljs.core.__destructure_map(map__31472);
var runtime = map__31472__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31472__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31475,p__31476){
var map__31477 = p__31475;
var map__31477__$1 = cljs.core.__destructure_map(map__31477);
var runtime = map__31477__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31477__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31478 = p__31476;
var map__31478__$1 = cljs.core.__destructure_map(map__31478);
var msg = map__31478__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31478__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31484 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31486 = null;
var count__31487 = (0);
var i__31488 = (0);
while(true){
if((i__31488 < count__31487)){
var map__31511 = chunk__31486.cljs$core$IIndexed$_nth$arity$2(null,i__31488);
var map__31511__$1 = cljs.core.__destructure_map(map__31511);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31511__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31692 = seq__31484;
var G__31693 = chunk__31486;
var G__31694 = count__31487;
var G__31695 = (i__31488 + (1));
seq__31484 = G__31692;
chunk__31486 = G__31693;
count__31487 = G__31694;
i__31488 = G__31695;
continue;
} else {
var G__31696 = seq__31484;
var G__31697 = chunk__31486;
var G__31698 = count__31487;
var G__31699 = (i__31488 + (1));
seq__31484 = G__31696;
chunk__31486 = G__31697;
count__31487 = G__31698;
i__31488 = G__31699;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31484);
if(temp__5753__auto__){
var seq__31484__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31484__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31484__$1);
var G__31700 = cljs.core.chunk_rest(seq__31484__$1);
var G__31701 = c__4638__auto__;
var G__31702 = cljs.core.count(c__4638__auto__);
var G__31703 = (0);
seq__31484 = G__31700;
chunk__31486 = G__31701;
count__31487 = G__31702;
i__31488 = G__31703;
continue;
} else {
var map__31516 = cljs.core.first(seq__31484__$1);
var map__31516__$1 = cljs.core.__destructure_map(map__31516);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31516__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31704 = cljs.core.next(seq__31484__$1);
var G__31705 = null;
var G__31706 = (0);
var G__31707 = (0);
seq__31484 = G__31704;
chunk__31486 = G__31705;
count__31487 = G__31706;
i__31488 = G__31707;
continue;
} else {
var G__31708 = cljs.core.next(seq__31484__$1);
var G__31709 = null;
var G__31710 = (0);
var G__31711 = (0);
seq__31484 = G__31708;
chunk__31486 = G__31709;
count__31487 = G__31710;
i__31488 = G__31711;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
