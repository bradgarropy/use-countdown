import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

export default defineConfig({
    // esbuild: {
    // eslint-disable-next-line quotes
    // jsxInject: 'import React from "react"',
    // },
    plugins: [react()],
})
