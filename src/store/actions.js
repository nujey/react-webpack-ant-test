/**
 * @file
 * nujey
 **/
import { ADD_TODO_DEMO } from './types'

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

