const documentation = [
    { text: 'What is OSC Proximity Chat', link: '/guide/what-is-proximity'},
    { text: 'Getting Started', link: '/guide/getting-started'}
]

export default {
    title: 'OSC Proximity Chat',
    logo: 'geoArt.png',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/what-is-proximity'},
            { text: 'About', link: 'about'}
        ],
        sidebar: {
            '/guide/': documentation
        }
    }
}