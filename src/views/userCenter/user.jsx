import React from 'react'

import Student from './student.jsx'
import ReviseCenter from './revise-mobile.jsx'

import TopperScreen from '../components/topper-screen.jsx'

const Revice = () => {
  return <div>
    <ReviseCenter name="修改个人中心的props"/>
  </div>
}
class User extends React.Component{
  render() {
    return(
      <div>
        <TopperScreen />
        <Student />
        <Revice />
      </div>
    )
  }
}

export default User