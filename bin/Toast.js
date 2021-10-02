"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const ToastStart = '--------------------------------------------------------';
const ToastEnd = ToastStart;
exports.Toast = {
    info: function (...args) {
        console.info(ToastStart);
        console.info(args);
        console.info(ToastEnd);
    }
};
