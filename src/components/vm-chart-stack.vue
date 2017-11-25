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
export default {
      name: 'vmChartStack',
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
        // 背景颜色
        bgColor: {
          type: String,
          default: '#fff'
        },
        // 横坐标数据
        yAxisData: {
          type: Array,
          required: true,
          default: function () {
            return ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          }
        },
        lineColor: {
          type: String,
          default: '#dcdcdc'
        },
        // 纵坐标数据
        series: {
          type: Array,
          required: true,
          default: function () {
            return [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          }
        }
      },
      data: function () {
        return {
            // 刻度颜色
          axisColor: {
            type: String,
            default: '#797979'
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
            title: { text: this.title },
            legend: {
              data: this.legendData,
              bottom: 20
            },
            grid: {
            //   left: 30,
            //   right: 15
              left: '3%',
              right: '4%',
              bottom: '10%',
              containLabel: true
            },
            color: this.color,
            tooltip: {
              show: 'true',
              trigger: 'axis',
              axisPoninter: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选line|shadow
              }
            },
            xAxis: {
              type: 'value',
              axisTick: {show: false},
            //   data: this.xAxisData,
              axisLine: {
                lineStyle: {
                  color: this.lineColor
                }
              },
              splitLine: {
                show: false
              }
            },
            yAxis: [
              {
                type: 'categroy',
                axisTick: {show: false},
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: this.lineColor
                  }
                },
                data: this.yAxisData
              },
              {
                type: 'category',
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {show: false},
                splitArea: {show: false},
                splitLine: {show: false},
                data: this.yAxisData
              }
            ],
            series: this.series
          })
        }
      },
      // watch 数据的变化 数据变化时通过renderChart来刷新图表
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
