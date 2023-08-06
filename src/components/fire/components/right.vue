<template>
  <div class="page-right">
    <Box>
      <div class="container">
        <MaterialStatistics
          class="panel"
          :data="productConfig.right.materialStatistics"
        />
        <FirePatrolInspection
          class="panel"
          :data="productConfig.right.firePatrolInspection"
        />
        <AlarmFireInteraction
          class="panel"
          :data="productConfig.right.alarmFireInteraction"
        />
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "./box.vue";
import MaterialStatistics from "./right/materialStatistics.vue";
import FirePatrolInspection from "./right/firePatrolInspection.vue";
import AlarmFireInteraction from "./right/alarmFireInteraction.vue";
export default {
  components: {
    Box,
    MaterialStatistics,
    FirePatrolInspection,
    AlarmFireInteraction,
  },
  props: {
    productConfig: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.page-right {
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
