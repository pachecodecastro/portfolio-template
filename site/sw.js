// Bump CACHE whenever any file in SHELL changes, so installed copies update.
const CACHE = 'app-v2';

const SHELL = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'lib/format.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((hit) => hit || fetch(event.request)).catch(() => {
      // Offline and not cached: show the app shell for page loads, fail the rest.
      if (event.request.mode === 'navigate') return caches.match('index.html');
      return Response.error();
    })
  );
});
