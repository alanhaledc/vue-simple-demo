<template>
  <div class="screen-3">
    <div class="screen-3__wrapper">
      <transition name="slide-down">
        <h2 class="screen-3__heading" v-show="isShow">
          外型小巧，功能强大的手机
        </h2>
      </transition>
      <transition name="slide-up">
        <h3 class="screen-3__subheading" v-show="isShow">
          采用受欢迎的设计，让它更加出色。
          <br />款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。
        </h3>
      </transition>
      <transition name="slide-up">
        <div class="screen-3__phone" v-show="isShow"></div>
      </transition>
      <transition name="zoom-rotation">
        <div class="screen-3__features" v-show="isShow">
          <div class="screen-3__features__item">
            <div class="screen-3__features__item__number">5.7</div>
            <div class="screen-3__features__item__desc">英寸大屏</div>
          </div>
          <div class="screen-3__features__item">
            <div class="screen-3__features__item__number">1200</div>
            <div class="screen-3__features__item__desc">万像素</div>
          </div>
          <div class="screen-3__features__item">
            <div class="screen-3__features__item__number">3D</div>
            <div class="screen-3__features__item__desc">touch</div>
          </div>
          <div class="screen-3__features__item">
            <div class="screen-3__features__item__number">A9</div>
            <div class="screen-3__features__item__desc">处理器</div>
          </div>
        </div>
      </transition>
    </div>
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
.screen-3 {
  background: url("../img/bg-screen-3.png") no-repeat center;
  background-size: cover;
  height: 800px;
  position: relative;
  overflow: hidden;

  .screen-3__wrapper {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    position: relative;

    .screen-3__heading {
      font-size: 46px;
      line-height: 46px;
      color: #fff;
      text-align: left;
      padding-top: 94px;
    }

    .screen-3__subheading {
      font-size: 14px;
      line-height: 28px;
      color: #fff;
      text-align: left;
      padding-top: 25px;
    }

    .screen-3__phone {
      width: 750px;
      height: 900px;
      background: url("../img/screen-3-phone.png") no-repeat center top;
      position: absolute;
      right: 0;
      top: 195px;
      z-index: 2;
    }

    .screen-3__features {
      position: absolute;
      top: 395px;
      left: 0;
      width: 320px;
      height: 280px;

      .screen-3__features__item {
        width: 138px;
        height: 118px;
        margin: 0 20px 20px 0;
        border: 1px solid #cb7173;
        float: left;
        border-radius: 3px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          transform: scale(1.1);
          border-color: #fff;
        }

        .screen-3__features__item__number {
          height: 36px;
          font-size: 36px;
          line-height: 36px;
          padding: 28px 0 8px;
        }

        .screen-3__features__item__desc {
          height: 14px;
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
  }

  .slide-up-enter-active,
  .slide-down-enter-active,
  .zoom-rotation-enter-active {
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

  .zoom-rotation-enter-from {
    opacity: 0;
    transform: scale(0) rotate(-360deg);
  }
}
</style>
