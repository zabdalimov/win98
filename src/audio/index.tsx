const DEFAULT_VOLUME = 0.5

const MIN_VOLUME = 0
const MAX_VOLUME = 1

// All the sounds are pretty loud by default, even when passing low values.
// This makes them a bit more quite in general
const VOLUME_MULTIPLIER = 0.5

// TODO sometimes playback can't begin right away
// TODO add condition based on https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio#determining_when_playback_can_begin
export function playAudio(
  fileName: string,
  volume: number = DEFAULT_VOLUME
): Promise<void> {
  const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/${fileName}`)

  if (volume < MIN_VOLUME || volume > MAX_VOLUME) {
    console.warn(
      `Value ${volume} of volume parameter is not between ${MIN_VOLUME} and ${MAX_VOLUME}. Falling back to default value ${DEFAULT_VOLUME} instead.`
    )
    audio.volume = DEFAULT_VOLUME * VOLUME_MULTIPLIER
  } else {
    audio.volume = volume * VOLUME_MULTIPLIER
  }

  return audio.play()
}
