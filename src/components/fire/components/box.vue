<template>
  <div class="box">
    <div class="f f1" />
    <div class="f f2" />
    <div class="f f3" />
    <div class="f f4" />
    <slot />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.box {
  background: rgba(9, 39, 73, 0.65);
  border: 1px solid rgba(38, 219, 255, 0.3);
  box-shadow: inset 0 0 20px 0 rgba(77, 136, 255, 0.3);
  padding: 10px;
  z-index: 2;
  position: relative;
  .f {
    z-index: 100;
    position: absolute;
    width: 22px;
    height: 22px;
    background: none;
    border: 2px solid #19d9ff;
  }
  .f1 {
    top: -1px;
    left: -1px;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 4px;
  }
  .f2 {
    top: -1px;
    right: -1px;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 4px;
  }
  .f3 {
    bottom: -1px;
    left: -1px;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 4px;
  }
  .f4 {
    bottom: -1px;
    right: -1px;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 4px;
  }
}
</style>
