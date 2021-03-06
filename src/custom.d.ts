type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?:Tag
}

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
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?:string //除了数据类型外还可以写类
}

