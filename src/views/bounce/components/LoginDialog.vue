<template>
  <div class="login-dialog" v-show="show">
    <div class="mask"></div>
    <div class="dialog">
      <div class="title">登录</div>
      <div class="body">
        <form autocomplete="off">
          <ul>
            <li>
              <label for="username">用户名</label>
              <input type="text" name="username" id="username" />
            </li>
            <li>
              <label for="password">密码</label>
              <input type="password" name="password" id="password" />
            </li>
            <li class="operation">
              <div class="cancel-dialog" @click="cancelBtn">取消</div>
              <div class="primary" @click="confirmBtn">登录</div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    function cancelBtn() {
      emit("cancel");
    }
    function confirmBtn() {
      emit("confirm");
    }

    return {
      cancelBtn,
      confirmBtn,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  perspective: 500px;

  .dialog {
    animation: slideIn 0.4s;
    animation-fill-mode: forwards;
  }

  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 300px;
    // margin-left -250px
    // margin-top -150px
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    background: #fff;

    .title {
      height: 50px;
      line-height: 50px;
      padding: 0 30px;
      border: 1px solid #f0f0f0;
      font-size: 20px;
    }

    .body {
      padding: 30px 80px;

      li {
        line-height: 50px;
        font-size: 20px;

        label {
          display: inline-block;
          width: 100px;
        }

        input {
          font-size: 20px;
          border: none;
          border-bottom: 1px solid #ccc;
          width: 230px;

          &:focus {
            outline: none;
          }
        }

        &.operation {
          margin-top: 20px;
          list-style: none;

          div {
            display: inline-block;
            text-align: center;
            line-height: 40px;
            width: 140px;
            height: 40px;
            background: white;
            border: 1px solid #999;
            font-size: 20px;
            letter-spacing: 1em;
            text-indent: 1em;
            cursor: pointer;
            margin-right: 50px;

            &.primary {
              background: #4990e2;
              border-color: #4990e2;
              color: white;
            }

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

@keyframes slideIn {
  from {
    transform: translate(-50%, -50%) rotateX(-90deg);
  }

  80% {
    transform: translate(-50%, -50%) rotateX(10deg);
  }

  to {
    transform: translate(-50%, -50%) rotateX(0);
  }
}
</style>
