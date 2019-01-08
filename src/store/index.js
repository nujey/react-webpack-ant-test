/**
 * store.js
 * @file 使用 action 来描述“发生了什么”，和使用 reducers 来根据 action 更新 state 的用法
 */
// Store 就是把它们联系到一起的对象。Store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器
// app
import { applyMiddleware, createStore } from "redux";

// applyMiddleware: redux通过该函数来使用中间件
// applicationCache
// applyTransform
// createStore：用于创建store事例

import thunk from 'redux-thunk'

import reducers from './reducers'


let store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
