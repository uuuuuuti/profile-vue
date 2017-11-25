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
    name: 'VmChartYearPop',
    props: {
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
            bottom: 95,
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
              show: false
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
  
