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
// TODO enable clicking on track to change value
export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  orientation = 'horizontal',
  onChange,
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)

  const trackSize =
    (orientation === 'horizontal'
      ? trackRef.current?.offsetWidth
      : trackRef.current?.offsetHeight) ?? 0

  const handleSize =
    (orientation === 'horizontal'
      ? handleRef.current?.offsetWidth
      : handleRef.current?.offsetHeight) ?? 0

  const minPosition = 0
  const maxPosition = trackSize - handleSize

  const [state, setState] = useState<State>({
    startPosition: 0,
    position: 0,
    lastPosition: 0,
  })

  const onMouseMove = useCallback(
    (e: MouseEvent) =>
      setState((prev) => ({
        ...prev,
        position: clamp(
          prev.lastPosition +
            (orientation === 'horizontal' ? e.clientX : -e.clientY) -
            prev.startPosition,
          minPosition,
          maxPosition
        ),
      })),
    [maxPosition, orientation]
  )

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    setState((prev) => {
      // TODO for some reason maxPosition is 0 sometimes, meaning that track and handle elements disappear (0 width each).
      // TODO this shows up when that happens "Cannot flush updates when React is already rendering".
      // TODO Don't call change as a workaround for now.
      if (onChange && maxPosition) {
        const value = (max - min) * (prev.position / maxPosition)
        onChange(value)
      }
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
        startPosition: orientation === 'horizontal' ? e.clientX : -e.clientY,
      }))
    },
    [onMouseMove, onMouseUp, orientation]
  )

  const offsetProp = orientation === 'horizontal' ? 'left' : 'bottom'

  return (
    <SliderStyled orientation={orientation}>
      <SliderTrack orientation={orientation} ref={trackRef} />
      <SliderHandle
        orientation={orientation}
        onMouseDown={onMouseDown}
        style={{
          [offsetProp]: `${state.position}px`,
        }}
        ref={handleRef}
      />
    </SliderStyled>
  )
}
