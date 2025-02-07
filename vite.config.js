import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Interactive-Rating-Component/",
  server: {
    port: 2002,
  },

})
