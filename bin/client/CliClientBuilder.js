"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliClientBuilder = void 0;
const knict_1 = require("knict");
const Logger_1 = require("../common/Logger");
const prompt_1 = __importDefault(require("prompt"));
const inquirer_1 = __importDefault(require("inquirer"));
const Storage = __importStar(require("../storage"));
class CliClientBuilder extends knict_1.KnictBasicClientBuilder {
    build(k) {
        Logger_1.logger.info('CliClientBuilder', k);
        return (() => __awaiter(this, void 0, void 0, function* () {
            let res = undefined;
            if (k.cli.method === 'Input') {
                const req = [];
                for (let x in k.data.str) {
                    const value = Storage.get(x) || k.args[k.data.str[x]];
                    req.push({
                        name: x,
                        default: value,
                        index: k.data.str[x],
                        type: 'input'
                    });
                }
                for (let x in k.data.pwd) {
                    const value = Storage.get(x) || k.args[k.data.pwd[x]];
                    req.push({
                        name: x,
                        default: value,
                        index: k.data.pwd[x],
                        hidden: true,
                        replace: '*',
                        type: 'password'
                    });
                }
                req.sort((a, b) => a.index - b.index);
                // Toast.info(k.data) 
                prompt_1.default.start({
                    message: 'knict-cli'
                });
                // res = await prompt.get(req)
                res = yield inquirer_1.default.prompt(req);
                for (let x in res) {
                    Storage.set(x, res[x]);
                }
            }
            else if (k.cli.method === 'chiose') {
                const req = [];
                const choices = [];
                for (let x in k.data.chioces) {
                    choices.push({
                        name: k.data.chioces[x],
                        message: k.data.chioces[x]
                    });
                }
                req.push({
                    name: k.name,
                    type: 'list',
                    choices: choices
                });
                res = yield inquirer_1.default.prompt(req);
            }
            else if (k.cli.method === 'mutchiose') {
                const req = [];
                let choices = [];
                for (let x in k.data.mutablechioces) {
                    const value = k.args[k.data.mutablechioces[x]];
                    choices = value.map((i) => {
                        return {
                            name: i, message: i
                        };
                    });
                }
                req.push({
                    name: k.name,
                    type: 'list',
                    choices: choices
                });
                res = yield inquirer_1.default.prompt(req);
            }
            return res;
        }))();
    }
}
exports.CliClientBuilder = CliClientBuilder;
