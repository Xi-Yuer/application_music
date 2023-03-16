import { BASE_URL, TIME_OUT } from './config'
import Request from './request/index'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request
