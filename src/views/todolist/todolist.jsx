import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({ todos, onTodoCLick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onCLick={() => onTodoCLick(todo.id)}/>
    ))}
  </ul>
)

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoCLick: PropTypes.func.isRequired
}

export default TodoList
