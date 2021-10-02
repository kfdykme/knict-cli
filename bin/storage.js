"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.get = exports.storage = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const _path = () => {
    const rootPath = path_1.default.resolve('./.knict-cli');
    if (!fs_1.default.existsSync(rootPath)) {
        fs_1.default.mkdirSync(rootPath);
    }
    return rootPath;
};
const _storagePath = () => {
    const p = path_1.default.join(_path(), 'storage');
    if (!fs_1.default.existsSync(p)) {
        fs_1.default.writeFileSync(p, JSON.stringify(new Object()));
    }
    return p;
};
const storage = () => {
    const p = _storagePath();
    return JSON.parse(fs_1.default.readFileSync(p, { encoding: 'utf-8' }));
};
exports.storage = storage;
const save = (o) => {
    let t;
    if (typeof o === 'string') {
        t = JSON.parse(o);
    }
    else {
        t = o;
    }
    const p = _storagePath();
    return fs_1.default.writeFileSync(p, JSON.stringify(t));
};
const get = (key) => {
    let o = storage();
    return o[key];
};
exports.get = get;
const set = (key, value) => {
    const o = storage();
    o[key] = value;
    save(o);
};
exports.set = set;
