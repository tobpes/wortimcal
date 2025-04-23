self.addEventListener('install', event => {
  console.log('Service Worker installiert');
  event.waitUntil(
    caches.open('gfos-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon/favicon.ico',
        '/favicon/android-chrome-192x192.png',
        '/favicon/android-chrome-512x512.png',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
