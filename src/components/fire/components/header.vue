<template>
  <div class="page-header">
    <div class="zone-person-count">
      <img src="../assets/zonePersonCount.png" alt="" />
      <div class="text">
        园区人数总数：
        <div class="num">{{ productConfig.zonePersonCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productConfig: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
@import "../assets/fonts/font.css";

.page-header {
  width: 100%;
  background: url(../assets/header.png) no-repeat;
  background-size: 100% 100%;
  .zone-person-count {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      vertical-align: middle;
    }
    .text {
      height: 100%;
      display: flex;
      align-items: center;
      font-family: 优设标题黑;
      font-size: 20px;
      color: #ffffff;
      .num {
        font-family: DIN-Bold;
        font-weight: 700;
        font-size: 28px;
        color: #00d4f7;
      }
    }
  }
}
</style>
