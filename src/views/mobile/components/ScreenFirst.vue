<template>
  <div class="screen-1">
    <transition name="slide-up">
      <h2 class="screen-1__heading" v-show="isShow">
        <b>大米手机</b> 让你的生活更精彩
      </h2>
    </transition>
    <transition name="slide-down">
      <div class="screen-1__phone" v-show="isShow"></div>
    </transition>
    <transition name="slide-up">
      <div class="screen-1__shadow" v-show="isShow"></div>
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
.screen-1 {
  height: 800px;
  background: url("../img/bg-screen-1.png") no-repeat center;
  position: relative;
  overflow: hidden;
  // 屏幕全覆盖
  background-size: cover;

  .screen-1__heading {
    font-weight: normal;
    font-size: 46px;
    color: #4d555d;
    text-align: center;
    padding-top: 152px;
    transform: translate(0, 0);
    opacity: 1;

    b {
      color: #f01400;
      font-weight: normal;
    }
  }

  .screen-1__phone {
    position: absolute;
    width: 1375px;
    height: 305px;
    background: url("../img/screen-1-phone.png") no-repeat center;
    left: 50%;
    margin-left: -687px;
    bottom: 180px;
    z-index: 2;
  }

  .screen-1__shadow {
    width: 1233px;
    height: 305px;
    background: url("../img/screen-1-shadow.png") no-repeat center;
    position: absolute;
    left: 50%;
    margin-left: -616px;
    bottom: 30px;
    z-index: 1;
    opacity: 0.8;
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
