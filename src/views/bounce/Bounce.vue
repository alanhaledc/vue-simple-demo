<template>
  <div class="bouns">
    <header>
      <nav>
        <div class="user">
          <div class="login" @click="goLogin">登录</div>
        </div>
        <ul>
          <li>CSS基础知识</li>
          <li>效果与动画</li>
          <li>工具与工程化</li>
        </ul>
      </nav>
      <div class="header-main">
        <ul class="introduction">
          <li>- 2017年末新课</li>
          <li>- 前端看家本领</li>
          <li>- 全民深入的讲解</li>
        </ul>
        <h1>全面深入讲解CSS</h1>
      </div>
    </header>
    <section class="banner fade-in">
      <ul>
        <li>
          <div class="feature feature1"></div>
          <p>特点1</p>
        </li>
        <li>
          <div class="feature feature2"></div>
          <p>特点2</p>
        </li>
        <li>
          <div class="feature feature3"></div>
          <p>特点3</p>
        </li>
      </ul>
    </section>
    <section class="main fade-in fade-in-delay">
      <div class="block block1">
        <img src="./img/panda.jpg" alt="panda" />
        <div class="block-text">
          <h2>知识全面讲解</h2>
          <ul>
            <li>- 核心知识全面覆盖</li>
            <li>- 涉猎非核心知识</li>
            <li>- 其他知识看一看</li>
          </ul>
        </div>
      </div>
      <div class="block block2">
        <div class="block-text">
          <h2>知识深入讲解</h2>
          <ul>
            <li>- 以点带面</li>
            <li>- 知识讲解清楚深入</li>
            <li>- 其他知识也很全面</li>
          </ul>
        </div>
        <img src="./img/panda.jpg" alt="panda" />
      </div>
    </section>
    <footer>
      <div class="footer-content">TooBug @ 2018</div>
    </footer>
    <Progress :show="isShowProgress" @afterLeave="showDialog" />
    <login-dialog :show="isShowDialog" @cancel="cancelDialog" />
  </div>
</template>

<script>
import { ref } from "vue";
import LoginDialog from "./components/LoginDialog";
import Progress from "./components/Progress";

export default {
  name: "Bounce",
  components: {
    LoginDialog,
    Progress,
  },
  setup() {
    const isShowDialog = ref(false);
    const isShowProgress = ref(false);

    function goLogin() {
      isShowProgress.value = true;
      setTimeout(() => {
        isShowProgress.value = false;
      }, 1000);
    }

    // 动画消失后显示登录框
    function showDialog() {
      isShowDialog.value = true;
    }

    function cancelDialog() {
      isShowDialog.value = false;
    }

    return {
      isShowDialog,
      isShowProgress,
      goLogin,
      showDialog,
      cancelDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
.bouns {
  header {
    background: linear-gradient(to bottom, #3a2cac, #631d9f);
    height: 280px;
    padding: 20px;

    nav {
      max-width: 1000px;
      margin: 0 auto;

      .login {
        color: #f0f0f0;
        cursor: pointer;

        &:hover {
          color: #f90;
        }
      }

      .user {
        float: right;
      }

      ul {
        li {
          display: inline-block;
          padding-right: 40px;
          color: #f0f0f0;
          cursor: pointer;

          &:hover {
            color: #f90;
          }
        }
      }
    }

    .header-main {
      width: 730px;
      color: #f0f0f0;
      margin: 50px auto;

      .introduction {
        float: right;
      }

      h1 {
        line-height: 70px;
      }
    }
  }

  .banner {
    width: 690px;
    padding: 20px;
    margin: 0 auto;
    margin-top: -105px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    ul {
      text-align: center;

      li {
        display: inline-block;
        height: 160px;
        width: 180px;
        text-align: center;

        .feature {
          margin: 20px auto;
          background: #f90;
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
    }
  }

  .main {
    margin: 100px auto;
    width: 720px;

    .block {
      margin-bottom: 100px;
      margin-left: -20px;

      &::after {
        content: "";
        display: block;
        clear: both;
      }

      .block-text {
        float: left;
        width: 260px;
        line-height: 50px;
        color: #999;
        font-size: 24px;
        margin-right: 20;

        h2 {
          font-size: 36px;
          margin-bottom: 50px;
        }
      }

      img {
        float: left;
        width: 440px;
        height: 235px;
        margin-right: 20px;
      }
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 12px;
    color: #999;
    text-align: center;

    .footer-content {
      max-width: 1000px;
      margin: 0 auto;
      background: #ddd;
    }
  }

  .fade-in {
    transform: translateY(100px);
    opacity: 0;
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
  }

  .fade-in-delay {
    animation-delay: 1s;
  }
}

@keyframes fadeIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
