(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();let s,v=null;function U(){return(v===null||v.byteLength===0)&&(v=new Uint8Array(s.memory.buffer)),v}let m=0;function p(e,t){const i=t(e.length*1,1)>>>0;return U().set(e,i/1),m=e.length,i}function b(e,t){return e=e>>>0,U().subarray(e/1,e/1+t)}function S(e,t,i){const r=p(e,s.__wbindgen_malloc),n=m,a=s.resize(r,n,t,i);var y=b(a[0],a[1]).slice();return s.__wbindgen_free(a[0],a[1]*1,1),y}function W(e){const t=p(e,s.__wbindgen_malloc),i=m,r=s.grayscale(t,i);var n=b(r[0],r[1]).slice();return s.__wbindgen_free(r[0],r[1]*1,1),n}function j(e,t){const i=p(e,s.__wbindgen_malloc),r=m,n=s.blur(i,r,t);var a=b(n[0],n[1]).slice();return s.__wbindgen_free(n[0],n[1]*1,1),a}function N(e){const t=p(e,s.__wbindgen_malloc),i=m,r=s.invert(t,i);var n=b(r[0],r[1]).slice();return s.__wbindgen_free(r[0],r[1]*1,1),n}function z(e,t){const i=p(e,s.__wbindgen_malloc),r=m,n=s.brighten(i,r,t);var a=b(n[0],n[1]).slice();return s.__wbindgen_free(n[0],n[1]*1,1),a}function F(e){const t=p(e,s.__wbindgen_malloc),i=m,r=s.flip_horizontal(t,i);var n=b(r[0],r[1]).slice();return s.__wbindgen_free(r[0],r[1]*1,1),n}function C(e){const t=p(e,s.__wbindgen_malloc),i=m,r=s.rotate90(t,i);var n=b(r[0],r[1]).slice();return s.__wbindgen_free(r[0],r[1]*1,1),n}async function D(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const i=await e.arrayBuffer();return await WebAssembly.instantiate(i,t)}else{const i=await WebAssembly.instantiate(e,t);return i instanceof WebAssembly.Instance?{instance:i,module:e}:i}}function M(){const e={};return e.wbg={},e.wbg.__wbindgen_init_externref_table=function(){const t=s.__wbindgen_export_0,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)},e}function T(e,t){return s=e.exports,R.__wbindgen_wasm_module=t,v=null,s.__wbindgen_start(),s}async function R(e){if(s!==void 0)return s;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/T2-WebAvanzado-Fork/assets/img_processor_bg-B1xSAJFk.wasm",import.meta.url));const t=M();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:i,module:r}=await D(await e,t);return T(i,r)}const q="/T2-WebAvanzado-Fork/assets/img_processor_bg-B1xSAJFk.wasm";async function P(){const e=await fetch(q);await R(await e.arrayBuffer());const t=document.getElementById("imageInput"),i=document.getElementById("preview"),r=document.getElementById("applyFilter"),n=document.getElementById("filterSelect"),a=document.getElementById("resultCanvas"),y=a.getContext("2d");let d=null,h=null,w;const I=window.indexedDB.open("ImageDatabase",1);I.onerror=function(c){console.error("IndexedDB error:",c)},I.onupgradeneeded=function(c){w=c.target.result,w.createObjectStore("images",{autoIncrement:!0})},I.onsuccess=function(c){w=c.target.result},t.addEventListener("change",async c=>{const o=c.target.files[0];if(o){const l=URL.createObjectURL(o);i.src=l,i.style.display="block";const f=await o.arrayBuffer();d=new Uint8Array(f)}}),r.addEventListener("click",async()=>{if(!d){alert("Seleccione una imagen primero.");return}const c=n.value;let o;try{switch(c){case"resize":o=S(d,200,200);break;case"grayscale":o=W(d);break;case"blur":o=j(d,5);break;case"invert":o=N(d);break;case"brighten":o=z(d,30);break;case"flip_horizontal":o=F(d);break;case"rotate90":o=C(d);break;default:alert("Seleccione un filtro válido.");return}const l=new Blob([o],{type:"image/png"});h=l;const f=URL.createObjectURL(l),u=new Image;u.onload=function(){a.width=u.width,a.height=u.height,y.drawImage(u,0,0),URL.revokeObjectURL(f)},u.src=f,Notification.permission==="granted"?new Notification("Imagen procesada",{body:"El filtro se aplicó con éxito."}):Notification.permission!=="denied"&&Notification.requestPermission().then(_=>{_==="granted"&&new Notification("Imagen procesada",{body:"El filtro se aplicó con éxito."})})}catch(l){console.error(l)}}),document.getElementById("saveImage").addEventListener("click",()=>{if(!h){alert("No hay imagen procesada para guardar.");return}const l=w.transaction(["images"],"readwrite").objectStore("images").add(h);l.onsuccess=function(){alert("Imagen guardada en IndexedDB.")},l.onerror=function(_){console.error("Error al guardar:",_)};const f=document.createElement("a"),u=URL.createObjectURL(h);f.href=u,f.download="processed_image.png",f.click()}),document.getElementById("loadImage").addEventListener("click",()=>{const c=document.getElementById("image-display"),o=document.getElementById("mainView");if(c.style.display==="block"){c.style.display="none",o.style.display="block";return}c.style.display="block",o.style.display="none";const u=w.transaction(["images"],"readonly").objectStore("images").getAll();u.onsuccess=function(_){const E=_.target.result;E.length>0?(imageContainer.innerHTML="",E.forEach((L,B)=>{const O=URL.createObjectURL(L),g=document.createElement("img");g.src=O,g.alt=`Image ${B+1}`,g.style.margin="10px",g.style.maxWidth="200px",g.style.maxHeight="200px",g.style.cursor="pointer",g.addEventListener("click",()=>{const k=document.getElementById("imageInput"),A=new DataTransfer,x=new File([L],`Image_${B+1}.png`,{type:"image/png"});A.items.add(x),k.files=A.files,k.dispatchEvent(new Event("change")),document.getElementById("goBack").click()}),imageContainer.appendChild(g)})):alert("No hay imágenes guardadas.")}}),document.getElementById("goBack").addEventListener("click",()=>{const c=document.getElementById("image-display"),o=document.getElementById("mainView");if(c.style.display==="block"){c.style.display="none",o.style.display="block";return}c.style.display="block",o.style.display="none"})}P();
