<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="from-wrapper">
      <FormItem :value="tag.name" field-name="标签名" placeholder="请输入标签名" @update:value="updateTag"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
import TagListModel from '@/models/tagListModel';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?:{id:string,name:string}=undefined
  created() {
    const id = this.$route.params.id;//当前访问页面的id
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];//获取tags中和当前id相同id
    if (tag) {
      this.tag = tag
    } else {
      this.$router.replace('/404');
    }
  }
  updateTag(name:string){
    if(this.tag) {
      TagListModel.update(this.tag.id, name)
    }
  }
  remove(){
    if(this.tag){
      if(tagListModel.remove(this.tag.id)){
        this.$router.back()
      }else {window.alert('删除失败')}
    }
  }
  goBack(){
    this.$router.back()
  }
}
</script>

<style lang='scss' scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }

  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon{
    width: 24px;
    height: 24px;
  }

}
.from-wrapper{
  background: white;
  margin-top: 8px;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>