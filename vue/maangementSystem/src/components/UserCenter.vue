<template>
  <div>
      <BarHeader/>
      <div id="main" class="container clearfix">
        <div class="sideBar">
          <SideBar/>
        </div>
        <div class="content">
          <router-view/>
        </div>
      </div>
      <BarFooter/>
  </div>
</template>

<script>
import BarHeader from "./BarHeader";
import BarFooter from "./BarFooter";
import SideBar from './SideBar'
export default {
  components: {
    BarHeader,
    BarFooter,
    SideBar
  },

};
</script>

<style lang="scss">
@import '../assets/scss/common';
@import '../assets/scss/main';

</style>

