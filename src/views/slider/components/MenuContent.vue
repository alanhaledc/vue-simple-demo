<template>
  <div class="menu-content">
    <div
      class="menu-item"
      v-for="(item, index) in menuList"
      :key="item"
      @mouseenter="onMouseEnter(index)"
      @mouseleave="onMouseLeave"
    >
      <div class="item-name">{{ item }}</div>
      <i class="arrow-right-little">&#xe665;</i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(_, { emit }) {
    const menuList = ref(["手机、配件", "电脑", "家用电器", "家具"]);

    function onMouseEnter(index) {
      emit("mouse-enter", index);
    }

    function onMouseLeave() {
      emit("mouse-leave", menuList.value.length);
    }

    return {
      menuList,
      onMouseEnter,
      onMouseLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 244px;
  height: 460px;
  z-index: 2;
  padding-top: 6px;

  .menu-item {
    height: 64px;
    line-height: 66px;
    font-size: 12px;
    cursor: pointer;
    padding: 0 24px;
    position: relative;

    &:last-child {
      .item-name {
        border-bottom: none;
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      z-index: 2;
    }

    .item-name {
      display: block;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 0 8px;
      height: 63px;
      font-size: 16px;
      cursor: pointer;
    }

    .arrow-right-little {
      position: absolute;
      right: 32px;
      top: 24px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 24px;
      top: 2px;
      font-style: normal;
      font-weight: normal;
      font-family: "iconfont";
    }
  }
}
</style>
