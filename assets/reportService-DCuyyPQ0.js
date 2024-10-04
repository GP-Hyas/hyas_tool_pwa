import{h as be,i as Ee,k as ve,s as we}from"./index-C3TUFu9f.js";var ye={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(ee,V){(function(se,v){ee.exports=v()})(be,function se(){var v=typeof self<"u"?self:typeof window<"u"?window:v!==void 0?v:{},j=!v.document&&!!v.postMessage,te=v.IS_PAPA_WORKER||!1,N={},ae=0,f={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(p(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!p(e.transform)&&e.transform,e.worker&&f.WORKERS_SUPPORTED){var i=function(){if(!f.WORKERS_SUPPORTED)return!1;var h=(D=v.URL||v.webkitURL||null,b=se.toString(),f.BLOB_URL||(f.BLOB_URL=D.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",b,")();"],{type:"text/javascript"})))),d=new v.Worker(h),D,b;return d.onmessage=ke,d.id=ae++,N[d.id]=d}();return i.userStep=e.step,i.userChunk=e.chunk,i.userComplete=e.complete,i.userError=e.error,e.step=p(e.step),e.chunk=p(e.chunk),e.complete=p(e.complete),e.error=p(e.error),delete e.worker,void i.postMessage({input:t,config:e,workerId:i.id})}var s=null;return f.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new oe(e):new ie(e)):t.readable===!0&&p(t.read)&&p(t.on)?s=new he(e):(v.File&&t instanceof File||t instanceof Object)&&(s=new ue(e)),s.stream(t)},unparse:function(t,e){var r=!1,i=!0,s=",",h=`\r
`,d='"',D=d+d,b=!1,a=null,w=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||f.BAD_DELIMITERS.filter(function(n){return e.delimiter.indexOf(n)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(b=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(d=e.quoteChar),typeof e.header=="boolean"&&(i=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(D=e.escapeChar+d),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(w=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(ne(d),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return P(null,t,b);if(typeof t[0]=="object")return P(a||Object.keys(t[0]),t,b)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),P(t.fields||[],t.data||[],b);throw new Error("Unable to serialize unrecognized input");function P(n,m,T){var E="";typeof n=="string"&&(n=JSON.parse(n)),typeof m=="string"&&(m=JSON.parse(m));var I=Array.isArray(n)&&0<n.length,O=!Array.isArray(m[0]);if(I&&i){for(var A=0;A<n.length;A++)0<A&&(E+=s),E+=S(n[A],A);0<m.length&&(E+=h)}for(var o=0;o<m.length;o++){var l=I?n.length:m[o].length,y=!1,x=I?Object.keys(m[o]).length===0:m[o].length===0;if(T&&!I&&(y=T==="greedy"?m[o].join("").trim()==="":m[o].length===1&&m[o][0].length===0),T==="greedy"&&I){for(var g=[],L=0;L<l;L++){var C=O?n[L]:L;g.push(m[o][C])}y=g.join("").trim()===""}if(!y){for(var _=0;_<l;_++){0<_&&!x&&(E+=s);var q=I&&O?n[_]:_;E+=S(m[o][q],_)}o<m.length-1&&(!T||0<l&&!x)&&(E+=h)}}return E}function S(n,m){if(n==null)return"";if(n.constructor===Date)return JSON.stringify(n).slice(1,25);var T=!1;w&&typeof n=="string"&&w.test(n)&&(n="'"+n,T=!0);var E=n.toString().replace(u,D);return(T=T||r===!0||typeof r=="function"&&r(n,m)||Array.isArray(r)&&r[m]||function(I,O){for(var A=0;A<O.length;A++)if(-1<I.indexOf(O[A]))return!0;return!1}(E,f.BAD_DELIMITERS)||-1<E.indexOf(s)||E.charAt(0)===" "||E.charAt(E.length-1)===" ")?d+E+d:E}}};if(f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!j&&!!v.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=de,f.ParserHandle=pe,f.NetworkStreamer=oe,f.FileStreamer=ue,f.StringStreamer=ie,f.ReadableStreamStreamer=he,v.jQuery){var re=v.jQuery;re.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(re(this).prop("tagName").toUpperCase()==="INPUT"&&re(this).attr("type").toLowerCase()==="file"&&v.FileReader)||!this.files||this.files.length===0)return!0;for(var d=0;d<this.files.length;d++)r.push({file:this.files[d],inputElem:this,instanceConfig:re.extend({},e)})}),i(),this;function i(){if(r.length!==0){var h,d,D,b,a=r[0];if(p(t.before)){var w=t.before(a.file,a.inputElem);if(typeof w=="object"){if(w.action==="abort")return h="AbortError",d=a.file,D=a.inputElem,b=w.reason,void(p(t.error)&&t.error({name:h},d,D,b));if(w.action==="skip")return void s();typeof w.config=="object"&&(a.instanceConfig=re.extend(a.instanceConfig,w.config))}else if(w==="skip")return void s()}var u=a.instanceConfig.complete;a.instanceConfig.complete=function(P){p(u)&&u(P,a.file,a.inputElem),s()},f.parse(a.file,a.instanceConfig)}else p(t.complete)&&t.complete()}function s(){r.splice(0,1),i()}}}function K(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=le(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new pe(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&p(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);i!==void 0&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var d=h.meta.cursor;this._finished||(this._partialLine=s.substring(d-this._baseIndex),this._baseIndex=d),h&&h.data&&(this._rowCount+=h.data.length);var D=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(te)v.postMessage({results:h,workerId:f.WORKER_ID,finished:D});else if(p(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!D||!p(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),D||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){p(this._config.error)?this._config.error(e):te&&this._config.error&&v.postMessage({workerId:f.WORKER_ID,error:e,finished:!1})}}function oe(t){var e;(t=t||{}).chunkSize||(t.chunkSize=f.RemoteChunkSize),K.call(this,t),this._nextChunk=j?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),j||(e.onload=$(this._chunkLoaded,this),e.onerror=$(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!j),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var i in r)e.setRequestHeader(i,r[i])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}j&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var i=r.getResponseHeader("Content-Range");return i===null?-1:parseInt(i.substring(i.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var i=e.statusText||r;this._sendError(new Error(i))}}function ue(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=f.LocalChunkSize),K.call(this,t);var i=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,i?((e=new FileReader).onload=$(this._chunkLoaded,this),e.onerror=$(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var d=e.readAsText(s,this._config.encoding);i||this._chunkLoaded({target:{result:d}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ie(t){var e;K.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,i=this._config.chunkSize;return i?(r=e.substring(0,i),e=e.substring(i)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function he(t){K.call(this,t=t||{});var e=[],r=!0,i=!1;this.pause=function(){K.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){K.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=$(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=$(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=$(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=$(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function pe(t){var e,r,i,s=Math.pow(2,53),h=-s,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,D=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,b=this,a=0,w=0,u=!1,P=!1,S=[],n={data:[],errors:[],meta:{}};if(p(t.step)){var m=t.step;t.step=function(o){if(n=o,I())E();else{if(E(),n.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(n.data=n.data[0],m(n,b))}}}function T(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function E(){return n&&i&&(A("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),i=!1),t.skipEmptyLines&&(n.data=n.data.filter(function(o){return!T(o)})),I()&&function(){if(!n)return;function o(y,x){p(t.transformHeader)&&(y=t.transformHeader(y,x)),S.push(y)}if(Array.isArray(n.data[0])){for(var l=0;I()&&l<n.data.length;l++)n.data[l].forEach(o);n.data.splice(0,1)}else n.data.forEach(o)}(),function(){if(!n||!t.header&&!t.dynamicTyping&&!t.transform)return n;function o(y,x){var g,L=t.header?{}:[];for(g=0;g<y.length;g++){var C=g,_=y[g];t.header&&(C=g>=S.length?"__parsed_extra":S[g]),t.transform&&(_=t.transform(_,C)),_=O(C,_),C==="__parsed_extra"?(L[C]=L[C]||[],L[C].push(_)):L[C]=_}return t.header&&(g>S.length?A("FieldMismatch","TooManyFields","Too many fields: expected "+S.length+" fields but parsed "+g,w+x):g<S.length&&A("FieldMismatch","TooFewFields","Too few fields: expected "+S.length+" fields but parsed "+g,w+x)),L}var l=1;return!n.data.length||Array.isArray(n.data[0])?(n.data=n.data.map(o),l=n.data.length):n.data=o(n.data,0),t.header&&n.meta&&(n.meta.fields=S),w+=l,n}()}function I(){return t.header&&S.length===0}function O(o,l){return y=o,t.dynamicTypingFunction&&t.dynamicTyping[y]===void 0&&(t.dynamicTyping[y]=t.dynamicTypingFunction(y)),(t.dynamicTyping[y]||t.dynamicTyping)===!0?l==="true"||l==="TRUE"||l!=="false"&&l!=="FALSE"&&(function(x){if(d.test(x)){var g=parseFloat(x);if(h<g&&g<s)return!0}return!1}(l)?parseFloat(l):D.test(l)?new Date(l):l===""?null:l):l;var y}function A(o,l,y,x){var g={type:o,code:l,message:y};x!==void 0&&(g.row=x),n.errors.push(g)}this.parse=function(o,l,y){var x=t.quoteChar||'"';if(t.newline||(t.newline=function(C,_){C=C.substring(0,1048576);var q=new RegExp(ne(_)+"([^]*?)"+ne(_),"gm"),F=(C=C.replace(q,"")).split("\r"),B=C.split(`
`),W=1<B.length&&B[0].length<F[0].length;if(F.length===1||W)return`
`;for(var M=0,k=0;k<F.length;k++)F[k][0]===`
`&&M++;return M>=F.length/2?`\r
`:"\r"}(o,x)),i=!1,t.delimiter)p(t.delimiter)&&(t.delimiter=t.delimiter(o),n.meta.delimiter=t.delimiter);else{var g=function(C,_,q,F,B){var W,M,k,R;B=B||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Z=0;Z<B.length;Z++){var c=B[Z],X=0,H=0,Y=0;k=void 0;for(var Q=new de({comments:F,delimiter:c,newline:_,preview:10}).parse(C),J=0;J<Q.data.length;J++)if(q&&T(Q.data[J]))Y++;else{var G=Q.data[J].length;H+=G,k!==void 0?0<G&&(X+=Math.abs(G-k),k=G):k=G}0<Q.data.length&&(H/=Q.data.length-Y),(M===void 0||X<=M)&&(R===void 0||R<H)&&1.99<H&&(M=X,W=c,R=H)}return{successful:!!(t.delimiter=W),bestDelimiter:W}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);g.successful?t.delimiter=g.bestDelimiter:(i=!0,t.delimiter=f.DefaultDelimiter),n.meta.delimiter=t.delimiter}var L=le(t);return t.preview&&t.header&&L.preview++,e=o,r=new de(L),n=r.parse(e,l,y),E(),u?{meta:{paused:!0}}:n||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=p(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){b.streamer._halted?(u=!1,b.streamer.parseChunk(e,!0)):setTimeout(b.resume,3)},this.aborted=function(){return P},this.abort=function(){P=!0,r.abort(),n.meta.aborted=!0,p(t.complete)&&t.complete(n),e=""}}function ne(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function de(t){var e,r=(t=t||{}).delimiter,i=t.newline,s=t.comments,h=t.step,d=t.preview,D=t.fastMode,b=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(b=t.escapeChar),(typeof r!="string"||-1<f.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<f.BAD_DELIMITERS.indexOf(s))&&(s=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var a=0,w=!1;this.parse=function(u,P,S){if(typeof u!="string")throw new Error("Input must be a string");var n=u.length,m=r.length,T=i.length,E=s.length,I=p(h),O=[],A=[],o=[],l=a=0;if(!u)return z();if(t.header&&!P){var y=u.split(i)[0].split(r),x=[],g={},L=!1;for(var C in y){var _=y[C];p(t.transformHeader)&&(_=t.transformHeader(_,C));var q=_,F=g[_]||0;for(0<F&&(L=!0,q=_+"_"+F),g[_]=F+1;x.includes(q);)q=q+"_"+F;x.push(q)}if(L){var B=u.split(i);B[0]=x.join(r),u=B.join(i)}}if(D||D!==!1&&u.indexOf(e)===-1){for(var W=u.split(i),M=0;M<W.length;M++){if(o=W[M],a+=o.length,M!==W.length-1)a+=i.length;else if(S)return z();if(!s||o.substring(0,E)!==s){if(I){if(O=[],Y(o.split(r)),fe(),w)return z()}else Y(o.split(r));if(d&&d<=M)return O=O.slice(0,d),z(!0)}}return z()}for(var k=u.indexOf(r,a),R=u.indexOf(i,a),Z=new RegExp(ne(b)+ne(e),"g"),c=u.indexOf(e,a);;)if(u[a]!==e)if(s&&o.length===0&&u.substring(a,a+E)===s){if(R===-1)return z();a=R+T,R=u.indexOf(i,a),k=u.indexOf(r,a)}else if(k!==-1&&(k<R||R===-1))o.push(u.substring(a,k)),a=k+m,k=u.indexOf(r,a);else{if(R===-1)break;if(o.push(u.substring(a,R)),G(R+T),I&&(fe(),w))return z();if(d&&O.length>=d)return z(!0)}else for(c=a,a++;;){if((c=u.indexOf(e,c+1))===-1)return S||A.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:a}),J();if(c===n-1)return J(u.substring(a,c).replace(Z,e));if(e!==b||u[c+1]!==b){if(e===b||c===0||u[c-1]!==b){k!==-1&&k<c+1&&(k=u.indexOf(r,c+1)),R!==-1&&R<c+1&&(R=u.indexOf(i,c+1));var X=Q(R===-1?k:Math.min(k,R));if(u.substr(c+1+X,m)===r){o.push(u.substring(a,c).replace(Z,e)),u[a=c+1+X+m]!==e&&(c=u.indexOf(e,a)),k=u.indexOf(r,a),R=u.indexOf(i,a);break}var H=Q(R);if(u.substring(c+1+H,c+1+H+T)===i){if(o.push(u.substring(a,c).replace(Z,e)),G(c+1+H+T),k=u.indexOf(r,a),c=u.indexOf(e,a),I&&(fe(),w))return z();if(d&&O.length>=d)return z(!0);break}A.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:a}),c++}}else c++}return J();function Y(U){O.push(U),l=a}function Q(U){var me=0;if(U!==-1){var ce=u.substring(c+1,U);ce&&ce.trim()===""&&(me=ce.length)}return me}function J(U){return S||(U===void 0&&(U=u.substring(a)),o.push(U),a=n,Y(o),I&&fe()),z()}function G(U){a=U,Y(o),o=[],R=u.indexOf(i,a)}function z(U){return{data:O,errors:A,meta:{delimiter:r,linebreak:i,aborted:w,truncated:!!U,cursor:l+(P||0)}}}function fe(){h(z()),O=[],A=[]}},this.abort=function(){w=!0},this.getCharIndex=function(){return a}}function ke(t){var e=t.data,r=N[e.workerId],i=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){i=!0,ge(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_e,resume:_e};if(p(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!i);h++);delete e.results}else p(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!i&&ge(e.workerId,e.results)}function ge(t,e){var r=N[t];p(r.userComplete)&&r.userComplete(e),r.terminate(),delete N[t]}function _e(){throw new Error("Not implemented.")}function le(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=le(t[r]);return e}function $(t,e){return function(){t.apply(e,arguments)}}function p(t){return typeof t=="function"}return te&&(v.onmessage=function(t){var e=t.data;if(f.WORKER_ID===void 0&&e&&(f.WORKER_ID=e.workerId),typeof e.input=="string")v.postMessage({workerId:f.WORKER_ID,results:f.parse(e.input,e.config),finished:!0});else if(v.File&&e.input instanceof File||e.input instanceof Object){var r=f.parse(e.input,e.config);r&&v.postMessage({workerId:f.WORKER_ID,results:r,finished:!0})}}),(oe.prototype=Object.create(K.prototype)).constructor=oe,(ue.prototype=Object.create(K.prototype)).constructor=ue,(ie.prototype=Object.create(ie.prototype)).constructor=ie,(he.prototype=Object.create(K.prototype)).constructor=he,f})})(ye);var Ce=ye.exports;const Re=Ee(Ce),Oe=(ee,V)=>{if(!Array.isArray(ee)||ee.length===0)return console.warn(`No data available to generate the ${V} report.`),{success:!1,error:`No data available to generate the ${V} report.`};const se=Re.unparse(ee),v=new Date;let j;if(V==="insight_active_users")j=`${ve(new Date,"MM-dd-yy")}_${V}_report.csv`;else{const ae=we(v,1);j=`${ve(ae,"MM-yy")}_${V}_report.csv`}const te=new Blob([se],{type:"text/csv;charset=utf-8;"}),N=document.createElement("a");return N.href=URL.createObjectURL(te),N.download=j,document.body.appendChild(N),N.click(),document.body.removeChild(N),{success:!0}};export{Oe as g};
