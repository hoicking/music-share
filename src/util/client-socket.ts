

class ClientSocket {
    private static instance: any = null

    private handleMsg: unknown
    private status: number | null
    private socket: WebSocket | null


    constructor () {
        this.handleMsg = null
        this.status = null
        this.socket = null
        this.connect()
    }

    static getInstance (): ClientSocket {
        if (!this.instance) {
            this.instance = new ClientSocket()
        }
        return this.instance
    }

    connect (): void {
        this.socket = new WebSocket('ws://127.0.0.1:3334')
        this.socket.onopen = () => {
            // console.log('websocket has connected')
            this.socket?.send('hello')
        }

        this.socket.onmessage = (msg) => {
            // console.log('receive msg', msg.data)
        }


        this.socket.onclose = (state) => {
            if (state.code !== 3001) {
                this.connect()
            }
        }
    }

    destory (): void {
        ClientSocket.instance = null
    }
}

export default ClientSocket
