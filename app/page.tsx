import Header from '@/components/organism/Header'
import HomeSection from '@/components/organism/HomeSection'
import Footer from '@/components/organism/Footer'

export default function Home() {
  // if (a >= 19)
  return (
    <div>
      <Header />
      <main className="z-0 pt-16">
        <HomeSection />
        <section className="section-class">
          <div>Hi, I&aposm Jiyoon Web Developer</div>
          <div>Full stack Developer / Javascript ~~</div>
          <div>description</div>
        </section>
        <section className="section-class">
          <div>Contact</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
