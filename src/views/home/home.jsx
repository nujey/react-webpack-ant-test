import React from 'react'

import "./home.scss"
import { geoCoordMap, BJData, options } from "./echart"

import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar';

class Home extends React.Component{
  state = {
    series: [],
    array: [5, 20, 30, 40, 15]
  }
  converData(data = []) {
    let res = []
    data.forEach((element) => {
      const fromCoord = geoCoordMap[element.name]
      const toCoord = geoCoordMap[element[1].name]
      if (fromCoord && toCoord) {
        res.push([{coord: fromCoord}, {coord: toCoord}])
      }
    })
    return res
  }
  componentDidMount() {
    let tempArr = []
    const arr = [['北京', BJData]]
    arr.forEach((item, i) => {
      tempArr.push({
        name: item[0] + 'top20',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: '#fff',
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: '#0fd9cf',
            width: 0,
            curveness: 0.2
          }
        },
        data: this.converData(item[1])
      }) 
    })
    this.setState({
      series: tempArr
    })
    var firstBar = echarts.init(document.getElementById('first-bar'));
    var secondBar = echarts.init(document.getElementById('second-bar'));
    var thirdBar = echarts.init(document.getElementById('third-bar'));
    let echartsArray = []
    this.state.array.forEach(e => {
      e = Math.random() * e
      echartsArray.push(e)
    })
    options.series = this.state.series
    firstBar.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["萝莉", "少女", "御姐", "小姐姐", "口红", "围巾"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: echartsArray
      }]
    })
    secondBar.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["萝莉", "少女", "御姐", "小姐姐", "口红", "围巾"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: echartsArray
      }]
    })
    thirdBar.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["萝莉", "少女", "御姐", "小姐姐", "口红", "围巾"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: echartsArray
      }]
    })
  }
  render() {
    return (
      <div className="echarts_main" id="main">
        <div className="first-bar" id="first-bar"></div>
        <div className="first-bar" id="second-bar"></div>
        <div className="first-bar" id="third-bar"></div>
      </div>
    )
  }
}
export default Home