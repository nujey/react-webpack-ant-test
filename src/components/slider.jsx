import React from 'react'
import { Button } from 'antd'
import ButtonGroup from '../../node_modules/antd/lib/button/button-group';

class slider extends React.Component {
  render() {
    return (
      <div>
        <div className="grid-box">
          <span className="item1">111</span>
          <span className="item2">222</span>
          <span className="item3">333</span>
          <span className="item4">444</span>
          <span className="item5">555</span>
          <span className="item6">666</span>
        </div>
        <div className="shandow shadow-box"></div>
      </div>
    )
  }
}

export default slider