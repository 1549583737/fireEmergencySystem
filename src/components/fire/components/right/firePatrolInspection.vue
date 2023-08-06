<template>
  <div class="fire-patrol-inspection">
    <Title :title="data.title" />
    <div class="inspect-container">
      <div class="inspect-item" v-for="item in data.list" :key="item.label">
        <div class="value">
          {{ item.value }}
        </div>
        <div class="inspectBcg"></div>
        <div class="label">{{ item.label }}</div>
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
.fire-patrol-inspection {
  .inspect-container {
    display: flex;
    flex-wrap: wrap;
    height: 80%;
    .inspect-item {
      position: relative;
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      .value {
        font-family: DIN-Bold;
        font-weight: 700;
        color: #00d4f7;
        font-size: 22px;
        // position: relative;
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
      }
      .inspectBcg {
        height: 35px;
        background: url("../../assets/inspectBcg.png") no-repeat center;
        background-size: contain;
      }
      .label {
        font-size: 12px;
        font-family: PingFangSC;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
}
</style>
