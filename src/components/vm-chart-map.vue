<template>
  <div class="vm-chart-map vm-panel">
    <div class="panel-body" :id="this.id" :style="{ height: height + 'px'}">
    </div>
  </div>
</template>
<script>
  import chartTheme from '@/theme/chartTheme.js'
  import geoCoordMap from '@/utils/geoCoordMap.js'
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/line')
  // 引入地图
  require('echarts/lib/chart/map')
  require('echarts/map/js/china')
  // 引入提示框和标题组件
  // require('echarts/lib/component')
  require('echarts/lib/component/graphic')
  require('echarts/lib/component/grid')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/axisPointer')
  require('echarts/lib/component/polar')
  require('echarts/lib/component/geo')
  require('echarts/lib/component/parallel')
  require('echarts/lib/component/singleAxis')
  require('echarts/lib/component/brush')
  require('echarts/lib/component/calendar')

  require('echarts/lib/component/title')

  require('echarts/lib/component/dataZoom')
  require('echarts/lib/component/visualMap')

  require('echarts/lib/component/markPoint')
  require('echarts/lib/component/markLine')
  require('echarts/lib/component/markArea')

  require('echarts/lib/component/timeline')
  require('echarts/lib/component/toolbox')

  export default {
    name: 'VmChartMap',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 400
      },
      // 图表形状颜色, ecahrts依次选择颜色渲染
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
      // 纵坐标数据
      data: {
        type: Array,
        required: true,
        default: function () {
          return [
            {
              name: '广州',
              value: 111
            },
            {
              name: '深圳',
              value: 150
            },
            {
              name: '北京',
              value: 90
            },
            {
              name: '上海',
              value: 190
            },
            {
              name: '南京',
              value: 290
            },
            {
              name: '杭州',
              value: 390
            },
            {
              name: '成都',
              value: 40
            }

          ]
        }
      },
      serName: {
        type: String,
        required: false,
        default: function () {
          return 'author'
        }
      }
    },
    data: function () {
      return {
        // 刻度颜色
        axisColor: '#797979',
        // 分割线颜色
        splitLineColor: '#dcdcdc',
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
      },
      convertData: function () {
        var convertData = []
        this.data.forEach(function (elem) {
          var geoCoord = geoCoordMap[elem.name]
          if (geoCoord) {
            convertData.push({
              name: elem.name,
              value: geoCoord.concat(elem.value)
            })
          }
        })
        return convertData
      },
      calMaxValue: function () {
        var values = []
        this.data.forEach(function (elem) {
          values.push(elem.value)
        })
        let maxValue = Math.max.apply(null, values)
        let maxValueToUp = Math.ceil(maxValue / 10) * 10
        return maxValueToUp
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
          backgroundColor: '#404a59',
          title: {
            text: this.title,
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              return params.name + ' : ' + params.value[2]
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: [this.serName],
            textStyle: {
              color: '#fff'
            }
          },
          visualMap: {
            min: 0,
            max: this.calMaxValue,
            calculable: true,
            inRange: {
              color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [
            {
              name: 'author',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: this.convertData,
              symbolSize: 12,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              }
            }
          ]
        })
      }
    },
    watch: {
      data: function () {
        this.renderChart()
      }
    },
    mounted: function () {
      this.renderChart()
    }
  }
  
</script>
