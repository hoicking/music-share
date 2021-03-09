import React, {useContext, useReducer} from 'react'

export const AuthorContext = React.createContext(null as any)

export const AuthorProvider = ({reducer, initialState, children}: any) =>{
    return (
        <AuthorContext.Provider value={useReducer(reducer, initialState)}>{children}</AuthorContext.Provider>
    )
}

export const useUserValue = () => useContext(AuthorContext)