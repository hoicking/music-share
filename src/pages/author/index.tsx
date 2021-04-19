import React, { useState, useReducer, useContext, useEffect, useMemo, useRef } from 'react'

import { useUserValue } from '../../context/authorContext'
import './index.scoped.scss'
import arr from '../../config/drawingBoard'

const Index = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    return (
        <div className='main'>
            <div className='grid-box'>
                {
                    array.map((item, index) => {
                        return <div className={`grid-item  item-${index + 1}`}>
                            {item}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Index