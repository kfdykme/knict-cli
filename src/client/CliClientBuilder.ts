import { KnictBasicClientBuilder } from 'knict'
import { logger } from '../common/Logger'

import { Toast } from '../Toast'
import prompt from 'prompt'
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
                        index: k.data.str[x]
                    })
                }
                
                for (let x in k.data.pwd) {
                    const value = Storage.get(x) || k.args[k.data.pwd[x]]
                    req.push({
                        name: x,
                        default: value,
                        index: k.data.pwd[x],
                        hidden: true,
                        replace: '*'
                    })
                }

                req.sort((a, b) => a.index - b.index)
                // Toast.info(k.data) 
                prompt.start({
                    message: 'knict-cli'
                })
                res = await prompt.get(req)

                for (let x in res) {
                    Storage.set(x, res[x])
                }
            }
            return res
        })()
    }
}