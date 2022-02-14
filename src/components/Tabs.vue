<template>
  <ul class="tabs">
   <li v-for="item in dataSource" :key="item.value"
       :class="{selected:item.value===value,[classPrefix+'-tabs-item']: classPrefix}"
       @click="select(item)">{{item.text}}</li>
    <!--当我此时的value等于你选中的value的时候-->
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {text:string,value:string}
@Component
export default class Tabs extends Vue {
  @Prop(String) readonly value!:string; // 选中哪一项
  @Prop(String) classPrefix?:string; // 选中类的前缀
  @Prop({required:true,type:Array})
  dataSource!:DataSourceItem[]

   select(item:DataSourceItem){
    this.$emit('update:value',item.value)
  }
}
</script>

<style lang='scss' scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background: black;
    }
  }
}
</style>