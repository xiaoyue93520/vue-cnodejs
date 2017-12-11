<template>
  <div>
    <template v-if="this.$store.state.LoginState == 1">
      <div class="panel">
        <div class="header">
          <span class="color-fade">个人信息</span>
        </div>
        <div class="inner">
          <div class="user-card">
            <img src="../assets/logo.png" alt="">
            用户名称
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="inner">
          <router-link to="/topic-reate" id="create-topic-btn">发布话题</router-link>
        </div>
      </div>
    </template>

    <template v-if="this.$store.state.LoginState != 1">
      <div class="panel">
        <div class="inner">
          <p>CNode：Node.js专业中文社区</p>
          <div>
            您可以
            <router-link to="/login">登录</router-link>
            体验更多的服务
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    beforeMount() {
      this.$store.commit('getState')
    }
  }
</script>

<style lang="scss">
  .user-card {
    line-height: 40px;
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
</style>
