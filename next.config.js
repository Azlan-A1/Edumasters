/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.graphassets.com', 'lh3.googleusercontent.com'],
	},
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
	},
}

module.exports = nextConfig
