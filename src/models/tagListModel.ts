const localStorageKeyName = 'tagList';
type TagListModel = {
    data:string[]
    fetch:()=>string[]
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
        if(this.data.indexOf(name)>= 0){return "duplicated";}
        this.data.push(name);
        this.save();
        return "success";
    }
};

export default tagListModel;