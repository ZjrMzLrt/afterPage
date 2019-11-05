<template>
  <div id="news">
      <div class="el-main-div">
            <p>新闻中心</p>
            <div class="el-main-div-div">
                数据
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="scss">
#news{
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
