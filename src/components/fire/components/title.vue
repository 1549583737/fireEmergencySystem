<template>
  <div class="page-title">
    <div class="text">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "../assets/fonts/font.css";
.page-title {
  width: 100%;
  height: 25px;
  position: relative;
  background: url("../assets/titleBcg.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 10px;
  .text {
    height: 26px;
    font-family: 优设标题黑;
    font-size: 20px;
    color: #ffffff;
    position: absolute;
    top: -6px;
    left: 38px;
  }
}
</style>
