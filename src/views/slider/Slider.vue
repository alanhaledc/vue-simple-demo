<template>
  <div class="slider">
    <div class="container">
      <MenuBox />
      <Banner />
    </div>
  </div>
</template>

<script>
import MenuBox from "./components/MenuBox";
import Banner from "./components/Banner";

export default {
  name: "Slider",
  components: {
    MenuBox,
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.slider {
  font-family: "微软雅黑";
  color: #14191e;

  .container {
    width: 1200px;
    height: 460px;
    margin: 30px auto;
    position: relative;
    overflow: hidden;
  }
}
</style>
