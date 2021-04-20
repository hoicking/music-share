import request from '../axios/selfRequest'

class Index {


    async getOneWord () {
        try {
            const res: any = await request.get('/word')

            return res.data
        } catch (error) {
            // throw error
        }
    }
}


export default Index