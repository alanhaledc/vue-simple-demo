<template>
  <div class="footer">
    <div class="container">
      <p>{{ state.text }}</p>
      <span>
        <img
          :src="item.url"
          :alt="item.title + '-logo'"
          v-for="item in state.urlList"
          :key="item.url"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      text: "Copyright © 2019",
      urlList: [
        { url: require("../img/icon/weichat.png"), title: "weichat" },
        { url: require("../img/icon/sina.png"), title: "sina" },
        { url: require("../img/icon/qq.png"), title: "qq" },
      ],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #000;

  .container {
    width: 1200px;
    height: 64px;
    margin: 0 auto;

    p {
      line-height: 64px;
      float: left;
      color: #fff;
    }

    span {
      float: right;
      margin: 14px 40px;

      img {
        margin-left: 4px;
        opacity: 0.7;

        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
