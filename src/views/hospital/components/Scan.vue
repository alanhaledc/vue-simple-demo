<template>
  <div class="scan" v-show="isShow">
    <div class="close" @click="close"></div>
    <img src="../img/scan_code.png" alt="scan_img" width="203" height="221" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isShow = ref(true);

    function close() {
      isShow.value = false;
    }

    return {
      isShow,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.scan {
  position: fixed;
  display: block;
  right: 30px;
  top: 240px;
  width: 202px;

  .close {
    display: block;
    position: absolute;
    right: 0;
    top: -30px;
    width: 19px;
    height: 19px;
    background: url("../img/close.png");
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
