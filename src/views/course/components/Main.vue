<template>
  <div class="main">
    <aside>
      <h1>Recent <samp>Course</samp></h1>
      <div v-for="item in state.courseList" :key="item.title">
        <dl>
          <dt>{{ item.title }}</dt>
          <dd><img :src="item.url" /></dd>
          <dd>
            {{ item.text }}
          </dd>
        </dl>
      </div>
    </aside>
    <article>
      <h1>Welcome to <samp>Massive Open Online Course!</samp></h1>
      <p>{{ state.articleText.text1 }}</p>
      <img :src="state.articleText.picUrl" />
      <p>{{ state.articleText.text2 }}</p>
      <p>{{ state.articleText.text3 }}</p>
    </article>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      courseList: [
        {
          title: "Hyper Text Markup Language",
          url: require("../img/Course/05_05.png"),
          text:
            "HTML is the standard markup language used to create web pages and its " +
            "elements form the building blocks of all websites.",
        },
        {
          title: "Cascading Style Sheets",
          url: require("../img/Course/06_04.png"),
          text:
            "Cascading Style Sheets (CSS) is a simple mechanism for adding style " +
            "(e.g., fonts, colors, spacing) to Web documents.",
        },
        {
          title: "JavaScript",
          url: require("../img/Course/09_07.png"),
          text:
            "JavaScript is a high-level, dynamic, untyped, and interpreted " +
            "programming language.",
        },
        {
          title: "AngularJS",
          url: require("../img/Course/02_09.png"),
          text:
            "AngularJS is an open-source web application framework mainly " +
            "maintained by Google and by a community of individuals and...",
        },
      ],
      articleText: {
        text1:
          "We provide the latest knowledge to help you cope with the changing world!",
        picUrl: require("../img/article.jpg"),
        text2:
          "We hope that all the students who love the Internet can be more " +
          "convenient access to learning resources, using the Internet thinking to " +
          "change our learning.",
        text3:
          "Focus on IT skills education MOOC, consistent with the development trend " +
          "of the Internet down to earth's MOOC. We are free, we only teach useful, " +
          "we concentrate on education.",
      },
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 1200px;
  height: 473px;
  margin: 34px auto 0;
  font-family: Arial;

  h1 {
    font-size: 30px;
    font-weight: lighter;
    margin-bottom: 23px;

    samp {
      font-size: 30px;
      color: #7c7c7c;
    }
  }

  aside {
    float: left;
    width: 450px;

    dl {
      position: relative;
      display: block;
      height: 74px;
      margin-bottom: 17px;

      dt {
        position: absolute;
        top: -1px;
        left: 92px;
        font-size: 16px;
        font-weight: bolder;
        line-height: 16px;
      }

      dd:first-child {
        position: absolute;
        left: 0;
      }

      dd:last-child {
        position: absolute;
        top: 20px;
        left: 90px;
      }
    }
  }

  article {
    float: right;
    width: 720px;
    overflow: hidden;

    p,
    img {
      margin-bottom: 20px;
    }
  }
}
</style>
