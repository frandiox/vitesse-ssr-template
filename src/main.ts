import 'windi.css'
import './styles/main.css'
import viteSSR from 'vite-ssr'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export default viteSSR(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
    i.install?.(ctx)
  )
})
