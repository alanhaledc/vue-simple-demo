<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div content="link-list">
        <div class="link menu">全部科室</div>
        <div class="link">按医院挂号</div>
        <div class="link">按科室挂号</div>
        <div class="link">按疾病挂号</div>
        <div class="link">最新公告</div>
      </div>
      <div class="menu-list">
        <div
          class="menu-item"
          v-for="(menu, index) in state.menuList"
          :key="index"
          @mouseover="state.menuActiveIndex = index"
          @mouseout="state.menuActiveIndex = -1"
        >
          <div class="logo" :class="'logo-' + (index + 1)"></div>
          <div class="title" v-text="menu.title"></div>
          <div class="subtitle" v-text="menu.subtitle"></div>
        </div>
      </div>
      <div class="category-list">
        <div
          class="category-item"
          v-show="state.menuActiveIndex === 0"
          @mouseover="state.menuActiveIndex = 0"
          @mouseout="state.menuActiveIndex = -1"
        >
          <div class="type">
            <div class="title">内科</div>
            <div class="detail">
              <div class="detail-item">心血管内科</div>
              <div class="detail-item">神经内科</div>
              <div class="detail-item">消化内科</div>
              <div class="detail-item">内分泌科</div>
              <div class="detail-item">免疫科</div>
              <div class="detail-item">呼吸科</div>
              <div class="detail-item">血液科</div>
              <div class="detail-item">感染内科</div>
              <div class="detail-item">老年病科</div>
              <div class="detail-item">普通内科</div>
              <div class="detail-item">高压氧科</div>
            </div>
          </div>
          <div class="type">
            <div class="title">内科常见疾病</div>
            <div class="detail">
              <div class="detail-item">冠心病</div>
              <div class="detail-item">高血压</div>
              <div class="detail-item">心律失常</div>
              <div class="detail-item">房颤</div>
              <div class="detail-item">阵发性室上性心动过速</div>
              <div class="detail-item">心衰</div>
              <div class="detail-item">心肌炎</div>
              <div class="detail-item">先天性心脏病</div>
              <div class="detail-item">风湿性心脏病</div>
              <div class="detail-item">心肌病</div>
              <div class="detail-item">急性感染性心内膜炎</div>
            </div>
          </div>
        </div>
        <div
          class="category-item"
          v-show="state.menuActiveIndex === 1"
          @mouseover="state.menuActiveIndex = 1"
          @mouseout="state.menuActiveIndex = -1"
        >
          科室内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      menuActiveIndex: -1,
      menuList: [
        {
          title: "内科",
          subtitle: "胃炎 高血压 冠心病",
        },
        {
          title: "外科",
          subtitle: "肾结石 脑外伤",
        },
      ],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 36px;
  background: #60bff2;

  .nav-wrapper {
    width: 1000px;
    margin: 0 auto;
    position: relative;

    .link {
      /* display: inline-block; */
      float: left;
      padding-left: 30px;
      line-height: 36px;
      color: #fff;
      font-size: 16px;
      min-width: 80px;
      text-align: center;
      cursor: pointer;

      &:hover {
        color: #d7f3ff;
      }
    }

    .menu {
      width: 190px;
      padding-left: 0;
      background: #1fa4f0;
      position: relative;
    }
  }

  .menu-list {
    position: absolute;
    left: 0;
    top: 36px;
    width: 190px;
    height: 423px;
    background: #1fa4f0;

    .menu-item {
      cursor: pointer;
      width: 190px;
      height: 39px;
      line-height: 39px;
      float: left;
      background: #1fa4 f;
      position: relative;
      color: #fff;

      &:hover {
        background: #fff;
        color: #969696;

        &.category-list {
          .category-item {
            display: block;
          }
        }

        .logo {
          &.logo-1 {
            background-position: 0 0;
          }
        }

        .logo {
          &.logo-2 {
            background-position: 0 -22px;
          }
        }
      }

      .logo {
        position: absolute;
        left: 8px;
        top: 9px;
        line-height: 39px;
        width: 21px;
        height: 21px;
        margin-right: 5px;
        vertical-align: middle;
        background: url("../img/icon-menu.jpg") no-repeat;

        &.logo-1 {
          background-position: -22.5px 0;
        }

        &.logo-2 {
          background-position: -22.5px -22px;
        }
      }

      .title {
        position: absolute;
        left: 35px;
        font-size: 14px;
        line-height: 39px;
      }

      .subtitle {
        float: right;
        margin-right: 5px;
        font-size: 12px;
        line-height: 39px;
      }
    }
  }

  .category-list {
    .category-item {
      position: absolute;
      left: 190px;
      top: 36px;
      background: #fff;
      color: #969696;
      width: 500px;
      height: 393px;
      z-index: 2;
      padding: 20px 10px 10px 29px;
      overflow: hidden;

      .type {
        margin-bottom: 20px;

        .title {
          display: block;
          text-align: left;
          font-size: 14px;
          height: 34px;
          line-height: 34px;
          margin-bottom: 5px;
        }

        .detail {
          &::after {
            content: "";
            display: block;
            clear: both;
          }

          .detail-item {
            float: left;
            width: auto;
            height: 22px;
            line-height: 22px;
            font-size: 12px;
            margin-right: 15px;
            cursor: pointer;

            &:hover {
              color: #00b3ec;
            }
          }
        }
      }
    }
  }
}
</style>
