/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: '/_next/static/css/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-store',
					},
				],
			},
		]
	},
}

export default nextConfig
