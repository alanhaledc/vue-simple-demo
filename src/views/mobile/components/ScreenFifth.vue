<template>
  <div class="screen-5">
    <transition name="slide-down">
      <h2 class="screen-5__heading" v-show="isShow">
        游戏、学习、拍照，有这一部就够了
      </h2>
    </transition>
    <transition name="slide-up">
      <h3 class="screen-5__subheading" v-show="isShow">
        看视频、拍摄高清视频和照片、视频聊天、一机多功能，让您的生活更加丰富多彩
      </h3>
    </transition>
    <transition name="slide-up">
      <div class="screen-5__bg" v-show="isShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.screen-5 {
  height: 800px;
  position: relative;
  overflow: hidden;
  background: #d9dde1;

  .screen-5__heading {
    font-size: 46px;
    line-height: 46px;
    color: #f01400;
    text-align: center;
    padding-top: 130px;
  }

  .screen-5__subheading {
    font-size: 14px;
    line-height: 28px;
    color: #2c3137;
    text-align: center;
    padding-top: 25px;
  }

  .screen-5__bg {
    width: 1920px;
    height: 433px;
    position: absolute;
    left: 50%;
    margin-left: -960px;
    bottom: -100px;
    background: url("../img/bg-screen-5.png") no-repeat center;
    background-size: contain;
  }

  .slide-up-enter-active,
  .slide-down-enter-active {
    transition: all 1s;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translate(0, 100%);
  }

  .slide-down-enter-from {
    opacity: 0;
    transform: translate(0, -100%);
  }
}
</style>
