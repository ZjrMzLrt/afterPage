<template>
  <div class="join">
    <div class="box">
      <p class="title">Sign Up</p>
      <p class="info">Wecome to sign up</p>
      <p class="name">
        <img src="/static/img/name.png" alt="">
        <input type="text" class="iptName" placeholder="User name">
      </p>
      <p class="name">
        <img src="/static/img/pws.png" alt="">
        <input type="password" class="iptName" placeholder="Password">
      </p> <p class="name">
        <img src="/static/img/pws.png" alt="">
        <input type="password" class="iptName" placeholder="Again Password">
      </p>
      <button class="joinBtn">Sign Up</button>
      <p class="forget">If so, you have an account number,<span style="text-decoration: underline;font-weight: bold;cursor: pointer;" @click="goLogin()">Login</span></p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        
      }
    },
    methods:{
      goLogin(){
        this.$router.push({
          path:'/login'
        })
      }
    }
  }
</script>

<style lang="scss">
  .join {
    width: 100%;
    height: 100vh;
    background: url('/static/img/bg.jpg');
    background-size: 100% 100%;
    position: relative;

    .box {
      width: 50%;
      height: 100%;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }

    .title {
      width: 70%;
      height: 60px;
      line-height: 60px;
      font-size: 35px;
      text-align: center;
      margin: 0 auto;
      font-weight: 100;
      margin-top: 130px;
    }

    .info {
      width: 70%;
      height: 30px;
      font-size: 17px;
      line-height: 30px;
      color: #757575;
      margin: 0 auto;
      font-weight: 100;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .name {
      width: 70%;
      height: 40px;
      border: 1px solid #D9D9D9;
      border-radius: 6px;
      margin: 0 auto;
      margin-top: 50px;
    }

    .name>img {
      width: 30;
      height: 30px;
      border-radius: 6px;
      display: block;
      margin-top: 5px;
      margin-left: 10px;
      float: left;
    }

    .iptName {
      width: 80%;
      height: 38px;
      // line-height:20px;
      font-size: 16px;
      font-weight: 100;
      float: left;
      margin-left: 5px;
      color: #666;
      border: none;
    }
    .joinBtn{
      width: 70%;
      height: 40px;
      border: none;
      border: 1px solid #8493BE;
      outline: none;
      background: #fff;
      border-radius: 6px;
      margin: 0 auto;
      display: block;
      color: #8493BE;
      font-size: 16px;
      font-weight: 100;
      margin-top: 50px;
    }
    .forget{
      width: 70%;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      color: #757575;
      margin: 0 auto;
      font-weight: 3000;
      text-align: right;
      color: #8493BE;
      margin-top: 50px;
    }
  }
</style>
