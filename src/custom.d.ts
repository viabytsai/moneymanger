type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => string //success表示超过 duplicated表示name重复
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}

type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?:Date //除了数据类型外还可以写类
}

interface Window {
    tagList:Tag[]
    createTag:(name:string)=>void
}