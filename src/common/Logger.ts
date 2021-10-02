let isLogOpen = false

const logger: any = (() => {
    let f:any 
    if (isLogOpen) {
        f = console
    } else {
        f = { log: () => { }, info: () => { }, error: () => { } }
    }
    const toggle = () => {
        isLogOpen = !isLogOpen
    }
    return {
        toggle,
        ...f
    }
})()


export {
    logger
}