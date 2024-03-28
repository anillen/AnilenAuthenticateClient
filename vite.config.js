import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

//Get env variables
dotenv.config();

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'assets',
  base: process.env.BASE_URL,
})
