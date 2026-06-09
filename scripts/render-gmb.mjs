import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

// Logo quadrado pra Google Meu Negócio — composição empilhada e
// centralizada, dentro da zona segura do corte circular (~76%).
// Bolinha lime em cima + "VISARA" embaixo, fundo preto.
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <rect width="1024" height="1024" fill="#0a0a0a"/>
  <circle cx="512" cy="406" r="58" fill="#d4ff00"/>
  <text x="512" y="600" fill="#f5f5f0"
        font-family="Space Grotesk, Inter, Arial, sans-serif"
        font-weight="700"
        font-size="156"
        letter-spacing="-6"
        text-anchor="middle"
        dominant-baseline="central">VISARA</text>
</svg>`)

await sharp(svg, { density: 400 })
  .resize(1024, 1024, { fit: 'contain', background: '#0a0a0a' })
  .png()
  .toFile(join(publicDir, 'visara-gmb.png'))

console.log('✓ visara-gmb.png (1024x1024) — Google Meu Negócio')
