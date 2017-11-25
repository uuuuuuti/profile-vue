<template>
  <VmTableExpand title="Unit List" 
           type="edit" 
           :columns="dataColumns" 
           :data="dataTable"
           :url="sysApis.sys.unit.list"
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
    name: 'UnitResource',
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
            title: '机构名',
            key: 'name'
          },
          {
            id: '3',
            title: '分类',
            key: 'category'
          },
          {
            id: '4',
            title: '地址',
            key: 'address'
          }
        ],
        dataTable: [
          // {
          //   id: '65416s843154',
          //   name: '华南师范大学',
          //   category: '教育机构:大学',
          //   address: '广东省广州市天河区中山大道华南师范大学'
          // }
        ]
      }
    }
  }
</script>
