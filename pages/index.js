import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Newsletter from '../components/Newsletter'


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  )
}
