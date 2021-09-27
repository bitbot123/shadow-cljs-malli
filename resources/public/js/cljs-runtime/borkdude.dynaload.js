goog.provide('borkdude.dynaload');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function() {
var G__27039 = null;
var G__27039__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26970 = cljs.core.deref(this$);
return (fexpr__26970.cljs$core$IFn$_invoke$arity$0 ? fexpr__26970.cljs$core$IFn$_invoke$arity$0() : fexpr__26970.call(null));
});
var G__27039__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26971 = cljs.core.deref(this$);
return (fexpr__26971.cljs$core$IFn$_invoke$arity$1 ? fexpr__26971.cljs$core$IFn$_invoke$arity$1(a) : fexpr__26971.call(null,a));
});
var G__27039__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26972 = cljs.core.deref(this$);
return (fexpr__26972.cljs$core$IFn$_invoke$arity$2 ? fexpr__26972.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26972.call(null,a,b));
});
var G__27039__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26973 = cljs.core.deref(this$);
return (fexpr__26973.cljs$core$IFn$_invoke$arity$3 ? fexpr__26973.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__26973.call(null,a,b,c));
});
var G__27039__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26975 = cljs.core.deref(this$);
return (fexpr__26975.cljs$core$IFn$_invoke$arity$4 ? fexpr__26975.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__26975.call(null,a,b,c,d));
});
var G__27039__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26976 = cljs.core.deref(this$);
return (fexpr__26976.cljs$core$IFn$_invoke$arity$5 ? fexpr__26976.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__26976.call(null,a,b,c,d,e));
});
var G__27039__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26977 = cljs.core.deref(this$);
return (fexpr__26977.cljs$core$IFn$_invoke$arity$6 ? fexpr__26977.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__26977.call(null,a,b,c,d,e,f__$1));
});
var G__27039__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26982 = cljs.core.deref(this$);
return (fexpr__26982.cljs$core$IFn$_invoke$arity$7 ? fexpr__26982.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__26982.call(null,a,b,c,d,e,f__$1,g));
});
var G__27039__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26984 = cljs.core.deref(this$);
return (fexpr__26984.cljs$core$IFn$_invoke$arity$8 ? fexpr__26984.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__26984.call(null,a,b,c,d,e,f__$1,g,h));
});
var G__27039__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26985 = cljs.core.deref(this$);
return (fexpr__26985.cljs$core$IFn$_invoke$arity$9 ? fexpr__26985.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__26985.call(null,a,b,c,d,e,f__$1,g,h,i));
});
var G__27039__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26986 = cljs.core.deref(this$);
return (fexpr__26986.cljs$core$IFn$_invoke$arity$10 ? fexpr__26986.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__26986.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});
var G__27039__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26987 = cljs.core.deref(this$);
return (fexpr__26987.cljs$core$IFn$_invoke$arity$11 ? fexpr__26987.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__26987.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});
var G__27039__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26988 = cljs.core.deref(this$);
return (fexpr__26988.cljs$core$IFn$_invoke$arity$12 ? fexpr__26988.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__26988.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});
var G__27039__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26989 = cljs.core.deref(this$);
return (fexpr__26989.cljs$core$IFn$_invoke$arity$13 ? fexpr__26989.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__26989.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});
var G__27039__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26990 = cljs.core.deref(this$);
return (fexpr__26990.cljs$core$IFn$_invoke$arity$14 ? fexpr__26990.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__26990.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});
var G__27039__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26991 = cljs.core.deref(this$);
return (fexpr__26991.cljs$core$IFn$_invoke$arity$15 ? fexpr__26991.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__26991.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});
var G__27039__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26992 = cljs.core.deref(this$);
return (fexpr__26992.cljs$core$IFn$_invoke$arity$16 ? fexpr__26992.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__26992.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});
var G__27039__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26995 = cljs.core.deref(this$);
return (fexpr__26995.cljs$core$IFn$_invoke$arity$17 ? fexpr__26995.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__26995.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});
var G__27039__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__26997 = cljs.core.deref(this$);
return (fexpr__26997.cljs$core$IFn$_invoke$arity$18 ? fexpr__26997.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__26997.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__27039__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__27001 = cljs.core.deref(this$);
return (fexpr__27001.cljs$core$IFn$_invoke$arity$19 ? fexpr__27001.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__27001.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__27039__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__27002 = cljs.core.deref(this$);
return (fexpr__27002.cljs$core$IFn$_invoke$arity$20 ? fexpr__27002.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__27002.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__27039__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__27039 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__27039__1.call(this,self__);
case 2:
return G__27039__2.call(this,self__,a);
case 3:
return G__27039__3.call(this,self__,a,b);
case 4:
return G__27039__4.call(this,self__,a,b,c);
case 5:
return G__27039__5.call(this,self__,a,b,c,d);
case 6:
return G__27039__6.call(this,self__,a,b,c,d,e);
case 7:
return G__27039__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__27039__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__27039__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__27039__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__27039__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__27039__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__27039__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__27039__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__27039__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__27039__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__27039__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__27039__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__27039__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__27039__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__27039__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__27039__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27039.cljs$core$IFn$_invoke$arity$1 = G__27039__1;
G__27039.cljs$core$IFn$_invoke$arity$2 = G__27039__2;
G__27039.cljs$core$IFn$_invoke$arity$3 = G__27039__3;
G__27039.cljs$core$IFn$_invoke$arity$4 = G__27039__4;
G__27039.cljs$core$IFn$_invoke$arity$5 = G__27039__5;
G__27039.cljs$core$IFn$_invoke$arity$6 = G__27039__6;
G__27039.cljs$core$IFn$_invoke$arity$7 = G__27039__7;
G__27039.cljs$core$IFn$_invoke$arity$8 = G__27039__8;
G__27039.cljs$core$IFn$_invoke$arity$9 = G__27039__9;
G__27039.cljs$core$IFn$_invoke$arity$10 = G__27039__10;
G__27039.cljs$core$IFn$_invoke$arity$11 = G__27039__11;
G__27039.cljs$core$IFn$_invoke$arity$12 = G__27039__12;
G__27039.cljs$core$IFn$_invoke$arity$13 = G__27039__13;
G__27039.cljs$core$IFn$_invoke$arity$14 = G__27039__14;
G__27039.cljs$core$IFn$_invoke$arity$15 = G__27039__15;
G__27039.cljs$core$IFn$_invoke$arity$16 = G__27039__16;
G__27039.cljs$core$IFn$_invoke$arity$17 = G__27039__17;
G__27039.cljs$core$IFn$_invoke$arity$18 = G__27039__18;
G__27039.cljs$core$IFn$_invoke$arity$19 = G__27039__19;
G__27039.cljs$core$IFn$_invoke$arity$20 = G__27039__20;
G__27039.cljs$core$IFn$_invoke$arity$21 = G__27039__21;
G__27039.cljs$core$IFn$_invoke$arity$22 = G__27039__22;
return G__27039;
})()
);

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args26963){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26963)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__27004 = cljs.core.deref(this$);
return (fexpr__27004.cljs$core$IFn$_invoke$arity$0 ? fexpr__27004.cljs$core$IFn$_invoke$arity$0() : fexpr__27004.call(null));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__27008 = cljs.core.deref(this$);
return (fexpr__27008.cljs$core$IFn$_invoke$arity$1 ? fexpr__27008.cljs$core$IFn$_invoke$arity$1(a) : fexpr__27008.call(null,a));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__27009 = cljs.core.deref(this$);
return (fexpr__27009.cljs$core$IFn$_invoke$arity$2 ? fexpr__27009.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__27009.call(null,a,b));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__27010 = cljs.core.deref(this$);
return (fexpr__27010.cljs$core$IFn$_invoke$arity$3 ? fexpr__27010.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__27010.call(null,a,b,c));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__27011 = cljs.core.deref(this$);
return (fexpr__27011.cljs$core$IFn$_invoke$arity$4 ? fexpr__27011.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__27011.call(null,a,b,c,d));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__27012 = cljs.core.deref(this$);
return (fexpr__27012.cljs$core$IFn$_invoke$arity$5 ? fexpr__27012.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__27012.call(null,a,b,c,d,e));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
var fexpr__27014 = cljs.core.deref(this$);
return (fexpr__27014.cljs$core$IFn$_invoke$arity$6 ? fexpr__27014.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__27014.call(null,a,b,c,d,e,f__$1));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
var fexpr__27015 = cljs.core.deref(this$);
return (fexpr__27015.cljs$core$IFn$_invoke$arity$7 ? fexpr__27015.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__27015.call(null,a,b,c,d,e,f__$1,g));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
var fexpr__27016 = cljs.core.deref(this$);
return (fexpr__27016.cljs$core$IFn$_invoke$arity$8 ? fexpr__27016.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__27016.call(null,a,b,c,d,e,f__$1,g,h));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__27017 = cljs.core.deref(this$);
return (fexpr__27017.cljs$core$IFn$_invoke$arity$9 ? fexpr__27017.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__27017.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__27018 = cljs.core.deref(this$);
return (fexpr__27018.cljs$core$IFn$_invoke$arity$10 ? fexpr__27018.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__27018.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__27019 = cljs.core.deref(this$);
return (fexpr__27019.cljs$core$IFn$_invoke$arity$11 ? fexpr__27019.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__27019.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__27021 = cljs.core.deref(this$);
return (fexpr__27021.cljs$core$IFn$_invoke$arity$12 ? fexpr__27021.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__27021.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__27022 = cljs.core.deref(this$);
return (fexpr__27022.cljs$core$IFn$_invoke$arity$13 ? fexpr__27022.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__27022.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__27023 = cljs.core.deref(this$);
return (fexpr__27023.cljs$core$IFn$_invoke$arity$14 ? fexpr__27023.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__27023.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__27025 = cljs.core.deref(this$);
return (fexpr__27025.cljs$core$IFn$_invoke$arity$15 ? fexpr__27025.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__27025.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__27027 = cljs.core.deref(this$);
return (fexpr__27027.cljs$core$IFn$_invoke$arity$16 ? fexpr__27027.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__27027.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__27028 = cljs.core.deref(this$);
return (fexpr__27028.cljs$core$IFn$_invoke$arity$17 ? fexpr__27028.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__27028.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__27029 = cljs.core.deref(this$);
return (fexpr__27029.cljs$core$IFn$_invoke$arity$18 ? fexpr__27029.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__27029.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__27030 = cljs.core.deref(this$);
return (fexpr__27030.cljs$core$IFn$_invoke$arity$19 ? fexpr__27030.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__27030.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__27031 = cljs.core.deref(this$);
return (fexpr__27031.cljs$core$IFn$_invoke$arity$20 ? fexpr__27031.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__27031.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});


//# sourceMappingURL=borkdude.dynaload.js.map
