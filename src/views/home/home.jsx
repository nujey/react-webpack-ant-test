import React from 'react'

import "./home.scss"
import { geoCoordMap, BJData, options } from "./echart"

import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

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
    let firstBar = echarts.init(document.getElementById('first-bar'));
    let secondBar = echarts.init(document.getElementById('second-bar'));
    let thirdBar = echarts.init(document.getElementById('third-bar'));
    let echartsArray = []
    this.state.array.forEach(e => {
      e = Math.random() * e
      echartsArray.push(e)
    })
    // options.series = this.state.series
    firstBar.setOption({
      title: {
        text: '小姐姐访问',
        show: true,
        textStyle: {
          color: '#23edef',
          align: 'center'
        }
      },
      xAxis: {
        data: ["萝莉", "少女", "御姐", "小姐姐", "小哥哥", "猪蹄子"],
        nameTextStyle: {
          color: '#23edef'
        },
        axisLine: {
          lineStyle: {
            color: '#23edef',
            type: 'dotted',
            opacity: 1
          }
        },
        axisLabel: {
          interval: 0
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#23edef',
            type: 'dotted',
            opacity: 1
          }
        },
        axisLabel: {
          interval: 1,
          rotate: 15
        }
      },
      series: [{
        name: '销量',
        type: 'bar',
        itemStyle: {
          color: '#23edef',
          opacity: .5,
          borderType: 'dashed'
          // shadowBlur: 2,
          // shadowColor: '#f00',
          // shadowOffsetX: 1,
          // shadowOffsetY: 1
        }, 
        data: echartsArray
      }]
    })
    secondBar.setOption({
      title: { text: '小姐姐PV统计' },
      tooltip: {},
      xAxis: {
        data: ["口红", "包包", "手表", "唇油", "丝袜", "CC"],
        axisLine: {
          lineStyle: {
            color: '#23edef',
            type: 'dotted',
            opacity: 1
          }
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#23edef',
            type: 'dotted',
            opacity: 1
          }
        },
        axisLabel: {
          interval: 1,
          rotate: 15
        }
        // position: 'left'
      },
      series: [{
        name: '销量',
        type: 'bar',
        itemStyle: {
          color: '#23edef',
          opacity: .5,
          borderType: 'dashed'
          // shadowBlur: 2,
          // shadowColor: '#f00',
          // shadowOffsetX: 1,
          // shadowOffsetY: 1
        }, 
        data: echartsArray
      }]
    })
    thirdBar.setOption({
      title: { text: '小姐姐UV统计' },
      tooltip: {},
      xAxis: {
        data: ["java", "javascript", "PHP", "Python", "C", "C++"],
        nameTextStyle: {
          color: '#23edef'
        },
        axisLine: {
          lineStyle: {
            color: '#23edef',
            type: 'dotted',
            opacity: 1
          }
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#23edef',
            type: 'dotted',
            opacity: 1
          }
        },
        axisLabel: {
          interval: 1,
          rotate: -15
        }
      },
      series: [{
        name: '销量',
        type: 'bar',
        itemStyle: {
          color: '#23edef',
          opacity: .5,
          borderType: 'dashed'
          // shadowBlur: 2,
          // shadowColor: '#f00',
          // shadowOffsetX: 1,
          // shadowOffsetY: 1
        }, 
        data: echartsArray
      }]
    })
    // 
    let fourthPie = echarts.init(document.getElementById('fourth-bar'));
    console.log(fourthPie)
    fourthPie.setOption({
      title: {
        text: '访问人群',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b}: {c}({d}%)"
      }, 
      visualMap: {
        show: true,
        min: 0,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      }, 
      series: [{
        name: '访问人群',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        legendHoverLink: true,
        roseType: 'radius',
        data: [
          {value:335, name:'码农'},
          {value:310, name:'程序员'},
          {value:274, name:'萝莉'},
          {value:235, name:'直男'},
          {value:400, name:'少女'}
        ].sort(function(a, b) { return a.value - b.value }),
        label: {
          show: true,
          normal: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
              lineStyle: {
                  color: 'rgba(0, 255, 255, 1)'
              },
              smooth: .1,
              length: 10,
              length2: 20
          }
        },
        itemStyle: {
          normal: {
              color: '#23edef',
              shadowBlur: 500,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        },
      }]
    })
  }
  render() {
    return (
      <div>
        <div className="echarts_main" id="main">
          <div className="first-bar" id="first-bar"></div>
          <div className="first-bar" id="second-bar"></div>
          <div className="first-bar" id="third-bar"></div>
        </div>
        <div className="echarts_main">
          <div className="second-bar" id="fourth-bar"></div>
        </div>
      </div>
    )
  }
}
export default Home