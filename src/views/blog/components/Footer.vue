<template>
  <div class="footer">
    <div class="word">{{ content }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const content = ref("欢迎小伙伴们的到来！");

    return {
      content,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 60px;
  background: #333;
  margin: 0 auto;

  .word {
    font-size: 20px;
    font-weight: bolder;
    font-family: "微软雅黑";
    color: #f2f4f6;
    line-height: 60px;
    text-align: center;
  }
}
</style>
