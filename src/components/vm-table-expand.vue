<template>
  <Row class="vm-table vm-panel">
    <div class="panel-heading">
      {{ title }}
    </div>
    <div class="panel-body">
      <Row type="flex" justify="space-between" class="control">
        <div v-if="showUpdateButton === 'yes'">
          <Button type="primary" :loading="buttonLoading" @click="toLoading" shape="circle"><i class="fa fa-location-arrow"></i>更新详细信息</Button>
        </div>
        <div class="table-style">
          <h3>Stripe</h3>
          <i-switch v-model="showStripe" style="margin: 0 30px 0 10px"></i-switch>
          <h3>Size</h3>
          <Radio-group v-model="tableSize" type="button" style="margin-left: 10px">
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">Small</Radio>
          </Radio-group>
        </div>
        <div class="search-bar">
          <Input placeholder="Please enter ..." v-model="keyword" style="width: 300px">
          </Input>
          <Button type="ghost" @click="search"><i class="fa fa-search"></i></Button>
        </div>
      </Row>
      <!--<div class="edit" v-if="type === 'edit'">
          <Button @click="modalAdd = true" ><i class="fa fa-plus"></i> Add</Button>
          <Button  :disabled="deleteDisabled" @click="modalDelete = true"><i class="fa fa-trash"></i> Delete</Button>
      </div>-->
      
      <Table
      :stripe="showStripe" 
      :size="tableSize" 
      :columns="showColumns" 
      :data="dataShow" >
      </Table>
      <MyLoading size="large" :show="loading" ></MyLoading>
    
    
      <Row type="flex" justify="space-between" class="footer">
        <div class="info-bar">
          <!--Show<Input-number class="input-number" v-model="showNum" :max="data.length" :min="1" @on-change=" updateDataShow ">{{ showNum }}</Input-number>/ Page-->
        </div>
        <div class="page">
          <!--<span class="total">Total {{ data.length }}</span>-->
          <Page 
            :total="total"
            :current="pageNum"
            :page-size="pageSize"
            :page-size-opts="pageSizes"
            @on-change="pageChange"
            @on-page-size-change="sizeChange"
            show-sizer
            show-total>
          </Page>
        </div>
      </Row>
    </div>
    <Modal
        v-model="modalEdit"
        title="Edit"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="editOk">
        <Form :label-width="50">
          <Form-item v-for="(value, key) in dataEdit" :label="convertKey(key)" :key="dataEdit.id">
            <Input v-model="dataEdit[key]" :placeholder="'Please enter' + key"></Input>
          </Form-item>
        </Form>
    </Modal>
    <Modal
        v-model="modalAdd"
        title="Add"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="addOk">
        <Form :label-width="50">
          <Form-item v-for="item in columns" :label="item.title" :key="item.id">
            <Input v-model="dataAdd[item.key]" :placeholder="'Please enter' + item.title"></Input>
          </Form-item>
        </Form>
    </Modal>
    <Modal
        v-model="modalDelete"
        title="Delete"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="deleteOk">
        Are you sure to delete this data?
    </Modal>
  </Row>
</template>

<script>
//   import expandRow from '@/components/expand-row.vue'
  import MyLoading from '@/components/vm-loading'
  import fetch from '@/utils/fetch'
  export default {
    name: 'VmTableExpand',
    props: {
      url: {
        type: String
      },
      title: {
        type: String,
        default: 'data'
      },
      type: String,
      columns: Array,
      data: Array
    },
    // components: {expandRow},
    data () {
      return {
        deleteDisabled: true,
        dataShow: [],
        showNum: 10,
        showStripe: true,
        tableSize: 'small',
        currentPage: 1,
        keyword: '',
        modalEdit: false,
        modalAdd: false,
        modalDelete: false,
        dataEdit: {},
        showUpdateButton: '',
        dataDelete: [],
        dataAdd: {},
        formData: [],
        tableData: [],
        loading: true,
        pageSizes: [10, 20, 30],
        pageSize: 10,
        pageNum: 1,
        total: 0,
        buttonLoading: false
      }
    },
    methods: {
      editOk: function () {
        this.$emit('edit-ok', this.dataEdit)
      },
      addOk: function () {
        this.$emit('add-ok', this.dataAdd)
      },
      deleteOk: function () {
        this.$emit('delete-ok', this.dataDelete)
      },
      toLoading: function () {
        this.buttonLoading = true
        fetch({
          url: '/sys/unit/updateInfo',
          method: 'get'
        }).then((response) => {
          if (response.data.success) {
            this.$Modal.success({
              title: '提示',
              content: response.data.msg
            })
            this.loading = false
            this.$router.replace({ path: '/sys/unit' })
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
      // pageChange: function (page) {
      //   this.currentPage = page
      //   this.updateDataShow()
      // },
      // updateDataShow: function () {
      //   let startPage = (this.currentPage - 1) * this.showNum
      //   let endPage = startPage + this.showNum
      //   this.dataShow = this.data.slice(startPage, endPage)
      // },
      search: function () {
        let that = this
        let tempData = that.data
        that.dataShow = []
        tempData.forEach(function (elem) {
          for (let i in elem) {
            if (elem[i].toString().indexOf(that.keyword) > -1) {
              that.dataShow.push(elem)
              return
            }
          }
        })
      },
      selectChange: function (data) {
        this.dataDelete = data
      },
      remove: function (index) {
        this.dataShow.splice(index, 1)
      },
      renderOperate: function (h, params) {
        return h('div', [
          h('Button', {
            props: {
              type: 'info',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                for (let i in params.row) {
                  this.dataEdit[i] = params.row[i]
                }
                delete this.dataEdit._index
                this.modalEdit = true
              }
            }
          }, '编辑'),
          h('Button', {
            props: {
              type: 'error',
              size: 'small'
            },
            on: {
              click: () => {
                this.dataDelete.push(params.row)
                this.modalDelete = true
              }
            }
          }, '删除')
        ])
      },
      convertKey: function (value) {
        let returnValue = value
        this.columns.forEach(function (elem) {
          for (let i in elem) {
            if (i === 'key' && elem[i] === value) {
              returnValue = elem.title
            }
          }
        })
        return returnValue
      },
      loadData () {
        let params = this.params
        this.loading = true
        fetch({
          url: this.url,
          method: 'post',
          params
        }).then((response) => {
          if (response.data.success) {
            this.dataShow = response.data.data.list
            this.total = response.data.data.total
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
      query () {
        this.pageNum = 1
        this.total = 0
        this.loadData()
      },
      // reset () {
      //   this.$refs.tableSearchForm.resetFields()
      //   if (typeof this.$parent.resetTableSearchForm === 'function') {
      //     this.$parent.resetTableSearchForm()
      //   }
      // },
    // change page size
      sizeChange (pageSize) {
        this.pageSize = pageSize
        this.loadData()
      },
    // change current page
      pageChange (pageNum) {
        this.pageNum = pageNum
        this.loadData()
      },
    // handle sort
      sortTable (column, key, order) {
        console.log(column, key, order)
      }

    },
    computed: {
      showColumns: function () {
        let showColumn = this.columns.slice()
        showColumn.forEach(function (elem) {
          elem.sortable = true
        })
        if (this.type === 'edit') {
        //   showColumn.unshift({
        //     type: 'selection',
        //     width: 60,
        //     align: 'center'
        //   })
          showColumn.push({
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: this.renderOperate
          })
        }
        return showColumn
      },
      params: function () {
        let params = {}
        params.pageNum = this.pageNum
        params.pageSize = this.pageSize
        return params
      },
      isUpdate () {
        return this.$route.meta.isUpdate // 根据meta判断,
      },
      hasSearch () {
        return !!this.$slots.search
      }
    },
    components: {
      MyLoading
    },
    watch: {
      data: function () {
        this.dataShow = this.data.slice(0, this.showNum)
      },
      dataDelete: function () {
        if (this.dataDelete.length === 0) {
          this.deleteDisabled = true
        } else {
          this.deleteDisabled = false
        }
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        this.loadData()
      })
      this.dataShow = this.data.slice(0, this.showNum)
      if (this.isUpdate) {
        this.showUpdateButton = 'yes'
      }
    }
  }
</script>

