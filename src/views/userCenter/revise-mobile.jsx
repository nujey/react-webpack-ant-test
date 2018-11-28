import React from 'react'
import { Badge, Avatar, Collapse, Calendar } from 'antd'
import { personList } from './mock.js'

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#fd9f00', '#dfbf00', '#00a2ae'];
const Panel = Collapse.Panel;

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
  introduce(list) {
    return list.map(x => {
      const item = <Panel header={x.title} key={x.id} style={{minHeight: 52 + 'px'}}>
                    <p>{x.text}</p>
                   </Panel>
      return item
    })
  }
  render() {
    return (
      <div className="center">
        <div className="center-top">
          <Badge count={5}>
            <Avatar style={{backgroundColor: this.state.color, verticalAlign: 'middle'}}
                    size="large" shape="square"
                    onClick={this.changeAvatar}>
              张小鹿
            </Avatar>
          </Badge>
          <div className="calendar">
            <Calendar fullscreen={false}/>
          </div>
        </div>
        <Collapse accordion style={{marginTop: 20 + 'px'}}>
          {this.introduce(personList)}
        </Collapse>
      </div>
    )
  }
}
export default ReviseCenter
