import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../store/actions'

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
const StudentList = (props) => {
  // console.log(props)
  const rowSelection = {
    columnWidth: 20,
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(selectedRowKeys, selectedRows)
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
  constructor(props) {
    super(props)
  }
  state = {
    selectedRowKeys: [],
    loading: false
  }
  start = () => {
    this.setState({ loading: true})
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }
  componentDidMount = () => {
    // console.log(this.props)
    let { setPageTitle, setInfoList } = this.props
    setPageTitle('新的页面标题')
    console.log(this.props)
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    let { pageTitle } = this.props
    return (
      <div>
        <div>{ pageTitle }</div>
        <Switch>
          {/* <Route exact path="/user/:id" component={student} id="student"></Route> */}
          <Route exact path="/user/:id">
            <StudentList id="student"/>
          </Route>
        </Switch>
      </div>
    )
  }
}

// mapStateToProps 将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle (data) {
      dispatch(setPageTitle(data))
    },
    setInfoList (data) {
      dispatch(setInfoList(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student)
