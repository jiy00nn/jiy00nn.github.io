import Image from 'next/image'

const HomeSection: React.FC = () => {
  return (
    <section className="section-class relative flex items-center">
      <div className="pl-20">
        <p className="py-2 text-3xl">Hello! This is</p>
        <p className="py-2 text-7xl">Jiyoon Bak</p>
        <p className="py-2 text-3xl">Web Developer</p>
      </div>
      <Image
        src="images/profile.png"
        width={450}
        height={450}
        className="absolute right-28 top-10"
        alt="Background Image"
      />
    </section>
  )
}

export default HomeSection
