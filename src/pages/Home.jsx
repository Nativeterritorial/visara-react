import { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Problem from '../components/sections/Problem'
import Services from '../components/sections/Services'
import Plans from '../components/sections/Plans'
import Agents from '../components/sections/Agents'
import Process from '../components/sections/Process'
import Portfolio from '../components/sections/Portfolio'
import CTA from '../components/sections/CTA'

function Home() {
  // Fade-in on scroll — IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Hero />

      <div className="sep">
        <div className="sep-text">
          Imobiliárias ◆ Clínicas ◆ Comércio ◆ Prestadores de Serviço ◆ Imobiliárias ◆ Clínicas ◆ Comércio ◆ Prestadores de Serviço ◆ Imobiliárias ◆ Clínicas ◆ Comércio ◆ Prestadores de Serviço ◆ Imobiliárias ◆ Clínicas ◆ Comércio ◆ Prestadores de Serviço ◆&nbsp;
        </div>
      </div>

      <Problem />
      <Services />
      <Plans />
      <Agents />
      <Process />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
