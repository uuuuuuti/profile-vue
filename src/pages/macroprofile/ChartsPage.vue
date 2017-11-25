<template>
  <div class="charts" v-if="pathParams.type === 'dis' && pathParams.role !== 'province' && pathParams.role !== 'keywords'">
    <Row :gutter="16">
         <Col span="24">
           <VmChartPie 
                :title='title'
                :height='500'
                :data='chartData'
            ></VmChartPie>
         </Col>
    </Row>
  </div>
  <div class="charts" v-else-if="pathParams.type === 'dis' && pathParams.role === 'keywords'">
    <Row :gutter="16">
         <Col span="24">
           <VmChartWordCloud 
                :title='title'
                :height='500'
                :data='chartData'
            ></VmChartWordCloud>
         </Col>
    </Row>
  </div>
  <div class="charts" v-else-if="pathParams.type === 'dis' && pathParams.role === 'province'">
    <Row :gutter="16">
         <Col span="24">
           <VmChartMap 
                :title='title'
                :height='500'
                :data='chartData'
            ></VmChartMap>
         </Col>
    </Row>
  </div>
  <div class="charts"  v-else-if="pathParams.type === 'top'">
    <Row :gutter="16">
      <Col span="24">
        <VmChartBarLine :title='lineData.chart1.title'
                        :height = '500'
                        :xAxisData = 'lineData.chart1.name'
                        :series= 'lineData.chart1.data'>
        </VmChartBarLine>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="24">
        <VmChartBarLine :title='lineData.chart2.title'
                        :height = '500'
                        :xAxisData = 'lineData.chart2.name'
                        :series= 'lineData.chart2.data'>
        </VmChartBarLine>
      </Col>
    </Row>
  </div>
  <div class="charts"  v-else-if="pathParams.type === 'trend'">
    <Row :gutter="16">
      <Col span="24">
        <VmChartYearTrend :title='title'
                        :height = '500'
                        :titleColor="dataTrendYear.titleColor"
                        :backgroundColor="dataTrendYear.backgroundColor"
                        :series="lineData.series"
                        :xAxisData="lineData.xData">
        </VmChartYearTrend>  
      </Col>
    </Row>
  </div>
</template>
<script>
import VmChartBarLine from '@/components/vm-chart-bar-line'
import VmChartMap from '@/components/vm-chart-map'
import VmChartPie from '@/components/vm-chart-pie'
import VmChartRadar from '@/components/vm-chart-radar'
import VmChartRelation from '@/components/vm-chart-relation'
import VmChartYearTrend from '@/components/vm-chart-year-trend'
import VmChartWordCloud from '@/components/vm-chart-wordcloud'
import fetch from '@/utils/fetch'
// import VmChartStack from '@/components/vm-chart-stack'
export default {
  name: 'ChartsPage',
  components: {
    VmChartBarLine,
    VmChartMap,
    VmChartPie,
    VmChartRadar,
    VmChartRelation,
    VmChartYearTrend,
    VmChartWordCloud
  },
  data () {
    return {
      chartData: null,
      title: '',
      lineData: null,
      dataTrendYear: {
        // title: '学术成果影响趋势图',
        titleColor: '#333',
        backgroundColor: '#fff',
        axisPointerColor: '#dcdcdc'
      }
    }
  },
  created () {
    this.loadData()
  },
  watch: {
    // watch route属性 变化的话重新获取数据
    '$route': 'loadData',
    chartData: function (newChartData) {
      if (this.$route.params.type === 'top') {
        let lData = this.calData(newChartData)
        this.lineData = lData
      } else if (this.$route.params.type === 'trend') {
        let lData = this.trendData(newChartData)
        this.lineData = lData
      }
    }
  },
  methods: {
    loadData () {
      let url = this.$route.path
      this.loading = true
      fetch({
        url: url,
        method: 'get'
      }).then((response) => {
        if (response.data.success) {
          if (this.$route.params.type !== 'top') {
            this.title = response.data.data[0].title
          }
          this.chartData = response.data.data
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
    calData (newChartData) {
      let amountList = []
      let quoteList = []
      let amountNames = []
      let quoteNames = []
      let obj1 = null
      let title1 = ''
      if (this.$route.params.role === 'paper') {
        newChartData.down.forEach(function (element) {
          amountList.push(element.downloadNum)
          amountNames.push(element.name)
        })
        obj1 = {
          name: '下载数',
          type: 'bar',
          data: amountList
        }
        title1 = newChartData.down[0].title
      } else {
        newChartData.amount.forEach(function (element) {
          amountList.push(element.paperCount)
          amountNames.push(element.name)
        })
        obj1 = {
          name: '文献数',
          type: 'bar',
          data: amountList
        }
        title1 = newChartData.amount[0].title
      }
      newChartData.quote.forEach(function (element) {
        quoteList.push(element.quoteNum)
        quoteNames.push(element.name)
      })
      let title2 = newChartData.quote[0].title

      let obj2 = {
        name: '被引量',
        type: 'bar',
        data: quoteList
      }
      let lData = {
        chart1: {
          title: title1,
          name: amountNames,
          data: [obj1]
        },
        chart2: {
          title: title2,
          name: quoteNames,
          data: [obj2]
        }
      }
      return lData
    },
    trendData (newVal) {
      let xData = []
      let sData1 = []
      let sData2 = []
      let series = []
      newVal.forEach(function (element) {
        xData.push(element.year)
        sData1.push(element.paperCount)
        sData2.push(element.quoteNum)
      })
      let obj1 = {
        name: '文献量',
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
        data: sData1
      }
      let obj2 = {
        name: '被引量',
        type: 'line',
        stack: '年度总量',
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
        data: sData2
      }
      series.push(obj1, obj2)
      let lData = {
        xData: xData,
        series: series
      }
      return lData
    }
  },
  computed: {
    pathParams () {
      return this.$route.params // 根据meta判断,
    }
  }
}
</script>
