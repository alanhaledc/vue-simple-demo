<template>
  <div class="screen-buy">
    <a href="#" class="screen-buy__button">立即购买</a>
  </div>
</template>

<style lang="scss" scoped>
.screen-buy {
  // height 320px
  // padding 居中法
  height: 80px;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #2b333b url("../img/bg-screen-buy.png") no-repeat center;
  text-align: center;

  .screen-buy__button {
    height: 80px;
    line-height: 80px;
    width: 240px;
    font-size: 24px;
    text-align: center;
    color: #fff;
    background: #f01414;
    display: inline-block;
    border-radius: 3px;
    transition: box-shadow 0.5s;

    &:hover {
      box-shadow: 0 0 10px #fff;
    }
  }
}
</style>
