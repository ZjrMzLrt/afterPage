<template>
  <div id="styles">
      <div class="el-main-div">
            <p>蔚蓝风采</p>
            <div class="el-main-div-div">
                数据
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'styles'
}
</script>

<style lang="scss">
#styles{
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
