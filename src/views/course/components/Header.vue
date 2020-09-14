<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../img/logo.png" alt="logo" />
      </div>
      <nav>
        <div
          class="nav-item"
          v-for="(value, key) in state.navList"
          :key="key"
          :class="{ actived: key === state.activeIndex }"
          @click="state.activeIndex = key"
        >
          {{ value }}
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      navList: ["Home", "Course", "Actual", "Plan", "FAQ", "Note"],
      activeIndex: 0,
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  background: #000;

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .logo {
    display: block;
    float: left;
    margin: 5px 25px;
  }

  nav {
    float: right;

    .nav-item {
      display: block;
      float: left;
      font-size: 24px;
      width: 100px;
      height: 73px;
      line-height: 73px;
      text-align: center;
      color: #fff;
      cursor: pointer;

      &:hover,
      &.actived {
        padding-bottom: 7px;
      }
    }

    .nav-item:nth-child(1) {
      background: #d40122;
    }

    .nav-item:nth-child(2) {
      background: #017fcb;
    }

    .nav-item:nth-child(3) {
      background: #78b917;
    }

    .nav-item:nth-child(4) {
      background: #feb800;
    }

    .nav-item:nth-child(5) {
      background: #f27c01;
    }

    .nav-item:nth-child(6) {
      background: #433b90;
    }
  }
}
</style>
