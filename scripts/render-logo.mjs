import sharp from 'sharp'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const svg = readFileSync(join(publicDir, 'visara-logo.svg'))

function buildSvg(w, h, opts = {}) {
  const { layout = 'square' } = opts
  if (layout === 'og') {
    return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
      <rect width="1200" height="630" fill="#0a0a0a"/>
      <g transform="translate(600 315)">
        <circle cx="-360" cy="0" r="44" fill="#d4ff00"/>
        <text x="-300" y="0" fill="#f5f5f0"
              font-family="Space Grotesk, Inter, Arial, sans-serif"
              font-weight="700"
              font-size="140"
              letter-spacing="-4"
              dominant-baseline="central">VISARA</text>
        <text x="-300" y="100" fill="#9a9a93"
              font-family="Space Grotesk, Inter, Arial, sans-serif"
              font-weight="500"
              font-size="28"
              letter-spacing="6"
              dominant-baseline="central">SITE + AGENTE DE IA · WHATSAPP 24/7</text>
      </g>
    </svg>`)
  }
  return svg
}

const targets = [
  { name: 'visara-og.png',          w: 1200, h: 630, layout: 'og' },
  { name: 'apple-touch-icon.png',   w: 180,  h: 180, layout: 'square' },
  { name: 'favicon-32.png',         w: 32,   h: 32,  layout: 'square' },
  { name: 'favicon-192.png',        w: 192,  h: 192, layout: 'square' },
  { name: 'favicon-512.png',        w: 512,  h: 512, layout: 'square' },
  { name: 'favicon.png',            w: 64,   h: 64,  layout: 'square' },
]

for (const t of targets) {
  const buf = buildSvg(t.w, t.h, { layout: t.layout })
  await sharp(buf, { density: 400 })
    .resize(t.w, t.h, { fit: 'contain', background: '#0a0a0a' })
    .png()
    .toFile(join(publicDir, t.name))
  console.log(`✓ ${t.name} (${t.w}x${t.h})`)
}
