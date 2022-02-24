import { useSession, signOut } from 'next-auth/react'
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
  const { data: session } = useSession()
  console.log(session);
  return (
    <>
      <Navbar session={session} signOut={signOut} />
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
