<template>
  <div class="header" :class="{ header_status_back: isFixed }">
    <div class="header__wrapper">
      <div class="header__logo">大米手机</div>
      <nav class="header__nav">
        <div
          class="header__nav-item"
          :class="{
            'header__nav-item_status_active': index === activeIdx,
          }"
          v-for="(title, index) in state.navTitles"
          :key="title"
          @click="selectItem(index)"
          @mouseover="onMouseOverTip(index)"
          @mouseout="onMouseOutTip"
        >
          {{ title }}
        </div>
        <div class="header__nav-item header__nav-item-custom_button">
          立即购买
        </div>
        <!-- 滑动条 -->
        <div class="header__nav-tip" ref="tipRef"></div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false,
    },
    activeIdx: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      navTitles: ["首页", "外观", "配置", "型号", "说明"],
    });

    const tipRef = ref(null);

    watch(
      () => props.activeIdx,
      () => setNavTipLeft()
    );

    function selectItem(index) {
      emit("select", index);
    }

    // 设置 tip 位置
    function setNavTipLeft() {
      const tip = tipRef.value;
      tip.style.left = props.activeIdx * 70 + "px";
    }

    // 监听鼠标滑过事件，设置 tip 位置
    function onMouseOverTip(index) {
      const tip = tipRef.value;
      tip.style.left = index * 70 + "px";
    }

    // 监听鼠标离开事件，设置 tip 位置
    function onMouseOutTip() {
      setNavTipLeft();
    }

    return {
      tipRef,
      state,
      selectItem,
      onMouseOverTip,
      onMouseOutTip,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #f7f7f7;
  transition: all 1s;

  .header__wrapper {
    width: 1200px;
    height: 80px;
    position: relative;
    margin: 0 auto;

    .header__logo {
      width: 150px;
      height: 38px;
      line-height: 38px;
      font-size: 20px;
      color: #07111b;
      text-indent: 50px;
      background: url("../img/logo.png") left center no-repeat;
      background-size: 38px 38px;
      position: absolute;
      top: 50%;
      margin-top: -19px;
      left: 20px;
    }

    .header__nav {
      position: absolute;
      right: 20px;
      height: 38px;
      top: 50%;
      margin-top: -19px;

      .header__nav-item {
        color: #292f35;
        font-size: 14px;
        display: block;
        height: 38px;
        line-height: 38px;
        float: left;
        width: 30px;
        text-align: center;
        padding-left: 40px;
        position: relative;
        cursor: pointer;

        &:hover {
          color: #f01400;
        }

        &.header__nav-item_status_active {
          color: #f01400;
        }

        &:last-child,
        &.header__nav-item-custom_button {
          background: #000;
          color: #f4f4f5;
          text-align: center;
          width: 90px;
          border-radius: 3px;
          padding: 0;
          margin-left: 40px;
        }
      }

      .header__nav-tip {
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: #f01400;
        bottom: 0;
        left: 0;
        margin-left: 40px;
        transition: all 0.5s;
      }
    }
  }

  &.header_status_back {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    .header__logo {
      color: #fff;
    }

    .header__nav {
      .header__nav-item {
        color: #fff;

        &.header__nav-item_status_active {
          color: #f00;
        }
      }
    }
  }
}
</style>
