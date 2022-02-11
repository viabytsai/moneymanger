<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input :placeholder=this.placeholder type="text" v-model="value">
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
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