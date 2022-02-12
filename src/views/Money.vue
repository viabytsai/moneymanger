<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
<!--    :value="record.type" @update:value="onUpdateType 删onUpdateType函数简写成sync-->
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <!--    监听dataSource事件，把外部的tag传入dataSource-->
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';


//从本地拿到的数据

@Component({
      components: {Tags, FormItem, Types, NumberPad}
    }
)
export default class Money extends Vue {
  tags = store.tagList;
  recordList= store.recordList; //从本地数据库拿到数据赋值给中间数据
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };
  onUpdateTags(value: string[]) {
    this.record.tags =value;
  }

  onUpdateNotes(value: string) {
    this.record.notes =value;
  }
  saveRecord(){
    store.createRecord(this.record)
  }
}
</script>

<style lang='scss'>
.layout-content {
  display: flex;
  flex-direction: column-reverse; //相应的html布局要倒过来
}
.notes{
  padding: 12px 0;
}
</style>

