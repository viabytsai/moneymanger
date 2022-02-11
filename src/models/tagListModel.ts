const localStorageKeyName = 'tagList';
type Tag = {
    id:string
    name:string
}
type TagListModel = {
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=>string //success表示超过 duplicated表示name重复
    save:()=> void
}
const tagListModel:TagListModel = {
    data:[],
    // clone(data:RecordItem[] | RecordItem){
    //     return JSON.parse(JSON.stringify((data)))
    // },
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },
    save(){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
    },
    create(name:string){
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2'}]
        const names = this.data.map(item=>item.name) //将data数组中的每一项的name收集起来成一个新的数组
        if(names.indexOf(name)>= 0){return "duplicated";}
        this.data.push({id:name,name:name});
        this.save();
        return "success";
    }
};

export default tagListModel;