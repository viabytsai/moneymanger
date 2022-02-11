<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
<!--    :value="record.type" @update:value="onUpdateType 删onUpdateType函数简写成sync-->
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
    <!--    监听dataSource事件，把外部的tag传入dataSource-->
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    {{record}}
    {{recordList}}
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList= recordListModel.fetch(); //从本地拿到的数据
const tagList = tagListModel.fetch();

@Component({
      components: {Tags, Notes, Types, NumberPad}
    }
)
export default class Money extends Vue {
  tags = tagList;
  recordList:RecordItem[] = recordList; //从本地数据库拿到数据赋值给中间数据
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '',
    amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags =value;
  }

  onUpdateNotes(value: string) {
    this.record.notes =value;
  }
  saveRecord(){
    const record2:RecordItem = recordListModel.clone(this.record);
    //深拷贝，每一次保存都创建一个新的record副本，不然保存的都是同一个record
    record2.createdAt = new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
  recordListModel.save(this.recordList) //将修改后的中间数据上传给本地数据库
  }
}
</script>

<style lang='scss'>
.layout-content {
  display: flex;
  flex-direction: column-reverse; //相应的html布局要倒过来
}
</style>

<style lang='scss' scoped>
</style>