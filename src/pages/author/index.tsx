import React, { useState, useReducer, useContext, useEffect, useMemo, useRef} from 'react'

import {useUserValue} from '../../context/authorContext'
import './index.scoped.scss'

// import AuthorRequest from '../../request/author'
// export const context = React.createContext(null)

// const initialState = { name: '', age: null }

// const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'getName':
//             return { ...state, name: action.payload }
//         case 'getAge':
//             return { ...state, age: action.payload }
//         default:
//             return state;
//     }
// }

// const useUser = () => {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     useEffect(() => {
//         new AuthorRequest().getName().then((data) => {
//             dispatch({ type: 'getName', payload: data })
//         })
//     }, [])

//     const reloadUser = () => {
//         new AuthorRequest().getName().then((data) => {
//             dispatch({ type: 'getName', payload: data })
//         })
//     }

//     return [state.name, reloadUser]
// }

// const useAge = () => {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     useEffect(() => {
//         new AuthorRequest().getAge().then((data) => {
//             dispatch({ type: 'getAge', payload: data })
//         })
//     }, [])

//     const reloadAge = () => {
//         new AuthorRequest().getAge().then((data) => {
//             dispatch({ type: 'getAge', payload: data })
//         })
//     }

//     return [state.age, reloadAge]
// }

const useCurrentValue = (value: unknown) =>{
    const valueRef = useRef(value)

    useEffect(()=>{
        console.log('b', value)
        valueRef.current = value
    }, [value])

    return valueRef
}

const debounce = (fn: Function,ms: number) =>{
    let delay: NodeJS.Timeout

    return function(...args: any[]){
        if(delay) clearTimeout(delay)
        delay = setTimeout(() => {
            fn.apply(null , args)
        }, ms);
    }
}


const useUpdate = () =>{
    const [,setFlag] = useState()
    const update = () =>{
        setFlag(new Date())
    }

    return update
}

const Index =  () => {
    
    const refresh = useUpdate()
    return (
        <div className='main'>
            <div className='aside'></div>
            <div className='content'>
                <div>123</div>
                <div className='top'></div>
                <div>
                    <div className='bottom'></div>
                </div>
            </div>

        </div>
    )
}

export default Index