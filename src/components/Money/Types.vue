<template>
  <div>
    <ul class="types">
      <li :class="{selected: value==='-',[classPrefix+'-item']: classPrefix}"
          @click="selectType('-')"><span>支出</span>
      </li>
      <li :class="{selected: value==='+',[classPrefix+'-item']: classPrefix}"
          @click="selectType('+')"><span>收入</span>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Types extends Vue {
  @Prop(String) readonly value!:string;
  @Prop(String) classPrefix?:string;
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type);
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.types {
  background: #f0eff4;
  display: flex;
  text-align: center;
  font-size: 24px;
  justify-content: center;

  > li {
    width: 20%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected{
     > span{
       border-bottom: 3px solid black;
     }
    }
  }
}
</style>