const CACHE_NAME = "maos-estendidas-v5";

const urlsToCache = [

"./",
"./index.html",
"./admin.html",
"./login.html",
"./manifest.json",
"./icon-192.png",
"./icon-512.png"

];

/* INSTALAR */

self.addEventListener("install", event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(urlsToCache);

})

);

self.skipWaiting();

});


/* ATIVAR */

self.addEventListener("activate", event=>{

event.waitUntil(

caches.keys()

.then(keys=>{

return Promise.all(

keys.map(key=>{

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

});


/* BUSCAR */

self.addEventListener("fetch", event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});
