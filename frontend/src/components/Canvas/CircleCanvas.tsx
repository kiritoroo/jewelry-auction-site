import React, { useRef, useEffect } from "react"

import * as S from './CircleCanvas.styled'

export const CircleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const drawCircle = (C: CanvasRenderingContext2D, size: number, offsetX: number, offsetY: number) => {
    C.lineWidth = 0.2;
    C.strokeStyle ='#222222';
    C.save()
    C.beginPath()
    C.arc(550+offsetX, -offsetY, size, 0, Math.PI * 2, false)
    C.stroke()
    C.restore()
  }

  const draw = (C: CanvasRenderingContext2D, offsetX: number, offsetY: number) => {
    C.clearRect(0, 0, C.canvas.width, C.canvas.height)
    const size = 200
    const count = 3
    const spaceX = 300/count + size-size/22
    const spaceY = 250/count + size-size/20
    for (let i =-count-10; i < count+5; i++) {
      const startX = i*spaceX
      const startY = i*spaceY
      drawCircle(C, size, startX+offsetX, startY+offsetY)
      for(let j =-count-10; j < count+5; j++) {
        const spaceVertical = 550*j
        drawCircle(C, size, startX+offsetX, startY+spaceVertical+offsetY)
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current!
    const context = canvas.getContext('2d')!
    let offsetX = -900
    let offsetY = -300
    let animationFrameId: number
    
    // setDPI(canvas, 200)

    const render = () => {
      context.canvas.width  = window.innerWidth;
      context.canvas.height = window.innerHeight;
      offsetX+=0.8
      offsetY+=0.5
      if (offsetX > 800) {
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
    <S.Canvas ref={canvasRef as React.RefObject<HTMLCanvasElement>}/>
  )
}