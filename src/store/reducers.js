/**
 * @file reducers
 */

// 工具函数 用于组织多个reducer， 并返回reducer集合
import { combineReducers } from 'redux'

/**
 * @file reducer
 * reducer指定的应用状态的变化如何响应action，并且把状态的变化同步到store
 * 描述了actions发生
 * 不会描述应用如何更新
 * reducer实际上是一个纯函数 接收旧的state和action，返回新的state
 */

/**
 * 保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
 * 修改传入参数；
 * 执行有副作用的操作，如 API 请求和路由跳转；
 * 调用非纯函数，如 Date.now() 或 Math.random()
 */

/**
 * 现在只需要谨记 reducer 一定要保持纯净
 * 只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。
 */
// 引入默认值
import defaultState from './state'
import { VisibilityFilters } from './actions'

const { SHOW_ALL } = VisibilityFilters
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
  console.log(action.type)
  if (action.type === 'SET_INFO_LIST') {
    return action.data
  } else {
    return state
  }
}

function todoList (state = defaultState.todos, action) {
  switch (action.type) {
    case 'REMOVE_TODO':
      return state.slice(0).splice(action.index, 1)
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, { completed: !todo.completed })
          }
          return todo
        })
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// 导出所有的reducer
export default combineReducers({ pageTitle, infoList, todoList, visibilityFilter })
