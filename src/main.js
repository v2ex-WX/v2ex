import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['pages/logs/main', '^pages/index/main', 'pages/node/main', 'pages/hot/main', 'pages/more/main'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            selectedColor: '#fe9f28',
            list: [{
                pagePath: 'pages/index/main',
                text: '首页',
                iconPath: 'static/nav_home@2x.png',
                selectedIconPath: 'static/nav_home_active@2x.png'
            },
            {
                pagePath: 'pages/node/main',
                text: '节点',
                iconPath: 'static/nav_loan@2x.png',
                selectedIconPath: 'static/nav_loan_active@2x.png'
            },
            {
                pagePath: 'pages/hot/main',
                text: '最热',
                iconPath: 'static/nav_top@2x.png',
                selectedIconPath: 'static/nav_top_active@2x.png'
            },
            {
                pagePath: 'pages/more/main',
                text: '我的',
                iconPath: 'static/nav_mine@2x.png',
                selectedIconPath: 'static/nav_mine_active@2x.png'
            }
            ]
        },
    }
}
