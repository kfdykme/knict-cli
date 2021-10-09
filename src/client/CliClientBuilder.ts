import { KnictBasicClientBuilder } from 'knict'
import { logger } from '../common/Logger'

import { Toast } from '../Toast'
import prompt from 'prompt'
import inquirer from 'inquirer'

import * as Storage from '../storage'


export class CliClientBuilder extends KnictBasicClientBuilder {

    build(k: any) {

        logger.info('CliClientBuilder', k)



        return (async () => {
            let res: any = undefined
            if (k.cli.method === 'Input') {
                const req: any[] = []
                for (let x in k.data.str) {
                    const value = Storage.get(x) || k.args[k.data.str[x]]
                    req.push({
                        name: x,
                        default: value,
                        index: k.data.str[x],
                        type: 'input'
                    })
                }
                
                for (let x in k.data.pwd) {
                    const value = Storage.get(x) || k.args[k.data.pwd[x]]
                    req.push({
                        name: x,
                        default: value,
                        index: k.data.pwd[x],
                        hidden: true,
                        replace: '*',
                        type: 'password'
                    })
                }

                req.sort((a, b) => a.index - b.index)
                // Toast.info(k.data) 
                prompt.start({
                    message: 'knict-cli'
                })
                // res = await prompt.get(req)
                res = await inquirer.prompt(req)

                for (let x in res) {
                    Storage.set(x, res[x])
                }
            } else if (k.cli.method === 'chiose') {
                const req: any[ ]= []
                const choices: any[ ]= []
                for(let x in k.data.chioces) {
                    choices.push({
                        name:  k.data.chioces[x],
                        message:  k.data.chioces[x]
                    })
                }
                req.push({
                    name: k.name,
                    type: 'list',
                    choices: choices
                })

                res = await inquirer.prompt(req)
            }


            return res
        })()
    }
}