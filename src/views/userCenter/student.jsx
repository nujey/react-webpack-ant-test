import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Table } from 'antd'

const columns = [{
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '公司',
  dataIndex: 'company'
}, {
  title: '住址',
  dataIndex: 'adress'
}]
const data = []
for(let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `张小鹿${i}`,
    age: i,
    adress: `张小鹿的帅气爸爸有${i}个家`,
    company: '张小鹿的公司'
  })
}
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
  const rowSelection = {
    columnWidth: 20,
    // columnTitle: '多选'
    // selectedRowKeys: [3],
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows)
    },
    getCheckboxProps: record => ({
      disabled: record.key === 5 || record.key === 8,
      name: record.key + '不能选择'
    })
  }
  return (
    <div>
      <Table columns={columns}
             dataSource={data}
             rowSelection={rowSelection}
             bordered 
             title={() => '表头'}
             footer={() => '表尾巴'}/>
    </div>
  )
}
class Student extends React.Component {
  // state = {
  //   rowSelection: {}
  // }
  // componentWillMount() {
  //   this.setState(rowSelection)
  // }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/user/:id" component={student}></Route>
        </Switch>
      </div>
    )
  }
}

export default Student
