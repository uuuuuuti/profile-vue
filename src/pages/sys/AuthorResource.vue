<template>
  <VmTableExpand title="Author List" 
           type="edit" 
           :columns="dataColumns" 
           :data="dataTable"
           :url="sysApis.sys.author.list"
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
    name: 'AuthorResource',
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
            title: '作者名',
            key: 'name'
          },
          {
            id: '3',
            title: '机构名',
            key: 'unitName'
          },
          {
            id: '4',
            title: '领域',
            key: 'domains'
          }
        ],
        dataTable: [
          // {
          //   id: '65416s843154',
          //   name: '莫挤敏',
          //   unitName: '华南师范大学',
          //   domains: '互联网技术,计算机软件及计算机应用,电信技术'
          // }
        ]
      }
    }
  }
</script>
