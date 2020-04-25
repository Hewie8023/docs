const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    base:"/docs/",
    title: "折腾的人生",
    description: "记录折腾的人生",
    head: [
        ['link', { rel: "icon", href: "/favicon.ico" }],
        ['meta', { name: 'author', content: '折腾的人生' }],
        ['meta', { name: 'keywords', content: 'vuepree介绍, vuepress说明, 折腾的人生' }]
    ],

    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    
                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ],
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