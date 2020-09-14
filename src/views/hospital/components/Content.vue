<template>
  <div class="content">
    <div class="content-wrapper clearfix">
      <div class="content-tab">
        <div class="caption">
          <div
            class="item"
            :class="{ item_focus: state.captionActiveIndex === index }"
            v-for="(item, index) in state.captionList"
            :key="item"
            v-text="item"
            @click="state.captionActiveIndex = index"
          ></div>
        </div>
        <div class="block">
          <div class="item" v-show="state.captionActiveIndex === 0">
            <div class="block-caption">
              <div
                class="block-caption-item"
                :class="{
                  'block-caption-item_focus': state.areaActiveIndex === index,
                }"
                v-for="(item, index) in state.areas"
                :key="item"
                @click="state.areaActiveIndex = index"
                v-text="item"
              ></div>
            </div>
            <div class="block-content-wrapper">
              <div class="block-content" v-show="state.areaActiveIndex === 0">
                <div class="block-content-list clearfix">
                  <div class="block-content-item">
                    <img src="../img/hospital-1.jpg" alt="xx医院" />
                    <div class="item-name">
                      北京协和医院
                      <span class="item-level">【三级甲等】</span>
                    </div>
                    <div class="item-phone">
                      电话：东院咨询台：010-66669999...
                    </div>
                    <div class="item-address">
                      【东院】北京市东城区帅府园1号【西院】北京市西城区大木仓...
                    </div>
                  </div>
                  <div class="block-content-item">
                    <img src="../img/hospital-1.jpg" alt="xx医院" />
                    <div class="item-name">
                      北京协和医院
                      <span class="item-level">【三级甲等】</span>
                    </div>
                    <div class="item-phone">
                      电话：东院咨询台：010-66669999...
                    </div>
                    <div class="item-address">
                      【东院】北京市东城区帅府园1号【西院】北京市西城区大木仓...
                    </div>
                  </div>
                  <div class="block-content-item">
                    <img src="../img/hospital-1.jpg" alt="xx医院" />
                    <div class="item-name">
                      北京协和医院
                      <span class="item-level">【三级甲等】</span>
                    </div>
                    <div class="item-phone">
                      电话：东院咨询台：010-66669999...
                    </div>
                    <div class="item-address">
                      【东院】北京市东城区帅府园1号【西院】北京市西城区大木仓...
                    </div>
                  </div>
                  <div class="block-content-item">
                    <img src="../img/hospital-1.jpg" alt="xx医院" />
                    <div class="item-name">
                      北京协和医院
                      <span class="item-level">【三级甲等】</span>
                    </div>
                    <div class="item-phone">
                      电话：东院咨询台：010-66669999...
                    </div>
                    <div class="item-address">
                      【东院】北京市东城区帅府园1号【西院】北京市西城区大木仓...
                    </div>
                  </div>
                </div>
                <div class="block-text-list clearfix">
                  <a href="#" class="block-text-item">
                    首都儿科研究所附属儿童医院
                    <span class="item-level">【三级甲等】</span>
                  </a>
                  <a href="#" class="block-text-item">
                    首都儿科研究所附属儿童医院
                    <span class="item-level">【三级甲等】</span>
                  </a>
                  <a href="#" class="block-text-item">
                    首都儿科研究所附属儿童医院
                    <span class="item-level">【三级甲等】</span>
                  </a>
                  <a href="#" class="block-text-item">
                    首都儿科研究所附属儿童医院
                    <span class="item-level">【三级甲等】</span>
                  </a>
                  <a href="#" class="block-text-item">
                    首都儿科研究所附属儿童医院
                    <span class="item-level">【三级甲等】</span>
                  </a>
                  <a href="#" class="block-text-item">
                    首都儿科研究所附属儿童医院
                    <span class="item-level">【三级甲等】</span>
                  </a>
                </div>
                <a class="block-more">更多医院</a>
              </div>
              <div
                class="block-content"
                v-for="index in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
                :key="index"
                v-show="state.areaActiveIndex === index + 1"
              >
                其他城区医院内容
              </div>
            </div>
          </div>
          <div class="item" v-show="state.captionActiveIndex === 1">
            科室内容
          </div>
        </div>
      </div>
      <content-news />
      <content-close />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import ContentNews from "./ContentNews";
import ContentClose from "./ContentClose";

export default {
  components: {
    ContentNews,
    ContentClose,
  },
  setup() {
    const state = reactive({
      captionActiveIndex: 0,
      areaActiveIndex: 0,
      captionList: ["医院", "科室"],
      areas: [
        "全部",
        "东城区",
        "西城区",
        "朝阳区",
        "丰台区",
        "石景山区",
        "海淀区",
        "门头沟区",
        "房山区",
        "其他",
      ],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 0 38px 0;

  .content-wrapper {
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

    .content-tab {
      float: left;
      width: 742px;
      height: 490px;

      .caption {
        height: 34px;
        line-height: 34px;
        background: #f5f6fa;

        .item {
          display: block;
          width: 112px;
          height: 34px;
          text-align: center;
          float: left;
          color: #00b3ea;
          cursor: pointer;
          user-select: none;

          &.item_focus {
            background: #60bff2;
            color: #fff;
          }
        }
      }

      .block {
        border: 1px solid #f4f6fa;
        height: 452px;

        .block-caption {
          height: 26px;
          line-height: 26px;
          padding: 8px;
          border-bottom: 1px solid #f4f6fa;

          .block-caption-item {
            display: block;
            padding: 0 10px;
            float: left;
            font-size: 12px;
            color: #4c4948;
            user-select: none;
            cursor: pointer;

            &.block-caption-item_focus {
              background: #60bff2;
              color: #fff;
            }
          }
        }

        .block-content {
          padding: 16px 12px;

          .block-content-list {
            &.clearfix::after {
              content: "";
              display: block;
              clear: both;
            }

            .block-content-item {
              float: left;
              width: 216px;
              height: 102px;
              padding: 0 20px 10px 120px;
              position: relative;
              font-size: 12px;

              img {
                width: 110px;
                height: 98px;
                position: absolute;
                left: 0;
                top: 0;
              }

              .item-name {
                color: #036eb7;
                font-size: 14px;
                line-height: 21px;
                padding-top: 13px;

                .item-level {
                  float: right;
                  font-size: 12px;
                  color: #979797;
                }
              }

              .item-phone,
              .item-address {
                line-height: 18px;
                padding-bottom: 4px;
                color: #666;
              }
            }
          }

          .block-text-list {
            &.clearfix::after {
              content: "";
              display: block;
              clear: both;
            }

            .block-text-item {
              display: block;
              width: 351px;
              height: 27px;
              font-size: 14px;
              color: #666;
              padding-top: 8px;
              float: left;
              border-bottom: 1px dashed #dcdddd;

              &:nth-child(even) {
                margin-left: 13px;
              }

              .item-level {
                float: right;
              }
            }
          }

          .block-more {
            display: block;
            text-align: center;
            line-height: 55px;
            color: #5084c4;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
