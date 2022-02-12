import CreatorID from '@/lib/idCreator';
const localStorageKeyName = 'tagList';
const tagStore = {
    // tag store
    tagList: [] as Tag[],
    fetchTag(){
        this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];//获取tags中和当前id相同id
    },
    createTag(name:string){
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2'}]
        const names = this.tagList.map(item => item.name); //将data数组中的每一项的name收集起来成一个新的数组
        if (names.indexOf(name) >= 0) {
            window.alert('标签名重复');
            return 'duplicated';
        }
        const id = CreatorID().toString()
        this.tagList.push({id: id, name: name});
        this.saveTags();
        window.alert('成功');
        return 'success';
    },
    removeTag (id: string){
        let index = -1;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index,1)
        this.saveTags()
        return true
    },
    updateTag(id: string, name: string){
        const idList = this.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0];
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    saveTags() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    }
}
tagStore.fetchTag()
export default tagStore;