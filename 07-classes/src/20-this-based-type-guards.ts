// 類型守衛 通過 is... 方法 縮小範圍
class FileSystemObject {
    isFile(): this is FileRep {
        return this instanceof FileRep
    }

    isDirectory(): this is Directory {
        return this instanceof Directory
    }

    isNetWorked(): this is Networked & this {
        return this.networked
    }

    constructor (public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
    constructor(path: string, public content: string) {
        super(path, false)
    }
}

class Directory extends FileSystemObject {
    children: FileSystemObject[]
    constructor() {
        super('', false)
        this.children = []
    }
}

interface Networked {
    host: string
}

const fso: FileSystemObject = new FileRep('fpp/bar.txt', 'foo')
if(fso.isFile()){
    // const fso: fileRep
    fso.content
} else if (fso.isDirectory()) {
    // const fos: Directory
    fso.children
} else if (fso.isNetWorked()) {
    fso.host
}

class Box<T> {
    value?: T

    hasValue(): this is { value: T} {
        return this.value !== undefined
    }
}

const box = new Box()
box.value = 'Hello'

if(box.hasValue()) {
    console.log(box.value);
}

export default {}