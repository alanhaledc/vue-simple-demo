<template>
  <div class="header" @click="closeList">
    <div class="header-wrapper">
      <div class="logo clearfix">
        <img src="../img/logo.jpg" alt="logo" width="93" height="75" />
        <div class="title">北京市预约挂号统一平台</div>
      </div>
      <div class="search">
        <div class="search-select" @click.stop="toggleSelect">
          {{ state.searchDefault }}
        </div>
        <div class="search-select-list" v-show="state.isListShow">
          <div
            class="search-select-item"
            v-for="item in state.searchList"
            @click="selectItem(item)"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <input
          type="text"
          name="search-content"
          class="search-input"
          placeholder="请输入搜索内容"
        />
        <div class="search-submit">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      isListShow: false,
      searchDefault: "医院",
      searchList: ["科室", "疾病", "医院"],
    });

    function toggleSelect() {
      state.isListShow = !state.isListShow;
    }

    function selectItem(item) {
      state.searchDefault = item;
      state.isListShow = false;
    }

    function closeList() {
      state.isListShow = false;
    }

    return {
      state,
      toggleSelect,
      selectItem,
      closeList,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 6px 0;
  height: 92px;

  .header-wrapper {
    width: 1000px;
    margin: 0 auto;
    position: relative;

    &.clearfix::after {
      content: "";
      display: block;
      clear: both;
      height: 0;
      line-height: 0;
    }

    .logo {
      width: 450px;
      height: 74px;
      padding: 9px 0;
      display: block;

      img {
        float: left;
      }

      .title {
        float: left;
        font-size: 28px;
        font-weight: bolder;
        line-height: 28px;
        padding-top: 23px;
        color: #006db3;
      }
    }

    .search {
      width: 326px;
      height: 38px;
      position: absolute;
      top: 29px;
      right: 0;
      background: url("../img/ui-search.jpg") no-repeat center;
      font-size: 14px;
      color: #fff;
      border-radius: 5px;
      border-color: #fec009;

      .search-select {
        width: 70px;
        height: 38px;
        line-height: 38px;
        position: absolute;
        left: 0;
        top: 0;
        text-indent: 14px;
        cursor: pointer;
        // 不会选中蓝色字体
        user-select: none;
      }

      .search-select-list {
        position: absolute;
        width: 67px;
        line-height: 24px;
        background: #fff;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
        left: 2px;
        top: 36px;
        z-index: 2;

        .search-select-item {
          display: block;
          color: #a5a2a2;
          text-align: center;
          cursor: pointer;

          &:hover {
            background: #ebeef5;
          }
        }
      }

      .search-input {
        width: 208px;
        height: 26px;
        position: absolute;
        top: 5px;
        left: 73px;
        line-height: 26px;
        font-size: 13px;
        color: #a5a2a2;
        border: none;
        outline: medium;
      }

      .search-submit {
        display: block;
        position: absolute;
        right: 0;
        top: 1px;
        width: 40px;
        height: 36px;
        cursor: pointer;
      }
    }
  }
}
</style>
