"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Choise = exports.Password = exports.Str = exports.Input = void 0;
const Logger_1 = require("../common/Logger");
function Input() {
    Logger_1.logger.log('Knict GET(): evaluated');
    return function (target, propertyKey, descriptor) {
        let targetMethod = target[propertyKey];
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = Object.assign(Object.assign({}, targetMethod.knict), { name: propertyKey, cli: {
                    method: 'Input'
                } });
        }
        Logger_1.logger.log('Knict GET(): called', target, propertyKey, descriptor);
    };
}
exports.Input = Input;
function Str(name) {
    Logger_1.logger.log('Knict Str() : evaluated');
    return function (target, propertyKey, parameterIndex) {
        let targetMethod = target[propertyKey];
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = Object.assign({}, targetMethod.knict);
            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object();
            }
            if (targetMethod.knict.data.str == undefined) {
                targetMethod.knict.data.str = new Object();
            }
            targetMethod.knict.data.str[name] = parameterIndex;
        }
        Logger_1.logger.log('Knict Str(): called', target, propertyKey, parameterIndex);
    };
}
exports.Str = Str;
function Password(name) {
    Logger_1.logger.log('Knict Password() : evaluated');
    return function (target, propertyKey, parameterIndex) {
        let targetMethod = target[propertyKey];
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = Object.assign({}, targetMethod.knict);
            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object();
            }
            if (targetMethod.knict.data.pwd == undefined) {
                targetMethod.knict.data.pwd = new Object();
            }
            targetMethod.knict.data.pwd[name] = parameterIndex;
        }
        Logger_1.logger.log('Knict Password(): called', target, propertyKey, parameterIndex);
    };
}
exports.Password = Password;
function Choise(name) {
    Logger_1.logger.log('Knict Choise(): evaluated');
    return function (target, propertyKey, descriptor) {
        let targetMethod = target[propertyKey];
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = Object.assign(Object.assign({}, targetMethod.knict), { name: propertyKey, cli: {
                    method: 'chiose'
                } });
        }
        Logger_1.logger.log('Knict Choise(): called', target, propertyKey, descriptor);
    };
}
exports.Choise = Choise;
