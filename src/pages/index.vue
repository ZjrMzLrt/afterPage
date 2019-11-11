<template>
  <div id="index">
    <el-container>
      <el-header style="width:100%;height: 50px;">
        <p style="margin-left: 15%;font-size: 20px;font-weight: bold;background: linear-gradient(-3deg,#c3c3c3 0%,#ffffff 100%);-webkit-background-clip: text;color: transparent;">Four 蔚蓝艺校</p>
        <p v-if="isLoginOk"><span>登录</span>/<span>注册</span></p>
        <p v-else>欢迎进入蔚蓝管理系统</p>
        <p style="cursor: pointer;" @click="dropFn()">退出</p>
      </el-header>
      <el-container class="contents">
        <el-aside width="300px">

          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="rgba(0,0,0,0.1)" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                数据
              </template>
              <el-menu-item index="1">
                <router-link to="/home" tag="span">首页</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/caurse" tag="span">体验课程</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/teacher" tag="span">授课老师</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/audios" tag="span">视频实录</router-link>
              </el-menu-item>
              <el-menu-item index="5">
                <router-link to="/news" tag="span">新闻中心</router-link>
              </el-menu-item>
              <el-menu-item index="6">
                <router-link to="/style" tag="span">蔚蓝风采</router-link>
              </el-menu-item>
              <el-menu-item index="7">
                <router-link to="/reservation" tag="span">约课记录</router-link>
              </el-menu-item>
              <el-menu-item index="8">
                <router-link to="/alreadyBuy" tag="span">我的课程</router-link>
              </el-menu-item>
              <el-menu-item index="9">
                <router-link to="/myAddress" tag="span">精彩课程</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>

        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>


  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        isLoginOk: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      dropFn(){
        this.axios.post(localStorage.url+'drop').then((req)=>{
          console.log(req);
          this.$router.push({
            path:'/login'
          })
        })
      }
    },
    created() {
      localStorage.url = 'http://192.168.43.209:8800/'
      this.axios.post(localStorage.url+'islogin',{user:'111',pass:'111'}).then((req)=>{
        console.log("login",req.data);
        if(req.data.islogin==false){
          this.$router.push({
            path:'/login'
          })
        }else{
          localStorage.unid = req.data.islogin
          this.isLoginOk =false
        }
      })
    }
  }
</script>

<style lang="scss">
  #index {
    width: 100%;
    height: 100vh;
    background: url(../../static/img/yy.gif);
    .el-header {
      background-color: #4D86B5;
      color: #333;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 300px;
        height: 60px;
      }

      p {
        margin-right: 40px;
        color: #fff;
        font-size: 18px;
      }
    }

    .contents {
      width: 1200px;
      margin: 0 auto;
      height: 90vh;

      .el-aside {
        background-color: #60A6E1;
        color: #333;
        text-align: center;
        height: calc(100vh - 50px);

        .el-submenu__title {
          font-size: 25px;
          margin-top: 1px;
        }

        .el-submenu__title:hover {
          background: rgba(0, 0, 0, 0.1) !important;
        }

        .el-menu-item:hover {
          background: rgba(0, 0, 0, .4) !important;
        }

        span {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }

      .el-main {
        width: 100%;
        background-color: #E9EEF3;
        color: #333;
        padding: 0;
        margin: 0;
        background: rgba(255, 255, 255, 0.7);
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        -moz-box-shadow: 6px 5px 12px #333333;
        -webkit-box-shadow: 6px 5px 12px #333333;
        box-shadow: 10px 5px 25px #828282;

        .el-main-div {
          margin-bottom: 30px;
          background: #fff;


          .el-main-div-div {
            padding: 20px;
          }
        }
      }

    }

    .centerBox {
      width: 100%;
      height: 100px
    }

    .cOne {
      width: 1200px;
      text-align: left;
      margin: 0 auto;
      font-size: 20px;
      margin-top: 10px;
    }

    .cTwo {
      width: 1200px;
      text-align: left;
      margin: 0 auto;
      font-size: 30px;
      margin-top: 15px;
    }

    .el-menu-item:hover {
      background: orange !important;
    }

    .el-menu-item.is-active {
      font-weight: bold !important;
      font-size: 25px;
      transition: .5s;
    }

    .el-menu-item {
      margin-top: 15px;
    }
  }
</style>
