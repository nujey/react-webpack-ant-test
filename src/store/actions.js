/**
 * @file
 * nujey
 **/

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
