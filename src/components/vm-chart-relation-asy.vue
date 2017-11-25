<template>
  <div class="vm-chart-bar vm-panel">
    <div class="panel-body" :id="this.id" :style="{ height: height + 'px'}">
    </div>
  </div>
</template>
<script>
  import chartTheme from '@/theme/chartTheme.js'
  import fetch from '@/utils/fetch'
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
    name: 'VmChartRelationAsy',
    props: {
      // 图表区域高度
      title: {
        type: String,
        default: '关系图'
      },
      url: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 800
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
      }
    },
    data: function () {
      return {
        // 刻度颜色
        axisColor: '#797979',
        // 分割线颜色
        splitLineColor: '#dcdcdc',
        relationData: null,
        chart: null,
        data: null,
        links: [],
        categories: []
      }
    },
    computed: {
      // 生成一个随机id, 实现图表组件的复用
      id: function () {
        return parseInt(Math.random() * 1000000)
      },
      legendData: function () {
        let legendData = []
        if (legendData.length > 0) {
          this.categories.forEach(function (elem) {
            legendData.push(elem.name)
          })
        }
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
      },
      loadData () {
        this.loading = true
        fetch({
          url: this.url,
          method: 'get'
        }).then((response) => {
          if (response.data.success) {
            // this.dataShow = response.data.data.list
            // this.total = response.data.data.total
            this.relationData = response.data.data
            this.loading = false
          } else {
            this.$Modal.error({
              title: '提示',
              content: response.data.msg
            })
            this.loading = false
          }
        }, (response) => {
          this.loading = false
        })
      },
      convertData () {
        let currentName = this.$route.params.name
        let nodes = []
        // nodes
        this.relationData.nodes.forEach(function (element) {
          let obj = null
          if (element.name !== currentName) {
            obj = {
              name: element.name,
              category: element.category,
              value: [element.value],
              draggable: true
            }
          } else {
            obj = {
              name: element.name,
              value: element.value,
              draggable: true
            }
          }
          nodes.push(obj)
        }, this)
        let categories = []
        this.relationData.categories.forEach(function (element) {
          let obj = null
          obj = {
            name: element
          }
          categories.push(obj)
        }, this)
        this.data = nodes
        this.links = this.relationData.links
        this.categories = categories
      }
    },
    watch: {
      relationData: function () {
        this.convertData()
      },
      data: function () {
        this.renderChart()
      },
      links: function () {
        this.renderChart()
      },
      categories: function () {
        this.renderChart()
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.loadData()
      })
      this.renderChart()
    }
  }
</script>
