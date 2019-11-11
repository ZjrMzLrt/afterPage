<template>
  <div class="login">
    <div class="box">
      <p class="title">LOGIN</p>
      <p class="info">Login with your accout</p>
      <p class="name">
        <img src="/static/img/name.png" alt="">
        <input type="text" class="iptName" placeholder="User name" v-model="nameU">
      </p>
      <p class="name">
        <img src="/static/img/pws.png" alt="">
        <input type="password" class="iptName" placeholder="Password" v-model="passU">
      </p>
      <button class="loginBtn" @click="goIndex()">Login</button>
      <p class="forget">If you do not have an accout,<span style="text-decoration: underline;font-weight: bold;cursor: pointer;" @click="goJoin()">Sign
          Up</span></p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        nameU:'',
        passU:''
      }
    },
    methods:{
      goJoin(){
        this.$router.push({
          path:'/join'
        })
      },
      goIndex(){
        this.axios.post(localStorage.url+'login',{
          user:this.nameU,
          pass:this.passU
        }).then((req)=>{
          console.log(req);
          if(req.data.code == 1){
            this.$router.push({
              path:'/home'
            })
          }else{
            alert('登录失败')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .login {
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
      right: 0;
    }

    .title {
      width: 70%;
      height: 60px;
      line-height: 60px;
      font-size: 35px;
      text-align: center;
      margin: 0 auto;
      font-weight: lighter;
      margin-top: 130px;
    }

    p {
      font-size: 50px;
      font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
        "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    }

    p.thin {
      font-weight: 100;
    }

    p.normal {
      font-weight: normal;
    }

    p.thick {
      font-weight: bold;
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

    .loginBtn {
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

    .forget {
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
