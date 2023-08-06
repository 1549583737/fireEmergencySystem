<template>
  <div class="page-left">
    <Box>
      <div class="container">
        <fire-leader-shift
          class="panel"
          :data="productConfig.left.fireLeaderShift"
        />
        <fire-car class="panel" :data="productConfig.left.fireCar" />
        <fire-hydrant class="panel" :data="productConfig.left.fireHydrant" />
        <video-alarm-statistics
          class="panel"
          :data="productConfig.left.videoAlarmStatistics"
        />
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "./box.vue";
import FireLeaderShift from "./left/fireLeaderShift.vue";
import FireCar from "./left/fireCar.vue";
import FireHydrant from "./left/fireHydrant.vue";
import VideoAlarmStatistics from "./left/videoAlarmStatistics.vue";
export default {
  props: {
    productConfig: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Box,
    FireLeaderShift,
    FireCar,
    FireHydrant,
    VideoAlarmStatistics,
  },
};
</script>

<style lang="scss">
.page-left {
  .box {
    height: 100%;
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      .panel {
        flex: 1;
        // height: 25%;
        margin-top: 10px;
        overflow: hidden;
      }
    }
  }
}
</style>
