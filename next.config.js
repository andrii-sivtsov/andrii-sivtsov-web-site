if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js')
			.then(reg => {
				console.log('ServiceWorker зарегистрирован:', reg.scope)
			})
			.catch(err => {
				console.error('ServiceWorker не зарегистрирован:', err)
			})
	})
}
