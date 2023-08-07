<template>
  <div class="page-footer">
    <div class="footer-container">
      <div
        class="footer-item"
        v-for="(item, index) in productConfig.bottomMenuList"
        @mouseenter="handleMouseEnter(index)"
        :key="item.label"
      >
        <img
          :src="index === curIndex ? item.imgUrlActive : item.imgUrl"
          alt=""
        />
        <div class="text">{{ item.label }}</div>
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
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    handleMouseEnter(index) {
      this.curIndex = index;
    },
  },
};
</script>

<style lang="scss">
.page-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  // height: 119px;
  background-image: linear-gradient(180deg, #00121f00 0%, #000407 100%);
  .footer-container {
    background: url("../assets/bottomBcg.png") no-repeat bottom;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    .footer-item {
      margin: 0 10px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      font-size: 14px;
      color: #c8dfff;
      letter-spacing: 0;
      text-align: center;
      position: relative;
      img {
      }
      .text {
        margin-top: -20px;
      }
    }
  }
}
</style>
