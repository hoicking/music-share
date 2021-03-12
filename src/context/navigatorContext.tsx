import React, {useContext, useReducer} from 'react'

export const NavigatorContext = React.createContext(null as any)


export const NavigatorProvider = ({reducer, initialState, children}: any) =>{
    return (
        <NavigatorContext.Provider value={useReducer(reducer, initialState)}>{children}</NavigatorContext.Provider>
    )
}

export const useNavigatorValue = () => useContext(NavigatorContext)