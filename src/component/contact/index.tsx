import React, { useState, useRef } from 'react'

import logo from '../../assets/imgs/pokita.png'

import './index.scoped.scss'

const Index = (props: any) => {

    const {playing} = props

    const openPage = ()=>{
        props.openPage()   
    }

    return (
        <div className='main'>
            <img className={`logo ${playing?'playing': ''}`} src={logo} alt='avatar' title='Pochita' />
            <div className='wechat'> 
                <span>Wechat:</span>
                <br />
                <span className='wechat-detail' onClick={openPage}>ACORPSEISTALKING</span>
            </div>
        </div>
    )
}


export default Index