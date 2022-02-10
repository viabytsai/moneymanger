<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
<!--      外部tags传入到内部的dataSource中，v-for遍历每一个tag，渲染到页面中；如果选中的tag包含了当前的tag，就给它加上selected-->
     <li v-for="tag in dataSource" :key="tag"
         :class="{selected:selectedTags.indexOf(tag)>=0}"
         @click="toggle(tag)">{{tag}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
@Component
export default class Tags extends Vue{
  @Prop() readonly dataSource:string[] | undefined; //外部的数据，只读属性，不给在内部改
  selectedTags:string[]=[]; //选中的tag

  toggle(tag:string){
    const index = this.selectedTags.indexOf(tag); //判断当前点击的tag有没有在选中的tag数组中
    if(index>=0){
      this.selectedTags.splice(index,1); //在选中的tag中就删除
    }else{this.selectedTags.push(tag);}

    this.$emit('update:value',this.selectedTags);
  }

  create(){
    const name = window.prompt('请输入标签名');
    if(name===''){
      window.alert('标签名不能为空')
    }else if(this.dataSource){
        // this.dataSource.push(name as string); 这是外部的数据，不能直接在内部改
        // ...表示展开数组。
        // 如果传入了name，就把name加入到数组中，触发dataSource事件,外部的父组件配合.sync监听了事件，最后将最新的数组覆盖外部的tags数组
        this.$emit('update:dataSource',
            [...this.dataSource,name]);
      }
    }

}
</script>

<style lang='scss' scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg:#d9d9d9;
      background: $bg;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected{
        background: darken($bg,30%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>