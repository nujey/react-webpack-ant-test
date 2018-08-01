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

      </div>
    )
  }
}

export default slider