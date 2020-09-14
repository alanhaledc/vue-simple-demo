<template>
  <div class="top">
    <div class="top-wrapper">
      <p class="call">010-114/116114电话预约</p>
      <p class="welcome">
        欢迎来到北京市预约挂号统一平台
        <a href="#">登录</a>
        <a href="#">注册</a>
        <a href="#">帮助中心</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  background-color: #f5f5f5;
  color: #969696;

  .top-wrapper {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    background-color: #f00;

    .call {
      float: left;
      padding-left: 20px;
      background: url("../img/icon-call.png") no-repeat center left;
    }

    .welcome {
      float: right;
    }

    a {
      color: #2da5e1;
      padding-left: 10px;
    }
  }
}
</style>
