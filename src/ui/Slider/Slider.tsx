import React, { useCallback, useRef, useState } from 'react'
import { SliderHandle, SliderStyled, SliderTrack } from './Slider.styles'
import { clamp } from '../../utils/math'

export type SliderOrientation = 'horizontal' | 'vertical'

export interface SliderProps {
  min: number
  max: number
  orientation?: SliderOrientation
  onChange?: (value: number) => void
}

interface State {
  startPosition: number
  position: number
  lastPosition: number
}

// TODO this is similar to useDrag but it's one dimensional, mb extract common logic to separate hook
// TODO step param
export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  orientation = 'horizontal',
  onChange,
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)

  const trackWidth = trackRef.current?.offsetWidth ?? 0
  const handleWidth = handleRef.current?.offsetWidth ?? 0

  const minPosition = 0
  const maxPosition = trackWidth - handleWidth

  const [state, setState] = useState<State>({
    startPosition: 0,
    position: 0,
    lastPosition: 0,
  })

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      setState((prev) => ({
        ...prev,
        position: clamp(
          prev.lastPosition + e.clientX - prev.startPosition,
          minPosition,
          maxPosition
        ),
      }))
    },
    [maxPosition]
  )

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    setState((prev) => {
      const value = (max - min) * (prev.position / maxPosition)
      onChange && onChange(value)
      return {
        ...prev,
        lastPosition: prev.position,
      }
    })
  }, [max, maxPosition, min, onChange, onMouseMove])

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      setState((prev) => ({
        ...prev,
        startPosition: e.clientX,
      }))
    },
    [onMouseMove, onMouseUp]
  )

  return (
    <SliderStyled orientation={orientation}>
      <SliderTrack orientation={orientation} ref={trackRef} />
      <SliderHandle
        orientation={orientation}
        onMouseDown={onMouseDown}
        style={{
          left: `${state.position}px`,
        }}
        ref={handleRef}
      />
    </SliderStyled>
  )
}
