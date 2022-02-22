import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Newsletter from '../components/Newsletter'
import Parallax from '../components/Parallax'
import Teams from '../components/teams'
import VideoSection from '../components/videoSection'


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Parallax />
      <Newsletter />
      <VideoSection />
      <Teams />
      <Contact />
      <Footer />
    </>
  )
}
