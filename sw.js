const STATIC_CACHE="static";
//Se declara un vector con la ubicación y el nombre de los archivos que forman parte de tu pagina
const APP_SHELL=[
    "/",
    "index.html",
    "style/style.css",
    "js/functions.js",
    "js/main.js",
    "js/script1.js",
    "js/script2.js",
    "img/perritos.png",
    "img/icon.png"
]
//En el evento install se agregan los archivos a la caché, se ejecuta cuando se abre la app automatica
self.addEventListener("install",(e)=>{
    const cacheStatic=caches
    .open(STATIC_CACHE)
    .then((cache)=>cache.addAll(APP_SHELL));

    e.wait.Until(cacheStatic);
});
//En el evento fetch se envian los archivos a la pagina web o paginas, se ejecutan cuando lo solicita la página
self.addEventListener("fetch", (e) =>{
    console.log("fetch1 ", e.request);
    e.respondWith(
        caches
        .match(e.request)
        .then(res=> res || fetch(e.request))
        .catch(console.log)

        );
});
