<template>
  <div class="course">
    <Header />
    <Banner />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: "Course",
  components: {
    Header,
    Banner,
    Main,
    Footer,
  },
};
</script>
