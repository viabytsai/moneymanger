function clone<T>(data:T):T{
    return JSON.parse(JSON.stringify((data)))
    //深拷贝，每一次保存都创建一个新的data副本，不然保存的都是同一个data
}

export default clone;