<template>
  <div class="home" @keyup.enter="submit">
    <Row class="header" type="flex" align="middle">
      <div class="logo">
        <img src="../assets/img/logo.png" height="30" alt="">
        <span>SCHOLAT</span>PROFILE <Tag>beta</Tag>
      </div>
      <!--<VmMsgPush style="margin-left:20px" :data="msgPushData"></VmMsgPush>-->
      <!--<VmSearch style="margin-left:600px" v-on:chrildValue="cValue" @on-select="toPage"></VmSearch>-->
      <Dropdown class="login-info" placement="bottom-end">
        <Button type="ghost">
            <img src="../assets/img/overwatch.jpg" height="30" alt="">{{userName}}
            <Icon type="arrow-down-b"></Icon>
        </Button> 
        <Dropdown-menu slot="list">
            <Dropdown-item divided><i class="fa fa-key"></i><span @click="logOut()">Log out</span></Dropdown-item>
            <Dropdown-item divided><i class="fa fa-cog"></i>Setting</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </Row>   
    <div class="sidebar">
      <Menu theme="dark" width="100%" class="menu" :active-name="activeName" :accordion="true">
          <Menu-item name="Dashboard">
              <router-link to="/sys/dashboard">
                <i class="fa fa-dashboard"></i>
                Dashboard  
              </router-link>
          </Menu-item>
          <Submenu name="Resource">
              <template slot="title">
                  <i class="fa fa-database"></i>
                  数据概览
              </template>
              <Menu-group title="第三方数据">
                <Menu-item name="Paper">
                  <router-link to="/sys/paper">
                    Paper数据 
                  </router-link>
                </Menu-item>
                <Menu-item name="Author">
                  <router-link to="/sys/author">
                    Author数据 
                  </router-link>
                </Menu-item>
                <Menu-item name="Unit">
                  <router-link to="/sys/unit">
                    Unit数据 
                  </router-link>
                </Menu-item>
                <Menu-item name="Journal">
                  <router-link to="/sys/journal">
                    Journal数据 
                  </router-link>
                </Menu-item>
              </Menu-group>
              <Menu-group title="用户数据">
                <Menu-item name="Paper">
                    用户数据 
                </Menu-item>
                <Menu-item name="日志数据">
                    日志数据
                </Menu-item>
              </Menu-group>
          </Submenu>
          <Submenu name="宏观画像">
            <template slot="title">
                  <i class="fa fa-users"></i>
                  宏观画像
            </template>
            <Menu-group title="分布情况">
              <Menu-item class="submenu" name="总体地域分布">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'dis', role: 'province'} }">
                      总体地域分布
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体机构分布">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'dis', role: 'unit'} }">
                      总体机构分布
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体学科分布">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'dis', role: 'subject'}}">
                      总体学科分布
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体研究方向分布">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'dis', role: 'keywords'}}">
                      总体研究方向分布
                    </router-link>
              </Menu-item>
            </Menu-group>
            <Menu-group title="TOP20">
              <!--<Menu-item class="submenu" name="总体作者文献发表数排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'author',method:'count'}}">
                      总体作者文献发表数排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体作者文献影响力排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'author',method:'impact'}}">
                      总体作者文献影响力排名
                    </router-link>
              </Menu-item>-->
              <Menu-item class="submenu" name="总体作者排名">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'top', role: 'author'}}">
                      总体作者排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体机构排名">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'top', role: 'unit'}}">
                      总体机构排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体期刊排名">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'top', role: 'journal'}}">
                      总体期刊排名
                    </router-link>
              </Menu-item>
              <!--<Menu-item class="submenu" name="总体机构文献量排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'unit',method:'count'}}">
                      总体机构文献量排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体机构文献影响力排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'unit',method:'impact'}}">
                      总体机构文献影响力排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体期刊文献量排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'journal',method:'count'}}">
                      总体期刊文献量排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体期刊文献影响力排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'journal',method:'impact'}}">
                      总体期刊文献影响力排名
                    </router-link>
              </Menu-item>-->
              <Menu-item class="submenu" name="总体文献排名">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'top', role: 'paper'}}">
                      总体文献排名
                    </router-link>
              </Menu-item>
              <!--<Menu-item class="submenu" name="总体下载排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'paper',method:'down'}}">
                      总体下载排名
                    </router-link>
              </Menu-item>
              <Menu-item class="submenu" name="总体影响力排名">
                    <router-link :to="{ name: 'marcoProfile', params: { type: 'top', role: 'paper',method: 'impact'}}">
                      总体影响力排名
                    </router-link>
              </Menu-item>-->
            </Menu-group>
            <Menu-group title="趋势">
              <Menu-item class="submenu" name="总体文献趋势">
                    <router-link :to="{ name: 'marcoProfile2', params: { type: 'trend', role: 'paper'}}">
                      总体文献趋势
                    </router-link>
              </Menu-item>
            </Menu-group>
          </Submenu>
          <Submenu name="Tag">
              <template slot="title">
                  <i class="fa fa-tags"></i>
                  标签
              </template>
              <Menu-group title="标签管理">
                <Menu-item name="基本特征">
                    基本特征 
                </Menu-item>
                <Menu-item name="行为特征">
                    行为特征 
                </Menu-item>
              </Menu-group>
              <Menu-group title="标签分析">
                <Menu-item name="用户画像">
                    用户画像 
                </Menu-item>
              </Menu-group>
          </Submenu>
          <Menu-item name="Detail">
              <router-link to="/sys/author-detail">
                <i class="fa fa-users"></i>
                学者画像  
              </router-link>
          </Menu-item>
          <!--<Menu-item name="macro">
              <router-link to="/sys/macroProfile">
                <i class="fa fa-users"></i>
                宏观画像  
              </router-link>
          </Menu-item>-->
          <!--<Menu-item name="Widget">
              <router-link to="/sys/widget">
                <i class="fa fa-cogs"></i>
                Widget  
              </router-link>
          </Menu-item>
          <Menu-item name="Panels">
              <router-link to="/sys/panels">
                <i class="fa fa-database"></i>
                Panels
              </router-link>
          </Menu-item>
          <Menu-item name="ImageList">
              <router-link to="/sys/imagelist">
                <i class="fa fa-photo"></i>
                Image List  
              </router-link>
          </Menu-item>
          <Menu-item name="Charts">
              <router-link to="/sys/charts">
                <i class="fa fa-bar-chart"></i>
                Charts  
              </router-link>
          </Menu-item>
          <Submenu name="DataTable">
              <template slot="title">
                  <i class="fa fa-database"></i>
                  Data Table
              </template>
              <Menu-item name="BasicTable">
                <router-link to="/sys/basic-table">
                  Basic Table 
                </router-link>
              </Menu-item>
              <Menu-item name="EditableTable">
                <router-link to="/sys/editable-table">
                  Editable Table  
                </router-link>
              </Menu-item>
              <Menu-item name="Dashboard">
                <router-link to="/sys/dashboard2">
                  Dashboard
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Pages">
              <template slot="title">
                  <i class="fa fa-file"></i>
                  Pages
              </template>
              <Menu-item name="Login">
                <router-link to="/login">
                  Login 
                </router-link>
              </Menu-item>
              <Menu-item name="Lockscreen">
                <router-link to="/lockscreen">
                  Lockscreen 
                </router-link>
              </Menu-item>
          </Submenu>-->
      </Menu>
    </div>
    <div class="main-content">
      <transition>
        <router-view></router-view> 
      </transition>
      <p class="vm-author">Copyright © 2017 SCHOLAT. All Rights Reserved.<a href="https://www.scholat.com" target="_blank">学者网</a> 版权所有</p> 
    </div>
  </div>
</template>
<script>
import VmMsgPush from '@/components/vm-msg-push.vue'
import VmSearch from '@/components/vm-search'
export default {
  name: 'home',
  components: {
    VmMsgPush,
    VmSearch
  },
  methods: {
    logOut () {
      console.log('登出')
      this.$store.dispatch('FedLogOut').then(() => {
        this.$router.push({ path: '/login' })
      })
    },
    cValue: function (data) {
      this.value = data
    },
    submit () {
      // alert(this.value)
      this.$router.push({name: 'authorPageName', params: {name: this.value}})
    },
    toPage (value) {
      alert(value)
      // console.log(value)
      // this.$router.push({name: 'authorPageName', params: {name: value}})
    }
  },
  mounted: function () {
    this.activeName = this.$route.name
    this.userName = this.$store.state.user.username
  },
  data () {
    return {
      userName: '',
      activeName: 'Dashboard',
      value: ''
    }
  }
}
</script>
