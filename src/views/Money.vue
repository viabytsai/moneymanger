<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <!--    :value="record.type" @update:value="onUpdateType 删onUpdateType函数简写成sync-->

    <div class="notes">
      <FormItem
          :value="record.notes"
          @update:value="onUpdateNotes"
          field-name="备注"
          placeholder="在这里输入备注"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
    <Types :value.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
//从本地拿到的数据
@Component({
  components: {Tags, FormItem, Types, NumberPad},
})

export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    this.record.notes = '';
  }
}
</script>

<style lang='scss' scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse; //相应的html布局要倒过来
}

.notes {
  padding: 12px 0;
}
</style>

