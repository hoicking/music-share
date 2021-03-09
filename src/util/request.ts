class Index {

    async getData(): Promise<String> {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve('test')
            }, 1 * 1000)
        })
    }
}

export default Index