<template>
  <transition name="fade" @after-leave="afterLeave">
    <div class="progress" v-show="show"></div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    function afterLeave() {
      emit("after-leave");
    }

    return {
      afterLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
.progress {
  position: absolute;
  width: 280px;
  height: 15px;
  left: 50%;
  margin-left: -140px;
  top: 22px;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    red 0,
    red 33%,
    orange 33%,
    orange 66%,
    red 66%,
    red 100%
  );
  background-size: 30px 15px;
  animation: rolling 0.6s linear infinite;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.3s;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 1;
  }
}

@keyframes rolling {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 30px 0;
  }
}
</style>
