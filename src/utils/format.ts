export function formatCount(count: number): string | number {
  if (count < 10000) return count
  return Math.floor(count / 10000) + '万'
}

export function formatImg(url?: string, x?: number, y?: number): string {
  return `${url}?param=${x}x${y}`
}

export function formatTime(time: number) {
  const timeSeconds = time / 1000

  // 获取分钟
  const minue = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  const formatMinute = String(minue).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}
