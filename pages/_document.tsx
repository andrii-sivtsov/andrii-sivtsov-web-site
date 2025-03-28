import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/icons/as-icon-192.png' />
				<meta name='theme-color' content='#000000' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='AS Portfolio' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='application-name' content='AS Portfolio' />
			</Head>
			<body>
				<Main />
				<NextScript />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							if ('serviceWorker' in navigator) {
								window.addEventListener('load', async function() {
									try {
										const registration = await navigator.serviceWorker.register('/sw.js');
										console.log('ServiceWorker registration successful with scope:', registration.scope);
									} catch (error) {
										console.error('ServiceWorker registration failed:', error);
									}
								});
							}
						`,
					}}
				/>
			</body>
		</Html>
	)
}
