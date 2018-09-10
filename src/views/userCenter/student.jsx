import React from 'react'
import { Switch, Route } from 'react-router-dom'

const student = (props) => {
  console.log(props)
  const studentId = parseInt(props.match.params.id, 10)
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
