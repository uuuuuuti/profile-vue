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
  require('echarts/lib/chart/graph')
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
    name: 'vmChartRelation',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: '关系图'
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
      // 节点数据
      categories: {
        type: Array,
        required: true,
        default: function () {
          return [{
            name: '朋友',
            itemStyle: {
              normal: {
                color: '#009800'
              }
            }
          }, {
            name: '战友',
            itemStyle: {
              normal: {
                color: '#4592FF'
              }
            }
          }, {
            name: '亲戚',
            itemStyle: {
              normal: {
                color: '#3592F'
              }
            }
          }]
        }
      },
      // 纵坐标数据
      data: {
        type: Array,
        required: true,
        default: function () {
          return [{
            name: '徐贱云',
            draggable: true
          }, {
            name: '冯可梁',
            category: 1,
            draggable: true
          }, {
            name: '邓志荣',
            category: 1,
            draggable: true
          }, {
            name: '李荣庆',
            category: 1,
            draggable: true
          }, {
            name: '郑志勇',
            category: 1,
            draggable: true
          }, {
            name: '赵英杰',
            category: 1,
            draggable: true
          }, {
            name: '王承军',
            category: 1,
            draggable: true
          }, {
            name: '陈卫东',
            category: 1,
            draggable: true
          }, {
            name: '邹劲松',
            category: 1,
            draggable: true
          }, {
            name: '赵成',
            category: 1,
            draggable: true
          }, {
            name: '陈现忠',
            category: 1,
            draggable: true
          }, {
            name: '陶泳',
            category: 1,
            draggable: true
          }, {
            name: '王德福',
            category: 1,
            draggable: true
          }]
        }
      },
      // link数据
      links: {
        type: Array,
        require: true,
        default: function () {
          return [{
            source: 0,
            target: 1,
            category: 0,
            value: '朋友'
          }, {
            source: 0,
            target: 2,
            value: '战友'
          }, {
            source: 0,
            target: 3,
            value: '房东'
          }, {
            source: 0,
            target: 4,
            value: '朋友'
          }, {
            source: 1,
            target: 2,
            value: '表亲'
          }, {
            source: 0,
            target: 5,
            value: '朋友'
          }, {
            source: 4,
            target: 5,
            value: '姑姑'
          }, {
            source: 2,
            target: 8,
            value: '叔叔'
          }, {
            source: 0,
            target: 12,
            value: '朋友'
          }, {
            source: 6,
            target: 11,
            value: '爱人'
          }, {
            source: 6,
            target: 3,
            value: '朋友'
          }, {
            source: 7,
            target: 5,
            value: '朋友'
          }, {
            source: 9,
            target: 10,
            value: '朋友'
          }, {
            source: 3,
            target: 10,
            value: '朋友'
          }, {
            source: 2,
            target: 11,
            value: '同学'
          }]
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
        this.categories.forEach(function (elem) {
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
          grid: {
            left: 30,
            right: 15
          },
          color: this.color,
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          // label: {
          //   normal: {
          //     show: true,
          //     textStyle: {
          //       fontSize: 12
          //     }
          //   }
          // },
          legend: {
            x: 'right',
            show: true,
            // data: ['朋友', '战友', '亲戚']
            data: this.legendData
          },
          series: {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12
                }
              }
            },
            force: {
              repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10
                },
                formatter: '{c}'
              }
            },
            categories: this.categories,
            data: this.data,
            links: this.links,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
              }
            }

          }
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
