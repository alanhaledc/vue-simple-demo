<template>
  <div class="content-close">
    <div class="caption">
      停诊公告
      <div class="more">|更多</div>
    </div>
    <div class="list">
      <div
        class="link"
        v-for="item in state.closeList"
        :key="item"
        v-text="item"
      ></div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      closeList: [
        "北京中医医院顺义医院耳鼻喉专家停诊公告",
        "北京中医医院顺义医院脑病专家停诊公告",
        "解放军307医院皮肤科停诊公告",
        "北京大学第一医院普通外科停诊公告",
        "北京市肛肠医院(二龙路医院)肛肠专家(副主任医师）停诊公告",
        "中国人民解放军总医院(301医院)妇产科停诊公告",
      ],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-close {
  float: right;
  width: 248px;
  height: 236px;
  border: 1px solid #f4f6fa;
  margin-top: 12px;

  .caption {
    height: 38px;
    line-height: 38px;
    text-indent: 20px;
    color: #00b3ea;
    font-size: 15px;

    .more {
      float: right;
      padding-right: 22px;
      font-size: 12px;
      color: #868686;
      cursor: pointer;
      user-select: none;
    }
  }

  .list {
    padding: 15px 20px 13px 35px;
    line-height: 29px;
    font-size: 12px;
    background: url("../img/list-blue.jpg") no-repeat 17px 20px;

    .link {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #969696;
    }
  }
}
</style>
