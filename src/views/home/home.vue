<template>
  <div id="home">
      <div class="el-main-div">
            <p>轮播图</p>
            <div class="el-main-div-div">
                数据
            </div>
        </div>
        <div class="el-main-div">
            <p>地理位置</p>
            <div class="el-main-div-div">
                数据
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
#home{
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
</style>
