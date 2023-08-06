<template>
  <div class="material-statistics">
    <Title :title="data.title" />
    <div class="statistics-container">
      <div class="statistics-item" v-for="item in data.list" :key="item.label">
        <img :src="item.imgUrl" alt="" />
        <div class="right-part">
          <div class="label">
            {{ item.label }}
          </div>
          <div class="value" :style="item.style">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../title.vue";
export default {
  components: {
    Title,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // title: "消防队值班",
    };
  },
};
</script>

<style lang="scss">
.material-statistics {
  .statistics-container {
    display: flex;
    flex-wrap: wrap;
    .statistics-item {
      display: flex;
      justify-content: flex-start;
      width: 33%;
      img {
        height: 59px;
        transform: scale(0.8);
      }
      .right-part {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        flex: 1;
        .value {
          font-family: DIN-Bold;
          font-weight: 700;
          font-size: 20px;
          color: #00d4f7;
        }
        .label {
          font-family: PingFangSC-Regular;
          font-weight: 400;
          font-size: 12px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
