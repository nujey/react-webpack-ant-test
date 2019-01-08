import React, { Component } from 'react'
import { Row, Col, Affix, Button } from 'antd'
import './test.scss'
import Formdemo from './form'
import { connect } from 'react-redux'
import { removeTodo, setVisibilityFilter } from '../../store/actions'

const Todo = ({ onClick, completed, text }) => (
  <li onClick = { onClick } style = { {textDecoration : completed ? 'line-through' : 'none'}}>{text}</li>
)

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    { todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick = {() => onTodoClick(index)} />
    ))}
  </ul>
)
// const Link = ({ active, children, onCLick }) => {
//   if (active) {
//     return <span>{children}</span>
//   }
//   return <a href=""
//             onClick={e => {
//                       e.preventDefault()
//                       onClick()
//                     }}>
//           {children}
//           </a>
// }

class TestUi extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    top: 100
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

        <div className="footer">
          <TodoList />
        </div>
      </div>
    )
  }
}

const getShowTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACtIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getShowTodos(state.todos, state.visibilityFilter),
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: id => {
      dispatch(removeTodo(id))
    },
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default connect(mapStateToProps, mapDispatchToProps)(TestUi)
