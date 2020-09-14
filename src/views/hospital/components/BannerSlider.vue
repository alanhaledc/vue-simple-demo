<template>
  <div class="banner-slider" @mouseover="stopSlide" @mouseout="autoSlide">
    <div class="slider-wrapper" ref="sliderWrapperRef">
      <img
        v-for="item in state.imgList"
        :key="item.id"
        :src="item.imgUrl"
        :alt="item.imgUrl"
        class="slider-item"
      />
    </div>
    <div class="slider-arrow">
      <div class="arrow-item left" @click="slidePrev"></div>
      <div class="arrow-item right" @click="slideNext"></div>
    </div>
    <div class="slider-dot">
      <div
        class="dot-item"
        :class="{ 'dot-item_focus': state.curPageIndex === index }"
        v-for="(item, index) in state.imgList"
        :key="item.id"
        @click="selectDot(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
const IMG_WIDTH = -544;

export default {
  setup() {
    const state = reactive({
      curPageIndex: 0,
      imgList: [
        { id: 1, imgUrl: require("../img/banner_1.jpg") },
        { id: 2, imgUrl: require("../img/banner_2.jpg") },
        { id: 3, imgUrl: require("../img/banner_3.jpg") },
        { id: 4, imgUrl: require("../img/banner_4.jpg") },
      ],
    });

    const sliderWrapperRef = ref(null);

    let timer;

    onMounted(() => {
      autoSlide();
    });

    onBeforeUnmount(() => {
      stopSlide();
    });

    watch(
      () => state.curPageIndex,
      () => {
        const sliderWrapper = sliderWrapperRef.value;
        sliderWrapper.style.left = IMG_WIDTH * state.curPageIndex + "px";
      }
    );

    function slidePrev() {
      slide("prev");
    }

    function slideNext() {
      slide("next");
    }

    // 滚动图片 改变 curPageIndex 的值
    function slide(direction) {
      direction === "next" ? state.curPageIndex++ : state.curPageIndex--;

      if (state.curPageIndex === state.imgList.length) {
        state.curPageIndex = 0;
      }

      if (state.curPageIndex < 0) {
        state.curPageIndex = state.imgList.length - 1;
      }
    }

    function selectDot(index) {
      state.curPageIndex = index;
    }

    // 自动滚动
    function autoSlide() {
      timer = setInterval(() => {
        slideNext();
      }, 2000);
    }

    // 停止滚动
    function stopSlide() {
      if (timer) clearInterval(timer);
    }

    return {
      sliderWrapperRef,
      state,
      stopSlide,
      autoSlide,
      slidePrev,
      slideNext,
      selectDot,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner-slider {
  float: left;
  width: 544px;
  height: 414px;
  position: relative;
  overflow: hidden;

  .slider-wrapper {
    width: 99999px;
    height: 414px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s;

    .slider-item {
      display: block;
      float: left;
      width: 544px;
      height: 414px;
      cursor: pointer;
    }
  }

  .slider-arrow {
    position: absolute;
    width: 100%;
    height: 40px;
    top: 50%;
    margin-top: -20px;

    .arrow-item {
      display: block;
      width: 40px;
      height: 40px;
      position: absolute;
      cursor: pointer;
      // 会覆盖掉后面的right=0
      // left 0
      top: 0;
      background: url("../img/ui-slider-arrow.png") no-repeat;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
        background-position: -40px 0;
      }
    }
  }

  .slider-dot {
    width: 100%;
    height: 12px;
    position: absolute;
    left: 0;
    bottom: 20px;
    text-align: center;

    .dot-item {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url("../img/ui-slider-process.png") no-repeat;
      margin: 0 5px;
      cursor: pointer;

      &.dot-item_focus,
      &:hover {
        background-position: -23px 0;
      }
    }
  }
}
</style>
