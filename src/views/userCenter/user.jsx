import React from 'react'

import Student from './student.jsx'
import TopperScreen from '../components/topper-screen.jsx'

class User extends React.Component{
  render() {
    return(
      <div>
        <TopperScreen />
        <Student />
      </div>
    )
  }
}

export default User