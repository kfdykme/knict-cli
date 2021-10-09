import * as KnictCli from '../index'




const main = (async () => {

    const { Knict, CliClientBuilder, Demo, CliMethod } = KnictCli

    const { basicCliService } = Demo
    
    // const res = await  basicCliService.login('', '')
    const res = await basicCliService.home()//'reply', 'post', 'hot')
    console.info(res)
})()