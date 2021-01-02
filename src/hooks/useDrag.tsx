import React, { useCallback, useEffect, useState } from 'react'

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

interface State {
  dragStart: Point
  translation: Point
  lastTranslation: Point
  isDragging: boolean
}

/**
 * @param ref - ref to the element that would be moved
 */
export function useDrag(ref: React.RefObject<HTMLElement>): UseDragProvided {
  const [state, setState] = useState<State>({
    dragStart: {
      x: 0,
      y: 0,
    },
    translation: {
      x: 0,
      y: 0,
    },
    lastTranslation: {
      x: 0,
      y: 0,
    },
    isDragging: false,
  })

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setState((prev) => ({
      ...prev,
      dragStart: {
        x: e.clientX,
        y: e.clientY,
      },
      isDragging: true,
    }))
  }, [])

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
    setState((prev) => ({
      ...prev,
      lastTranslation: prev.translation,
      isDragging: false,
    }))
  }, [])

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    } else {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [state.isDragging, onMouseMove, onMouseUp])

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${state.translation.x}px, ${state.translation.y}px)`
    }
  }, [ref, state.translation.x, state.translation.y])

  return {
    onMouseDown,
  }
}
