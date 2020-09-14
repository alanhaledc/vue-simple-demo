<template>
  <div class="main">
    <!-- 主体头部 -->
    <div class="top">
      <img src="../img/1.jpeg" alt="img" />
      <div class="top-layer"></div>
      <div class="top-layer-top">
        <div class="word">MY BEAUTIFUL LIFE</div>
        <button>LOOK MORE &gt;</button>
      </div>
    </div>
    <!-- 主体中间 -->
    <div class="middle">
      <!-- 中间头部 -->
      <div class="m-top clearfix">
        <div v-for="item of state.socialList" :key="item.id" class="comment">
          <img :src="item.imgUrl" alt="img" />
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
      <!-- 中间总部 -->
      <div class="m-middle">
        " I want to give good things to record down, <br />after the recall will
        be very beautiful."
      </div>
      <!-- 中间底部 -->
      <div class="m-bottom clearfix">
        <div v-for="item of state.imageList" :key="item.id" class="m-comment">
          <img :src="item.imgUrl" alt="img" />
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>
    <!-- 主体底部 -->
    <div class="bottom">
      <div class="content clearfix">
        <div class="title">FROM THE PHOTO ALBUM</div>
        <div class="pic-content">
          <dl v-for="item of state.picList" :key="item.id">
            <dt>
              <img :src="item.imgUrl" alt />
            </dt>
            <dd class="word">{{ item.desc }}</dd>
          </dl>
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
      socialList: [
        {
          id: "social-1",
          imgUrl: require("../img/weibo.png"),
          name: "MICROBLOG",
        },
        {
          id: "social-2",
          imgUrl: require("../img/weixin.png"),
          name: "WECHAT",
        },
        {
          id: "social-3",
          imgUrl: require("../img/QQ.png"),
          name: "QQ",
        },
      ],
      imageList: [
        {
          id: "img-1",
          imgUrl: require("../img/03-01.jpg"),
          title: "Cool Image",
          subtitle: "Record The Picture",
        },
        {
          id: "img-2",
          imgUrl: require("../img/03-02.jpg"),
          title: "Great Picture",
          subtitle: "Record The Picture",
        },
        {
          id: "img-3",
          imgUrl: require("../img/03-03.jpg"),
          title: "better Image",
          subtitle: "Record The Picture",
        },
      ],
      picList: [
        {
          id: "pic-1",
          imgUrl: require("../img/04-01.jpg"),
          desc: `
            Life is like a book, just read more and more
            refined, more and more carefully. When read,
            mind open, all things have been indifferent to
            heart. Life is the precipitation.
          `,
        },
        {
          id: "pic-2",
          imgUrl: require("../img/04-02.jpg"),
          desc: `
            Life is like a cup of tea, let people lead a
            person to endless aftertastes. You again good
            taste, it will always have a different taste,
            different people will have different taste more.
          `,
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
.main {
  .top {
    width: 100%;
    height: 600px;
    position: relative;

    img {
      width: 100%;
      height: 600px;
    }

    .top-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 600px;
      background: rgba(0, 0, 0, 0.5);
    }

    .top-layer-top {
      width: 500px;
      height: 300px;
      position: absolute;
      top: 300px;
      left: 50%;
      margin-top: -150px;
      margin-left: -250px;
      z-index: 2;

      .word {
        padding-top: 100px;
        text-align: center;
        font-size: 45px;
        font-weight: bolder;
        color: #fff;
        font-family: "微软雅黑";
      }

      button {
        width: 200px;
        height: 60px;
        margin-top: 50px;
        color: #fff;
        background: #f5704f;
        font-family: "微软雅黑";
        font-weight: bolder;
        font-size: 14px;
        text-align: center;
        border-radius: 8px;
        margin-left: 150px;
      }
    }
  }

  .middle {
    width: 1000px;
    margin: 0 auto;

    .m-top {
      .comment {
        float: left;
        width: 33.3%;
        padding-top: 50px;
        text-align: center;

        img {
          width: 100px;
          height: 100px;
        }

        .text {
          font-size: 20px;
          font-weight: bolder;
          color: #7d7c7e;
          padding-top: 20px;
        }
      }
    }

    .m-middle {
      font-size: 20px;
      line-height: 24px;
      color: #e19796;
      font-weight: bolder;
      padding-top: 50px;
      font-style: italic;
      padding-bottom: 50px;
      text-align: center;
    }

    .m-bottom {
      .m-comment {
        float: left;
        padding: 10px;
        text-align: center;
        font-size: 20px;
        font-weight: bolder;

        img {
          width: 310px;
          height: 260px;
        }

        .title {
          color: #7d7d7d;
          padding-top: 20px;
        }

        .subtitle {
          color: #bdbdbc;
          padding-top: 10px;
        }
      }
    }
  }

  .bottom {
    background: #f9f9f9;

    .content {
      width: 1000px;
      margin: 0 auto;

      .title {
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        color: #7d7c7e;
        font-family: "微软雅黑";
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .pic-content {
        dl {
          width: 470px;
          float: left;
          margin: 10px 12px;

          img {
            width: 470px;
            height: 460px;
          }

          .word {
            padding-top: 20px;
            font-size: 20px;
            line-height: 24px;
            font-weight: bolder;
            font-family: "微软雅黑";
            padding-bottom: 60px;
          }
        }
      }
    }
  }
}
</style>
