import { animate } from "framer-motion"
import React, { useEffect, useRef } from "react"

import * as S from './LineCanvas.styled'

export const LineCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function setDPI(canvas: HTMLCanvasElement, dpi: number) {
    canvas.style.width = canvas.style.width || canvas.width + 'px'
    canvas.style.height = canvas.style.height || canvas.height + 'px'

    var scaleFactor = dpi / 96;
    var width = parseFloat(canvas.style.width)
    var height = parseFloat(canvas.style.height)

    var oldScale = canvas.width / width
    var backupScale = scaleFactor / oldScale
    var backup = canvas.cloneNode(false)
    backup.getContext('2d').drawImage(canvas, 0, 0)

    var ctx = canvas.getContext('2d')!
    canvas.width = Math.ceil(width * scaleFactor);
    canvas.height = Math.ceil(height * scaleFactor);

    ctx.setTransform(backupScale, 0, 0, backupScale, 0, 0)
    ctx.drawImage(backup, 0, 0);
    ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0)
  }

  const drawLine = (C: CanvasRenderingContext2D, offsetX: number, offsetY: number) => {
    C.strokeStyle ='#222222';
    C.stroke()
    C.beginPath();
    C.lineWidth = 0.1
    C.moveTo(offsetX, 0)
    C.lineTo(offsetX, C.canvas.height)
    
    C.moveTo(0, -offsetY)
    C.lineTo(C.canvas.width, -offsetY)
    C.closePath()

    C.stroke()
    C.beginPath()
    C.lineWidth = 0.1
    C.moveTo(offsetX-C.canvas.width*2, -offsetY-C.canvas.height*2);
    C.lineTo(offsetX+C.canvas.width*2, -offsetY+C.canvas.height*2)
  }

  const draw = (C: CanvasRenderingContext2D, offsetX: number, offsetY: number) => {
    C.clearRect(0, 0, C.canvas.width, C.canvas.height)
    const count = 3
    const spaceX = window.innerWidth/count
    const spaceY = window.innerHeight/count
    for (let i=-count-15; i < count+10; i++) {
      const startX = i*spaceX
      const startY = i*spaceY
      drawLine(C, startX+offsetX, startY+offsetY)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current!
    const context = canvas.getContext('2d')!
    let offsetX = 0
    let offsetY = 0
    let animationFrameId: number
    
    // setDPI(canvas, 900)

    const render = () => {
      context.canvas.width  = window.innerWidth;
      context.canvas.height = window.innerHeight;
      offsetX+=1
      offsetY+=1
      if (offsetX > 900) {
        offsetX = -offsetX
        offsetY = -offsetY
      }
      
      draw(context, offsetX, offsetY)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (
    <>
      <S.Canvas ref={canvasRef as React.RefObject<HTMLCanvasElement>}/>
    </>
  )
}