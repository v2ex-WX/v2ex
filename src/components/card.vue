<template>
    <div class="box">
        <div class="boxinfo" v-for='(item,index) in items' :key='index'>
            <div class="topInfo">
                <div class="userInfo">
                    <img src="/static/topic_user_black.png" class="icon">
                    <div class="rightInfo">
                        <p class="userNmae">qi1234565id</p>
                        testFrom
                    </div>
                    <div class="time">10s</div>
                </div>
                <div class="infoNum">
                    <img src="/static/iconfont-qz-2.png" class="commentIcon">
                    <p class="commentNum">200</p>
                </div>
            </div>
            <div class="contents">testContenttes tConten ttestContenttestCo ntenttestContent</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    items: Object
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-top: 0rpx;
  overflow: hidden;
  background-color: #efefef;

  .boxinfo {
    background-color: #fff;
    margin-bottom: 20rpx;
    .topInfo {
      display: flex;
      flex-direction: row;
      padding-top: 20rpx;
      margin: 0 30rpx;
      .userInfo {
        flex: 1;
        display: flex;
        .icon {
          width: 40rpx;
          height: 40rpx;
        }
        .rightInfo {
          display: flex;
          color: #e3e3e3;
          font-size: 25rpx;
          margin-left: 20rpx;
          text-align: center;
          justify-content: center;
          .userNmae {
            margin-right: 25rpx;
          }
        }
        .time {
          color: #e3e3e3;
          font-size: 25rpx;
          margin-left: 15rpx;
        }
      }
      .infoNum {
        display: flex;
        text-align: center;
        justify-content: center;
        .commentIcon {
          width: 40rpx;
          height: 40rpx;
          margin-right: 8rpx;
        }
        .commentNum {
          font-size: 25rpx;
          color: #606060;
        }
      }
    }
    .contents {
      margin: 15rpx 30rpx;
      padding-bottom: 20rpx;
      font-size: 35rpx;
      color: #282828;
      word-wrap: break-word;
    }
  }
}
</style>
