<template>
  <div id="home">
    <p class="bannerTitle">轮播图数据</p>
    <ul class="bannerList">
      <li v-for="(item,index) in bannerData" :key="index">
        <p class="everyItem">{{item}}</p>
        <p class="everyDel">删除</p>
      </li>
    </ul>
    <p class="bannerTitle">地址Top</p>
    <ul class="bannerList">
      <li>
        <p class="everyItem">{{addressData.top}}</p>
        <p class="everyDel">删除</p>
      </li>
    </ul>
    <p class="bannerTitle">地址Bottom</p>
    <ul class="bannerList">
      <li>
        <p class="everyItem">{{addressData.bottom}}</p>
        <p class="everyDel">删除</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        bannerData: [],
        addressData: []
      }
    },
    mounted() {
      var that = this
      this.axios.post(localStorage.url+'index').then((req) => {
        console.log(req);
        that.bannerData = req.data.banner
        that.addressData = req.data.address
        console.log(that.addressData);
      })
    }
  }
</script>

<style lang="scss">

  #home {
    background: #fff;

    .bannerTitle {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #000;
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
    }

    .bannerList {
      width: 100%;
    }

    .bannerList>li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      // border: 1px solid #000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
    }

    .everyItem {
      width: 75%;
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      font-size: 14px;
      font-weight: 100;
      color: #666;
    }

    .everyDel {
      width: 10%;
      text-align: center;
      line-height: 50px;
      height: 50px;
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
</style>
