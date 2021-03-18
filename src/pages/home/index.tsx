import React, { useEffect, useState, useRef } from 'react'
import shuffle from 'lodash/shuffle'

import Contact from '../../component/contact'
import Colors from '../../config/drawingBoard'
import {MUSIC_LIST} from '../../config/musicList'
import './index.scoped.scss'

const LINE_COLOR = '#35b2c0'
const WINDOW_WIDTH = document.body.clientWidth

const CANVAS_WIDTH = WINDOW_WIDTH > 800 ? 600 : 300,
      CANVAS_HEIGHT = WINDOW_WIDTH > 800 ? 600 : 300

const CANVAS_X = WINDOW_WIDTH > 800 ? 300 : 150,
      CANVAS_Y = WINDOW_WIDTH > 800 ? 300 : 150,
      CANVAS_RADIUS = WINDOW_WIDTH > 800 ? 250 : 125,
      CANVAS_ANIMATION_RAIDUS = WINDOW_WIDTH > 800 ? 200 : 100

const TIMES = WINDOW_WIDTH > 800 ? 1 : 2 
const SPLICES_NUM = 380

function Index() {
  const rows = useRef(Colors)

  const [playing, setPlaying] = useState<Boolean>(false)
  const [audioSource, setAudioSource] = useState<MediaElementAudioSourceNode>()
  const [audioContext, setAudioContext] = useState<AudioContext>()
  const [currentMusic, setCurrentMusic] = useState<number>(0)
  const [loaded, setLoaded] = useState<Boolean>(false)

  useEffect(() => {
    const wrap = document.getElementById('cover') as HTMLCanvasElement
    const ctx = wrap.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, wrap.width, wrap.height);
      ctx.beginPath()
      ctx.arc(CANVAS_X, CANVAS_Y, CANVAS_RADIUS, 0, Math.PI * 2, true)
      ctx.strokeStyle = LINE_COLOR
      ctx.lineWidth = 5
      ctx.stroke();
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      let shuffledList = shuffle(Colors)
      rows.current = shuffledList
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    setCurrentMusic(0)
  }, [])


  const renderCanvas = (dataArray: Uint8Array) => {
    const wrap = document.getElementById('cover') as HTMLCanvasElement
    const ctx = wrap.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, wrap.width, wrap.height);
      ctx.beginPath()
      ctx.arc(CANVAS_X, CANVAS_Y, CANVAS_ANIMATION_RAIDUS, 0, Math.PI * 2, true)

      const startColor = rows.current[0].startColor
      const endColor = rows.current[0].endColor

      for (let i = 0; i < SPLICES_NUM; i++) {
        const radius = dataArray[i] / (4 * TIMES)
        ctx.beginPath()
        ctx.lineWidth = 5

        const g = ctx.createLinearGradient(
            CANVAS_X + CANVAS_RADIUS * Math.cos(i),
            CANVAS_Y + CANVAS_RADIUS * Math.sin(i),
            CANVAS_X + (CANVAS_RADIUS + radius) * Math.cos(i),
            CANVAS_Y + (CANVAS_RADIUS + radius) * Math.sin(i));  

        g.addColorStop(0, startColor)
        g.addColorStop(1, endColor)
        ctx.strokeStyle = g

        ctx.moveTo(CANVAS_X + CANVAS_RADIUS * Math.cos(i), CANVAS_Y + CANVAS_RADIUS * Math.sin(i));
        ctx.lineTo(CANVAS_X + (CANVAS_RADIUS + radius) * Math.cos(i), CANVAS_Y + (CANVAS_RADIUS + radius) * Math.sin(i))
        // ctx.strokeStyle = LINE_COLOR
        ctx.stroke()
      }
      ctx.stroke();
    }
  }

  const loadAudio = () => {
    let context = null
    if (audioContext) {
      context = audioContext
    } else {
      context = new (window.AudioContext || (window as any).webkitAudioContext)()
      setAudioContext(context)
    }

    const audio = document.getElementById('audio');
    const analysis = context.createAnalyser()
    if (analysis) {
      let source
      if (!audioSource) {
        source = context.createMediaElementSource(audio as any);
        setAudioSource(source)
      } else {
        source = audioSource
      }

      source.connect(analysis);
      analysis.connect(context.destination);

      let dataArray = new Uint8Array(SPLICES_NUM)
      const draw = () => {
        if (analysis) {
          analysis.getByteFrequencyData(dataArray)
        }
        renderCanvas(dataArray)

        requestAnimationFrame(draw)
      }
      draw()
    }
  }

  const playAudio = () => {
    const audio: any = document.getElementById("audio")
    if (playing) {
      audio.pause()
    } else if (audio) {
      if(!loaded){
        loadAudio()
        setLoaded(true)
      }
      audio.play()
    }
  }

  const playNext = () =>{

    if(currentMusic === MUSIC_LIST.length - 1){
      setCurrentMusic(0)
    }else{
      setCurrentMusic(currentMusic + 1)
    }
  }

  const startPlay = () =>{
    setPlaying(true)

    if(!loaded){
      loadAudio()
      setLoaded(true)
    }
  }

  const pausePlay = () =>{
    setPlaying(false)
  }

  return (
    <div className='root'>
      <Contact  />
      <div className={`canvas-block ${playing ? 'spin' : ''}`} onClick={playAudio}>
        <canvas id='cover' height={CANVAS_HEIGHT} width={CANVAS_WIDTH}></canvas>
      </div>
      <audio
        id='audio'
        src={MUSIC_LIST[currentMusic].url}
        onEnded={playNext}
        autoPlay
        onPlay={startPlay}
        onPause={pausePlay}
        crossOrigin='anonymous'
      />
    </div>
  );
}

export default Index;