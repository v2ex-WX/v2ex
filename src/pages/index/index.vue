<template>
    <div class='container'>
        <div class='header'>
            <scroll-view class="scroll-view_x" scroll-x style="width: auto;overflow:hidden;" scroll-with-animation="true">
                <div class="item" :class="[selectTab == index ? 'activeItem' : 'item']" v-for='(headItem,index) in headTitle' :key='index' @click="tabSelct(headItem,index)">{{headItem}}</div>
            </scroll-view>
        </div>
        <div class="cards">
            <card :items="headTitle"></card>
        </div>
    </div>
</template> 

<script>
import card from "@/components/card";
export default {
  data() {
    return {
      headTitle: [
        "全部",
        "技术",
        "创意",
        "好玩",
        "Apple",
        "酷工作",
        "交易",
        "城市",
        "问与答",
        "最热",
        "R2"
      ],
      selectTab: "0"
    };
  },
   components: {
    card
  },
  methods: {
    tabSelct(headItem, index) {
      this.selectTab = index;
      //    wx.showLoading({
      //     title: "加载中"
      //   });
    }
  },
  created() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo();
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #efefef;
  font-size: 30rpx;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 0rpx;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 86rpx;
    overflow: hidden;
    white-space: nowrap;
    background-color: #fe9f28;

    .item {
      width: 150rpx;
      color: #606060;
      text-align: center;
      height: 83rpx;
      line-height: 83rpx;
      display: inline-block;
    }
    .activeItem {
      color: white;
      border-bottom: 4rpx #fff solid;
    }
  }
  .cards{
      margin-top: 105rpx;
      width: 100%;
  }
}
</style>
