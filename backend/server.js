import liveServer from 'live-server'
import { resolve } from 'node:path'
import { argv } from 'node:process'
import parseArgv from './parseArgv.js'

/* directories -------------------------------------------------------------- */

// 내 컴퓨터에서 특정 위치의 파일을 가져오는 경우에 resolve를 사용함
const frontendDir = resolve('frontend')

const DIR = {
  public: resolve(frontendDir, 'public'),
  src: resolve(frontendDir, 'src'),
}

/* parameters --------------------------------------------------------------- */

let params = {
  host: 'localhost',
  port: 3000,
  root: DIR.public,
  file: 'index.html',
  mount: [['/scripts', DIR.src]],
  open: false,
  wait: 200,
}

const customParams = parseArgv(argv)

params = { ...params, ...customParams }

/* start server ------------------------------------------------------------- */

liveServer.start(params)
