/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compiler: {
        removeConsole: {
            exclude: ['error'],
        },
        styledComponents: true,
    }
}

module.exports = nextConfig
