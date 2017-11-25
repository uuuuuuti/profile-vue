<template>
    <AutoComplete
        v-model="value4"
        icon="ios-search"
        placeholder="搜索"
        style="width:600px"
        size="large">
        <div class="demo-auto-complete-item" v-for="item in data4">
            <div class="demo-auto-complete-group">
                <span>{{ item.title }}</span>
                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
            </div>
            <Option v-for="option in item.children" :value="option.title" :key="option.title">
                <span class="demo-auto-complete-title">{{ option.title }}</span>
                <span class="demo-auto-complete-count">{{ option.count }}</span>
            </Option>
        </div>
        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
    </AutoComplete>
</template>
<script>
    export default {
      name: 'VmSearch',
      props: {
        autoData: {
          type: Array,
          default: function () {
            return [
            ]
          }
        },
        size: {
          type: String,
          default: function () {
            return 'default'
          }
        }
      },
      methods: {
      },
      watch: {
        value4: function (newChartData) {
          this.$emit('chrildValue', this.value4)
        }
      },
      data () {
        return {
          value4: '',
          data4: [
            {
              title: '学者',
              children: [
                {
                  title: '汤庸',
                  count: 239
                },
                {
                  title: '史忠植',
                  count: 456
                }
              ]
            },
            {
              title: '机构',
              children: [
                {
                  title: '华南师范大学',
                  count: 6010

                },
                {
                  title: '中山大学',
                  count: 3001

                }
              ]
            }
          ]
        }
      }
    }
</script>
<style scoped>
    .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>
