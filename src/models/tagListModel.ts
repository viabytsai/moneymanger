import CreatorID from '@/lib/idCreator';
const localStorageKeyName = 'tagList';
// type Tag = {
//     id: string
//     name: string
// }
// type TagListModel = {
//     data: Tag[]
//     fetch: () => Tag[]
//     create: (name: string) => string //success表示超过 duplicated表示name重复
//     update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
//     remove: (id: string) => boolean
//     save: () => void
// }
const tagListModel: TagListModel = {
    data: [],
    // clone(data:RecordItem[] | RecordItem){
    //     return JSON.parse(JSON.stringify((data)))
    // },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string) {
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2'}]
        const names = this.data.map(item => item.name); //将data数组中的每一项的name收集起来成一个新的数组
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id = CreatorID().toString()
        this.data.push({id: id, name: name});
        this.save();
        return 'success';
    },
    update(id, name) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index,1)
        this.save()
        return true
    }
};

export default tagListModel;