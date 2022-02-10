<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
<!--    :value="record.type" @update:value="onUpdateType 删onUpdateType函数简写成sync-->
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <!--    监听dataSource事件，把外部的tag传入dataSource-->
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

const recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?:Date //除了数据类型外还可以写类
}
@Component({
      components: {Tags, Notes, Types, NumberPad}
    }
)
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '玩'];
  recordList:Record[] = recordList;
  record: Record = {
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

  // onUpdateType(value: string) {
  //   this.record.type =value;
  // }

  // onUpdateAmount(value: string) {
  //   this.record.amount =parseFloat(value);
  // }
  saveRecord(){
    const record2:Record = JSON.parse(JSON.stringify((this.record)))
    //深拷贝，每一次保存都创建一个新的record副本，不然保存的都是同一个record
    record2.createdAt = new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify((this.recordList)))
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