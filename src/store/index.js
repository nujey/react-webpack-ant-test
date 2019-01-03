/**
 * store.js
 */
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
