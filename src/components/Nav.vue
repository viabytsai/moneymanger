<template>
<div class="nav">
  <router-link to="/Money" >记账</router-link>
  |
  <router-link to="/Labels" >标签</router-link>
  |
  <router-link to="Statistics" >统计</router-link>
</div>
</template>

<script lang='ts'>
export default {
  name: 'Nav'
};
</script>

<style lang='scss' scoped>
//只要加上scoped 样式只会在本vue中生效
.nav{
  border: 1px solid red;
  display: flex;
}
</style>