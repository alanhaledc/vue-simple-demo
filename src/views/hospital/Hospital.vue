<template>
  <div class="hospital">
    <top />
    <Header />
    <Nav />
    <banner />
    <Content />
    <Footer />
    <back-up />
    <scan />
  </div>
</template>

<script>
import Top from "./components/Top";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";
import BackUp from "./components/BackUp";
import Scan from "./components/Scan";

export default {
  name: "Hospital",
  components: {
    Top,
    Header,
    Nav,
    Banner,
    Content,
    Footer,
    BackUp,
    Scan,
  },
};
</script>
