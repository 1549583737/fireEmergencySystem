<template>
  <el-input
    class="search-input"
    v-bind="$attrs"
    v-on="$listeners"
    @mouseover.native="$emit('mouseover')"
  >
    <slot slot="prefix" name="prefix" />
  </el-input>
</template>
<script></script>
<style lang="scss" scoped>
.search-input {
  ::v-deep {
    .el-input__inner {
      height: 32px;
      line-height: 32px;
      background-color: #04174a;
      color: #01b3bb;
      border: 1px solid #00d4f7;
      opacity: 0.7;

      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #9fceff;
      }
    }
    .el-input__icon {
      line-height: 32px;
      color: #01b3bb;
    }
  }
}
</style>
