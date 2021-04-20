class Index {

    async getData (): Promise<string> {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve('test')
            }, 1 * 1000)
        })
    }
}

export default Index