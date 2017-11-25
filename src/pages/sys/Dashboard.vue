<template>
  <div class="dashboard">
    <Row :gutter="16">
      <Col span="24">
        <VmSearch v-on:chrildValue="cValue"></VmSearch>
        <Button type="primary" shape="circle" icon="ios-search" @click="search">搜索</Button>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :lg="6" :md="12">
        <VmStateOverView color="#41b883" icon="fa fa-users" :title="dataOverview[0].title" :count="dataOverview[0].count"></VmStateOverView>
      </Col>
      <Col :lg="6" :md="12">
        <VmStateOverView color="#1d8ce0" icon="fa fa-file-powerpoint-o" :title="dataOverview[1].title" :count="dataOverview[1].count"></VmStateOverView>
      </Col>
      <Col :lg="6" :md="12">
        <VmStateOverView color="#ffa000" icon="fa fa-file-text" :title="dataOverview[2].title" :count="dataOverview[2].count"></VmStateOverView>
      </Col>
      <Col :lg="6" :md="12">
        <VmStateOverView color="#f60000" icon="fa fa-university" :title="dataOverview[3].title" :count="dataOverview[3].count"></VmStateOverView>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <VmChartMap title="地域分布图" :title="dataMap.title" :data="dataMap.data" :serName="dataMap.serName">
        </VmChartMap>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="12">
        <VmChartPie title="资源类型分布" :data="dataPie">
        </VmChartPie>
      </Col>
      <Col span="12">
        <VmChartRelation title="关系图" :title="dataGraph.title" :heigh="dataGraph.heigh" :data="dataGraph.data" :categories="dataGraph.categories" :links="dataGraph.links">
        </VmChartRelation>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <VmChartYearTrend :height="500" 
              :title="dataTrendYear.title" 
              :titleColor="dataTrendYear.titleColor"
              :backgroundColor="dataTrendYear.backgroundColor">
        </VmChartYearTrend>
      </Col>
    </Row>
  </div>
</template>

<script>
import VmStateOverView from '@/components/vm-state-overview.vue'
import VmUserPreview from '@/components/vm-user-preview.vue'
import VmProgress from '@/components/vm-progress.vue'
import VmTimeline from '@/components/vm-timeline.vue'
import VmTabs from '@/components/vm-tabs.vue'
import VmTabsItem from '@/components/vm-tabs-item.vue'
import VmWeather from '@/components/vm-weather.vue'
import VmChartBarLine from '@/components/vm-chart-bar-line'
import VmChartPie from '@/components/vm-chart-pie'
import VmChartRadar from '@/components/vm-chart-radar'
import VmChartRelation from '@/components/vm-chart-relation'
import VmChartMap from '@/components/vm-chart-map'
import VmChartYearTrend from '@/components/vm-chart-year-trend'
import VmSearch from '@/components/vm-search'
export default {
  name: 'Dashboard',
  components: {
    VmSearch,
    VmStateOverView,
    VmUserPreview,
    VmProgress,
    VmTimeline,
    VmTabs,
    VmTabsItem,
    VmWeather,
    VmChartBarLine,
    VmChartPie,
    VmChartRadar,
    VmChartRelation,
    VmChartMap,
    VmChartYearTrend
  },
  data () {
    return {
      searchValue: '',
      dataTrendYear: {
        title: '学术成果影响趋势图',
        titleColor: '#333',
        backgroundColor: '#fff',
        axisPointerColor: '#dcdcdc'
      },
      dataOverview: [
        {
          title: 'Auhtors',
          count: '111996',
          icon: 'fa fa-user'
        },
        {
          title: 'Papers',
          count: '10121',
          icon: 'fa fa-eye'
        },
        {
          title: 'Journals',
          count: '123123',
          icon: 'fa fa-pencil'
        },
        {
          title: 'Units',
          count: '12312',
          icon: 'fa fa-download'
        }
      ],
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
          },
          {
            name: '成都',
            value: 210
          },
          {
            name: '武汉',
            value: 901
          },
          {
            name: '东莞',
            value: 230
          },
          {
            name: '大连',
            value: 350
          },
          {
            name: '南宁',
            value: 312
          },
          {
            name: '上饶',
            value: 90
          },
          {
            name: '佛山',
            value: 190
          },
          {
            name: '青岛',
            value: 123
          },
          {
            name: '济南',
            value: 190
          },
          {
            name: '扬州',
            value: 290
          },
          {
            name: '呼和浩特',
            value: 390
          },
          {
            name: '沈阳',
            value: 400
          },
          {
            name: '长春',
            value: 150
          },
          {
            name: '哈尔滨',
            value: 90
          },
          {
            name: '太原',
            value: 190
          },
          {
            name: '石家庄',
            value: 290
          },
          {
            name: '天津',
            value: 390
          },
          {
            name: '威海',
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
          name: '期刊论文',
          value: 123213123
        },
        {
          name: '会议论文',
          value: 31212311
        },
        {
          name: '专利',
          value: 621312
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
          draggable: true,
          value: ['华师']
        }, {
          name: '冯可梁',
          category: 1,
          value: 100,
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
          name: '同校',
          itemStyle: {
            normal: {
              color: '#009800'
            }
          }
        }, {
          name: '跨校',
          itemStyle: {
            normal: {
              color: '#4592FF'
            }
          }
        }],
        links: [{
          source: 0,
          target: 1,
          category: 0,
          value: '1'
        }, {
          source: 0,
          target: 2,
          value: '2'
        }, {
          source: 0,
          target: 3,
          value: '房东'
        }, {
          source: 0,
          target: 4,
          value: '3'
        }, {
          source: 1,
          target: 2,
          value: '4'
        }, {
          source: 0,
          target: 5,
          value: '5'
        }, {
          source: 4,
          target: 5,
          value: '6'
        }, {
          source: 2,
          target: 8,
          value: '3'
        }, {
          source: 0,
          target: 12,
          value: '4'
        }, {
          source: 6,
          target: 11,
          value: '1'
        }, {
          source: 6,
          target: 3,
          value: 1
        }, {
          source: 7,
          target: 5,
          value: 2
        }, {
          source: 9,
          target: 10,
          value: 3
        }, {
          source: 3,
          target: 10,
          value: 4
        }, {
          source: 2,
          target: 11,
          value: 6
        }]
      }
    }
  },
  methods: {
    cValue: function (data) {
      this.searchValue = data
    },
    search () {
      // alert(this.searchValue)
      this.$router.push({name: 'authorPageName', params: {name: this.searchValue}})
    }
  }
}
</script>

<style lang="less">
  
</style>
