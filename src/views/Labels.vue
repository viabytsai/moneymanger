<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/Labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="creatTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import Button from '@/components/Button.vue';

@Component({
  components: {Button}
})
export default class Labels extends Vue{
  tags =window.tagList; //tags是一个对象数组
  creatTag(){
    const name = window.prompt('请输入标签名');
    if(name){
      const message = tagListModel.create(name);
      if(message === 'duplicated'){window.alert('标签名重复')}
      else if(message==='success'){window.alert('成功')}
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between; //li中元素一左一右
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: $color-highlight;
      margin-right: 16px;
    }
  }
}
.createTag{
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>