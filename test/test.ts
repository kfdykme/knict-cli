import * as KnictCli from '../src/index'




const main = (async () => {

    const { Knict, CliClientBuilder, Demo, CliMethod } = KnictCli

    const { basicCliService } = Demo
    
    const res = await  basicCliService.login('', '')
    console.info(res)
})()