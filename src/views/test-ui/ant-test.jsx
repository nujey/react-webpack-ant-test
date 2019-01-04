import React, { Component } from 'react'
import { Row, Col, Affix, Button } from 'antd'
import './test.scss'
import Formdemo from './form'

import {A} from './export'

class TestUi extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    top: 100
  }
  componentDidMount() {
    console.log(A)
  }
  handleClick = () => {
    this.setState({
      top: this.state.top + 10
    })
  }
  render() {
    return(
      <div>
        <Row className="row" gutter={10}>
          <Col span={12}>
            <div className="gutter-box">12</div>
          </Col>
          <Col div={12}>
            <div className="gutter-box">12</div>
          </Col>
        </Row>
        <div>______________________________________</div>
        <Row className="row" >
          <Col span={2}>2</Col>
          <Col span={12}>12</Col>
          <Col span={10}>10</Col>
        </Row>
        <div>______________________________________</div>
        <Row className="row">
          <Col span={1}>1</Col>
          <Col span={3}>3</Col>
          <Col span={4}>4</Col>
          <Col span={7}>7</Col>
          <Col span={9}>9</Col>
        </Row>
        <div>______________________________________</div>
        <Row className="row">
          <Col span={2}>2</Col>
          <Col span={4}>4</Col>
          <Col span={4}>4</Col>
          <Col span={6}>6</Col>
          <Col span={8}>8</Col>
        </Row>
        <div>______________________________________</div>
        <Row className="row">
          <Col span={2} offset={1}>2</Col>
          <Col span={2}>2</Col>
          <Col span={2}>2</Col>
          <Col span={2} offset={0}>2</Col>
        </Row>
        <div>______________________________________</div>
        <Row className="row" type="flex" justify="start">
          <Col span={2} offset={1}>2</Col>
          <Col span={2}>2</Col>
          <Col span={2}>2</Col>
          <Col span={2} offset={0}>2</Col>
        </Row>
        <div>______________________________________</div>
        <Row className="row">
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
        </Row>
        <Affix offsetTop={this.state.top}>
          <Button type="primary" onClick={this.handleClick}>test affix</Button>
        </Affix>
        {/* <div style={{height: 1200 +'px'}}></div> */}
        <Formdemo />
      </div>
    )
  }
}

export default TestUi