

const ToastStart = '--------------------------------------------------------'
const ToastEnd = ToastStart

export const Toast = {
    info: function (...args: any[]) {
        console.info(ToastStart)
        console.info(args)
        console.info(ToastEnd)
    }
}