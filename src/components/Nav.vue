<template>
  <nav>
    <router-link to="/Money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/Labels" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签
    </router-link>
    <router-link to="/Statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang='ts'>
export default {
  name: 'Nav'
};
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
//只要加上scoped 样式只会在本vue中生效
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  flex-direction: row;
  font-size: 12px;
  >.item{
    padding: 2px 0;
    display: flex;
    width: 33.3333%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon{
    height: 32px;
    width: 32px;
  }
  >.item.selected{
    color: $color-highlight;
  }
}
</style>