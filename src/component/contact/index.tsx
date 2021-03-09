import React from 'react'

import logo from '../../assets/imgs/pokita.png'

import './index.scoped.scss'

const Index = () =>{
    return (
        <div className='main'>
            <img className='logo' src={logo} alt='avatar' title='Pochita'/>
            <div className='wechat'>Wechat:<br/>ACORPSEISTALKING</div>
        </div>
    )
}


export default Index