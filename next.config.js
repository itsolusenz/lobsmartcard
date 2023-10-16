/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.laabamone.com',
                port: '',
                pathname: '/Lobsmart/images/**',
            },
        ],
    },
    fs: false,
}

module.exports = nextConfig
