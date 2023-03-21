import dayjs from 'dayjs'

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

interface ILyric {
  time: number
  text: string
}
export function parseLyric(lyric: string) {
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  const lyrics: ILyric[] = []
  // [00:00.000] 作词 : 八三夭阿璞
  const lineStrings: string[] = lyric.split('\n')
  for (const line of lineStrings) {
    const result = timeRegExp.exec(line)
    if (!result) continue
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    const time3 =
      result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10
    const time = time1 + time2 + time3
    const text = line.replace(timeRegExp, '')
    lyrics.push({
      time,
      text
    })
  }
  return lyrics
}

export function formatDate(s: number, type?: string) {
  type ? type : 'MM月DD日'
  return dayjs(s).format(type)
}
