"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
let isLogOpen = false;
const logger = (() => {
    let f;
    if (isLogOpen) {
        f = console;
    }
    else {
        f = { log: () => { }, info: () => { }, error: () => { } };
    }
    const toggle = () => {
        isLogOpen = !isLogOpen;
    };
    return Object.assign({ toggle }, f);
})();
exports.logger = logger;
