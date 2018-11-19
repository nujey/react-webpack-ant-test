import React from 'react'
import { Switch, Route } from 'react-router-dom'

const student = (props) => {
  const studentId = parseInt(props.match.params.id, 10)

  const filterApi = {
    students: [
      {id: 1, name: '1名'},
      {id: 2, name: '2名'}
    ],
    all() {
      return this.students
    },
    get(id) {
      const item = e => e.id === id
      return this.students.find(item)
    }
  }

  return (
    <div>
      <h3>学生{studentId}</h3>
    </div>
  )
}
class Student extends React.Component {
  render() {
    return (
      <div>
        <p>这是学生页面</p>
        <Switch>
          <Route exact path="/user/:id" component={student}></Route>
        </Switch>
      </div>
    )
  }
}

export default Student
