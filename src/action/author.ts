class Index{

    public getName (){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(`holicking-${ Math.floor(Math.random()*10)}`)
            }, 1000)
        })
    }

    public getAge (){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Math.floor(Math.random()* 100))
            }, 1000)
        })
    }

}


export default Index