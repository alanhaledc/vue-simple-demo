<template>
  <div class="screen-4">
    <div class="screen-4__wrapper">
      <transition name="slide-down">
        <h2 class="screen-4__heading" v-show="isShow">丰富的手机型号</h2>
      </transition>
      <transition name="slide-up">
        <h3 class="screen-4__subheading" v-show="isShow">找到适合你的手机</h3>
      </transition>

      <div class="screen-4__type">
        <transition name="fade">
          <div
            class="screen-4__type__item screen-4__type__item_i_1"
            v-show="isShow"
          >
            <div class="screen-4__type__item__color">中国红</div>
            <div class="screen-4__type__item__storage">64G/128G/256G</div>
          </div>
        </transition>

        <transition name="fade">
          <div
            class="screen-4__type__item screen-4__type__item_i_2"
            v-show="isShow"
            style="transition-delay: 0.5s"
          >
            <div class="screen-4__type__item__color">土豪金</div>
            <div class="screen-4__type__item__storage">64G/128G/256G</div>
          </div>
        </transition>

        <transition name="fade">
          <div
            class="screen-4__type__item screen-4__type__item_i_3"
            v-show="isShow"
            style="transition-delay: 1s"
          >
            <div class="screen-4__type__item__color">太空灰</div>
            <div class="screen-4__type__item__storage">64G/128G/256G</div>
          </div>
        </transition>

        <transition name="fade">
          <div
            class="screen-4__type__item screen-4__type__item_i_4"
            v-show="isShow"
            style="transition-delay: 1.5s"
          >
            <div class="screen-4__type__item__color">绅士黑</div>
            <div class="screen-4__type__item__storage">64G/128G/256G</div>
          </div>
        </transition>
      </div>
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
.screen-4 {
  background-color: #fff;
  height: 800px;
  position: relative;
  overflow: hidden;

  .screen-4__wrapper {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    position: relative;

    .screen-4__heading {
      font-size: 46px;
      line-height: 46px;
      color: #f01400;
      text-align: center;
      padding-top: 135px;
    }

    .screen-4__subheading {
      font-size: 14px;
      line-height: 28px;
      color: #464a42;
      text-align: center;
      padding-top: 29px;
    }

    .screen-4__type {
      width: 1260px;
      height: 270px;
      position: absolute;
      top: 304px;
      margin-left: 30px;

      .screen-4__type__item {
        width: 220px;
        margin-right: 90px;
        height: 270px;
        float: left;
        position: relative;
        text-align: center;
      }

      .screen-4__type__item_i_1 {
        background: url("../img/phone-1.png") no-repeat left top;
      }

      .screen-4__type__item_i_2 {
        background: url("../img/phone-2.png") no-repeat left top;
      }

      .screen-4__type__item_i_3 {
        background: url("../img/phone-3.png") no-repeat left top;
      }

      .screen-4__type__item_i_4 {
        background: url("../img/phone-4.png") no-repeat left top;
      }

      .screen-4__type__item__color {
        width: 100%;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: #2c3238;
        position: absolute;
        bottom: -44px;
      }

      .screen-4__type__item__storage {
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: #a4a9ae;
        position: absolute;
        bottom: -66px;
      }
    }
  }

  .slide-up-enter-active,
  .slide-down-enter-active,
  .fade-enter-active {
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

  .fade-enter-from {
    opacity: 0;
  }
}
</style>
