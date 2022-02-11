<template>
<!--  小button被点击了就触发大button的点击事件-->
  <button @click="$emit('click',$event)" class="button">
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Button extends Vue {
}
</script>

<style lang='scss' scoped>
.button{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
}
</style>