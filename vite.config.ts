import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { visualizer } from 'rollup-plugin-visualizer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isAnalyze = mode === 'analyze'
  const isProduction = mode === 'production'

  return {
    plugins: [
      react(),
      isAnalyze &&
        visualizer({
          filename: './dist/stats.html',
          open: !process.env.CI,
          gzipSize: true,
          brotliSize: true,
          template: 'treemap',
        }),
    ].filter(Boolean),

    // Base URL pour GitHub Pages
    base: env.VITE_BASE_URL || '/Booki/',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@styles': path.resolve(__dirname, './src/scss'),
        '@app-types': path.resolve(__dirname, './src/types'),
      },
    },

    server: {
      port: 3000,
      strictPort: false,
      host: 'localhost',
      open: true,
    },

    preview: {
      port: 4173,
      strictPort: false,
      host: 'localhost',
      open: true,
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Content-Security-Policy': [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline'",
          "font-src 'self'",
          "img-src 'self' data: https:",
          "connect-src 'self'",
          "frame-ancestors 'none'",
        ].join('; '),
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: isProduction ? 'hidden' : true,
      target: 'esnext',
      minify: isProduction,
      chunkSizeWarningLimit: 500,
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor-react',
                test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                priority: 30,
              },
              {
                name: 'vendor-fonts',
                test: /node_modules[\\/](@fontsource|@fortawesome)[\\/]/,
                priority: 20,
              },
              { name: 'vendor', test: /node_modules/, priority: 10 },
            ],
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || []
            const ext = info[info.length - 1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`
            }
            if (/woff2?|eot|ttf|otf/i.test(ext)) {
              return `assets/fonts/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
      cssCodeSplit: true,
      reportCompressedSize: true,
    },

    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api', 'import'],
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom', '@fontsource/raleway'],
    },

    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
  }
})
