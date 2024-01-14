const documentation = [
    { 
        text: 'Introduction',
        collapsible: true,
        items: [
            { text: 'Getting Started', link: '/guide/getting-started'},
            { text: 'Developer Tools', link: '/guide/dev-tools'},
        ]
    },
    { 
        text: 'Frontend Documentation',
        collapsible: true,
        items: [
            { text: 'React Native', link: '/guide/react-native.md'}
        ]
    },
    {
        text: 'Backend Documentation',
        collapsible: true,
        items: [
            { text: 'Websocket Implementation', link: '/guide/websockets.md'}
        ]
    }
];

export default {
    title: 'OSC Proximity Chat',
    logo: '/imgs/cat.jpeg',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/getting-started'},
            { text: 'Contacts', link: 'contact'}
        ],
        sidebar: {
            '/guide/': documentation,
        }
    }
}
