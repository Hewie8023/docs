const headConfig = require('./config/headConfig');
const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')



module.exports = {
    title: "折腾的人生",
    description: "记录折腾的人生",
    head: headConfig,

    plugins: pluginsConfig,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: navConfig,
        sidebar: sidebarConfig
    }
}