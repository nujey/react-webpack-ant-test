/**
 * @file reducers
 */

// 工具函数 用于组织多个reducer， 并返回reducer集合
import { combineReducers } from 'redux'

// 引入默认值
import defaultState from './state'

// 一个reducer 实际上就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
  // 不同的action 有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}

function infoList (state = defaultState.infoList, action) {
  if (action.type === 'SET_INFO_LIST') {
    return action.data
  } else {
    return state
  }
}

// 导出所有的reducer
export default combineReducers({ pageTitle, infoList })
