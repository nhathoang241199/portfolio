import { Box } from '@chakra-ui/react'
import Header from '../components/header'
import Introduce from '../components/introduce'
import Technical from '../components/technical'
import Project from '../components/project'
import About from '../components/about'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Box scrollBehavior='smooth' w='100vw' bg='blackAlpha.500'>
      <Header />
      <Introduce />
      <Technical />
      <Project />
      <About />
      <Footer />
    </Box>
  )
}
