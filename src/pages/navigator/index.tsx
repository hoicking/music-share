import React, { useRef, useState, useEffect } from 'react'

import Contact from '../../component/contact'
import { NAVIGATOR_MUSIC } from '../../config/musicList'

import './index.scoped.scss'


const useMouse = () => {
    const [hold, setHold] = useState(false)
    const [startPoint, setStartPoint] = useState(0)
    const [slideIndex, setSlideIndex] = useState(0)
    const [playing, setPlaying] = useState(false)

    const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setHold(true)
        setStartPoint(event.clientX)
    }

    const onMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setHold(false)
        if (event.clientX - startPoint > 0 && slideIndex > 0) {
            setPlaying(false)

            setSlideIndex(slideIndex - 1)
        } else if (event.clientX - startPoint < 0 && slideIndex < NAVIGATOR_MUSIC.length - 1) {
            setPlaying(false)

            setSlideIndex(slideIndex + 1)
        } else if(event.clientX === startPoint){
            playAudio()
        }
    }

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (hold) {
        }
    }

    const playAudio = ()=> {
        setPlaying(!playing)
        if(playing){
            pausePlay()
        }else{
            startPlay()
        }
    }

    const startPlay = () => {
        const audio: any = document.getElementById('audio')
        audio.play()
    }

    const pausePlay = () => {
        const audio: any = document.getElementById('audio')

        audio.pause()
    }

    return [hold, slideIndex,playing, onMouseDown, onMouseMove, onMouseUp] as any

}

function Index() {
    const divRef = useRef<HTMLDivElement>(null)
    const [hold, slideIndex, playing,onMouseDown, onMouseMove, onMouseUp] = useMouse()


    useEffect(() => {
        const translate = 100 * slideIndex
        divRef.current?.setAttribute('style', `transform: translate(-${translate}%, 0);`)

    }, [slideIndex])

    return <div className='root'>
        <Contact playing={playing}/>
        <div ref={divRef} className='panels'>
            {
                NAVIGATOR_MUSIC.map(item => {
                    return (
                        <div
                            key={item.name} className={`panel ${hold ? 'panel-hold' : ''}`}
                            style={{
                                width: `${document.body.clientWidth}px`,
                                flexBasis: `${document.body.clientWidth}px`
                            }}
                        >
                            <div
                                className={`background ${hold ? 'hold' : ''}`}
                                style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}
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

        <audio
            id={'audio'}
            src={NAVIGATOR_MUSIC[slideIndex].url}
            // onEnded={playNext}
            // autoPlay
            // onPlay={startPlay}
            // onPause={pausePlay}
        // crossOrigin='anonymous'
        />



    </div>

}


export default Index