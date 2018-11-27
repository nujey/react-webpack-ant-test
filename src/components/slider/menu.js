"use strict";
exports.__esModule = true;

exports.sliderName = {
    sliderName: '侧边框'
};

exports.menus = [{
    label: '首页',
    icon: 'pie-chart',
    path: '/home',
    code: 'home',
    children: []
}, {
    label: '账号中心',
    icon: 'user',
    path: '/user',
    code: 'user',
    children: [{
        label: '个人中心',
        path: '/user/:id',
        code: 'user-item1'
    }]
}, {
    label: '商务案例',
    icon: 'appstore',
    path: '/home',
    code: 'demo',
    children: [{
        label: '个人博客',
        path: '/user/:id',
        code: 'demo-item1'
    }, {
        label: '初创公司',
        path: '/user/:id',
        code: 'demo-item2'
    }, {
        label: '精品小店',
        path: '/user/:id',
        code: 'demo-item3'
    }, {
        label: '毕业设计',
        path: '/user/:id',
        code: 'demo-item4'
    }]
}, {
    label: '测试页面',
    icon: 'inbox',
    path: "/test-ui",
    code: "test-ui",
    children: []
}]