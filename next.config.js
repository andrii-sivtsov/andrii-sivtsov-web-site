/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: '/_next/(.*)',
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
