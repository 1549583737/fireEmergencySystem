<template>
  <div id="app">
    <FireEmergencySystem />
  </div>
</template>

<script>
// import Bottom from "./components/bottom.vue";
// import Top from "./components/top.vue";
// import MainContent from "./components/mainContent.vue";
import FireEmergencySystem from "./components/fire/index.vue";
export default {
  name: "App",
  components: {
    // Top,
    // MainContent,
    FireEmergencySystem,
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "./index.scss";
@import "./assets/font/iconfont.css";
#app {
  min-width: 1200px;
  height: 100%;
  background: #1a1a1a;
}
</style>
