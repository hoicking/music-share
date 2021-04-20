const initialState = {
    name: '',
    age: null
}

function reducer (state: any, action: any){
    switch(action.type) {
        case 'GET_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'GET_AGE':
            return {
                ...state,
                age: action.payload
            }
        default: 
            return state
    }
}


export {
    initialState,
    reducer
}