<template>
  <VmTableExpand title="Paper List" 
           type="edit" 
           :columns="dataColumns"
           :url="sysApis.sys.paper.list" 
           :data="dataTable"
           v-on:add-ok="add"
           v-on:edit-ok="edit"
           v-on:delete-ok="deletefn"
           class="vm-margin">
  </VmTableExpand>
</template>

<script>
  import VmTableExpand from '@/components/vm-table-expand'
  import expandRow from '@/components/expand-row.vue'
  import sysApis from '@/apis/apis'
  export default {
    name: 'PaperResource',
    components: {
      VmTableExpand,
      expandRow
    },
    methods: {
      add: function (data) {
        this.dataTable.unshift(data)
      },
      edit: function (data) {
        this.dataTable.forEach(function (elem) {
          if (elem.id === data.id) {
            for (let i in data) {
              elem[i] = data[i]
            }
          }
        })
      },
      deletefn: function (data) {
        for (let i = 0; i < this.dataTable.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (this.dataTable[i].id === data[j].id) {
              this.dataTable.splice(i, 1)
            }
          }
        }
      }
    },
    data () {
      return {
        sysApis: sysApis,
        dataColumns: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            id: '1',
            title: 'id',
            key: 'id'
          },
          {
            id: '2',
            title: '论文名',
            key: 'title',
            width: 270
          },
          {
            id: '3',
            title: '作者',
            key: 'authorNames',
            width: 250
          },
          {
            id: '4',
            title: '出版时间',
            key: 'pubDate'
          }
        ],
        dataTable: [
        ]
      }
    }
  }
</script>
