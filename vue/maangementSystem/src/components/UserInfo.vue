<template>
  <div>
       <BarHeader/>
        <div id="main" class="container clearfix">
            <div class="sideBar">
            <SideBar/>
            </div>
            <div class="content">
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
    data() {
        return {
            data: ''
        }
    },
    created() {
        let _this = this;
    
    },
    components: {
        BarHeader,
        BarFooter,
        SideBar
    }
}
</script>

<style lang="scss" scope>
@import '../assets/scss/common';
@import '../assets/scss/main';
</style>

