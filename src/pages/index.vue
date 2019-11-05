<template>
  <div id="index">
    <el-container>
        <el-header style="width:100vw;">
            <p></p>
            <p v-if="isLoginOk"><span>登录</span>/<span>注册</span></p>
            <p v-else>欢迎，xxx</p>
        </el-header>
        <div class="centerBox"></div>
        <el-container class="contents">
            <el-aside width="300px">

                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="rgba(0,0,0,0.1)"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <!-- <i class="el-icon-location"></i> -->
                                数据
                        </template>
                            <el-menu-item index="1">
                                <router-link to="/home" tag="span">首页</router-link>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <router-link to="/caurse" tag="span">精品课程</router-link>
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
                                <router-link to="/myAddress" tag="span">收货地址</router-link>
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
  data(){
      return {
          isLoginOk:true
      }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss">
#index {
    .el-header{
            background-color: #3B77BD;
            color: #333;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                width: 300px;
                height: 60px;
            }
            p{
                margin-right: 40px;
                color:#fff;
                font-size: 18px;
            }
        }
    .contents{
        width: 1200px;
        margin: 0 auto;
        height:82vh;

        .el-aside {
            background-color: #34b7ef;
            color: #333;
            text-align: center;
            .el-submenu__title{
                font-size: 20px;
            }
            .el-submenu__title:hover{
                background: rgba(0,0,0,0.1) !important;
            }
            .el-menu-item:hover{
                background: rgba(0,0,0,.4) !important;
            }
            span{
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }
        .el-main {
            background-color: #E9EEF3;
            color: #333;
            .el-main-div{
                margin-bottom: 30px;
                background: #fff;
                p{
                    height: 30px;
                    line-height: 30px;
                    padding: 10px 20px;
                    border-bottom: 1px solid #ccc;
                }
                .el-main-div-div{
                    padding: 20px;
                }
            }
        }

    }
    .centerBox{
        width: 100vw;
        height: 100px
    }
}
  

</style>
