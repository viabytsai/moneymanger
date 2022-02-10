<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount"/>
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
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}
@Component({
      components: {Tags, Notes, Types, NumberPad}
    }
)
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '玩'];
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

  onUpdateAmount(value: string) {
    this.record.amount =parseFloat(value);
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