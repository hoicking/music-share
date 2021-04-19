export const openTab = (path: string)=>{
    const tab: Window | null = window.open()
    if(tab?.opener) tab.opener = null
    if(tab?.location) tab.location.href = path
}

export const checkType = (param: any) =>{
    return Object.prototype.toString.call(param)
}
