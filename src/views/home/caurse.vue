<template>
  <div id="caurse">
    <div class="el-main-div">
      <p class="bannerTitle">体验课程</p>
      <p class="addData" @click="showFalgFn()">添加数据+</p>
      <ul class="listData">
        <li style="width: 15%;">people</li>
        <li style="width: 15%;">time</li>
        <li style="width: 15%;">price</li>
        <li style="width: 15%;">oldprice</li>
        <li style="width: 30%;">title</li>
        <li style="width: 10%;">操作</li>
      </ul>
      <ul class="listData" v-for="(item,index) in dataList" :key="index">
        <li style="width: 15%;">{{item.people}}</li>
        <li style="width: 15%;">{{item.time}}</li>
        <li style="width: 15%;">{{item.price}}</li>
        <li style="width: 15%;">{{item.oldprice}}</li>
        <li style="width: 30%;">{{item.title}}</li>
        <li style="width: 10%;">
          <p class="cz" @click="changeItem(item)">修改</p>
          <p class="cz" @click="delData(item.id)">删除</p>
        </li>
      </ul>
    </div>
    <div class="tank" v-if="showFlag">
      <div class="centerBox">
        <p>人 数：<input type="text" class="ipt" v-model="nPeople"></p>
        <p>课 时：<input type="text" class="ipt" v-model="nTime"></p>
        <p>价 格：<input type="text" class="ipt" v-model="nPrice"></p>
        <p>未折扣：<input type="text" class="ipt" v-model="nOldprice"></p>
        <p>说 明：<input type="text" class="ipt" v-model="nTitle"></p>
        <button class="forGet" @click="getDataEnd()">确定</button>
      </div>
      <p class="del" @click="hideShowFlag()">×</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataList: [],
        showFlag: false,
        unid: null,
        nPeople: '',
        nTime: '',
        nPrice: '',
        nOldprice: '',
        nTitle: '',
        num: null,
        changeId: null
      }
    },
    mounted() {
      this.unid = localStorage.unid
      console.log("thsi.unid", this.unid);
      this.getDataAfter()
    },
    methods: {
      showFalgFn() {
        this.showFlag = true
        this.num = 0
      },
      getDataAfter() {
        var that = this
        this.axios.post(localStorage.url+'getexper').then((req) => {
          console.log(req);
          that.dataList = req.data.data
          console.log(that.dataList);
        })
      },
      hideShowFlag() {
        this.showFlag = false
      },
      getDataEnd() {
        if (this.num == 0) {
          console.log('getDataEnd');
          this.axios.post(localStorage.url+'addexper', {
            unid: this.unid,
            title: this.nTitle,
            time: this.nTime,
            price: this.nPrice,
            oldprice: this.nOldprice,
            people: this.nPeople
          }).then((req) => {
            console.log('addexper', req);
            this.getDataAfter()
          })
        } else if (this.num == 1) {
          console.log(this.unid);
          this.axios.post(localStorage.url+'setexper', {
            unid: this.unid,
            id: this.changeId,
            title: this.nTitle,
            time: this.nTime,
            price: this.nPrice,
            oldprice: this.nOldprice,
            people: this.nPeople
          }).then((req) => {
            console.log(req);
            this.getDataAfter()
          })
        }
        this.showFlag = false
        this.nTitle = ''
        this.nTime = ''
        this.nPrice = ''
        this.nOldprice = ''
        this.nPeople = ''
      },
      delData(id) {
        console.log(id);
        this.axios.post(localStorage.url+'removeexper', {
          unid: this.unid,
          id: id
        }).then((req) => {
          console.log(req);
          this.getDataAfter()
        })
      },
      changeItem(item) {
        console.log(item);
        this.showFlag = true
        this.nTitle = item.title
        this.nTime = item.time
        this.nPrice = item.price
        this.nOldprice = item.oldprice
        this.nPeople = item.people
        this.changeId = item.id
        this.num = 1
      }
    },
    created() {

    }
  }
</script>

<style lang="scss">
  #caurse {
    background: #fff;
    width: 100%;
    height: 100%;
    position: relative;

    .el-main-div {
      width: 100%;
      background: #fff;
      padding: 0;
      margin: 0;
    }

    .bannerTitle {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #000;
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
    }

    .listData {
      width: 890px;
      height: 50px;
      border-bottom: 0.3px solid #000;
    }

    .listData>li {
      height: 50px;
      line-height: 50px;
      text-align: center;
      overflow: hidden;
      float: left;
    }

    .cz {
      width: 100%;
      height: 50%;
      line-height: 25px;
      color: red;
      text-align: center;
      cursor: pointer;
    }

    .addData {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      color: red;
      font-weight: bold;
      border-bottom: 1px solid red;
      text-align: center;
      cursor: pointer;
    }

    .tank {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;

      .del {
        width: 60px;
        height: 60px;
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
        font-size: 30px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #fff;
      }

      .centerBox {
        width: 500px;
        height: 500px;
        background: #fff;
        margin-left: 180px;
        margin-top: 150px;
        display: flex;
        align-items: center;
        flex-direction: column;

        &>p {
          // width: 100%;
          display: inline-block;
          height: 50px;
          font-size: 15px;
          line-height: 50px;
          margin-top: 20px;
        }

        .ipt {
          width: 400px;
          height: 100%;
          outline: none;
          border: none;
          border: 0.5px solid #ccc;
        }
      }
    }

    .forGet {
      width: 70%;
      height: 50px;
      outline: none;
      border: none;
      border-radius: 10px;
      background: #1CA035;
      color: #fff;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      margin-top: 50px;
      cursor: pointer;
    }
  }
</style>
