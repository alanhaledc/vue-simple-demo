<template>
  <transition name="slide-left">
    <div class="outline" v-show="isShow">
      <div
        class="outline__item"
        :class="{ outline__item_status_active: index === activeIdx }"
        v-for="(title, index) in navTitles"
        :key="title"
        v-text="title"
        @click="selectItem(index)"
      />
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    activeIdx: {
      type: Number,
      default: 0,
    },
  },
  setup(_, { emit }) {
    const navTitles = ref(["首页", "外观", "配置", "型号", "说明"]);

    function selectItem(index) {
      emit("select", index);
    }

    return {
      navTitles,
      selectItem,
    };
  },
};
</script>

<style lang="scss" scoped>
.outline {
  position: fixed;
  padding: 5px 10px;
  bottom: 120px;
  right: 0;
  z-index: 3;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: all 1s;

  .outline__item {
    display: block;
    width: 40px;
    height: 30px;
    line-height: 30px;
    padding: 5px 0;
    margin-top: 5px;
    border-top: 1px solid #eee;
    text-align: center;
    color: #93999f;
    cursor: pointer;

    &:first-child {
      border-top: none;
    }

    &.outline__item_status_active {
      color: #f01400;
    }
  }
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 1s;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translate(100%, 0);
}
</style>
