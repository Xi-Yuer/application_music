import { getMusicPlayUrl } from '@/pages/player/service'

export default async function getMusiceResource(id: number) {
  const { data } = await getMusicPlayUrl(id)
  return data[0].url
}
