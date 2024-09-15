/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: "storage.yandexcloud.net"
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'ckbgp9rpfrgtqc4g.public.blob.vercel-storage.com'
			},

		]
	}
}

export default nextConfig;