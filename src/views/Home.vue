<template>
  <div class="home">
    <div class="category-container">
      <div class="title">{{ state.title }}</div>
      <div class="category-list">
        <ol>
          <li v-for="item in state.routes" :key="item.to">
            <router-link :to="item.to" class="text" tag="p">
              {{ item.text }}
            </router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      title: "DEMO CATEGORY",
      routes: [
        { to: "/blog", text: "Blog" },
        { to: "/bounce", text: "Bounce" },
        { to: "/course", text: "Course" },
        { to: "/hospital", text: "Hospital" },
        { to: "/mobile", text: "Mobile" },
        { to: "/slider", text: "Slider" },
      ],
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  background-color: rgb(199, 237, 203);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;

  .category-container {
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  .title {
    font-size: 30px;
    margin: 20px auto;
  }

  .category-list {
    display: inline-block;
    width: 200px;

    ol {
      text-align: center;

      li {
        list-style: decimal;
      }

      .text {
        font-size: 24px;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
