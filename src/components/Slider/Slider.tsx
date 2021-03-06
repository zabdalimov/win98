import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { clamp } from '../../utils/math'

import { SliderHandle, SliderStyled, SliderTrack } from './Slider.styles'

export type SliderOrientation = 'horizontal' | 'vertical'

export interface SliderProps {
  min: number
  max: number
  value?: number
  orientation?: SliderOrientation
  onChange?: (value: number) => void
  // This will also be called when clicking on slider track
  onHandleRelease?: (value: number) => void
}

interface State {
  startPosition: number
  position: number
  lastPosition: number
}

// TODO this is similar to useDrag but it's one dimensional, mb extract common logic to separate hook
// TODO step param
// TODO this component rerenders every second for some reason
export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value = 0,
  orientation = 'horizontal',
  onChange,
  onHandleRelease,
}) => {
  const [trackEl, setTrackEl] = useState<HTMLDivElement | null>(null)
  const [handleEl, setHandleEl] = useState<HTMLDivElement | null>(null)

  const trackSize =
    (orientation === 'horizontal'
      ? trackEl?.offsetWidth
      : trackEl?.offsetHeight) ?? 0

  const handleSize =
    (orientation === 'horizontal'
      ? handleEl?.offsetWidth
      : handleEl?.offsetHeight) ?? 0

  const minPosition = 0
  const maxPosition = trackSize - handleSize

  const [state, setState] = useState<State>({
    startPosition: 0,
    position: 0,
    lastPosition: 0,
  })

  useEffect(() => {
    if (!trackEl || !handleEl || state.position) {
      return
    }

    setState((prev) => ({
      ...prev,
      position: (value * maxPosition) / (max - min),
    }))
    // This is just for setting initial value, we don't want to react to other changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackEl, handleEl])

  const calculateValue = useCallback(
    (position: number) => (max - min) * (position / maxPosition),
    [max, maxPosition, min]
  )

  const getClientCoordinate = useCallback(
    (event: MouseEvent | React.MouseEvent<HTMLElement>) => {
      // More intuitive to work with negative y value
      return orientation === 'horizontal' ? event.clientX : -event.clientY
    },
    [orientation]
  )

  useEffect(() => {
    // TODO for some reason maxPosition is 0 sometimes, meaning that track and handle elements disappear (0 width each).
    // TODO this shows up when that happens "Cannot flush updates when React is already rendering".
    // TODO Don't call change as a workaround for now.
    if (onChange && maxPosition) {
      const value = calculateValue(state.position)
      onChange(value)
    }
    // We explicitly want to react on position change only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.position])

  const onTrackClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setState(() => {
        const trackRect = (e.target as HTMLDivElement).getBoundingClientRect()
        // TODO horizontal is not tested, probably wouldn't work
        const position =
          getClientCoordinate(e) +
          (orientation === 'horizontal' ? trackRect.left : trackRect.bottom) -
          handleSize / 2
        const positionClamped = clamp(position, minPosition, maxPosition)
        onHandleRelease?.(calculateValue(positionClamped))
        return {
          startPosition: positionClamped,
          position: positionClamped,
          lastPosition: positionClamped,
        }
      })
    },
    [
      calculateValue,
      getClientCoordinate,
      handleSize,
      maxPosition,
      onHandleRelease,
      orientation,
    ]
  )

  const onMouseMove = useCallback(
    (e: MouseEvent) =>
      setState((prev) => ({
        ...prev,
        position: clamp(
          prev.lastPosition + getClientCoordinate(e) - prev.startPosition,
          minPosition,
          maxPosition
        ),
      })),
    [getClientCoordinate, maxPosition]
  )

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    setState((prev) => {
      onHandleRelease?.(calculateValue(prev.position))
      return {
        ...prev,
        lastPosition: prev.position,
      }
    })
  }, [calculateValue, onHandleRelease, onMouseMove])

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      setState((prev) => ({
        ...prev,
        startPosition: getClientCoordinate(e),
      }))
    },
    [getClientCoordinate, onMouseMove, onMouseUp]
  )

  const offsetProp = useMemo(
    () => (orientation === 'horizontal' ? 'left' : 'bottom'),
    [orientation]
  )

  return (
    <SliderStyled orientation={orientation}>
      <SliderTrack
        orientation={orientation}
        ref={(el) => setTrackEl(el)}
        onClick={onTrackClick}
      />
      <SliderHandle
        orientation={orientation}
        onMouseDown={onMouseDown}
        style={{
          [offsetProp]: `${state.position}px`,
        }}
        ref={(el) => setHandleEl(el)}
      />
    </SliderStyled>
  )
}
