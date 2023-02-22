import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()], // 리액트 플러그인 연결
  resolve: {
    alias: [{ find: '@', replacement: './src' }],
  },
  // 서버 옵션 설정
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
})
