
const documentation = [
    { 
        text: 'Introduction',
        collapsible: true,
        items: [
            { text: 'What is OSC Proximity Chat', link: '/guide/what-is-proximity'},
            { text: 'Getting Started', link: '/guide/getting-started'},
            {text: 'Developer Tools', link: '/guide/dev-tools'}
        ]
    }
]

export default {
    title: 'OSC Proximity Chat',
    logo: '/imgs/cat.jpeg',
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