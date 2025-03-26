const CACHE_NAME = 'as-portfolio-v1'
const urlsToCache = [
	'/',
	'/about',
	'/services/design',
	'/services/development',
	'/manifest.json',
	'/icons/as-icon-192.png',
	'/icons/as-icon-512.png',
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches
			.match(event.request)
			.then(response => response || fetch(event.request))
	)
})
