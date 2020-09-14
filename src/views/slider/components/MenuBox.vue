<template>
  <div class="menu-box">
    <MenuContent @mouseEnter="onMouseEnter" @mouseLeave="onMouseLeave" />
    <SubMenu
      @mouseEnter="onMouseEnter"
      @mouseLeave="onMouseLeave"
      :showIndex="showIndex"
    />
  </div>
</template>

<script>
import { ref } from "vue";

import MenuContent from "./MenuContent";
import SubMenu from "./SubMenu";

export default {
  components: {
    MenuContent,
    SubMenu,
  },
  setup() {
    const showIndex = ref(-1);

    function onMouseEnter(index) {
      showIndex.value = index;
    }

    function onMouseLeave(index) {
      showIndex.value = index;
    }

    return {
      showIndex,
      onMouseEnter,
      onMouseLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-box {
  background: rgba(7, 17, 27, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  width: 244px;
  height: 460px;
  z-index: 1;
  margin: 0;
  padding: 0;
  user-select: none;
}

@font-face {
  font-family: "iconfont";
  src: url("../img/font/iconfont.eot");
  src: url("../img/font/iconfont.eot") format("embedded-opentype"),
    url("../img/font/iconfont.woff") format("woff"),
    url("../img/font/iconfont.ttf") format("truetype"),
    url("../img/font/iconfont.svg#iconfont") format("svg");
}
</style>
