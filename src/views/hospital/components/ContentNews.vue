<template>
  <div class="content-news">
    <div class="caption">
      最新公告
      <div class="more">|更多</div>
    </div>
    <div class="list">
      <div
        class="link"
        v-for="news in state.newsList"
        :key="news"
        v-text="news"
      ></div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      newsList: [
        "首都医科大学宣武医院号源暂停更新通知",
        "北京市肛肠医院(二龙路医院)号源更新及号源停挂时间调整通知",
        "清华大学医院暑假暂停更新号源通知",
        "中国中医科学院西苑医院特需门诊部分医师医事服务费调整通知",
        "北京清华长庚医院号源更新时间及预约周期调整通知",
        "北京大学第一医院号源更新时间调整通知",
      ],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-news {
  float: right;
  width: 248px;
  height: 236px;
  background: #fff;
  border: 1px solid #f4f6fa;

  .caption {
    height: 38px;
    line-height: 38px;
    text-indent: 20px;
    color: #fecd09;
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
    padding: 15px 15px 13px 35px;
    line-height: 29px;
    font-size: 12px;
    background: url("../img/list-yellow.jpg") no-repeat 17px 20px;
    overflow: hidden;

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
