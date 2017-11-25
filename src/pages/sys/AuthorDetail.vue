<template>
  <div class="dashboard">
    <Row class="vm-margin">
      <VmStateGroup :data="dataStateGroup">
      </VmStateGroup>
    </Row>
    <Row :gutter="16">
      <Col :lg="6">
        <VmUserPreview :brief="dataUserPreview.brief" :property="dataUserPreview.property"></VmUserPreview>
      </Col>
      <Col :lg="18">
        <VmProgress title="主要成果" :data="dataProgress"></VmProgress>
      </Col>  
    </Row>
    <Row :gutter="16">
      <Col :lg="24">
        <VmTimeline title="主要荣誉" :data="dataTimeline">
        </VmTimeline>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="24">
        <VmChartBarLine title="学术成果走势图" :xAxisData="dataBar1.xAxisData" :series="dataBar1.series">
        </VmChartBarLine>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="24">
        <VmChartYearTrend :height="500" 
              :title="dataTrendYear.title" 
              :titleColor="dataTrendYear.titleColor"
              :backgroundColor="dataTrendYear.backgroundColor">
        </VmChartYearTrend>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col span="24">
        <VmChartRelation 
              :title="dataGraph.title" 
              :heigh="dataGraph.heigh" 
              :data="dataGraph.data" 
              :categories="dataGraph.categories" 
              :links="dataGraph.links">
        </VmChartRelation>
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
import VmStateGroup from '@/components/vm-state-group'
import VmChartYearTrend from '@/components/vm-chart-year-trend'
import VmChartBarLine from '@/components/vm-chart-bar-line'
import VmChartRelation from '@/components/vm-chart-relation'
export default {
  name: 'Dashboard',
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
    VmChartRelation
  },
  data () {
    return {
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
          name: '汤庸',
          role: '华南师范大学'
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
            value: '计算机'
          },
          {
            icon: 'fa fa-bookmark',
            key: '研究领域',
            value: '社交网络'
          },
          {
            icon: 'fa fa-tags',
            key: '个人主页',
            value: 'scholat.com/ytang'
          }
        ]
      },
      dataProgress: [
        {
          name: '社交学习网络中基于学习认知的情感交互研究',
          tags: ['社交学习网络', '情感交互', '认知学习', '学习行为'],
          value: 90
        },
        {
          name: '时态数据完整性约束研究与实现',
          tags: ['时态数据库', '时态完整性', '时态实体完整性'],
          value: 30
        },
        {
          name: '基于关系数据库的极松散结构数据模型的访问控制研究',
          tags: ['访问控制', '数据空间', '关系数据库', '松散结构'],
          value: 80
        },
        {
          name: '基于混合差分粒子群算法的MapReduce任务调度算法研究',
          tags: ['Hadoop', '差分算法', 'MapReduce'],
          value: 20
        },
        {
          name: '基于时态编码和线序划分的时态XML索引',
          tags: ['时态XML索引', '时态编码'],
          value: 100
        }
      ],
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
        title: '学术成果影响趋势图',
        titleColor: '#333',
        backgroundColor: '#fff',
        axisPointerColor: '#dcdcdc'
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
        height: 500,
        data: [{
          name: '汤庸',
          draggable: true
        }, {
          name: '刘海',
          category: 0,
          draggable: true
        }, {
          name: '邓志荣',
          category: 0,
          draggable: true
        }, {
          name: '李荣庆',
          category: 0,
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
          name: '同校合作',
          itemStyle: {
            normal: {
              color: '#2f4053'
            }
          }
        }, {
          name: '跨校合作',
          itemStyle: {
            normal: {
              color: '#4592FF'
            }
          }
        }],
        links: [{
          source: 0,
          target: 1,
          value: '时态数据完整性约束研究与实现'
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

<style lang="less">
  
</style>
