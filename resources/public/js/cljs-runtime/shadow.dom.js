goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33854 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33854(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33855 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33855(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32783 = coll;
var G__32784 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32783,G__32784) : shadow.dom.lazy_native_coll_seq.call(null,G__32783,G__32784));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32836 = arguments.length;
switch (G__32836) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32840 = arguments.length;
switch (G__32840) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32864 = arguments.length;
switch (G__32864) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32870 = arguments.length;
switch (G__32870) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32881 = arguments.length;
switch (G__32881) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32898 = arguments.length;
switch (G__32898) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32908){if((e32908 instanceof Object)){
var e = e32908;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32908;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32963 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32964 = null;
var count__32965 = (0);
var i__32966 = (0);
while(true){
if((i__32966 < count__32965)){
var el = chunk__32964.cljs$core$IIndexed$_nth$arity$2(null,i__32966);
var handler_33862__$1 = ((function (seq__32963,chunk__32964,count__32965,i__32966,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32963,chunk__32964,count__32965,i__32966,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33862__$1);


var G__33863 = seq__32963;
var G__33864 = chunk__32964;
var G__33865 = count__32965;
var G__33866 = (i__32966 + (1));
seq__32963 = G__33863;
chunk__32964 = G__33864;
count__32965 = G__33865;
i__32966 = G__33866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32963);
if(temp__5753__auto__){
var seq__32963__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32963__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32963__$1);
var G__33867 = cljs.core.chunk_rest(seq__32963__$1);
var G__33868 = c__4638__auto__;
var G__33869 = cljs.core.count(c__4638__auto__);
var G__33870 = (0);
seq__32963 = G__33867;
chunk__32964 = G__33868;
count__32965 = G__33869;
i__32966 = G__33870;
continue;
} else {
var el = cljs.core.first(seq__32963__$1);
var handler_33871__$1 = ((function (seq__32963,chunk__32964,count__32965,i__32966,el,seq__32963__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32963,chunk__32964,count__32965,i__32966,el,seq__32963__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33871__$1);


var G__33872 = cljs.core.next(seq__32963__$1);
var G__33873 = null;
var G__33874 = (0);
var G__33875 = (0);
seq__32963 = G__33872;
chunk__32964 = G__33873;
count__32965 = G__33874;
i__32966 = G__33875;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32982 = arguments.length;
switch (G__32982) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33019 = cljs.core.seq(events);
var chunk__33020 = null;
var count__33021 = (0);
var i__33022 = (0);
while(true){
if((i__33022 < count__33021)){
var vec__33047 = chunk__33020.cljs$core$IIndexed$_nth$arity$2(null,i__33022);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33047,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33877 = seq__33019;
var G__33878 = chunk__33020;
var G__33879 = count__33021;
var G__33880 = (i__33022 + (1));
seq__33019 = G__33877;
chunk__33020 = G__33878;
count__33021 = G__33879;
i__33022 = G__33880;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33019);
if(temp__5753__auto__){
var seq__33019__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33019__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33019__$1);
var G__33881 = cljs.core.chunk_rest(seq__33019__$1);
var G__33882 = c__4638__auto__;
var G__33883 = cljs.core.count(c__4638__auto__);
var G__33884 = (0);
seq__33019 = G__33881;
chunk__33020 = G__33882;
count__33021 = G__33883;
i__33022 = G__33884;
continue;
} else {
var vec__33054 = cljs.core.first(seq__33019__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33054,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33885 = cljs.core.next(seq__33019__$1);
var G__33886 = null;
var G__33887 = (0);
var G__33888 = (0);
seq__33019 = G__33885;
chunk__33020 = G__33886;
count__33021 = G__33887;
i__33022 = G__33888;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33124 = cljs.core.seq(styles);
var chunk__33125 = null;
var count__33126 = (0);
var i__33127 = (0);
while(true){
if((i__33127 < count__33126)){
var vec__33146 = chunk__33125.cljs$core$IIndexed$_nth$arity$2(null,i__33127);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33146,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33889 = seq__33124;
var G__33890 = chunk__33125;
var G__33891 = count__33126;
var G__33892 = (i__33127 + (1));
seq__33124 = G__33889;
chunk__33125 = G__33890;
count__33126 = G__33891;
i__33127 = G__33892;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33124);
if(temp__5753__auto__){
var seq__33124__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33124__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33124__$1);
var G__33893 = cljs.core.chunk_rest(seq__33124__$1);
var G__33894 = c__4638__auto__;
var G__33895 = cljs.core.count(c__4638__auto__);
var G__33896 = (0);
seq__33124 = G__33893;
chunk__33125 = G__33894;
count__33126 = G__33895;
i__33127 = G__33896;
continue;
} else {
var vec__33152 = cljs.core.first(seq__33124__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33152,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33897 = cljs.core.next(seq__33124__$1);
var G__33898 = null;
var G__33899 = (0);
var G__33900 = (0);
seq__33124 = G__33897;
chunk__33125 = G__33898;
count__33126 = G__33899;
i__33127 = G__33900;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33164_33901 = key;
var G__33164_33902__$1 = (((G__33164_33901 instanceof cljs.core.Keyword))?G__33164_33901.fqn:null);
switch (G__33164_33902__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33904 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_33904,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_33904,"aria-");
}
})())){
el.setAttribute(ks_33904,value);
} else {
(el[ks_33904] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33195){
var map__33198 = p__33195;
var map__33198__$1 = cljs.core.__destructure_map(map__33198);
var props = map__33198__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33198__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33201 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33207 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33207,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33207;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33214 = arguments.length;
switch (G__33214) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33220){
var vec__33221 = p__33220;
var seq__33222 = cljs.core.seq(vec__33221);
var first__33223 = cljs.core.first(seq__33222);
var seq__33222__$1 = cljs.core.next(seq__33222);
var nn = first__33223;
var first__33223__$1 = cljs.core.first(seq__33222__$1);
var seq__33222__$2 = cljs.core.next(seq__33222__$1);
var np = first__33223__$1;
var nc = seq__33222__$2;
var node = vec__33221;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33226 = nn;
var G__33227 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33226,G__33227) : create_fn.call(null,G__33226,G__33227));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33228 = nn;
var G__33229 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33228,G__33229) : create_fn.call(null,G__33228,G__33229));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33233 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33233,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33233,(1),null);
var seq__33239_33907 = cljs.core.seq(node_children);
var chunk__33240_33908 = null;
var count__33241_33909 = (0);
var i__33242_33910 = (0);
while(true){
if((i__33242_33910 < count__33241_33909)){
var child_struct_33911 = chunk__33240_33908.cljs$core$IIndexed$_nth$arity$2(null,i__33242_33910);
var children_33912 = shadow.dom.dom_node(child_struct_33911);
if(cljs.core.seq_QMARK_(children_33912)){
var seq__33329_33913 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33912));
var chunk__33331_33914 = null;
var count__33332_33915 = (0);
var i__33333_33916 = (0);
while(true){
if((i__33333_33916 < count__33332_33915)){
var child_33917 = chunk__33331_33914.cljs$core$IIndexed$_nth$arity$2(null,i__33333_33916);
if(cljs.core.truth_(child_33917)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33917);


var G__33918 = seq__33329_33913;
var G__33919 = chunk__33331_33914;
var G__33920 = count__33332_33915;
var G__33921 = (i__33333_33916 + (1));
seq__33329_33913 = G__33918;
chunk__33331_33914 = G__33919;
count__33332_33915 = G__33920;
i__33333_33916 = G__33921;
continue;
} else {
var G__33922 = seq__33329_33913;
var G__33923 = chunk__33331_33914;
var G__33924 = count__33332_33915;
var G__33925 = (i__33333_33916 + (1));
seq__33329_33913 = G__33922;
chunk__33331_33914 = G__33923;
count__33332_33915 = G__33924;
i__33333_33916 = G__33925;
continue;
}
} else {
var temp__5753__auto___33926 = cljs.core.seq(seq__33329_33913);
if(temp__5753__auto___33926){
var seq__33329_33931__$1 = temp__5753__auto___33926;
if(cljs.core.chunked_seq_QMARK_(seq__33329_33931__$1)){
var c__4638__auto___33932 = cljs.core.chunk_first(seq__33329_33931__$1);
var G__33933 = cljs.core.chunk_rest(seq__33329_33931__$1);
var G__33934 = c__4638__auto___33932;
var G__33935 = cljs.core.count(c__4638__auto___33932);
var G__33936 = (0);
seq__33329_33913 = G__33933;
chunk__33331_33914 = G__33934;
count__33332_33915 = G__33935;
i__33333_33916 = G__33936;
continue;
} else {
var child_33937 = cljs.core.first(seq__33329_33931__$1);
if(cljs.core.truth_(child_33937)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33937);


var G__33939 = cljs.core.next(seq__33329_33931__$1);
var G__33940 = null;
var G__33941 = (0);
var G__33942 = (0);
seq__33329_33913 = G__33939;
chunk__33331_33914 = G__33940;
count__33332_33915 = G__33941;
i__33333_33916 = G__33942;
continue;
} else {
var G__33943 = cljs.core.next(seq__33329_33931__$1);
var G__33944 = null;
var G__33945 = (0);
var G__33946 = (0);
seq__33329_33913 = G__33943;
chunk__33331_33914 = G__33944;
count__33332_33915 = G__33945;
i__33333_33916 = G__33946;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33912);
}


var G__33947 = seq__33239_33907;
var G__33948 = chunk__33240_33908;
var G__33949 = count__33241_33909;
var G__33950 = (i__33242_33910 + (1));
seq__33239_33907 = G__33947;
chunk__33240_33908 = G__33948;
count__33241_33909 = G__33949;
i__33242_33910 = G__33950;
continue;
} else {
var temp__5753__auto___33951 = cljs.core.seq(seq__33239_33907);
if(temp__5753__auto___33951){
var seq__33239_33952__$1 = temp__5753__auto___33951;
if(cljs.core.chunked_seq_QMARK_(seq__33239_33952__$1)){
var c__4638__auto___33953 = cljs.core.chunk_first(seq__33239_33952__$1);
var G__33954 = cljs.core.chunk_rest(seq__33239_33952__$1);
var G__33955 = c__4638__auto___33953;
var G__33956 = cljs.core.count(c__4638__auto___33953);
var G__33957 = (0);
seq__33239_33907 = G__33954;
chunk__33240_33908 = G__33955;
count__33241_33909 = G__33956;
i__33242_33910 = G__33957;
continue;
} else {
var child_struct_33958 = cljs.core.first(seq__33239_33952__$1);
var children_33959 = shadow.dom.dom_node(child_struct_33958);
if(cljs.core.seq_QMARK_(children_33959)){
var seq__33376_33960 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33959));
var chunk__33378_33961 = null;
var count__33379_33962 = (0);
var i__33380_33963 = (0);
while(true){
if((i__33380_33963 < count__33379_33962)){
var child_33964 = chunk__33378_33961.cljs$core$IIndexed$_nth$arity$2(null,i__33380_33963);
if(cljs.core.truth_(child_33964)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33964);


var G__33965 = seq__33376_33960;
var G__33966 = chunk__33378_33961;
var G__33967 = count__33379_33962;
var G__33968 = (i__33380_33963 + (1));
seq__33376_33960 = G__33965;
chunk__33378_33961 = G__33966;
count__33379_33962 = G__33967;
i__33380_33963 = G__33968;
continue;
} else {
var G__33969 = seq__33376_33960;
var G__33970 = chunk__33378_33961;
var G__33971 = count__33379_33962;
var G__33972 = (i__33380_33963 + (1));
seq__33376_33960 = G__33969;
chunk__33378_33961 = G__33970;
count__33379_33962 = G__33971;
i__33380_33963 = G__33972;
continue;
}
} else {
var temp__5753__auto___33973__$1 = cljs.core.seq(seq__33376_33960);
if(temp__5753__auto___33973__$1){
var seq__33376_33974__$1 = temp__5753__auto___33973__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33376_33974__$1)){
var c__4638__auto___33975 = cljs.core.chunk_first(seq__33376_33974__$1);
var G__33976 = cljs.core.chunk_rest(seq__33376_33974__$1);
var G__33977 = c__4638__auto___33975;
var G__33978 = cljs.core.count(c__4638__auto___33975);
var G__33979 = (0);
seq__33376_33960 = G__33976;
chunk__33378_33961 = G__33977;
count__33379_33962 = G__33978;
i__33380_33963 = G__33979;
continue;
} else {
var child_33980 = cljs.core.first(seq__33376_33974__$1);
if(cljs.core.truth_(child_33980)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33980);


var G__33981 = cljs.core.next(seq__33376_33974__$1);
var G__33982 = null;
var G__33983 = (0);
var G__33984 = (0);
seq__33376_33960 = G__33981;
chunk__33378_33961 = G__33982;
count__33379_33962 = G__33983;
i__33380_33963 = G__33984;
continue;
} else {
var G__33985 = cljs.core.next(seq__33376_33974__$1);
var G__33986 = null;
var G__33987 = (0);
var G__33988 = (0);
seq__33376_33960 = G__33985;
chunk__33378_33961 = G__33986;
count__33379_33962 = G__33987;
i__33380_33963 = G__33988;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33959);
}


var G__33989 = cljs.core.next(seq__33239_33952__$1);
var G__33990 = null;
var G__33991 = (0);
var G__33992 = (0);
seq__33239_33907 = G__33989;
chunk__33240_33908 = G__33990;
count__33241_33909 = G__33991;
i__33242_33910 = G__33992;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33445 = cljs.core.seq(node);
var chunk__33446 = null;
var count__33447 = (0);
var i__33448 = (0);
while(true){
if((i__33448 < count__33447)){
var n = chunk__33446.cljs$core$IIndexed$_nth$arity$2(null,i__33448);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33993 = seq__33445;
var G__33994 = chunk__33446;
var G__33995 = count__33447;
var G__33996 = (i__33448 + (1));
seq__33445 = G__33993;
chunk__33446 = G__33994;
count__33447 = G__33995;
i__33448 = G__33996;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33445);
if(temp__5753__auto__){
var seq__33445__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33445__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33445__$1);
var G__33997 = cljs.core.chunk_rest(seq__33445__$1);
var G__33998 = c__4638__auto__;
var G__33999 = cljs.core.count(c__4638__auto__);
var G__34000 = (0);
seq__33445 = G__33997;
chunk__33446 = G__33998;
count__33447 = G__33999;
i__33448 = G__34000;
continue;
} else {
var n = cljs.core.first(seq__33445__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34001 = cljs.core.next(seq__33445__$1);
var G__34002 = null;
var G__34003 = (0);
var G__34004 = (0);
seq__33445 = G__34001;
chunk__33446 = G__34002;
count__33447 = G__34003;
i__33448 = G__34004;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33462 = arguments.length;
switch (G__33462) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33465 = arguments.length;
switch (G__33465) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33483 = arguments.length;
switch (G__33483) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34013 = arguments.length;
var i__4819__auto___34014 = (0);
while(true){
if((i__4819__auto___34014 < len__4818__auto___34013)){
args__4824__auto__.push((arguments[i__4819__auto___34014]));

var G__34015 = (i__4819__auto___34014 + (1));
i__4819__auto___34014 = G__34015;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33506_34016 = cljs.core.seq(nodes);
var chunk__33507_34017 = null;
var count__33508_34018 = (0);
var i__33509_34019 = (0);
while(true){
if((i__33509_34019 < count__33508_34018)){
var node_34021 = chunk__33507_34017.cljs$core$IIndexed$_nth$arity$2(null,i__33509_34019);
fragment.appendChild(shadow.dom._to_dom(node_34021));


var G__34022 = seq__33506_34016;
var G__34023 = chunk__33507_34017;
var G__34024 = count__33508_34018;
var G__34025 = (i__33509_34019 + (1));
seq__33506_34016 = G__34022;
chunk__33507_34017 = G__34023;
count__33508_34018 = G__34024;
i__33509_34019 = G__34025;
continue;
} else {
var temp__5753__auto___34026 = cljs.core.seq(seq__33506_34016);
if(temp__5753__auto___34026){
var seq__33506_34027__$1 = temp__5753__auto___34026;
if(cljs.core.chunked_seq_QMARK_(seq__33506_34027__$1)){
var c__4638__auto___34028 = cljs.core.chunk_first(seq__33506_34027__$1);
var G__34029 = cljs.core.chunk_rest(seq__33506_34027__$1);
var G__34030 = c__4638__auto___34028;
var G__34031 = cljs.core.count(c__4638__auto___34028);
var G__34032 = (0);
seq__33506_34016 = G__34029;
chunk__33507_34017 = G__34030;
count__33508_34018 = G__34031;
i__33509_34019 = G__34032;
continue;
} else {
var node_34033 = cljs.core.first(seq__33506_34027__$1);
fragment.appendChild(shadow.dom._to_dom(node_34033));


var G__34034 = cljs.core.next(seq__33506_34027__$1);
var G__34035 = null;
var G__34036 = (0);
var G__34037 = (0);
seq__33506_34016 = G__34034;
chunk__33507_34017 = G__34035;
count__33508_34018 = G__34036;
i__33509_34019 = G__34037;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33490){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33490));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33531_34039 = cljs.core.seq(scripts);
var chunk__33532_34040 = null;
var count__33533_34041 = (0);
var i__33534_34042 = (0);
while(true){
if((i__33534_34042 < count__33533_34041)){
var vec__33551_34043 = chunk__33532_34040.cljs$core$IIndexed$_nth$arity$2(null,i__33534_34042);
var script_tag_34044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551_34043,(0),null);
var script_body_34045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551_34043,(1),null);
eval(script_body_34045);


var G__34046 = seq__33531_34039;
var G__34047 = chunk__33532_34040;
var G__34048 = count__33533_34041;
var G__34049 = (i__33534_34042 + (1));
seq__33531_34039 = G__34046;
chunk__33532_34040 = G__34047;
count__33533_34041 = G__34048;
i__33534_34042 = G__34049;
continue;
} else {
var temp__5753__auto___34050 = cljs.core.seq(seq__33531_34039);
if(temp__5753__auto___34050){
var seq__33531_34051__$1 = temp__5753__auto___34050;
if(cljs.core.chunked_seq_QMARK_(seq__33531_34051__$1)){
var c__4638__auto___34052 = cljs.core.chunk_first(seq__33531_34051__$1);
var G__34053 = cljs.core.chunk_rest(seq__33531_34051__$1);
var G__34054 = c__4638__auto___34052;
var G__34055 = cljs.core.count(c__4638__auto___34052);
var G__34056 = (0);
seq__33531_34039 = G__34053;
chunk__33532_34040 = G__34054;
count__33533_34041 = G__34055;
i__33534_34042 = G__34056;
continue;
} else {
var vec__33564_34057 = cljs.core.first(seq__33531_34051__$1);
var script_tag_34058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564_34057,(0),null);
var script_body_34059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564_34057,(1),null);
eval(script_body_34059);


var G__34060 = cljs.core.next(seq__33531_34051__$1);
var G__34061 = null;
var G__34062 = (0);
var G__34063 = (0);
seq__33531_34039 = G__34060;
chunk__33532_34040 = G__34061;
count__33533_34041 = G__34062;
i__33534_34042 = G__34063;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33567){
var vec__33568 = p__33567;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33568,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33568,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33578 = arguments.length;
switch (G__33578) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33607 = cljs.core.seq(style_keys);
var chunk__33608 = null;
var count__33609 = (0);
var i__33610 = (0);
while(true){
if((i__33610 < count__33609)){
var it = chunk__33608.cljs$core$IIndexed$_nth$arity$2(null,i__33610);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34065 = seq__33607;
var G__34066 = chunk__33608;
var G__34067 = count__33609;
var G__34068 = (i__33610 + (1));
seq__33607 = G__34065;
chunk__33608 = G__34066;
count__33609 = G__34067;
i__33610 = G__34068;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33607);
if(temp__5753__auto__){
var seq__33607__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33607__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33607__$1);
var G__34069 = cljs.core.chunk_rest(seq__33607__$1);
var G__34070 = c__4638__auto__;
var G__34071 = cljs.core.count(c__4638__auto__);
var G__34072 = (0);
seq__33607 = G__34069;
chunk__33608 = G__34070;
count__33609 = G__34071;
i__33610 = G__34072;
continue;
} else {
var it = cljs.core.first(seq__33607__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34073 = cljs.core.next(seq__33607__$1);
var G__34074 = null;
var G__34075 = (0);
var G__34076 = (0);
seq__33607 = G__34073;
chunk__33608 = G__34074;
count__33609 = G__34075;
i__33610 = G__34076;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33618,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33628 = k33618;
var G__33628__$1 = (((G__33628 instanceof cljs.core.Keyword))?G__33628.fqn:null);
switch (G__33628__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33618,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33638){
var vec__33639 = p__33638;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33617){
var self__ = this;
var G__33617__$1 = this;
return (new cljs.core.RecordIter((0),G__33617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33619,other33620){
var self__ = this;
var this33619__$1 = this;
return (((!((other33620 == null)))) && ((((this33619__$1.constructor === other33620.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33619__$1.x,other33620.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33619__$1.y,other33620.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33619__$1.__extmap,other33620.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33618){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33661 = k33618;
var G__33661__$1 = (((G__33661 instanceof cljs.core.Keyword))?G__33661.fqn:null);
switch (G__33661__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33618);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33617){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33662 = cljs.core.keyword_identical_QMARK_;
var expr__33663 = k__4470__auto__;
if(cljs.core.truth_((pred__33662.cljs$core$IFn$_invoke$arity$2 ? pred__33662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33663) : pred__33662.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33663)))){
return (new shadow.dom.Coordinate(G__33617,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33662.cljs$core$IFn$_invoke$arity$2 ? pred__33662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33663) : pred__33662.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33663)))){
return (new shadow.dom.Coordinate(self__.x,G__33617,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33617),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33617){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33617,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33621){
var extmap__4501__auto__ = (function (){var G__33667 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33621,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33621)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33667);
} else {
return G__33667;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33621),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33621),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33671,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33675 = k33671;
var G__33675__$1 = (((G__33675 instanceof cljs.core.Keyword))?G__33675.fqn:null);
switch (G__33675__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33671,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33676){
var vec__33677 = p__33676;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33670){
var self__ = this;
var G__33670__$1 = this;
return (new cljs.core.RecordIter((0),G__33670__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33672,other33673){
var self__ = this;
var this33672__$1 = this;
return (((!((other33673 == null)))) && ((((this33672__$1.constructor === other33673.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33672__$1.w,other33673.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33672__$1.h,other33673.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33672__$1.__extmap,other33673.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33671){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33687 = k33671;
var G__33687__$1 = (((G__33687 instanceof cljs.core.Keyword))?G__33687.fqn:null);
switch (G__33687__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33671);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33670){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33690 = cljs.core.keyword_identical_QMARK_;
var expr__33691 = k__4470__auto__;
if(cljs.core.truth_((pred__33690.cljs$core$IFn$_invoke$arity$2 ? pred__33690.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33691) : pred__33690.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33691)))){
return (new shadow.dom.Size(G__33670,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33690.cljs$core$IFn$_invoke$arity$2 ? pred__33690.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33691) : pred__33690.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33691)))){
return (new shadow.dom.Size(self__.w,G__33670,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33670),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33670){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33670,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33674){
var extmap__4501__auto__ = (function (){var G__33698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33674,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33674)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33698);
} else {
return G__33698;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33674),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33674),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34136 = (i + (1));
var G__34137 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34136;
ret = G__34137;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33735){
var vec__33736 = p__33735;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33736,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33740 = arguments.length;
switch (G__33740) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34142 = ps;
var G__34143 = (i + (1));
el__$1 = G__34142;
i = G__34143;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33753 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33756_34144 = cljs.core.seq(props);
var chunk__33757_34145 = null;
var count__33758_34146 = (0);
var i__33759_34147 = (0);
while(true){
if((i__33759_34147 < count__33758_34146)){
var vec__33768_34148 = chunk__33757_34145.cljs$core$IIndexed$_nth$arity$2(null,i__33759_34147);
var k_34149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33768_34148,(0),null);
var v_34150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33768_34148,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34149);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34149),v_34150);


var G__34151 = seq__33756_34144;
var G__34152 = chunk__33757_34145;
var G__34153 = count__33758_34146;
var G__34154 = (i__33759_34147 + (1));
seq__33756_34144 = G__34151;
chunk__33757_34145 = G__34152;
count__33758_34146 = G__34153;
i__33759_34147 = G__34154;
continue;
} else {
var temp__5753__auto___34155 = cljs.core.seq(seq__33756_34144);
if(temp__5753__auto___34155){
var seq__33756_34156__$1 = temp__5753__auto___34155;
if(cljs.core.chunked_seq_QMARK_(seq__33756_34156__$1)){
var c__4638__auto___34157 = cljs.core.chunk_first(seq__33756_34156__$1);
var G__34158 = cljs.core.chunk_rest(seq__33756_34156__$1);
var G__34159 = c__4638__auto___34157;
var G__34160 = cljs.core.count(c__4638__auto___34157);
var G__34161 = (0);
seq__33756_34144 = G__34158;
chunk__33757_34145 = G__34159;
count__33758_34146 = G__34160;
i__33759_34147 = G__34161;
continue;
} else {
var vec__33776_34162 = cljs.core.first(seq__33756_34156__$1);
var k_34163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33776_34162,(0),null);
var v_34164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33776_34162,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34163);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34163),v_34164);


var G__34167 = cljs.core.next(seq__33756_34156__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__33756_34144 = G__34167;
chunk__33757_34145 = G__34170;
count__33758_34146 = G__34171;
i__33759_34147 = G__34172;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33780 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780,(1),null);
var seq__33783_34173 = cljs.core.seq(node_children);
var chunk__33785_34174 = null;
var count__33786_34175 = (0);
var i__33787_34176 = (0);
while(true){
if((i__33787_34176 < count__33786_34175)){
var child_struct_34177 = chunk__33785_34174.cljs$core$IIndexed$_nth$arity$2(null,i__33787_34176);
if((!((child_struct_34177 == null)))){
if(typeof child_struct_34177 === 'string'){
var text_34178 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34178),child_struct_34177].join(''));
} else {
var children_34179 = shadow.dom.svg_node(child_struct_34177);
if(cljs.core.seq_QMARK_(children_34179)){
var seq__33813_34180 = cljs.core.seq(children_34179);
var chunk__33815_34181 = null;
var count__33816_34182 = (0);
var i__33817_34183 = (0);
while(true){
if((i__33817_34183 < count__33816_34182)){
var child_34184 = chunk__33815_34181.cljs$core$IIndexed$_nth$arity$2(null,i__33817_34183);
if(cljs.core.truth_(child_34184)){
node.appendChild(child_34184);


var G__34185 = seq__33813_34180;
var G__34186 = chunk__33815_34181;
var G__34187 = count__33816_34182;
var G__34188 = (i__33817_34183 + (1));
seq__33813_34180 = G__34185;
chunk__33815_34181 = G__34186;
count__33816_34182 = G__34187;
i__33817_34183 = G__34188;
continue;
} else {
var G__34189 = seq__33813_34180;
var G__34190 = chunk__33815_34181;
var G__34191 = count__33816_34182;
var G__34192 = (i__33817_34183 + (1));
seq__33813_34180 = G__34189;
chunk__33815_34181 = G__34190;
count__33816_34182 = G__34191;
i__33817_34183 = G__34192;
continue;
}
} else {
var temp__5753__auto___34193 = cljs.core.seq(seq__33813_34180);
if(temp__5753__auto___34193){
var seq__33813_34194__$1 = temp__5753__auto___34193;
if(cljs.core.chunked_seq_QMARK_(seq__33813_34194__$1)){
var c__4638__auto___34195 = cljs.core.chunk_first(seq__33813_34194__$1);
var G__34196 = cljs.core.chunk_rest(seq__33813_34194__$1);
var G__34197 = c__4638__auto___34195;
var G__34198 = cljs.core.count(c__4638__auto___34195);
var G__34199 = (0);
seq__33813_34180 = G__34196;
chunk__33815_34181 = G__34197;
count__33816_34182 = G__34198;
i__33817_34183 = G__34199;
continue;
} else {
var child_34200 = cljs.core.first(seq__33813_34194__$1);
if(cljs.core.truth_(child_34200)){
node.appendChild(child_34200);


var G__34201 = cljs.core.next(seq__33813_34194__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33813_34180 = G__34201;
chunk__33815_34181 = G__34202;
count__33816_34182 = G__34203;
i__33817_34183 = G__34204;
continue;
} else {
var G__34205 = cljs.core.next(seq__33813_34194__$1);
var G__34206 = null;
var G__34207 = (0);
var G__34208 = (0);
seq__33813_34180 = G__34205;
chunk__33815_34181 = G__34206;
count__33816_34182 = G__34207;
i__33817_34183 = G__34208;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34179);
}
}


var G__34209 = seq__33783_34173;
var G__34210 = chunk__33785_34174;
var G__34211 = count__33786_34175;
var G__34212 = (i__33787_34176 + (1));
seq__33783_34173 = G__34209;
chunk__33785_34174 = G__34210;
count__33786_34175 = G__34211;
i__33787_34176 = G__34212;
continue;
} else {
var G__34213 = seq__33783_34173;
var G__34214 = chunk__33785_34174;
var G__34215 = count__33786_34175;
var G__34216 = (i__33787_34176 + (1));
seq__33783_34173 = G__34213;
chunk__33785_34174 = G__34214;
count__33786_34175 = G__34215;
i__33787_34176 = G__34216;
continue;
}
} else {
var temp__5753__auto___34217 = cljs.core.seq(seq__33783_34173);
if(temp__5753__auto___34217){
var seq__33783_34218__$1 = temp__5753__auto___34217;
if(cljs.core.chunked_seq_QMARK_(seq__33783_34218__$1)){
var c__4638__auto___34219 = cljs.core.chunk_first(seq__33783_34218__$1);
var G__34220 = cljs.core.chunk_rest(seq__33783_34218__$1);
var G__34221 = c__4638__auto___34219;
var G__34222 = cljs.core.count(c__4638__auto___34219);
var G__34223 = (0);
seq__33783_34173 = G__34220;
chunk__33785_34174 = G__34221;
count__33786_34175 = G__34222;
i__33787_34176 = G__34223;
continue;
} else {
var child_struct_34224 = cljs.core.first(seq__33783_34218__$1);
if((!((child_struct_34224 == null)))){
if(typeof child_struct_34224 === 'string'){
var text_34225 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34225),child_struct_34224].join(''));
} else {
var children_34226 = shadow.dom.svg_node(child_struct_34224);
if(cljs.core.seq_QMARK_(children_34226)){
var seq__33819_34227 = cljs.core.seq(children_34226);
var chunk__33821_34228 = null;
var count__33822_34229 = (0);
var i__33823_34230 = (0);
while(true){
if((i__33823_34230 < count__33822_34229)){
var child_34231 = chunk__33821_34228.cljs$core$IIndexed$_nth$arity$2(null,i__33823_34230);
if(cljs.core.truth_(child_34231)){
node.appendChild(child_34231);


var G__34232 = seq__33819_34227;
var G__34233 = chunk__33821_34228;
var G__34234 = count__33822_34229;
var G__34235 = (i__33823_34230 + (1));
seq__33819_34227 = G__34232;
chunk__33821_34228 = G__34233;
count__33822_34229 = G__34234;
i__33823_34230 = G__34235;
continue;
} else {
var G__34236 = seq__33819_34227;
var G__34237 = chunk__33821_34228;
var G__34238 = count__33822_34229;
var G__34239 = (i__33823_34230 + (1));
seq__33819_34227 = G__34236;
chunk__33821_34228 = G__34237;
count__33822_34229 = G__34238;
i__33823_34230 = G__34239;
continue;
}
} else {
var temp__5753__auto___34240__$1 = cljs.core.seq(seq__33819_34227);
if(temp__5753__auto___34240__$1){
var seq__33819_34241__$1 = temp__5753__auto___34240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33819_34241__$1)){
var c__4638__auto___34242 = cljs.core.chunk_first(seq__33819_34241__$1);
var G__34243 = cljs.core.chunk_rest(seq__33819_34241__$1);
var G__34244 = c__4638__auto___34242;
var G__34245 = cljs.core.count(c__4638__auto___34242);
var G__34246 = (0);
seq__33819_34227 = G__34243;
chunk__33821_34228 = G__34244;
count__33822_34229 = G__34245;
i__33823_34230 = G__34246;
continue;
} else {
var child_34247 = cljs.core.first(seq__33819_34241__$1);
if(cljs.core.truth_(child_34247)){
node.appendChild(child_34247);


var G__34248 = cljs.core.next(seq__33819_34241__$1);
var G__34249 = null;
var G__34250 = (0);
var G__34251 = (0);
seq__33819_34227 = G__34248;
chunk__33821_34228 = G__34249;
count__33822_34229 = G__34250;
i__33823_34230 = G__34251;
continue;
} else {
var G__34252 = cljs.core.next(seq__33819_34241__$1);
var G__34253 = null;
var G__34254 = (0);
var G__34255 = (0);
seq__33819_34227 = G__34252;
chunk__33821_34228 = G__34253;
count__33822_34229 = G__34254;
i__33823_34230 = G__34255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34226);
}
}


var G__34256 = cljs.core.next(seq__33783_34218__$1);
var G__34257 = null;
var G__34258 = (0);
var G__34259 = (0);
seq__33783_34173 = G__34256;
chunk__33785_34174 = G__34257;
count__33786_34175 = G__34258;
i__33787_34176 = G__34259;
continue;
} else {
var G__34260 = cljs.core.next(seq__33783_34218__$1);
var G__34261 = null;
var G__34262 = (0);
var G__34263 = (0);
seq__33783_34173 = G__34260;
chunk__33785_34174 = G__34261;
count__33786_34175 = G__34262;
i__33787_34176 = G__34263;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34264 = arguments.length;
var i__4819__auto___34265 = (0);
while(true){
if((i__4819__auto___34265 < len__4818__auto___34264)){
args__4824__auto__.push((arguments[i__4819__auto___34265]));

var G__34266 = (i__4819__auto___34265 + (1));
i__4819__auto___34265 = G__34266;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33833){
var G__33834 = cljs.core.first(seq33833);
var seq33833__$1 = cljs.core.next(seq33833);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33834,seq33833__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33836 = arguments.length;
switch (G__33836) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__29466__auto___34268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29467__auto__ = (function (){var switch__29146__auto__ = (function (state_33843){
var state_val_33844 = (state_33843[(1)]);
if((state_val_33844 === (1))){
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33843__$1,(2),once_or_cleanup);
} else {
if((state_val_33844 === (2))){
var inst_33840 = (state_33843[(2)]);
var inst_33841 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33843__$1 = (function (){var statearr_33848 = state_33843;
(statearr_33848[(7)] = inst_33840);

return statearr_33848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33843__$1,inst_33841);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29147__auto__ = null;
var shadow$dom$state_machine__29147__auto____0 = (function (){
var statearr_33849 = [null,null,null,null,null,null,null,null];
(statearr_33849[(0)] = shadow$dom$state_machine__29147__auto__);

(statearr_33849[(1)] = (1));

return statearr_33849;
});
var shadow$dom$state_machine__29147__auto____1 = (function (state_33843){
while(true){
var ret_value__29148__auto__ = (function (){try{while(true){
var result__29150__auto__ = switch__29146__auto__(state_33843);
if(cljs.core.keyword_identical_QMARK_(result__29150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29150__auto__;
}
break;
}
}catch (e33850){var ex__29151__auto__ = e33850;
var statearr_33851_34269 = state_33843;
(statearr_33851_34269[(2)] = ex__29151__auto__);


if(cljs.core.seq((state_33843[(4)]))){
var statearr_33852_34270 = state_33843;
(statearr_33852_34270[(1)] = cljs.core.first((state_33843[(4)])));

} else {
throw ex__29151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29148__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34271 = state_33843;
state_33843 = G__34271;
continue;
} else {
return ret_value__29148__auto__;
}
break;
}
});
shadow$dom$state_machine__29147__auto__ = function(state_33843){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29147__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29147__auto____1.call(this,state_33843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29147__auto____0;
shadow$dom$state_machine__29147__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29147__auto____1;
return shadow$dom$state_machine__29147__auto__;
})()
})();
var state__29468__auto__ = (function (){var statearr_33853 = f__29467__auto__();
(statearr_33853[(6)] = c__29466__auto___34268);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29468__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
