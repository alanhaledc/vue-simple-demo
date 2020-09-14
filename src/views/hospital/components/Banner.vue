<template>
  <div class="banner">
    <banner-slider />
    <banner-search />
    <div class="banner-help">
      <div class="caption">
        <span class="text">帮助中心</span>
      </div>
      <div class="list">
        <a href="#" class="link">账号指南</a>
        <a href="#" class="link">预约指南</a>
        <a href="#" class="link">账号找回</a>
        <a href="#" class="link">常见问题</a>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSearch from "./BannerSearch";
import BannerSlider from "./BannerSlider";

export default {
  components: {
    BannerSearch,
    BannerSlider,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 802px;
  margin: 0 auto;
  height: 414px;
  padding: 9px 0 0 198px;

  .banner-help {
    float: right;
    width: 250px;
    height: 146px;
    margin-top: 12px;
    background-color: #fafafa;

    .caption {
      height: 22px;
      padding: 15px 0 15px 0;
      text-align: center;

      .text {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        padding-left: 28px;
        color: #00b3ea;
        font-size: 16px;
        background: url("../img/icon-help.png") no-repeat 0 -23px;
      }
    }

    .list {
      .link {
        color: #00b3ea;
        display: inline-block;
        width: 86px;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        text-align: center;
        padding: 0 0 8px 26px;
      }
    }
  }
}
</style>
