import React from 'react';
import "./center.scss";
import Student from './student.jsx'
import ReviseCenter from './revise-mobile.jsx'

import TopperScreen from '../components/topper-screen.jsx'

const Revice = () => {
  return <div>
    <ReviseCenter name="修改个人中心的props"/>
  </div>
}
class User extends React.Component{
  state = {
    routeType: 0
  }
  // componentDidUpdate() {
  //   console.log(this.props.match.params.id, 'update')
  //   this.setState({
  //     routeType: this.props.match.params.id
  //   })
  // }
  componentDidMount()  {
    console.log(this.props.match.params.id, 'mounted')
    // this.setState({
    //   routeType: this.props.match.params.id
    // })
  }
  render() {
    return(
      <div>
        <TopperScreen />
        {+this.props.match.params.id === 0 ? <Student /> : <Revice />}
      </div>
    )
  }
}

export default User