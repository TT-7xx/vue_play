<template>
  <div class="header">
    <!-- 公共部分的组件 -->
    <img src="../assets/images/logo.jpg" alt="">
    <ul class="index">
      <li><a @click="home">首页</a></li>
      <li><a @click="look">快看</a></li>
      <li><a @click="video">动漫</a></li>
      <li><a @click="content">阅读</a></li>
      <li><a @click="collects">音乐</a></li>
      <li><a href="javascript:;">手办</a></li>
    </ul>
    <input type="text" placeholder="霸道总裁爱上我">
    <img src="../assets/images/下载.png" class="search">
    <ul class="rigth">
      <li><a href="javascript:;">登录&nbsp;&nbsp;&nbsp;&nbsp;|</a></li>
      <li><a href="avascript:;">注册</a></li>
      <li><a href="avascript:;">我要投稿</a></li>
      <li><a href="avascript:;">开放平台</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data:function(){
    return{

    }
  },
  methods:{
    look(){
      this.$router.push('/Collect')
    },
    home(){
      this.$router.push('/')
    },
    video(){
      this.$router.push('/Video')
    },
    content(){
      this.$router.push('/Content')
    },
    collects(){
      this.$router.push('/Collects')
    },
  }
}
</script>


<style scoped >

</style>
