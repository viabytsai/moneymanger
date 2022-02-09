<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input placeholder="在这里输入文字" type="text">
    </label>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Notes'
};
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.notes {
  font-size: 14px;
  background: #f5f5f5;
  //不给高度，用input撑
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>