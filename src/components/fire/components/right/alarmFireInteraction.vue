<template>
  <div class="alarm-Fire-Interaction" ref="panelContainer">
    <Title :title="data.title" />
    <FTable
      :tableHeight="tableHeight"
      :tableConfig="data.tableConfig"
      :tableData="data.tableData"
    />
  </div>
</template>

<script>
import Title from "../title.vue";
import mixin from "../mixin.js";

export default {
  components: {
    Title,
  },
  mixins: [mixin],
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // title: "消防队值班",
      tableHeight: 0,
    };
  },
};
</script>

<style lang="scss">
.alarm-Fire-Interaction {
}
</style>
