<template>
  <div class="fire-leader-shift" ref="panelContainer">
    <Title :title="data.title" />
    <Search
      prefix-icon="el-icon-search"
      placeholder="请输入装置名称"
      clearable
      v-model="searchValue"
    />
    <FTable
      :tableHeight="tableHeight"
      :tableConfig="data.tableConfig"
      :tableData="data.tableData"
      :hasSearch="hasSearch"
      :openScroll="true"
    />
  </div>
</template>

<script>
import Title from "../title.vue";
import mixin from "../mixin.js";
import Search from "../search.vue";

export default {
  components: {
    Title,
    Search,
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
      searchValue: "",
      // title: "消防队值班",
      tableHeight: 0,
      hasSearch: true,
    };
  },
};
</script>

<style lang="scss">
.fire-leader-shift {
}
</style>
