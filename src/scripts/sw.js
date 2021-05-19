import 'regenerator-runtime';
import CacheHelper from "./utils/cache-helper";

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', event => {
    console.log('installing SW...');
    self.skipWaiting();

    // TODO: Caching App Shell Resource
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', event => {
    console.log('Activating Service Worker ...');

    // TODO: Delete old caches
    event.waitUntil(CacheHelper.deleteOldChache());
});

self.addEventListener('fetch', event => {
    console.log(event.request);

    event.respondWith(CacheHelper.revalidateChache(event.request));
});
