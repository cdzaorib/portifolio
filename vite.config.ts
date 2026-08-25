import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Preloads the faces used above the fold.
 *
 * Fonts are discovered late — the browser has to parse the CSS before it knows
 * they exist — so they arrive after first paint and swapping them in reflows
 * the page. Their filenames are content-hashed, so the links are injected from
 * the built bundle rather than hardcoded.
 */
function preloadCriticalFonts(): Plugin {
  const critical = [
    'archivo-latin-wght-normal',
    'ibm-plex-sans-latin-400-normal',
    'ibm-plex-mono-latin-400-normal',
    'ibm-plex-mono-latin-500-normal',
  ]

  return {
    name: 'preload-critical-fonts',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html, ctx) {
      const files = Object.keys(ctx.bundle ?? {}).filter(
        (file) => file.endsWith('.woff2') && critical.some((name) => file.includes(name)),
      )

      return {
        html,
        tags: files.map((file) => ({
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'font',
            type: 'font/woff2',
            href: `/${file}`,
            crossorigin: '',
          },
          injectTo: 'head-prepend' as const,
        })),
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadCriticalFonts()],
})
