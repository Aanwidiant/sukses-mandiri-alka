import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'My Next.js App',
        short_name: 'My App',
        description: 'A description of your app for SEO purposes',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/image/logo/logo.svg',
                sizes: 'any',
                type: 'image/svg+xml'
            },
            {
                src: '/image/logo/logo.png',
                sizes: '250x250',
                type: 'image/png'
            }
        ]
    }
}