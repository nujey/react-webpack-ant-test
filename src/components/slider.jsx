import React from 'react'
import { Button } from 'antd'
import ButtonGroup from '../../node_modules/antd/lib/button/button-group';

class slider extends React.Component {
  render() {
    return (
      <div>
        {/* <Button type="primary" disabled="true">Primary</Button>
        <Button type="danger" ghost="false">danger</Button>
        <Button shape="circle" icon="search" loading></Button> */}
        <ButtonGroup>
          <Button  ghost>L</Button>
          <Button  ghost>O</Button>
          <Button  ghost>V</Button>
          <Button  ghost>E</Button>
          <Button  ghost>小</Button>
          <Button  ghost>r</Button>
        </ButtonGroup>
        <div className="grid-box">
          <span className="item1">111</span>
          <span className="item2">222</span>
          <span className="item3">333</span>
          <span className="item4">444</span>
          <span className="item5">555</span>
          <span className="item6">666</span>
        </div>
        <span>跟随在grid后面的元素</span>
      </div>
    )
  }
}

export default slider