"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 類型守衛 通過 is... 方法 縮小範圍
class FileSystemObject {
    isFile() {
        return this instanceof FileRep;
    }
    isDirectory() {
        return this instanceof Directory;
    }
    isNetWorked() {
        return this.networked;
    }
    constructor(path, networked) {
        this.path = path;
        this.networked = networked;
    }
}
class FileRep extends FileSystemObject {
    constructor(path, content) {
        super(path, false);
        this.content = content;
    }
}
class Directory extends FileSystemObject {
    constructor() {
        super('', false);
        this.children = [];
    }
}
const fso = new FileRep('fpp/bar.txt', 'foo');
if (fso.isFile()) {
    // const fso: fileRep
    fso.content;
}
else if (fso.isDirectory()) {
    // const fos: Directory
    fso.children;
}
else if (fso.isNetWorked()) {
    fso.host;
}
class Box {
    hasValue() {
        return this.value !== undefined;
    }
}
const box = new Box();
box.value = 'Hello';
if (box.hasValue()) {
    console.log(box.value);
}
exports.default = {};
