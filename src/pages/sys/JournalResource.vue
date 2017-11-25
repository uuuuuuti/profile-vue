<template>
  <VmTableExpand title="Journal List" 
           type="edit" 
           :url="sysApis.sys.journal.list" 
           :columns="dataColumns" 
           :data="dataTable"
           v-on:add-ok="add"
           v-on:edit-ok="edit"
           v-on:delete-ok="deletefn"
           class="vm-margin">
  </VmTableExpand>
</template>

<script>
  import VmTableExpand from '@/components/vm-table-expand'
  import sysApis from '@/apis/apis'
  export default {
    name: 'JournalResource',
    components: {
      VmTableExpand
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
            id: '1',
            title: 'id',
            key: 'id'
          },
          {
            id: '2',
            title: '期刊名',
            key: 'name'
          },
          {
            id: '3',
            title: '周期',
            key: 'pubCycle'
          },
          {
            id: '4',
            title: '来源',
            key: 'levels'
          }
        ],
        dataTable: [
          // {
          //   id: '65416s843154',
          //   name: '华南师范大学',
          //   pubCycle: '月刊',
          //   levels: 'SCI,CISCI'
          // }
        ]
      }
    }
  }
</script>
