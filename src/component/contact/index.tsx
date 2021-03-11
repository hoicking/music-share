import React from 'react'

import logo from '../../assets/imgs/pokita.png'

import './index.scoped.scss'

const Index = () => {
    return (
        <div className='main'>
            <img className='logo' src={logo} alt='avatar' title='Pochita' />
            <div className='wechat'> 
                <span>Wechat:</span>
                <br />
                <span className='wechat-detail'>ACORPSEISTALKING</span>
            </div>
        </div>
    )
}


export default Index