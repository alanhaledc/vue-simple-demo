<template>
  <div class="header">
    <div class="logo">
      <!-- 左浮动 -->
      <img src="../img/logo.png" alt="logo" />
    </div>
    <!-- 右浮动 -->
    <nav>
      <ul>
        <!-- 左浮动 -->
        <li>首页</li>
        <li>图片</li>
        <li>视频</li>
        <li>手机</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  background: #eee;

  img {
    width: 300px;
    height: 85px;
    padding-left: 100px;
    padding-top: 8px;
    float: left;
  }

  nav {
    float: right;

    ul {
      padding-right: 100px;

      li {
        float: left;
        width: 100px;
        height: 80px;
        list-style: none;
        line-height: 80px;
        font-size: 16px;
        font-weight: bolder;
        color: #7d7d7d;
      }
    }
  }
}
</style>
