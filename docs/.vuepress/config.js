const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    title: "折腾的人生",
    description: "记录折腾的人生",
    head: [
        ['link', { rel: "icon", href: "/favicon.ico" }],
        ['meta', { name: 'author', content: '折腾的人生' }],
        ['meta', { name: 'keywords', content: 'vuepree介绍, vuepress说明, 折腾的人生' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#2196f3' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],

    plugins: {

        '@vuepress/last-updated':
        {
            transformer: (timestamp, lang) => {

                return moment(timestamp).format("LLLL")
            }
        },
        '@vuepress/pwa':
        {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'Hewie8023',
            repo: 'docs',
            clientId: 'e55b3f3023b84f6e0884',
            clientSecret: 'c8b22b70fde79a180720928fd2b44fc502ddf844',
            autoCreateIssue: true,
        }
    },
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: [
        ],
        sidebar: {
            '/css/': [
                'c1',
                'c2',
                'c3',
            ],
            '/css1/': [
                'c11',
                'c12',
                'c13',
            ],
        }
    }
}