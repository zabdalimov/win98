// Default is 1 when Audio.volume isn't set explicitly, which turns out to be a bit loud
const DEFAULT_VOLUME = 0.25

const MIN_VOLUME = 0
const MAX_VOLUME = 1

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
    audio.volume = DEFAULT_VOLUME
  } else {
    audio.volume = volume
  }

  return audio.play()
}
