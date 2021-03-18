import React, { useRef, useState, useEffect } from 'react'

import Contact from '../../component/contact'

import './index.scoped.scss'


const pages = [
    'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background01.png?q-sign-algorithm=sha1&q-ak=AKIDMV-JC0kAJHE4cLWPj15Cn7myvPrUNRzDU7daZJ9wSCS5w7HnnfOikUO-CDVBQDIj&q-sign-time=1615878953;1615882553&q-key-time=1615878953;1615882553&q-header-list=&q-url-param-list=&q-signature=1cfda00694bb8947c1e7e43fe62f658a4dd28f2e&x-cos-security-token=5PDdSDo6e9QfYMtmqBATLj9q5sHUfiXad1bd4ff40c75c6e0a861ca8f217a6a84rDo8fXPKIDTvEZAgzy87HCfELYLypEcFI77UcKkggzPwz7UDDJRCtEwAFtaeZ5PC87i7cZopTzKaBzw02kIiCoMqYAh3LGi6PdlWSXZVH9Ns-tI07NmS3ayLLp0baPGOUnSrkQHDxd3s1Ii2ist4byXH7hF_q0EkUI2OYAVOFsk',
    'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background02.png?q-sign-algorithm=sha1&q-ak=AKIDGezs8098gS_bR_oECRVeQ2DImr6iiiVFFi3gLmZ7nmepYmHoHhvBqELeJamsTh-x&q-sign-time=1615878975;1615882575&q-key-time=1615878975;1615882575&q-header-list=&q-url-param-list=&q-signature=8222918eea80dfcce2813809aed24abc934f2a7d&x-cos-security-token=5PDdSDo6e9QfYMtmqBATLj9q5sHUfiXa04635d0b35bfd7ba44ddcc8da95122cerDo8fXPKIDTvEZAgzy87HGB8sP9ulFCPQgXowyqwCzkWUg2cZifUPOEQmzoGTSRqmk98vyThgo_VUCgcbrMY8kI3fYGE5V60nuQsIJ_aNAIx1_tePw4NOW9KiU_MshLwy32geOYArignggO39g0EPf37CW5abLhQj1PnBcaD1MY',
    'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background02.png?q-sign-algorithm=sha1&q-ak=AKIDGezs8098gS_bR_oECRVeQ2DImr6iiiVFFi3gLmZ7nmepYmHoHhvBqELeJamsTh-x&q-sign-time=1615878975;1615882575&q-key-time=1615878975;1615882575&q-header-list=&q-url-param-list=&q-signature=8222918eea80dfcce2813809aed24abc934f2a7d&x-cos-security-token=5PDdSDo6e9QfYMtmqBATLj9q5sHUfiXa04635d0b35bfd7ba44ddcc8da95122cerDo8fXPKIDTvEZAgzy87HGB8sP9ulFCPQgXowyqwCzkWUg2cZifUPOEQmzoGTSRqmk98vyThgo_VUCgcbrMY8kI3fYGE5V60nuQsIJ_aNAIx1_tePw4NOW9KiU_MshLwy32geOYArignggO39g0EPf37CW5abLhQj1PnBcaD1MY',
    'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background02.png?q-sign-algorithm=sha1&q-ak=AKIDGezs8098gS_bR_oECRVeQ2DImr6iiiVFFi3gLmZ7nmepYmHoHhvBqELeJamsTh-x&q-sign-time=1615878975;1615882575&q-key-time=1615878975;1615882575&q-header-list=&q-url-param-list=&q-signature=8222918eea80dfcce2813809aed24abc934f2a7d&x-cos-security-token=5PDdSDo6e9QfYMtmqBATLj9q5sHUfiXa04635d0b35bfd7ba44ddcc8da95122cerDo8fXPKIDTvEZAgzy87HGB8sP9ulFCPQgXowyqwCzkWUg2cZifUPOEQmzoGTSRqmk98vyThgo_VUCgcbrMY8kI3fYGE5V60nuQsIJ_aNAIx1_tePw4NOW9KiU_MshLwy32geOYArignggO39g0EPf37CW5abLhQj1PnBcaD1MY',
    'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background02.png?q-sign-algorithm=sha1&q-ak=AKIDGezs8098gS_bR_oECRVeQ2DImr6iiiVFFi3gLmZ7nmepYmHoHhvBqELeJamsTh-x&q-sign-time=1615878975;1615882575&q-key-time=1615878975;1615882575&q-header-list=&q-url-param-list=&q-signature=8222918eea80dfcce2813809aed24abc934f2a7d&x-cos-security-token=5PDdSDo6e9QfYMtmqBATLj9q5sHUfiXa04635d0b35bfd7ba44ddcc8da95122cerDo8fXPKIDTvEZAgzy87HGB8sP9ulFCPQgXowyqwCzkWUg2cZifUPOEQmzoGTSRqmk98vyThgo_VUCgcbrMY8kI3fYGE5V60nuQsIJ_aNAIx1_tePw4NOW9KiU_MshLwy32geOYArignggO39g0EPf37CW5abLhQj1PnBcaD1MY',
    'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background02.png?q-sign-algorithm=sha1&q-ak=AKIDGezs8098gS_bR_oECRVeQ2DImr6iiiVFFi3gLmZ7nmepYmHoHhvBqELeJamsTh-x&q-sign-time=1615878975;1615882575&q-key-time=1615878975;1615882575&q-header-list=&q-url-param-list=&q-signature=8222918eea80dfcce2813809aed24abc934f2a7d&x-cos-security-token=5PDdSDo6e9QfYMtmqBATLj9q5sHUfiXa04635d0b35bfd7ba44ddcc8da95122cerDo8fXPKIDTvEZAgzy87HGB8sP9ulFCPQgXowyqwCzkWUg2cZifUPOEQmzoGTSRqmk98vyThgo_VUCgcbrMY8kI3fYGE5V60nuQsIJ_aNAIx1_tePw4NOW9KiU_MshLwy32geOYArignggO39g0EPf37CW5abLhQj1PnBcaD1MY'
]



const useMouse = () => {
    const [hold, setHold] = useState(false)
    const [startPoint, setStartPoint] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)


    const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('---onMouseDown', event)
        setHold(true)
        setStartPoint(event.clientX)
    }

    const onMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setHold(false)
        if (event.clientX - startPoint > 0 && slideIndex > 0) {
            setSlideIndex(slideIndex - 1)
        } else if (event.clientX - startPoint < 0 && slideIndex < pages.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
    }

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // console.log('---onMouseMove')
        if (hold) {
            // console.log(event)
        }
    }

    return [hold, slideIndex, onMouseDown, onMouseMove, onMouseUp] as any

}

function Index() {
    const divRef = useRef<HTMLDivElement>(null)

    const [hold, slideIndex, onMouseDown, onMouseMove, onMouseUp] = useMouse()


    useEffect(() => {

        console.log('---', slideIndex, divRef.current)
        const translate = 100 * slideIndex

        divRef.current?.setAttribute('style', `transform: translate(-${translate}%, 0);`)
        // divRef.current?.style = 
    }, [slideIndex])

    return <div className='root'>
        <Contact />
        <div ref={divRef} className='panels'>
            {
                pages.map(item => {
                    return (
                        <div className={`panel ${hold ? 'panel-hold' : ''}`} 
                            style={{width: `${document.body.clientWidth}px`,
                                flexBasis: `${document.body.clientWidth}px`}}
                            >
                            <div
                                className={`background ${hold ? 'hold' : ''}`}
                                onMouseDown={onMouseDown}
                                onMouseMove={onMouseMove}
                                onMouseUp={onMouseUp}
                            >
                            </div>
                        </div>
                    )
                })
            }
        </div>



    </div>

}


export default Index