
import fs from 'fs'
import path from 'path'

const _path = ():string => {
    const rootPath =  path.resolve('./.knict-cli')
    if (!fs.existsSync(rootPath)) {
        fs.mkdirSync(rootPath)
    }
    return rootPath
}

const _storagePath = ():string => {
    const p = path.join(_path(), 'storage')
    if (!fs.existsSync(p)) {
        fs.writeFileSync(p, JSON.stringify(new Object()))   
    }
    return p
}

const storage = ():any => {
    const p = _storagePath()

    return JSON.parse(fs.readFileSync(p, { encoding: 'utf-8'}))
}

const save  = (o: Object| string) => {
    let t:Object
    if (typeof o === 'string') {
        t = JSON.parse(o)
    } else {
        t = o
    }
    const p = _storagePath()
    return fs.writeFileSync(p, JSON.stringify(t))   
}

const get = (key: string): any => {
    let o = storage()
    return o[key]
}

const set = (key: string, value:any) => {
    const o = storage()
    o[key] = value
    save(o)
}

export {
    storage,
    get,
    set
}