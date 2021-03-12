import React, { useState } from 'react'
import Contact from '../../component/contact'

import WebsiteBox from './websiteBox'

import './index.scoped.scss'


const Index = () => {


    let data = [1,2,3,4,5, 6]

    return (
        <div className='content'>
            <Contact />

            {/* <div className='websites'>
                {
                    data.map(item=>{
                        return (<WebsiteBox />)
                    })
                }
            </div> */}
        </div>
    )
}

export default Index