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

// Кешируем при установке
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
	)
	self.skipWaiting()
})

// Удаляем старые кэши
self.addEventListener('activate', event => {
	event.waitUntil(
		caches
			.keys()
			.then(keys =>
				Promise.all(
					keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
				)
			)
	)
	self.clients.claim()
})

// Обновляем кэш в фоне при каждом запросе
self.addEventListener('fetch', event => {
	const url = new URL(event.request.url)

	// Пропускаем _next и внешние ресурсы
	if (url.pathname.startsWith('/_next/') || url.origin !== location.origin) {
		return
	}

	event.respondWith(
		caches.open(CACHE_NAME).then(cache =>
			cache.match(event.request).then(cachedResponse => {
				const fetchPromise = fetch(event.request).then(networkResponse => {
					if (networkResponse && networkResponse.status === 200) {
						cache.put(event.request, networkResponse.clone())
					}
					return networkResponse
				})
				return cachedResponse || fetchPromise
			})
		)
	)
})
