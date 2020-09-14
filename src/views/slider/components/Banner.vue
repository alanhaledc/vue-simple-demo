<template>
  <div class="banner" @mouseover="disableSlide" @mouseout="autoSlide">
    <div class="slider-wrapper" ref="sliderWrapperRef">
      <img
        class="slider-item"
        v-for="item in state.urlList"
        :key="item.id"
        :src="item.url"
      />
    </div>
    <div class="slider-arrow">
      <div class="arrow-item prev" @click="slidePrev"></div>
      <div class="arrow-item next" @click="slideNext"></div>
    </div>
    <div class="slider-dot">
      <div
        class="dot-item"
        :class="{ actived: state.curPageIndex === index }"
        v-for="(item, index) in state.urlList"
        :key="index"
        @click="selectDot(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";

const IMG_WIDTH = -1200;

export default {
  setup() {
    const state = reactive({
      curPageIndex: 0,
      urlList: [
        { id: "1", url: require("../img/bg1.jpg") },
        { id: "2", url: require("../img/bg2.jpg") },
        { id: "3", url: require("../img/bg3.jpg") },
      ],
    });

    const sliderWrapperRef = ref(null);

    let timer;

    onMounted(() => {
      autoSlide();
    });

    onBeforeUnmount(() => {
      disableSlide();
    });

    watch(
      () => state.curPageIndex,
      (newIndex) => {
        const sliderWrapper = sliderWrapperRef.value;
        sliderWrapper.style.left = IMG_WIDTH * newIndex + "px";
      }
    );

    function slidePrev() {
      slide("prev");
    }

    function slideNext() {
      slide("next");
    }

    function slide(direction) {
      direction === "next" ? state.curPageIndex++ : state.curPageIndex--;

      if (state.curPageIndex === state.urlList.length) {
        state.curPageIndex = 0;
      }
      if (state.curPageIndex < 0) {
        state.curPageIndex = state.urlList.length - 1;
      }
    }

    function selectDot(index) {
      state.curPageIndex = index;
    }

    function autoSlide() {
      timer = setInterval(() => {
        slideNext();
      }, 2000);
    }

    function disableSlide() {
      if (timer) clearInterval(timer);
    }

    return {
      sliderWrapperRef,
      state,
      selectDot,
      disableSlide,
      autoSlide,
      slidePrev,
      slideNext,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  float: left;
  width: 1200px;
  height: 460px;
  position: relative;
  overflow: hidden;

  .slider-wrapper {
    width: 99999px;
    height: 460px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s;

    .slider-item {
      float: left;
      width: 1200px;
      height: 460px;
      cursor: pointer;
    }
  }

  .slider-arrow {
    .arrow-item {
      position: absolute;
      transform: rotate(180deg);
      top: 50%;
      left: 244px;
      height: 80px;
      width: 40px;
      margin-top: -40px;
      background: url("../img/arrow.png") center center no-repeat;

      &.next {
        transform: rotate(0);
        left: auto;
        right: 0;
      }

      &:hover {
        background-color: #333;
        opacity: 0.8;
      }
    }
  }

  .slider-dot {
    position: absolute;
    bottom: 24px;
    right: 0;
    text-align: right;
    padding-right: 24px;
    line-height: 12px;

    .dot-item {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-left: 8px;
      background-color: rgba(7, 17, 27, 0.8);
      cursor: pointer;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;

      &.actived {
        box-shadow: 0 0 0 2px rgba(7, 17, 27, 0.4) inset;
        background-color: #ffffff;
      }
    }
  }
}
</style>
