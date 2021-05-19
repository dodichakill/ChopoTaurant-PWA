import 'regenerator-runtime';
import CacheHelper from "./utils/cache-helper";

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', event => {
    self.skipWaiting();

    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', event => {
    event.waitUntil(CacheHelper.deleteOldChache());
});

self.addEventListener('fetch', event => {
    event.respondWith(CacheHelper.revalidateChache(event.request));
});
