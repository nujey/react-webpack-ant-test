import React from 'react'

import "./home.scss"
import { geoCoordMap, BJData, options } from "./echart"

import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar';

class Home extends React.Component{
  state = {
    series: [],
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
    var myChart = echarts.init(document.getElementById('main'));
    options.series = this.state.series
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
  render() {
    return (
      <div className="echarts_main" id="main">111111</div>
    )
  }
}
export default Home