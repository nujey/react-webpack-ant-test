import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './test.scss'

class TestUi extends Component {
  render() {
    return(
      <div>
        <Row className="row">
          <Col span={12}>12</Col>
          <Col span={12}>12</Col>
        </Row>
        <Row className="row">
          <Col span={2}>2</Col>
          <Col span={12}>12</Col>
          <Col span={10}>10</Col>
        </Row>
        <Row className="row">
          <Col span={1}>1</Col>
          <Col span={3}>3</Col>
          <Col span={4}>4</Col>
          <Col span={7}>7</Col>
          <Col span={9}>9</Col>
        </Row>
        <Row className="row">
          <Col span={2}>2</Col>
          <Col span={4}>4</Col>
          <Col span={5}>5</Col>
          <Col span={6}>6</Col>
          <Col span={8}>8</Col>
        </Row>
      </div>
    )
  }
}

export default TestUi