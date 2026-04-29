const CACHE_NAME = 'budgetku-v1';
const urlsToCache = [
  '/BudgetKu2/',
  '/BudgetKu2/index.html',
  '/BudgetKu2/manifest.json',
  '/BudgetKu2/icon-192.png',
  '/BudgetKu2/icon-512.png'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
