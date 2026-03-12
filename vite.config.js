import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Cần thiết khi deploy lên GitHub Pages
  // Thay 'portfolio' bằng tên GitHub repository của bạn
  base: '/portfolio/',
})
