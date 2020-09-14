<template>
  <div class="screen-2">
    <transition name="slide-down">
      <h2 class="screen-2__heading" v-show="isShow">优美的设计，更令人着迷</h2>
    </transition>
    <transition name="slide-up">
      <h3 class="screen-2__subheading" v-show="isShow">
        采用受欢迎的设计，让它更加出色。
        <br />款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。
      </h3>
    </transition>
    <transition name="slide-up">
      <div class="screen-2__phone" v-show="isShow">
        <transition name="slide-right">
          <div class="screen-2__point screen-2__point_i_1" v-show="isShow">
            高清摄像
          </div>
        </transition>
        <transition name="slide-left">
          <div
            class="screen-2__point screen-2__point_i_2 screen-2__point_custom_right"
            v-show="isShow"
          >
            超薄机身
          </div>
        </transition>
        <transition name="slide-left">
          <div
            class="screen-2__point screen-2__point_i_3 screen-2__point_custom_right"
            v-show="isShow"
          >
            大屏显示
          </div>
        </transition>
      </div>
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
.screen-2 {
  background-color: #fafafa;
  height: 800px;
  position: relative;
  overflow: hidden;

  .screen-2__heading {
    font-weight: normal;
    font-size: 46px;
    line-height: 46px;
    color: #f01400;
    text-align: center;
    padding-top: 96px;
  }

  .screen-2__subheading {
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #2c3137;
    text-align: center;
    padding-top: 25px;
  }

  .screen-2__phone {
    position: absolute;
    width: 928px;
    height: 873px;
    background: url("../img/screen-2-phone.png") no-repeat center;
    left: 50%;
    margin-left: -464px;
    bottom: -345px;
    z-index: 2;

    .screen-2__point {
      width: 108px;
      height: 22px;
      padding-right: 112px;
      font-size: 22px;
      line-height: 22px;
      position: absolute;
      color: #4d555d;
      background: url("../img/icon-point-right.png") no-repeat center right;

      &::before,
      &::after {
        content: " ";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        top: 1px;
        background-color: rgba(255, 0, 0, 0.4);
        animation: bounce 2s infinite;
        border-radius: 50%;
      }

      &::before {
        animation: bounce 2s infinite 1s;
      }
    }

    .screen-2__point_custom_right {
      padding: 0 0 0 112px;
      background: url("../img/icon-point-left.png") no-repeat center left;
    }

    .screen-2__point_i_1 {
      top: 150px;
      left: -164px;

      &::before,
      &::after {
        // 覆盖前面的left=0使得动画的样式位于最右边
        left: 200px;
      }
    }

    .screen-2__point_i_2 {
      top: 30px;
      right: 130px;
      transition: all 0.5s 2s;

      &.screen-2__point_i_2_animation_init {
        opacity: 0;
        transform: translate(100%, 0);
      }

      &.screen-2__point_i_2_animation_done {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    .screen-2__point_i_3 {
      top: 330px;
      right: 30px;
    }
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

  .slide-right-enter-active {
    transition: all 1s 1s;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translate(-100%, 0);
  }

  .slide-left-enter-active {
    transition: all 1s 2s;
  }

  .slide-left-enter-from {
    opacity: 0;
    transform: translate(100%, 0);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}
</style>
