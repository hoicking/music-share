import request from '../axios/selfRequest'

class Index {


    async getOneWord() {
        try {
            const res: any = await request.get('/word')

            return res.data.data
        } catch (error) {
            // throw error
            console.log(error)
        }
    }
}


export default Index