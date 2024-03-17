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

		]
	}
}

export default nextConfig;
