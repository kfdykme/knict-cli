import { logger } from '../common/Logger'


function Input() {
    logger.log('Knict GET(): evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let targetMethod = target[propertyKey]
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = {
                ...targetMethod.knict,
                name: propertyKey,
                cli: {
                    method: 'Input'
                }
            }
        }
        logger.log('Knict GET(): called', target, propertyKey, descriptor)
    }
}

function Str(name: string) {
    logger.log('Knict Str() : evaluated')
    return function (target: any, propertyKey: string | symbol, parameterIndex: number) {
        let targetMethod = target[propertyKey]
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = {
                ...targetMethod.knict
            }
            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object()
            }
            if (targetMethod.knict.data.str == undefined) {
                targetMethod.knict.data.str = new Object()
            }
            targetMethod.knict.data.str[name] = parameterIndex
        }
        logger.log('Knict Str(): called', target, propertyKey, parameterIndex)
    }
}

function Password(name: string) {

    logger.log('Knict Password() : evaluated')
    return function (target: any, propertyKey: string | symbol, parameterIndex: number) {
        let targetMethod = target[propertyKey]
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = {
                ...targetMethod.knict
            }
            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object()
            }
            if (targetMethod.knict.data.pwd == undefined) {
                targetMethod.knict.data.pwd = new Object()
            }
            targetMethod.knict.data.pwd[name] = parameterIndex
        }
        logger.log('Knict Password(): called', target, propertyKey, parameterIndex)
    }
}

function Choice(name: string, choices: string[]) {
    logger.log('Knict Choise(): evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let targetMethod = target[propertyKey]
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = {
                ...targetMethod.knict,
                name: propertyKey,
                cli: {
                    method: 'chiose'
                }
            }

            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object()
            }
            if (targetMethod.knict.data.chioces == undefined) {
                targetMethod.knict.data.chioces = choices
            }
        }
        logger.log('Knict Choise(): called', target, propertyKey, descriptor)
    }
}


function MutableChoice() {
    logger.log('Knict Choise(): evaluated')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let targetMethod = target[propertyKey]
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = {
                ...targetMethod.knict,
                name: propertyKey,
                cli: {
                    method: 'mutchiose'
                }
            }

            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object()
            }
        }
        logger.log('Knict Choise(): called', target, propertyKey, descriptor)
    }
}

function MutableChoiceList(name: string) {
    return function (target: any, propertyKey: string | symbol, parameterIndex: number) {
        let targetMethod = target[propertyKey]
        if (targetMethod !== undefined && targetMethod instanceof Function) {
            targetMethod.knict = {
                ...targetMethod.knict
            }
            if (targetMethod.knict.data == undefined) {
                targetMethod.knict.data = new Object()
            }
            if (targetMethod.knict.data.mutablechioces == undefined) {
                targetMethod.knict.data.mutablechioces = new Object()
            }
            targetMethod.knict.data.mutablechioces[name] = parameterIndex
        }
        logger.log('Knict MutableChoiceList(): called', target, propertyKey, parameterIndex)
    }
}



export {
    Input,
    Str,
    Password,
    Choice,
    MutableChoice,
    MutableChoiceList
}