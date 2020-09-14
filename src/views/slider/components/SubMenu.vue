<template>
  <div class="sub-menu">
    <div
      class="inner-box-wrapper"
      v-for="(menu, index) in menuList"
      :key="menu.title"
      v-show="index === showIndex"
      @mouseenter="onMouseEnter(index)"
      @mouseleave="onMouseLeave"
    >
      <div class="inner-box">
        <div class="sub-inner-box">
          <div class="title">{{ menu.title }}</div>
          <div
            class="sub-row"
            v-for="subMenuList in menu.subMenu"
            :key="subMenuList.subTitle"
          >
            <span class="bold mr10">{{ subMenuList.subTitle }}:</span>
            <span v-for="(text, index) in subMenuList.subList" :key="text">
              <span class="text">{{ text }}</span>
              <span
                class="ml10 mr10"
                v-show="index !== subMenuList.subList.length - 1"
                >/</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    showIndex: Number,
  },
  setup(_, { emit }) {
    const menuList = ref([
      {
        title: "手机、配件",
        subMenu: [
          { subTitle: "手机通讯", subList: ["手机", "手机维修", "以旧换新"] },
          {
            subTitle: "手机配件",
            subList: ["手机壳", "手机存储卡", "数据线", "充电器", "电池"],
          },
          {
            subTitle: "运营商",
            subList: ["中国联通", "中国电信", "中国移动"],
          },
          {
            subTitle: "智能设备",
            subList: ["智能手环", "智能家居", "智能手表", "其它配件"],
          },
          { subTitle: "娱乐", subList: ["耳机", "音响", "收音机", "麦克风"] },
        ],
      },
      {
        title: "电脑",
        subMenu: [
          { subTitle: "电脑", subList: ["笔记本", "平板", "一体机"] },
          {
            subTitle: "电脑配件",
            subList: [
              "显示器",
              "CPU",
              "主板",
              "硬盘",
              "电源",
              "显卡",
              "其它配件",
            ],
          },
          { subTitle: "游戏设备", subList: ["游戏机", "耳机", "游戏软件"] },
          {
            subTitle: "网络产品",
            subList: ["路由器", "网络机顶盒", "交换机", "存储卡", "网卡"],
          },
          {
            subTitle: "外部产品",
            subList: ["鼠标", "键盘", "U盘", "移动硬盘", "鼠标垫", "电脑清洁"],
          },
        ],
      },
      {
        title: "家用电器",
        subMenu: [
          { subTitle: "电视", subList: ["国产品牌", "韩国品牌", "欧美品牌"] },
          { subTitle: "空调", subList: ["柜式", "中央", "壁挂式"] },
          { subTitle: "冰箱", subList: ["多门", "对开门", "三门", "双门"] },
          {
            subTitle: "洗衣机",
            subList: ["滚筒式洗衣机", "迷你洗衣机", "洗烘一体机"],
          },
          { subTitle: "厨房电器", subList: ["油烟机", "洗碗机", "燃气灶"] },
        ],
      },
      {
        title: "家具",
        subMenu: [
          { subTitle: "家纺", subList: ["被子", "枕头", "四件套", "床垫"] },
          { subTitle: "灯具", subList: ["台灯", "顶灯", "节能灯", "应急灯"] },
          { subTitle: "厨具", subList: ["烹饪锅具", "餐具", "菜板刀具"] },
          {
            subTitle: "家装",
            subList: ["地毯", "沙发垫套", "装饰字画", "照片墙", "窗帘"],
          },
          {
            subTitle: "生活日用",
            subList: ["收纳用品", "浴室用品", "雨伞雨衣"],
          },
        ],
      },
    ]);

    function onMouseEnter(index) {
      emit("mouse-enter", index);
    }

    function onMouseLeave() {
      emit("mouse-leave", menuList.value.length);
    }

    return {
      menuList,
      onMouseEnter,
      onMouseLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
.sub-menu {
  .inner-box-wrapper {
    border: 1px solid #d9dde1;
    background-color: #fff;
    position: absolute;
    left: 244px;
    top: 0;
    width: 730px;
    height: 458px;
    z-index: 5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

    .inner-box {
      width: 100%;
      height: 100%;
      background: url("../img/fe.png") no-repeat;

      .sub-inner-box {
        width: 652px;
        margin-left: 40px;
        overflow: hidden;

        .title {
          color: #f01414;
          font-size: 16px;
          line-height: 16px;
          margin-top: 28px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .sub-row {
          margin-bottom: 25px;

          .bold {
            font-weight: 700;
          }

          .ml10 {
            margin-left: 10px;
          }

          .mr10 {
            margin-right: 10px;
          }

          .text {
            cursor: pointer;

            &:hover {
              color: #f00;
            }
          }
        }
      }
    }
  }
}
</style>
