/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'jrsvalzjgpomjihlwsao.supabase.co',
				pathname: '/storage/v1/object/public/**',
			},
		],
	},
}

module.exports = nextConfig
