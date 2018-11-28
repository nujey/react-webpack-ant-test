import React from 'react';
import "./center.scss";
import Student from './student.jsx'
import ReviseCenter from './revise-mobile.jsx'

import TopperScreen from '../components/topper-screen.jsx'

const Revice = () => {
  return <div>
    <ReviseCenter name="个人中心"/>
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
        {+this.props.match.params.id === 1 ? <TopperScreen /> : ''}
        {+this.props.match.params.id === 1 ? <Student /> : <Revice />}
      </div>
    )
  }
}

export default User