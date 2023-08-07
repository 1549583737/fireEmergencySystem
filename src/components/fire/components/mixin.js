export default {
  beforeDestroy() {
    window.removeEventListener("resize", this.handleTableHeight);
  },
  mounted() {
    this.$nextTick(() => {
      this.handleTableHeight();
    });
    window.addEventListener("resize", this.handleTableHeight);
  },
  methods: {
    handleTableHeight() {
      if (this.hasSearch) {
        this.tableHeight = this.$refs.panelContainer.offsetHeight - 30 - 32;
      } else {
        this.tableHeight = this.$refs.panelContainer.offsetHeight - 30;
      }
    },
  },
};
