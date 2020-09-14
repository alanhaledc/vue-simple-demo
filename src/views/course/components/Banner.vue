<template>
  <div class="banner">
    <ul>
      <li :class="value.className" v-for="value in imgList" :key="value.title">
        <img :src="value.url" :alt="value.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const imgList = ref([
      {
        className: "actived",
        url: require("../img/banner/banner1.jpg"),
        title: "banner1",
      },
      {
        className: "left",
        url: require("../img/banner/banner3.jpg"),
        title: "banner2",
      },
      {
        className: "right",
        url: require("../img/banner/banner2.jpg"),
        title: "banner3",
      },
    ]);

    return {
      imgList,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background: #eaeaea;

  ul {
    position: relative;
    width: 1490px;
    height: 538px;
    margin: 0 auto;
    padding-top: 10px;

    li {
      position: absolute;
      width: 610px;
      height: 300px;
      overflow: hidden;

      &.actived {
        z-index: 2;
        top: 37px;
        right: 0;
        left: 0;
        width: 960px;
        height: 460px;
        margin: auto;
        border: 1px solid #fff;
      }

      &.left {
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }

      &.right {
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }

      img {
        position: absolute;
        left: -30%;
        height: 100%;
      }
    }
  }
}
</style>
