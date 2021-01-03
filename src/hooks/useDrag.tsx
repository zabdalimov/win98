import React, { useCallback, useEffect, useState } from 'react'

interface UseDragProps {
  /**
   * ref to the element that would be moved
   */
  ref: React.RefObject<HTMLElement>
  onDragStart?: () => void
}

interface UseDragProvided {
  /**
   * Attach as a onMouseDown handler to the element that would be dragged
   */
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => void
}

type Point = {
  x: number
  y: number
}

const PointZero: Point = {
  x: 0,
  y: 0,
}

interface State {
  dragStart: Point
  translation: Point
  lastTranslation: Point
}

export function useDrag({
  ref,
  onDragStart = () => void 0,
}: UseDragProps): UseDragProvided {
  const [state, setState] = useState<State>({
    dragStart: PointZero,
    translation: PointZero,
    lastTranslation: PointZero,
  })

  const onMouseMove = useCallback((e: MouseEvent) => {
    setState((prev) => ({
      ...prev,
      translation: {
        x: prev.lastTranslation.x + e.clientX - prev.dragStart.x,
        y: prev.lastTranslation.y + e.clientY - prev.dragStart.y,
      },
    }))
  }, [])

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    setState((prev) => ({
      ...prev,
      lastTranslation: prev.translation,
    }))
  }, [onMouseMove])

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      setState((prev) => ({
        ...prev,
        dragStart: {
          x: e.clientX,
          y: e.clientY,
        },
      }))
      onDragStart()
    },
    [onDragStart, onMouseMove, onMouseUp]
  )

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${state.translation.x}px, ${state.translation.y}px)`
    }
  }, [ref, state.translation.x, state.translation.y])

  return {
    onMouseDown,
  }
}
