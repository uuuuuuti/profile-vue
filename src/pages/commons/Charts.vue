<template>
  <div class="charts">
    <Row :gutter="16">
      <Col span="12">
        <VmChartBarLine title="Bar Chart" :xAxisData="dataBar1.xAxisData" :series="dataBar1.series">
        </VmChartBarLine>
      </Col>
      <Col span="12">
        <VmChartBarLine  title="Bar Chart" :xAxisData="dataBar2.xAxisData" :series="dataBar2.series">
        </VmChartBarLine>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="12">
        <VmChartBarLine title="Line Chart" :xAxisData="dataLine1.xAxisData" :series="dataLine1.series">
        </VmChartBarLine>
      </Col>
      <Col span="12">
        <VmChartBarLine title="Line Chart" :xAxisData="dataLine2.xAxisData" :series="dataLine2.series">
        </VmChartBarLine>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="12">
        <VmChartPie title="Pie Chart" :data="dataPie">
        </VmChartPie>
      </Col>
      <Col span="12">
        <VmChartRadar title="Radar Chart" :indicator="dataRadar.indicator" :data="dataRadar.data">
        </VmChartRadar>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <VmChartRelation title="Relation Chart" :title="dataGraph.title" :heigh="dataGraph.heigh" :data="dataGraph.data" :categories="dataGraph.categories" :links="dataGraph.links">
        </VmChartRelation>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <VmChartMap title="Map Chart" :title="dataMap.title" :data="dataMap.data" :serName="dataMap.serName">
        </VmChartMap>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <VmChartYearTrend :height="500">
        </VmChartYearTrend>
      </Col>
    </Row>
  </div>
</template>

<script>
  import VmChartBarLine from '@/components/vm-chart-bar-line'
  import VmChartPie from '@/components/vm-chart-pie'
  import VmChartRadar from '@/components/vm-chart-radar'
  import VmChartRelation from '@/components/vm-chart-relation'
  import VmChartMap from '@/components/vm-chart-map'
  import VmChartYearTrend from '@/components/vm-chart-year-trend'
  export default {
    name: 'Charts',
    components: {
      VmChartBarLine,
      VmChartPie,
      VmChartRadar,
      VmChartRelation,
      VmChartMap,
      VmChartYearTrend
    },
    data: function () {
      return {
        dataMap: {
          title: 'author地域分布',
          serName: 'author',
          data: [
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
              name: '南昌',
              value: 400
            }
          ]
        },
        dataBar1: {
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [50, 200, 360, 100, 100, 200]
            }
          ]
        },
        dataBar2: {
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [50, 200, 360, 100, 100, 200]
            },
            {
              name: '增长量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        },
        dataLine1: {
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'line',
              data: [50, 290, 360, 100, 100, 200]
            }
          ]
        },
        dataLine2: {
          color: ['#41b883', '#1d8ce0'],
          xAxisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          series: [
            {
              name: '销量',
              type: 'line',
              data: [50, 130, 360, 100, 100, 200]
            },
            {
              name: '增长量',
              type: 'line',
              data: [5, 50, 36, 10, 10, 20]
            }
          ]
        },
        dataPie: [
          {
            name: 'Java',
            value: 14
          },
          {
            name: 'C',
            value: 7
          },
          {
            name: 'C++',
            value: 6
          },
          {
            name: 'Python',
            value: 5
          },
          {
            name: 'C#',
            value: 4
          },
          {
            name: 'JavaScript',
            value: 3
          }
        ],
        dataRadar: {
          indicator: ['AQI', 'PM2.5', 'PM10', 'CO', 'NO2', 'SO2'],
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }
          ]
        },
        dataGraph: {
          title: '人物关系图',
          height: 500,
          data: [{
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
          }],
          categories: [{
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
          }],
          links: [{
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
    }
  }
</script>
