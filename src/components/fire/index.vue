<template>
  <div class="fireEmergencySystem">
    <div class="header">
      <Header class="headerComp" />
    </div>
    <div class="content">
      <Left class="left" :productConfig="productConfig" />
      <Right class="right" :productConfig="productConfig" />
      <Footer class="footer" :productConfig="productConfig" />
    </div>
    <!-- <div class="footer"></div> -->
  </div>
</template>

<script>
// import productConfig from "../../../public/productConfig.js";
import productConfig from "productConfig";
import Header from "./components/header.vue";
import Left from "./components/left.vue";
import Right from "./components/right.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Left,
    Right,
    Footer,
  },
  data() {
    return {
      productConfig,
    };
  },
  mounted() {
    console.log(productConfig);
  },
};
</script>

<style lang="scss">
// @import "./index.scss";
// @import "./assets/font/iconfont.css";
.fireEmergencySystem {
  //   min-width: 1200px;
  //   background: #1a1a1a;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url("./assets/earthBcg.png") no-repeat 0px 80px;
  .header {
    .headerComp {
      height: 80px;
    }
  }
  .content {
    flex: 1;
    position: relative;
    .left {
      position: absolute;
      left: 20px;
      width: 23%;
      min-width: 450px;
      height: calc(100% - 56px);
      padding: 16px 0;
    }
    .right {
      position: absolute;
      right: 20px;
      width: 23%;
      min-width: 450px;
      height: calc(100% - 56px);
      padding: 16px 0;
    }
    .footer {
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: columns;
    }
  }
}
</style>
