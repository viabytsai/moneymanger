<template>
    <svg class="icon" @click="$emit('click',$event)">
      <use v-bind:xlink:href="'#'+name"></use>
    </svg>
</template>

<script lang='ts'>
//将svg文件全部引入，非一个个引入
// eslint-disable-next-line no-undef
let importAll = (requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons',true,/\.svg$/));
}catch (error){
  console.log(error);
}
export default {
  name: 'Icon',
  props:['name'] //外部接收一个名字
};
</script>

<style lang='scss' scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>