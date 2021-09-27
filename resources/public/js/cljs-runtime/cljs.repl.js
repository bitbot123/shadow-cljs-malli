goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34787){
var map__34788 = p__34787;
var map__34788__$1 = cljs.core.__destructure_map(map__34788);
var m = map__34788__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34788__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34790_35236 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34791_35237 = null;
var count__34792_35238 = (0);
var i__34793_35239 = (0);
while(true){
if((i__34793_35239 < count__34792_35238)){
var f_35240 = chunk__34791_35237.cljs$core$IIndexed$_nth$arity$2(null,i__34793_35239);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35240], 0));


var G__35243 = seq__34790_35236;
var G__35244 = chunk__34791_35237;
var G__35245 = count__34792_35238;
var G__35246 = (i__34793_35239 + (1));
seq__34790_35236 = G__35243;
chunk__34791_35237 = G__35244;
count__34792_35238 = G__35245;
i__34793_35239 = G__35246;
continue;
} else {
var temp__5753__auto___35247 = cljs.core.seq(seq__34790_35236);
if(temp__5753__auto___35247){
var seq__34790_35248__$1 = temp__5753__auto___35247;
if(cljs.core.chunked_seq_QMARK_(seq__34790_35248__$1)){
var c__4638__auto___35249 = cljs.core.chunk_first(seq__34790_35248__$1);
var G__35250 = cljs.core.chunk_rest(seq__34790_35248__$1);
var G__35251 = c__4638__auto___35249;
var G__35252 = cljs.core.count(c__4638__auto___35249);
var G__35253 = (0);
seq__34790_35236 = G__35250;
chunk__34791_35237 = G__35251;
count__34792_35238 = G__35252;
i__34793_35239 = G__35253;
continue;
} else {
var f_35258 = cljs.core.first(seq__34790_35248__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35258], 0));


var G__35259 = cljs.core.next(seq__34790_35248__$1);
var G__35260 = null;
var G__35261 = (0);
var G__35262 = (0);
seq__34790_35236 = G__35259;
chunk__34791_35237 = G__35260;
count__34792_35238 = G__35261;
i__34793_35239 = G__35262;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35263 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35263], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35263)))?cljs.core.second(arglists_35263):arglists_35263)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34810_35265 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34811_35266 = null;
var count__34812_35267 = (0);
var i__34813_35268 = (0);
while(true){
if((i__34813_35268 < count__34812_35267)){
var vec__34859_35269 = chunk__34811_35266.cljs$core$IIndexed$_nth$arity$2(null,i__34813_35268);
var name_35270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859_35269,(0),null);
var map__34862_35271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34859_35269,(1),null);
var map__34862_35272__$1 = cljs.core.__destructure_map(map__34862_35271);
var doc_35273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34862_35272__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34862_35272__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35270], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35274], 0));

if(cljs.core.truth_(doc_35273)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35273], 0));
} else {
}


var G__35275 = seq__34810_35265;
var G__35276 = chunk__34811_35266;
var G__35277 = count__34812_35267;
var G__35278 = (i__34813_35268 + (1));
seq__34810_35265 = G__35275;
chunk__34811_35266 = G__35276;
count__34812_35267 = G__35277;
i__34813_35268 = G__35278;
continue;
} else {
var temp__5753__auto___35279 = cljs.core.seq(seq__34810_35265);
if(temp__5753__auto___35279){
var seq__34810_35280__$1 = temp__5753__auto___35279;
if(cljs.core.chunked_seq_QMARK_(seq__34810_35280__$1)){
var c__4638__auto___35281 = cljs.core.chunk_first(seq__34810_35280__$1);
var G__35282 = cljs.core.chunk_rest(seq__34810_35280__$1);
var G__35283 = c__4638__auto___35281;
var G__35284 = cljs.core.count(c__4638__auto___35281);
var G__35285 = (0);
seq__34810_35265 = G__35282;
chunk__34811_35266 = G__35283;
count__34812_35267 = G__35284;
i__34813_35268 = G__35285;
continue;
} else {
var vec__34867_35286 = cljs.core.first(seq__34810_35280__$1);
var name_35287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867_35286,(0),null);
var map__34870_35288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867_35286,(1),null);
var map__34870_35289__$1 = cljs.core.__destructure_map(map__34870_35288);
var doc_35290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34870_35289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34870_35289__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35287], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35291], 0));

if(cljs.core.truth_(doc_35290)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35290], 0));
} else {
}


var G__35293 = cljs.core.next(seq__34810_35280__$1);
var G__35294 = null;
var G__35295 = (0);
var G__35296 = (0);
seq__34810_35265 = G__35293;
chunk__34811_35266 = G__35294;
count__34812_35267 = G__35295;
i__34813_35268 = G__35296;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34891 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34892 = null;
var count__34893 = (0);
var i__34894 = (0);
while(true){
if((i__34894 < count__34893)){
var role = chunk__34892.cljs$core$IIndexed$_nth$arity$2(null,i__34894);
var temp__5753__auto___35298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35298__$1)){
var spec_35299 = temp__5753__auto___35298__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35299)], 0));
} else {
}


var G__35300 = seq__34891;
var G__35301 = chunk__34892;
var G__35302 = count__34893;
var G__35303 = (i__34894 + (1));
seq__34891 = G__35300;
chunk__34892 = G__35301;
count__34893 = G__35302;
i__34894 = G__35303;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34891);
if(temp__5753__auto____$1){
var seq__34891__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34891__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34891__$1);
var G__35308 = cljs.core.chunk_rest(seq__34891__$1);
var G__35309 = c__4638__auto__;
var G__35310 = cljs.core.count(c__4638__auto__);
var G__35311 = (0);
seq__34891 = G__35308;
chunk__34892 = G__35309;
count__34893 = G__35310;
i__34894 = G__35311;
continue;
} else {
var role = cljs.core.first(seq__34891__$1);
var temp__5753__auto___35312__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35312__$2)){
var spec_35313 = temp__5753__auto___35312__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35313)], 0));
} else {
}


var G__35315 = cljs.core.next(seq__34891__$1);
var G__35316 = null;
var G__35317 = (0);
var G__35318 = (0);
seq__34891 = G__35315;
chunk__34892 = G__35316;
count__34893 = G__35317;
i__34894 = G__35318;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35319 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35320 = cljs.core.ex_cause(t);
via = G__35319;
t = G__35320;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35110 = datafied_throwable;
var map__35110__$1 = cljs.core.__destructure_map(map__35110);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35110__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35110__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35110__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35111 = cljs.core.last(via);
var map__35111__$1 = cljs.core.__destructure_map(map__35111);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35112 = data;
var map__35112__$1 = cljs.core.__destructure_map(map__35112);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35113 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35113__$1 = cljs.core.__destructure_map(map__35113);
var top_data = map__35113__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35136 = phase;
var G__35136__$1 = (((G__35136 instanceof cljs.core.Keyword))?G__35136.fqn:null);
switch (G__35136__$1) {
case "read-source":
var map__35156 = data;
var map__35156__$1 = cljs.core.__destructure_map(map__35156);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35162 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35162__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35162,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35162);
var G__35162__$2 = (cljs.core.truth_((function (){var fexpr__35163 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35163.cljs$core$IFn$_invoke$arity$1 ? fexpr__35163.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35163.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35162__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35162__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35162__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35162__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35164 = top_data;
var G__35164__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35164,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35164);
var G__35164__$2 = (cljs.core.truth_((function (){var fexpr__35165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35165.cljs$core$IFn$_invoke$arity$1 ? fexpr__35165.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35165.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35164__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35164__$1);
var G__35164__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35164__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35164__$2);
var G__35164__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35164__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35164__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35164__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35164__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35166 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(3),null);
var G__35169 = top_data;
var G__35169__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35169,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35169);
var G__35169__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35169__$1);
var G__35169__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35169__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35169__$2);
var G__35169__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35169__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35169__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35169__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35169__$4;
}

break;
case "execution":
var vec__35173 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35109_SHARP_){
var or__4212__auto__ = (p1__35109_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35176.cljs$core$IFn$_invoke$arity$1 ? fexpr__35176.cljs$core$IFn$_invoke$arity$1(p1__35109_SHARP_) : fexpr__35176.call(null,p1__35109_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35177 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35177__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35177,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35177);
var G__35177__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35177__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35177__$1);
var G__35177__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35177__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35177__$2);
var G__35177__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35177__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35177__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35177__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35177__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35136__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35183){
var map__35184 = p__35183;
var map__35184__$1 = cljs.core.__destructure_map(map__35184);
var triage_data = map__35184__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35189 = phase;
var G__35189__$1 = (((G__35189 instanceof cljs.core.Keyword))?G__35189.fqn:null);
switch (G__35189__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35190 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35192 = loc;
var G__35193 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35194_35335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35195_35336 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35196_35337 = true;
var _STAR_print_fn_STAR__temp_val__35197_35338 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35196_35337);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35197_35338);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35179_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35179_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35195_35336);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35194_35335);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35190,G__35191,G__35192,G__35193) : format.call(null,G__35190,G__35191,G__35192,G__35193));

break;
case "macroexpansion":
var G__35198 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35199 = cause_type;
var G__35200 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35201 = loc;
var G__35202 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35198,G__35199,G__35200,G__35201,G__35202) : format.call(null,G__35198,G__35199,G__35200,G__35201,G__35202));

break;
case "compile-syntax-check":
var G__35203 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35204 = cause_type;
var G__35205 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35206 = loc;
var G__35207 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35203,G__35204,G__35205,G__35206,G__35207) : format.call(null,G__35203,G__35204,G__35205,G__35206,G__35207));

break;
case "compilation":
var G__35208 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35209 = cause_type;
var G__35210 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35211 = loc;
var G__35212 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35208,G__35209,G__35210,G__35211,G__35212) : format.call(null,G__35208,G__35209,G__35210,G__35211,G__35212));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35213 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35214 = symbol;
var G__35215 = loc;
var G__35216 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35217_35339 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35218_35340 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35219_35341 = true;
var _STAR_print_fn_STAR__temp_val__35220_35342 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35219_35341);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35220_35342);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35180_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35180_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35218_35340);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35217_35339);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35213,G__35214,G__35215,G__35216) : format.call(null,G__35213,G__35214,G__35215,G__35216));
} else {
var G__35224 = "Execution error%s at %s(%s).\n%s\n";
var G__35225 = cause_type;
var G__35226 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35227 = loc;
var G__35228 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35224,G__35225,G__35226,G__35227,G__35228) : format.call(null,G__35224,G__35225,G__35226,G__35227,G__35228));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35189__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
