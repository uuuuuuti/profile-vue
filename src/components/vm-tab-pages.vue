<template>
  <Tabs value="name1" >
    <!--<div v-for="tab in tabs" :key="tab.name">
      <TabPane :label="tab.name" :name="tab.name">
        <a>{{tab.value}}</a>
      </TabPane>
    </div>-->
    <TabPane v-for="tab in tabs" :key="tab.name" :label="tab.name" :name="tab.name">
        {{tab.value}}
    </TabPane>
  </Tabs>
</template>
<script>
//     export default {
//       name: 'VmTabPages',
//       props: {
//         tabs: {
//           type: Array,
//           default: function () {
//             return [
//               {
//                 title: 'tab1',
//                 path: '/sys/'
//               }
//             ]
//           }
//         }
//       },
//       data: function () {
//         return {
//         }
//       },
//       methods: {

//       },
//       created () {

//       }
// }
</script>
