if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-08b47157"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/APIMenu-BB1zPT4_.js",revision:null},{url:"assets/APIMenu-BF5tPL8k.css",revision:null},{url:"assets/BillingReport-BZRWsGa_.css",revision:null},{url:"assets/BillingReport-DBqENUhv.js",revision:null},{url:"assets/Button-CoKNNz3G.css",revision:null},{url:"assets/Button-Zmk-4lHV.js",revision:null},{url:"assets/GenerateReport-BWBhbZWm.css",revision:null},{url:"assets/GenerateReport-UDQ-2HeS.js",revision:null},{url:"assets/index-C2YN3cRo.js",revision:null},{url:"assets/index-uMjoYMEd.css",revision:null},{url:"assets/Modal-BgNT_Rle.css",revision:null},{url:"assets/Modal-GZDEMvWt.js",revision:null},{url:"assets/MsspSelection-BCNDUWY3.css",revision:null},{url:"assets/MsspSelection-Bn6j8zLj.js",revision:null},{url:"assets/reportService-C-zMg-IB.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"0a545b35ecd061ffcef432fdd7f51a2f"},{url:"icons/hyas-logo-h.webp",revision:"5681dc9428748ffe28625901a8f6a741"},{url:"icons/icon-192x192.png",revision:"1cc4a718487bbb384a4ddf3ab3a48e20"},{url:"icons/icon-512x512.png",revision:"7879d93556ace6f04649bd14fe443d79"},{url:"images/red-lasers.webp",revision:"d3848a2adbfe76ce03dd6d0864a45850"},{url:"index.html",revision:"923ee74041a00a83a32f119dbe9418b3"},{url:"icons/icon-192x192.png",revision:"1cc4a718487bbb384a4ddf3ab3a48e20"},{url:"icons/icon-512x512.png",revision:"7879d93556ace6f04649bd14fe443d79"},{url:"manifest.webmanifest",revision:"f931003d3d2bae21f26e3edf0ffc2be0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({request:e})=>"navigate"===e.mode),new e.NetworkFirst({cacheName:"pages-cache",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
