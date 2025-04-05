import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
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
	}, [])

	return <Component {...pageProps} />
}
