/**
 * @file state.js
 */

 export default {
   pageTitle: '页面标题', // 同步数据
   infoList: [], // 异步请求数据
   visibilityFilter: 'SHOW_ALL', // 显示todo
   todos: [{
     text: 'redux todo1',
     completed: true
   }, {
     text: 'redux todo2',
     completed: false
   }]
 }
