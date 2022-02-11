<template>
  <div>
    <label class="fromItem">
      <span class="name">{{ this.fieldName }}</span>
      <input :placeholder=this.placeholder type="text" v-model="value">
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  value = '';
  @Prop({required:true}) fieldName!:string;
  @Prop()placeholder?:string;
  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.fromItem {
  font-size: 14px;
  //不给高度，用input撑
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>