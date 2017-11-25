<template>
  <div class="dashboard">
    <Row :gutter="16">
      <Col :lg="7">
        <VmUserPreview :brief="dataUserPreview.brief" :property="dataUserPreview.property"></VmUserPreview>
      </Col>
      <Col :lg="17">
        <VmProgress title="主要成果" 
                    :data="dataProgress">
        </VmProgress>
      </Col>  
    </Row>
    <Row :gutter="16">
      <Col span="24">
        <VmChartYearTrend :height="500" 
              :title="dataTrendYear.title" 
              :titleColor="dataTrendYear.titleColor"
              :backgroundColor="dataTrendYear.backgroundColor"
              :xAxisData="dataTrendYear.xAxisData" :series="dataTrendYear.series">
        </VmChartYearTrend>
      </Col>
    </Row>
    <Row :gutter="16">
        <Col span="24">
            <VmChartWordCloud 
                :title='keywordCloud.title'
                :height='400'
                :data='keywordCloud.data'>
            </VmChartWordCloud>
        </Col>
    </Row>
    <!--<Row :gutter="16">
      <Col :lg="24">
        <VmTimeline title="主要荣誉" :data="dataTimeline">
        </VmTimeline>
      </Col>
    </Row>-->
    <!--<Row :gutter="16">
      <Col span="24">
        <VmChartBarLine title="学术成果走势图" 
                        :xAxisData="dataBar1.xAxisData" :series="dataBar1.series">
        </VmChartBarLine>
      </Col>
    </Row>-->
    <Row :gutter="16">
      <Col span="12">
        <VmChartPie title="成果所属期刊分布" :data="journalPie">
        </VmChartPie>
      </Col>
      <Col span="12">
        <VmChartPie title="成果所属来源分布" :data="sourcePie">
        </VmChartPie>
      </Col>
    </Row>
    <Row :gutter="16" v-if="relationUrl !== ''">
      <Col span="24">
        <VmChartRelationAsy 
              :title="dataGraph.title" 
              :height="dataGraph.height" 
              :url="relationUrl">
        </VmChartRelationAsy>
      </Col>
    </Row>
    <!--<Row :gutter="16">
      <Col span="24">
        <VmChartRelation 
              :title="dataGraph.title" 
              :heigh="dataGraph.heigh" 
              :data="dataGraph.data" 
              :categories="dataGraph.categories" 
              :links="dataGraph.links">
        </VmChartRelation>
      </Col>
    </Row>-->
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
import VmStateGroup from '@/components/vm-state-group'
import VmChartYearTrend from '@/components/vm-chart-year-trend'
import VmChartBarLine from '@/components/vm-chart-bar-line'
import VmChartRelation from '@/components/vm-chart-relation'
import VmChartPie from '@/components/vm-chart-pie'
import VmChartRelationAsy from '@/components/vm-chart-relation-asy'
import VmChartWordCloud from '@/components/vm-chart-wordcloud'
import fetch from '@/utils/fetch'
export default {
  name: 'AuthorPage',
  components: {
    VmStateOverView,
    VmUserPreview,
    VmProgress,
    VmTimeline,
    VmTabs,
    VmTabsItem,
    VmWeather,
    VmStateGroup,
    VmChartYearTrend,
    VmChartBarLine,
    VmChartRelation,
    VmChartPie,
    VmChartRelationAsy,
    VmChartWordCloud
  },
  data () {
    return {
      authorData: null,
      sourcePie: [],
      journalPie: [],
      keywordCloud: {
        title: '关键词分布',
        data: []
      },
      relationUrl: '',
      dataStateGroup: [
        {
          title: '期刊论文',
          icon: 'fa fa-eye',
          value: '123',
          color: '#41b883'
        },
        {
          title: '会议论文',
          icon: 'fa fa-user',
          value: '53',
          color: '#428bca'
        },
        {
          title: '专利',
          icon: 'fa fa-pencil',
          value: '13',
          color: '#f60000'
        },
        {
          title: '项目',
          icon: 'fa fa-download',
          value: '122',
          color: '#ffa000'
        }
      ],
      dataUserPreview: {
        brief: {
          photo: require('@/assets/img/ytang.jpg'),
          name: '',
          role: ''
        },
        property: [
          {
            icon: 'fa fa-user',
            key: '职务',
            value: 'Professor'
          },
          {
            icon: 'fa fa-flag',
            key: '专业',
            value: ''
          },
          {
            icon: 'fa fa-bookmark',
            key: 'H-index',
            value: ''
          },
          {
            icon: 'fa fa-tags',
            key: '成果数',
            value: ''
          }
        ]
      },
      dataProgress: null,
      dataTimeline: [
        {
          date: '2016',
          time: '',
          content: 'Apweb2016 （CCF Rank C会议）Best Paper Award'
        },
        {
          date: '2015',
          time: '',
          content: '第6届中国云计算学术会议优秀论文奖;CCSCW2015 最佳论文;'
        },
        {
          date: '2014',
          time: '',
          content: '广东省科学技术奖二等奖（云计算资源管理与安全保障技术研发及应用，排名第一)'
        },
        {
          date: '2013',
          time: '',
          content: '中国计算机学会首批杰出会员;广东省研究生示范课程（高级数据库技术);'
        },
        {
          date: '2012',
          time: '',
          content: '中国通信学会云计算专家咨询委员会专家委员'
        }
      ],
      dataTrendYear: {
        title: '学术成果趋势图',
        titleColor: '#333',
        backgroundColor: '#fff',
        axisPointerColor: '#dcdcdc',
        xAxisData: [],
        series: []
      },
      dataBar1: {
        xAxisData: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        series: [
          {
            name: '期刊论文',
            type: 'bar',
            data: [3, 4, 2, 1, 6, 5, 3, 4]
          },
          {
            name: '会议论文',
            type: 'bar',
            data: [1, 2, 2, 1, 3, 1, 1, 2]
          }
        ]
      },
      dataGraph: {
        title: '学术合作关系图',
        height: 700
      }
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      let url = this.$route.path
      this.loading = true
      fetch({
        url: url,
        method: 'get'
      }).then((response) => {
        if (response.data.success) {
          this.authorData = response.data.data
          this.loading = false
          // user-info
          this.relationUrl = '/sys/macro/profile/query/relation/' + this.authorData.info.id
          this.dataUserPreview.brief.name = this.authorData.info.name
          this.dataUserPreview.brief.role = this.authorData.info.unit
          let domain = this.authorData.info.domains
          if (domain !== '' && domain !== null) {
            this.dataUserPreview.property[1].value = domain.split(',')[0]
          } else {
            this.dataUserPreview.property[1].value = ''
          }
          this.dataUserPreview.property[2].value = this.authorData.info.hIndex
          this.dataUserPreview.property[3].value = this.authorData.info.count
          // top 5
          let top5 = []
          this.authorData.top5.forEach(function (element) {
            let key = null
            if (element.keywords === null) {
              key = []
            } else {
              key = element.keywords.split(',')
            }
            let el = {
              name: element.title,
              tags: key,
              value: element.quoteNum
            }
            top5.push(el)
          }, this)
          this.dataProgress = top5
          // timeTrend
          let year = []
          let countD = []
          let quoteD = []
          let series = []
          this.authorData.paper.forEach(function (element) {
            year.push(element.year)
            countD.push(element.paperCount)
            quoteD.push(element.quoteNum)
          }, this)
          let series1 = {
            name: '文献数',
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
            data: countD
          }
          let series2 = {
            name: '被引量',
            type: 'line',
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
            data: quoteD
          }
          series.push(series1, series2)
          this.dataTrendYear.xAxisData = year
          this.dataTrendYear.series = series
          // journal Pie
          this.authorData.journal.forEach(function (element) {
            let obj = {
              name: element.fieldName,
              value: element.value
            }
            this.journalPie.push(obj)
          }, this)
          // source Pie
          this.authorData.source.forEach(function (element) {
            let obj = {
              name: element.fieldName,
              value: element.value
            }
            this.sourcePie.push(obj)
          }, this)
          // Keyword Cloud
          this.authorData.keyword.forEach(function (element) {
            let obj = {
              name: element.fieldName,
              value: element.value
            }
            this.keywordCloud.data.push(obj)
          }, this)
          // Relations
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
    }
  }
}
</script>

<style lang="less">
  
</style>
