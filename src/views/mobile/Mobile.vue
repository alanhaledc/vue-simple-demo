<template>
  <div class="mobile">
    <Header
      :is-fixed="state.isFixedHeader"
      :active-idx="state.activeIndex"
      @select="selectNav"
    />
    <screen-first :is-show="state.isPlayScreenFirst" />
    <screen-second :is-show="state.isPlayScreenSecond" />
    <screen-third :is-show="state.isPlayScreenThird" />
    <screen-fourth :is-show="state.isPlayScreenFourth" />
    <screen-fifth :is-show="state.isPlayScreenFifth" />
    <screen-buy />
    <Footer />
    <outline
      :is-show="state.isFixedHeader"
      :active-idx="state.activeIndex"
      @select="selectNav"
    />
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

import Header from "./components/Header";
import ScreenFirst from "./components/ScreenFirst";
import ScreenSecond from "./components/ScreenSecond";
import ScreenThird from "./components/ScreenThird";
import ScreenFourth from "./components/ScreenFourth";
import ScreenFifth from "./components/ScreenFifth";
import ScreenBuy from "./components/ScreenBuy";
import Footer from "./components/Footer";
import Outline from "./components/Outline";

export default {
  name: "Mobile",
  components: {
    Header,
    ScreenFirst,
    ScreenSecond,
    ScreenThird,
    ScreenFourth,
    ScreenFifth,
    ScreenBuy,
    Footer,
    Outline,
  },
  setup() {
    const state = reactive({
      isPlayScreenFirst: false,
      isPlayScreenSecond: false,
      isPlayScreenThird: false,
      isPlayScreenFourth: false,
      isPlayScreenFifth: false,
      isFixedHeader: false,
      activeIndex: 0,
      scrollTop: 0,
    });

    onMounted(() => {
      scrollToPlayAnimation();
    });

    function scrollToPlayAnimation() {
      state.isPlayScreenFirst = true;
      window.onscroll = () => {
        state.scrollTop = document.documentElement.scrollTop;

        if (state.scrollTop > 80) {
          state.isFixedHeader = true;
        } else {
          state.isFixedHeader = false;
          state.activeIndex = 0;
        }

        if (state.scrollTop > 800 - 100) {
          state.isPlayScreenSecond = true;
          state.activeIndex = 1;
        }
        if (state.scrollTop > 800 * 2 - 100) {
          state.isPlayScreenThird = true;
          state.activeIndex = 2;
        }
        if (state.scrollTop > 800 * 3 - 100) {
          state.isPlayScreenFourth = true;
          state.activeIndex = 3;
        }
        if (state.scrollTop > 800 * 4 - 100) {
          state.isPlayScreenFifth = true;
          state.activeIndex = 4;
        }
      };
    }
    // 选中导航目标, 滚动窗口位置
    function selectNav(index) {
      setScrollTop(index);
    }
    // 根据子组件的 activeIndex 设置窗口的滚动位置
    function setScrollTop(index) {
      document.documentElement.scrollTop = 800 * index;
    }

    return {
      state,
      selectNav,
    };
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  font-family: "微软雅黑";
  h2,
  h3 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
}
</style>
