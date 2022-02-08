<template>
<div class="nav-wrapper">
  <div class="content">
    money.vue
  </div>
  <Nav />
</div>
</template>

<script lang='ts'>
export default {
  name: 'Money',

};
</script>

<style lang='scss' scoped>
.nav-wrapper{
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  height: 100vh;
}
.content{
  flex-grow: 1;
  //让money组件尽量占满
  overflow: auto;
}
</style>