import React from 'react'
import { Badge, Avatar } from 'antd'

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#fd9f00', '#dfbf00', '#00a2ae'];

class ReviseCenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: colorList[0]
    }
  }
  changeAvatar = () => {
    const index = colorList.indexOf(this.state.color)
    this.setState({
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
    })
  }
  render() {
    return (
      <div className="center">
        <Badge count={5}>
          <Avatar style={{backgroundColor: this.state.color, verticalAlign: 'middle'}}
                  size="large" shape="square"
                  onClick={this.changeAvatar}>
            张小鹿
          </Avatar>
        </Badge>
      </div>
    )
  }
}
export default ReviseCenter
