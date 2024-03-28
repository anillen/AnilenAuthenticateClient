import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

//Get env variables
dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_URL,
})
