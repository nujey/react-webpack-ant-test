/**
 * @file
 * nujey
 **/
import { ADD_TODO_DEMO, REMOVE_TODO } from './types'

export function addTodoDemo(data) {
  return {
    type: ADD_TODO_DEMO,
    data
  }
}
// 在传统的flux中，调用action的时候会触发一个dispatch
// 不这么用现在
// export function addTodoDemoFlux(data) {
//   dispatch({
//     type: ADD_TODO_DEMO,
//     data
//   })
// }

export function removeTodo (data) {
  console.log(data)
  // return (dispatch) => { dispatch({ type: REMOVE_TODO, data: data })}
  return { type: 'REMOVE_TODO', data }
}

export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

export function setInfoList (data) {
  return (dispatch, getState) => {
    window.fetch('/api/getInfoList', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json()
    }).then(data => {
      let { code } = data
      if (code === 200) {
        dispatch({ type: 'SET_INFO_LIST', data: data })
      }
    })
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}
