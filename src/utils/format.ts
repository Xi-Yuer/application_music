export function formatCount(count: number): string | number {
  if (count < 10000) return count
  return Math.floor(count / 10000) + '万'
}

export function formatImg(url?: string, x?: number, y?: number): string {
  return `${url}?param=${x}x${y}`
}
