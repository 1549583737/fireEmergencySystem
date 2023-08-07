<template>
  <div class="fire-leader-shift" ref="panelContainer">
    <Title :title="data.title" />
    <FTable
      :tableHeight="tableHeight"
      :tableConfig="data.tableConfig"
      :tableData="data.tableData"
      :openScroll="true"
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
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.handleTableHeight);
  // },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.handleTableHeight();
  //   });
  //   window.addEventListener("resize", this.handleTableHeight);
  // },
  // methods: {
  //   handleTableHeight() {
  //     this.tableHeight = this.$refs.fireLeaderShift.offsetHeight - 25;
  //   },
  // },
};
</script>

<style lang="scss">
.fire-leader-shift {
}
</style>
