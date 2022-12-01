
const VERSION = 'v1';
self.addEventListener('install', event => {
    event.waitUntil(preCache())
});

self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method !== 'GET') {
        return;
    }
    //search in cahe
    event.respondWith(cachedResponse(request))
    //update cache
    event.waitUntil(updateCache(request))
})

async function preCache() {
    const cache= await caches.open(VERSION);
    return cache.addAll([
        // './',
        // './index.html',
        // './assets/index.js',
        // './assets/MediaPlayer.js',
        // './assets/plugins/AutoPlay.js',
        // './assets/plugins/AutoPause.js',
        // './assets/style.css',
        // './assets/19-2000.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}
 async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
 }