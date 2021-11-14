// TODO not effective for long strings
export function getFirstPathFromStackTrace(stack: string): string {
  return stack.split('\n')[1]
}
