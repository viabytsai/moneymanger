import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import CreatorID from '@/lib/idCreator';
import Types from '@/components/Money/Types.vue';

Vue.use(Vuex);
type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
const store = new Vuex.Store({
    state: {
        recordList: [] ,
        tagList: [] ,
        currentTag: undefined
    } as RootState,
    mutations: {
        //recordStore
        fetchRecords(state) {
            //闭包
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        createRecord(state, record) {
            const record2: RecordItem = clone(record);
            record2.createdAt = new Date();
            state.recordList.push(record2);
            store.commit('saveRecords');
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },

        //tagStore
        setCurrentTag(state,id:string){
            state.currentTag= state.tagList.filter(t => t.id === id)[0];//获取tags中和当前id相同id
        },
        fetchTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        findTag(state, id) {
            return state.tagList.filter(t => t.id === id)[0];//获取tags中和当前id相同id
        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        createTag(state, name) {
            //this.data = [{id:'1',name:'1'},{id:'2',name:'2'}]
            const names = state.tagList.map(item => item.name); //将data数组中的每一项的name收集起来成一个新的数组
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复');
                return 'duplicated';
            }
            const id = CreatorID().toString();
            state.tagList.push({id: id, name: name});
            store.commit('saveTags');
            window.alert('成功');
            return 'success';
        },
        removeTag(state, id) {
            let index = -1;
            for (let i = 0; i < this.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            state.tagList.splice(index, 1);
            store.commit('saveTag');
            return true;
        },
        updateTag(state,payload: { id: string, name: string }){
            const {id, name} = payload;
            const idList = state.tagList.map(item => item.id);
            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name);
                if (names.indexOf(name) >= 0) {
                    return 'duplicated';
                } else {
                    const tag = state.tagList.filter(item => item.id === id)[0];
                    tag.name = name;
                    store.commit('saveTags');
                    return 'success';
                }
            } else {
                return 'not found';
            }
        },
    }
});

export default store;
