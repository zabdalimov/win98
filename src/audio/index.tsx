// TODO sometimes playback can't begin right away
// TODO add condition based on https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio#determining_when_playback_can_begin
export function playAudio(fileName: string): Promise<void> {
  return new Audio(`${process.env.PUBLIC_URL}/sounds/${fileName}`).play()
}
