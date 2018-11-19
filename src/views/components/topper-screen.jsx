import React from 'react'
import { DatePicker, Input, Icon } from 'antd';
import './screen.scss'
import Search from 'antd/lib/input/Search';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker
// const Search = Input.Search
class TopperScreen extends React.Component {
  state = {
    dateTime: ''
  }
  hanldeChangeDate(date, dateString) {
    console.log(date.format('YYYY-MM-DD HH:mm:ss'), dateString)
  }
  render() {
    return (
      <div className="topper">
        <div className="time-item1">
          <DatePicker placeholder="选择年月日" onChange={this.hanldeChangeDate}/>
        </div>
        <div className="time-item2">
          <MonthPicker placeholder="选择月份"/>
        </div>
        <div className="time-item3">
          <RangePicker placeholder={['开始日期', '结束日期']}/>
        </div>
        <div className="time-item4">
          <WeekPicker placeholder="选择星期"/>
        </div>
        <div className="search-item">
          <Input placeholder="请输入名称"/>
          <Icon type="search" className="search-icon"/>
        </div>
      </div>
    )
  }
}
export default TopperScreen