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
      this.tableHeight = this.$refs.panelContainer.offsetHeight - 30;
    },
  },
};
