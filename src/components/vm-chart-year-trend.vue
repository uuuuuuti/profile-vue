<template>
  <div class="vm-chart-bar vm-panel">
    <div class="panel-body" :id="this.id" :style="{ height: height + 'px'}">
    </div>
  </div>
</template>
<script>
  import chartTheme from '@/theme/chartTheme.js'
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  require('echarts/lib/component/graphic')
  require('echarts/lib/component/grid')
  require('echarts/lib/component/axisPointer')
  require('echarts/lib/component/polar')
  require('echarts/lib/component/geo')
  require('echarts/lib/component/parallel')
  require('echarts/lib/component/singleAxis')
  require('echarts/lib/component/brush')
  require('echarts/lib/component/calendar')

  require('echarts/lib/component/dataZoom')
  require('echarts/lib/component/visualMap')

  require('echarts/lib/component/markPoint')
  require('echarts/lib/component/markLine')
  require('echarts/lib/component/markArea')

  require('echarts/lib/component/timeline')
  require('echarts/lib/component/toolbox')

  export default {
    name: 'VmChartYearTrend',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: '柱形图'
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrt依次选择颜色渲染
      color: {
        type: Array,
        default: function () {
          return chartTheme.color
        }
      },
      titleColor: {
        type: String,
        default: function () {
          return '#fff'
        }
      },
      backgroundColor: {
        type: String,
        default: function () {
          return '#344b58'
        }
      },
      axisPointerColor: {
        type: String,
        default: function () {
          return '#fff'
        }
      },
      gridColor: {
        type: String,
        default: function () {
          return '#fff'
        }
      },
      legendColor: {
        type: String,
        default: function () {
          return '#90979c'
        }
      },
      xAxisColor: {
        type: String,
        default: function () {
          return '#333'
        }
      },
      yAxisColor: {
        type: String,
        default: function () {
          return '#333'
        }
      },
      axisLineColor: {
        type: String,
        default: function () {
          return '#90979c'
        }
      },
      borderColor: {
        type: String,
        default: function () {
          return '#90979c'
        }
      },
      // 横坐标数据
      xAxisData: {
        type: Array,
        required: true,
        default: function () {
          return [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011]
        }
      },
      // 纵坐标数据
      series: {
        type: Array,
        required: true,
        default: function () {
          return [{
            name: '被引量',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
              normal: {
                // color: 'rgba(255,144,128,1)',
                label: {
                  show: true,
                  position: 'insiderTop',
                  formatter: function (p) {
                    return p.value > 0 ? (p.value) : ''
                  }
                }
              }
            },
            data: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078]
          }, {
            name: '下载量',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                // color: 'rgba(0,191,183,1)',
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: 'top',
                  formatter: function (p) {
                    return p.value > 0 ? (p.value) : ''
                  }
                }
              }
            },
            data: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
          }, {
            name: '总数',
            type: 'line',
            stack: '总量',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
              normal: {
                // color: 'rgba(252,230,48,1)',
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: 'top',
                  formatter: function (p) {
                    return p.value > 0 ? (p.value) : ''
                  }
                }
              }
            },
            data: [1036,
              3693,
              2962,
              3810,
              2519,
              1915,
              1748,
              4675,
              6209,
              4323,
              2865,
              4298]
          }]
        }
      }
    },
    data: function () {
      return {
        // 刻度颜色
        axisColor: {
          type: String,
          default: '#333'
        },
        // 分割线颜色
        splitLineColor: {
          type: String,
          default: '#dcdcdc'
        },
        chart: null
      }
    },
    computed: {
      // 生成一个随机id, 实现图表组件的复用
      id: function () {
        return parseInt(Math.random() * 1000000)
      },
      legendData: function () {
        let legendData = []
        this.series.forEach(function (elem) {
          legendData.push(elem.name)
        })
        return legendData
      }
    },
    methods: {
      renderChart: function () {
        if (this.chart) {
          this.chart.dispose()
        }
        // 初始化echart
        this.chart = echarts.init(document.getElementById(this.id))
        // 自定义eChart样式 官方配置指南(http://echarts.baidu.com/option.html#yAxis.splitLine.lineStyle.color)
        this.chart.setOption({
          backgroundColor: this.backgroundColor,
          title: {
            text: this.title,
            x: '4%',
            textStyle: {
              color: this.titleColor,
              fontSize: '22'
            }
          },
          legend: {
            x: '4%',
            top: '11%',
            textStyle: {
              color: this.legendColor
            },
            data: this.legendData
          },
          grid: {
            borderWidth: 0,
            top: 110,
            bottom: 100,
            right: 20,
            left: 40,
            textStyle: {
              color: this.gridColor
            }
          },
          calculable: true,
          color: this.color,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              textStyle: {
                color: this.axisPointerColor
              }
            }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: this.xAxisColor
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            data: this.xAxisData
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: this.yAxisColor
              }
            },
            splitLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          },
          dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#2f4053'
            },
            textStyle: {
              color: this.textColor
            },
            fillerColor: '#1568a6',
            borderColor: this.borderColor
          }, {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }],
          series: this.series
        })
      }
    },
    watch: {
      xAxisData: function () {
        this.renderChart()
      },
      series: function () {
        this.renderChart()
      }
    },
    mounted: function () {
      this.renderChart()
    }
  }
</script>
