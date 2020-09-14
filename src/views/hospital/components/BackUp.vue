<template>
  <div class="back-up" v-show="isShow" @click="backUp"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const isShow = ref(false);
    let timer;

    onMounted(() => {
      showTag();
    });

    onBeforeUnmount(() => {
      if (timer) clearInterval(timer);
    });

    function showTag() {
      window.onscroll = () => {
        const currentPosition = document.documentElement.scrollTop;
        isShow.value = currentPosition > 1;
      };
    }

    // 缓慢滚动到顶部
    function backUp() {
      timer = setInterval(() => {
        scrollToTop();
      }, 10);
    }

    function scrollToTop() {
      let currentPosition = document.documentElement.scrollTop;
      // 每次调用减少 10px 高度
      currentPosition -= 10;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition);
      } else {
        window.scrollTo(0, 0);
        if (timer) clearInterval(timer);
      }
    }

    return {
      isShow,
      backUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.back-up {
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  background: rgba(102, 102, 102, 0.9) url("../img/icon-go-up.png") no-repeat
    center;

  &:hover {
    background: rgba(102, 102, 102, 0.9);

    &::after {
      content: "返回顶部";
      display: block;
      line-height: 20px;
      text-align: center;
    }
  }
}
</style>
