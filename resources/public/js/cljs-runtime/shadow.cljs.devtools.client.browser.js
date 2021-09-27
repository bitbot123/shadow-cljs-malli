goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35891 = arguments.length;
var i__4819__auto___35892 = (0);
while(true){
if((i__4819__auto___35892 < len__4818__auto___35891)){
args__4824__auto__.push((arguments[i__4819__auto___35892]));

var G__35893 = (i__4819__auto___35892 + (1));
i__4819__auto___35892 = G__35893;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35762){
var G__35763 = cljs.core.first(seq35762);
var seq35762__$1 = cljs.core.next(seq35762);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35763,seq35762__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35769 = cljs.core.seq(sources);
var chunk__35770 = null;
var count__35771 = (0);
var i__35772 = (0);
while(true){
if((i__35772 < count__35771)){
var map__35779 = chunk__35770.cljs$core$IIndexed$_nth$arity$2(null,i__35772);
var map__35779__$1 = cljs.core.__destructure_map(map__35779);
var src = map__35779__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35780){var e_35894 = e35780;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35894);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35894.message)].join('')));
}

var G__35895 = seq__35769;
var G__35896 = chunk__35770;
var G__35897 = count__35771;
var G__35898 = (i__35772 + (1));
seq__35769 = G__35895;
chunk__35770 = G__35896;
count__35771 = G__35897;
i__35772 = G__35898;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35769);
if(temp__5753__auto__){
var seq__35769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35769__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35769__$1);
var G__35899 = cljs.core.chunk_rest(seq__35769__$1);
var G__35900 = c__4638__auto__;
var G__35901 = cljs.core.count(c__4638__auto__);
var G__35902 = (0);
seq__35769 = G__35899;
chunk__35770 = G__35900;
count__35771 = G__35901;
i__35772 = G__35902;
continue;
} else {
var map__35781 = cljs.core.first(seq__35769__$1);
var map__35781__$1 = cljs.core.__destructure_map(map__35781);
var src = map__35781__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35782){var e_35903 = e35782;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35903);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35903.message)].join('')));
}

var G__35904 = cljs.core.next(seq__35769__$1);
var G__35905 = null;
var G__35906 = (0);
var G__35907 = (0);
seq__35769 = G__35904;
chunk__35770 = G__35905;
count__35771 = G__35906;
i__35772 = G__35907;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35783 = cljs.core.seq(js_requires);
var chunk__35784 = null;
var count__35785 = (0);
var i__35786 = (0);
while(true){
if((i__35786 < count__35785)){
var js_ns = chunk__35784.cljs$core$IIndexed$_nth$arity$2(null,i__35786);
var require_str_35908 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35908);


var G__35909 = seq__35783;
var G__35910 = chunk__35784;
var G__35911 = count__35785;
var G__35912 = (i__35786 + (1));
seq__35783 = G__35909;
chunk__35784 = G__35910;
count__35785 = G__35911;
i__35786 = G__35912;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35783);
if(temp__5753__auto__){
var seq__35783__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35783__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35783__$1);
var G__35913 = cljs.core.chunk_rest(seq__35783__$1);
var G__35914 = c__4638__auto__;
var G__35915 = cljs.core.count(c__4638__auto__);
var G__35916 = (0);
seq__35783 = G__35913;
chunk__35784 = G__35914;
count__35785 = G__35915;
i__35786 = G__35916;
continue;
} else {
var js_ns = cljs.core.first(seq__35783__$1);
var require_str_35917 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35917);


var G__35918 = cljs.core.next(seq__35783__$1);
var G__35919 = null;
var G__35920 = (0);
var G__35921 = (0);
seq__35783 = G__35918;
chunk__35784 = G__35919;
count__35785 = G__35920;
i__35786 = G__35921;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35788){
var map__35789 = p__35788;
var map__35789__$1 = cljs.core.__destructure_map(map__35789);
var msg = map__35789__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35789__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35789__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35790(s__35791){
return (new cljs.core.LazySeq(null,(function (){
var s__35791__$1 = s__35791;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35791__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35796 = cljs.core.first(xs__6308__auto__);
var map__35796__$1 = cljs.core.__destructure_map(map__35796);
var src = map__35796__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35796__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__35791__$1,map__35796,map__35796__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35789,map__35789__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35790_$_iter__35792(s__35793){
return (new cljs.core.LazySeq(null,((function (s__35791__$1,map__35796,map__35796__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35789,map__35789__$1,msg,info,reload_info){
return (function (){
var s__35793__$1 = s__35793;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35793__$1);
if(temp__5753__auto____$1){
var s__35793__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35793__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35793__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35795 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35794 = (0);
while(true){
if((i__35794 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__35794);
cljs.core.chunk_append(b__35795,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35922 = (i__35794 + (1));
i__35794 = G__35922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35795),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35790_$_iter__35792(cljs.core.chunk_rest(s__35793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35795),null);
}
} else {
var warning = cljs.core.first(s__35793__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35790_$_iter__35792(cljs.core.rest(s__35793__$2)));
}
} else {
return null;
}
break;
}
});})(s__35791__$1,map__35796,map__35796__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35789,map__35789__$1,msg,info,reload_info))
,null,null));
});})(s__35791__$1,map__35796,map__35796__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35789,map__35789__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35790(cljs.core.rest(s__35791__$1)));
} else {
var G__35923 = cljs.core.rest(s__35791__$1);
s__35791__$1 = G__35923;
continue;
}
} else {
var G__35924 = cljs.core.rest(s__35791__$1);
s__35791__$1 = G__35924;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35797_35925 = cljs.core.seq(warnings);
var chunk__35798_35926 = null;
var count__35799_35927 = (0);
var i__35800_35928 = (0);
while(true){
if((i__35800_35928 < count__35799_35927)){
var map__35803_35929 = chunk__35798_35926.cljs$core$IIndexed$_nth$arity$2(null,i__35800_35928);
var map__35803_35930__$1 = cljs.core.__destructure_map(map__35803_35929);
var w_35931 = map__35803_35930__$1;
var msg_35932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803_35930__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803_35930__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803_35930__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803_35930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35935)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35933),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35934),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35932__$1)].join(''));


var G__35936 = seq__35797_35925;
var G__35937 = chunk__35798_35926;
var G__35938 = count__35799_35927;
var G__35939 = (i__35800_35928 + (1));
seq__35797_35925 = G__35936;
chunk__35798_35926 = G__35937;
count__35799_35927 = G__35938;
i__35800_35928 = G__35939;
continue;
} else {
var temp__5753__auto___35940 = cljs.core.seq(seq__35797_35925);
if(temp__5753__auto___35940){
var seq__35797_35941__$1 = temp__5753__auto___35940;
if(cljs.core.chunked_seq_QMARK_(seq__35797_35941__$1)){
var c__4638__auto___35942 = cljs.core.chunk_first(seq__35797_35941__$1);
var G__35943 = cljs.core.chunk_rest(seq__35797_35941__$1);
var G__35944 = c__4638__auto___35942;
var G__35945 = cljs.core.count(c__4638__auto___35942);
var G__35946 = (0);
seq__35797_35925 = G__35943;
chunk__35798_35926 = G__35944;
count__35799_35927 = G__35945;
i__35800_35928 = G__35946;
continue;
} else {
var map__35804_35947 = cljs.core.first(seq__35797_35941__$1);
var map__35804_35948__$1 = cljs.core.__destructure_map(map__35804_35947);
var w_35949 = map__35804_35948__$1;
var msg_35950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804_35948__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804_35948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804_35948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804_35948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35953)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35951),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35952),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35950__$1)].join(''));


var G__35954 = cljs.core.next(seq__35797_35941__$1);
var G__35955 = null;
var G__35956 = (0);
var G__35957 = (0);
seq__35797_35925 = G__35954;
chunk__35798_35926 = G__35955;
count__35799_35927 = G__35956;
i__35800_35928 = G__35957;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35787_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35787_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35805){
var map__35806 = p__35805;
var map__35806__$1 = cljs.core.__destructure_map(map__35806);
var msg = map__35806__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35807 = cljs.core.seq(updates);
var chunk__35809 = null;
var count__35810 = (0);
var i__35811 = (0);
while(true){
if((i__35811 < count__35810)){
var path = chunk__35809.cljs$core$IIndexed$_nth$arity$2(null,i__35811);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35841_35958 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35845_35959 = null;
var count__35846_35960 = (0);
var i__35847_35961 = (0);
while(true){
if((i__35847_35961 < count__35846_35960)){
var node_35962 = chunk__35845_35959.cljs$core$IIndexed$_nth$arity$2(null,i__35847_35961);
if(cljs.core.not(node_35962.shadow$old)){
var path_match_35963 = shadow.cljs.devtools.client.browser.match_paths(node_35962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35963)){
var new_link_35964 = (function (){var G__35853 = node_35962.cloneNode(true);
G__35853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35853;
})();
(node_35962.shadow$old = true);

(new_link_35964.onload = ((function (seq__35841_35958,chunk__35845_35959,count__35846_35960,i__35847_35961,seq__35807,chunk__35809,count__35810,i__35811,new_link_35964,path_match_35963,node_35962,path,map__35806,map__35806__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35962);
});})(seq__35841_35958,chunk__35845_35959,count__35846_35960,i__35847_35961,seq__35807,chunk__35809,count__35810,i__35811,new_link_35964,path_match_35963,node_35962,path,map__35806,map__35806__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35963], 0));

goog.dom.insertSiblingAfter(new_link_35964,node_35962);


var G__35965 = seq__35841_35958;
var G__35966 = chunk__35845_35959;
var G__35967 = count__35846_35960;
var G__35968 = (i__35847_35961 + (1));
seq__35841_35958 = G__35965;
chunk__35845_35959 = G__35966;
count__35846_35960 = G__35967;
i__35847_35961 = G__35968;
continue;
} else {
var G__35969 = seq__35841_35958;
var G__35970 = chunk__35845_35959;
var G__35971 = count__35846_35960;
var G__35972 = (i__35847_35961 + (1));
seq__35841_35958 = G__35969;
chunk__35845_35959 = G__35970;
count__35846_35960 = G__35971;
i__35847_35961 = G__35972;
continue;
}
} else {
var G__35973 = seq__35841_35958;
var G__35974 = chunk__35845_35959;
var G__35975 = count__35846_35960;
var G__35976 = (i__35847_35961 + (1));
seq__35841_35958 = G__35973;
chunk__35845_35959 = G__35974;
count__35846_35960 = G__35975;
i__35847_35961 = G__35976;
continue;
}
} else {
var temp__5753__auto___35977 = cljs.core.seq(seq__35841_35958);
if(temp__5753__auto___35977){
var seq__35841_35978__$1 = temp__5753__auto___35977;
if(cljs.core.chunked_seq_QMARK_(seq__35841_35978__$1)){
var c__4638__auto___35979 = cljs.core.chunk_first(seq__35841_35978__$1);
var G__35980 = cljs.core.chunk_rest(seq__35841_35978__$1);
var G__35981 = c__4638__auto___35979;
var G__35982 = cljs.core.count(c__4638__auto___35979);
var G__35983 = (0);
seq__35841_35958 = G__35980;
chunk__35845_35959 = G__35981;
count__35846_35960 = G__35982;
i__35847_35961 = G__35983;
continue;
} else {
var node_35984 = cljs.core.first(seq__35841_35978__$1);
if(cljs.core.not(node_35984.shadow$old)){
var path_match_35985 = shadow.cljs.devtools.client.browser.match_paths(node_35984.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35985)){
var new_link_35986 = (function (){var G__35854 = node_35984.cloneNode(true);
G__35854.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35985),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35854;
})();
(node_35984.shadow$old = true);

(new_link_35986.onload = ((function (seq__35841_35958,chunk__35845_35959,count__35846_35960,i__35847_35961,seq__35807,chunk__35809,count__35810,i__35811,new_link_35986,path_match_35985,node_35984,seq__35841_35978__$1,temp__5753__auto___35977,path,map__35806,map__35806__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35984);
});})(seq__35841_35958,chunk__35845_35959,count__35846_35960,i__35847_35961,seq__35807,chunk__35809,count__35810,i__35811,new_link_35986,path_match_35985,node_35984,seq__35841_35978__$1,temp__5753__auto___35977,path,map__35806,map__35806__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35985], 0));

goog.dom.insertSiblingAfter(new_link_35986,node_35984);


var G__35987 = cljs.core.next(seq__35841_35978__$1);
var G__35988 = null;
var G__35989 = (0);
var G__35990 = (0);
seq__35841_35958 = G__35987;
chunk__35845_35959 = G__35988;
count__35846_35960 = G__35989;
i__35847_35961 = G__35990;
continue;
} else {
var G__35991 = cljs.core.next(seq__35841_35978__$1);
var G__35992 = null;
var G__35993 = (0);
var G__35994 = (0);
seq__35841_35958 = G__35991;
chunk__35845_35959 = G__35992;
count__35846_35960 = G__35993;
i__35847_35961 = G__35994;
continue;
}
} else {
var G__35995 = cljs.core.next(seq__35841_35978__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35841_35958 = G__35995;
chunk__35845_35959 = G__35996;
count__35846_35960 = G__35997;
i__35847_35961 = G__35998;
continue;
}
}
} else {
}
}
break;
}


var G__35999 = seq__35807;
var G__36000 = chunk__35809;
var G__36001 = count__35810;
var G__36002 = (i__35811 + (1));
seq__35807 = G__35999;
chunk__35809 = G__36000;
count__35810 = G__36001;
i__35811 = G__36002;
continue;
} else {
var G__36003 = seq__35807;
var G__36004 = chunk__35809;
var G__36005 = count__35810;
var G__36006 = (i__35811 + (1));
seq__35807 = G__36003;
chunk__35809 = G__36004;
count__35810 = G__36005;
i__35811 = G__36006;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35807);
if(temp__5753__auto__){
var seq__35807__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35807__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35807__$1);
var G__36007 = cljs.core.chunk_rest(seq__35807__$1);
var G__36008 = c__4638__auto__;
var G__36009 = cljs.core.count(c__4638__auto__);
var G__36010 = (0);
seq__35807 = G__36007;
chunk__35809 = G__36008;
count__35810 = G__36009;
i__35811 = G__36010;
continue;
} else {
var path = cljs.core.first(seq__35807__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35855_36011 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35859_36012 = null;
var count__35860_36013 = (0);
var i__35861_36014 = (0);
while(true){
if((i__35861_36014 < count__35860_36013)){
var node_36015 = chunk__35859_36012.cljs$core$IIndexed$_nth$arity$2(null,i__35861_36014);
if(cljs.core.not(node_36015.shadow$old)){
var path_match_36016 = shadow.cljs.devtools.client.browser.match_paths(node_36015.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36016)){
var new_link_36017 = (function (){var G__35867 = node_36015.cloneNode(true);
G__35867.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36016),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35867;
})();
(node_36015.shadow$old = true);

(new_link_36017.onload = ((function (seq__35855_36011,chunk__35859_36012,count__35860_36013,i__35861_36014,seq__35807,chunk__35809,count__35810,i__35811,new_link_36017,path_match_36016,node_36015,path,seq__35807__$1,temp__5753__auto__,map__35806,map__35806__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36015);
});})(seq__35855_36011,chunk__35859_36012,count__35860_36013,i__35861_36014,seq__35807,chunk__35809,count__35810,i__35811,new_link_36017,path_match_36016,node_36015,path,seq__35807__$1,temp__5753__auto__,map__35806,map__35806__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36016], 0));

goog.dom.insertSiblingAfter(new_link_36017,node_36015);


var G__36018 = seq__35855_36011;
var G__36019 = chunk__35859_36012;
var G__36020 = count__35860_36013;
var G__36021 = (i__35861_36014 + (1));
seq__35855_36011 = G__36018;
chunk__35859_36012 = G__36019;
count__35860_36013 = G__36020;
i__35861_36014 = G__36021;
continue;
} else {
var G__36022 = seq__35855_36011;
var G__36023 = chunk__35859_36012;
var G__36024 = count__35860_36013;
var G__36025 = (i__35861_36014 + (1));
seq__35855_36011 = G__36022;
chunk__35859_36012 = G__36023;
count__35860_36013 = G__36024;
i__35861_36014 = G__36025;
continue;
}
} else {
var G__36026 = seq__35855_36011;
var G__36027 = chunk__35859_36012;
var G__36028 = count__35860_36013;
var G__36029 = (i__35861_36014 + (1));
seq__35855_36011 = G__36026;
chunk__35859_36012 = G__36027;
count__35860_36013 = G__36028;
i__35861_36014 = G__36029;
continue;
}
} else {
var temp__5753__auto___36030__$1 = cljs.core.seq(seq__35855_36011);
if(temp__5753__auto___36030__$1){
var seq__35855_36031__$1 = temp__5753__auto___36030__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35855_36031__$1)){
var c__4638__auto___36032 = cljs.core.chunk_first(seq__35855_36031__$1);
var G__36033 = cljs.core.chunk_rest(seq__35855_36031__$1);
var G__36034 = c__4638__auto___36032;
var G__36035 = cljs.core.count(c__4638__auto___36032);
var G__36036 = (0);
seq__35855_36011 = G__36033;
chunk__35859_36012 = G__36034;
count__35860_36013 = G__36035;
i__35861_36014 = G__36036;
continue;
} else {
var node_36037 = cljs.core.first(seq__35855_36031__$1);
if(cljs.core.not(node_36037.shadow$old)){
var path_match_36038 = shadow.cljs.devtools.client.browser.match_paths(node_36037.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36038)){
var new_link_36039 = (function (){var G__35868 = node_36037.cloneNode(true);
G__35868.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36038),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35868;
})();
(node_36037.shadow$old = true);

(new_link_36039.onload = ((function (seq__35855_36011,chunk__35859_36012,count__35860_36013,i__35861_36014,seq__35807,chunk__35809,count__35810,i__35811,new_link_36039,path_match_36038,node_36037,seq__35855_36031__$1,temp__5753__auto___36030__$1,path,seq__35807__$1,temp__5753__auto__,map__35806,map__35806__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36037);
});})(seq__35855_36011,chunk__35859_36012,count__35860_36013,i__35861_36014,seq__35807,chunk__35809,count__35810,i__35811,new_link_36039,path_match_36038,node_36037,seq__35855_36031__$1,temp__5753__auto___36030__$1,path,seq__35807__$1,temp__5753__auto__,map__35806,map__35806__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36038], 0));

goog.dom.insertSiblingAfter(new_link_36039,node_36037);


var G__36040 = cljs.core.next(seq__35855_36031__$1);
var G__36041 = null;
var G__36042 = (0);
var G__36043 = (0);
seq__35855_36011 = G__36040;
chunk__35859_36012 = G__36041;
count__35860_36013 = G__36042;
i__35861_36014 = G__36043;
continue;
} else {
var G__36044 = cljs.core.next(seq__35855_36031__$1);
var G__36045 = null;
var G__36046 = (0);
var G__36047 = (0);
seq__35855_36011 = G__36044;
chunk__35859_36012 = G__36045;
count__35860_36013 = G__36046;
i__35861_36014 = G__36047;
continue;
}
} else {
var G__36048 = cljs.core.next(seq__35855_36031__$1);
var G__36049 = null;
var G__36050 = (0);
var G__36051 = (0);
seq__35855_36011 = G__36048;
chunk__35859_36012 = G__36049;
count__35860_36013 = G__36050;
i__35861_36014 = G__36051;
continue;
}
}
} else {
}
}
break;
}


var G__36052 = cljs.core.next(seq__35807__$1);
var G__36053 = null;
var G__36054 = (0);
var G__36055 = (0);
seq__35807 = G__36052;
chunk__35809 = G__36053;
count__35810 = G__36054;
i__35811 = G__36055;
continue;
} else {
var G__36056 = cljs.core.next(seq__35807__$1);
var G__36057 = null;
var G__36058 = (0);
var G__36059 = (0);
seq__35807 = G__36056;
chunk__35809 = G__36057;
count__35810 = G__36058;
i__35811 = G__36059;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35869){
var map__35870 = p__35869;
var map__35870__$1 = cljs.core.__destructure_map(map__35870);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35871){
var map__35872 = p__35871;
var map__35872__$1 = cljs.core.__destructure_map(map__35872);
var _ = map__35872__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35872__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35873,done,error){
var map__35874 = p__35873;
var map__35874__$1 = cljs.core.__destructure_map(map__35874);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35875,done,error){
var map__35876 = p__35875;
var map__35876__$1 = cljs.core.__destructure_map(map__35876);
var msg = map__35876__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35876__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35876__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35876__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35877){
var map__35878 = p__35877;
var map__35878__$1 = cljs.core.__destructure_map(map__35878);
var src = map__35878__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35879 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35879) : done.call(null,G__35879));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35880){
var map__35881 = p__35880;
var map__35881__$1 = cljs.core.__destructure_map(map__35881);
var msg__$1 = map__35881__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35882){var ex = e35882;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35883){
var map__35884 = p__35883;
var map__35884__$1 = cljs.core.__destructure_map(map__35884);
var env = map__35884__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35885){
var map__35886 = p__35885;
var map__35886__$1 = cljs.core.__destructure_map(map__35886);
var msg = map__35886__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35887){
var map__35888 = p__35887;
var map__35888__$1 = cljs.core.__destructure_map(map__35888);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35889){
var map__35890 = p__35889;
var map__35890__$1 = cljs.core.__destructure_map(map__35890);
var svc = map__35890__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
