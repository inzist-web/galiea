import Questions from '@/components/Questions'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Services from '@/components/Services'
import Plans from '@/components/Plans'

export const dynamic = 'error'

export default function Home() {
  
  return (
    <>
      <Intro />
      <About />
      <Advantages />
      <Services />
      <Plans />
      <Questions />
    </>
  )
}
