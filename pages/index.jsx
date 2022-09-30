import { Box } from '@chakra-ui/react'
import Header from '../components/header'
import Introduce from '../components/introduce'
import Technical from '../components/technical'
import Project from '../components/project'

export default function Home() {
  return (
    <Box w='100vw' bg='blackAlpha.500'>
      <Header />
      <Introduce />
      <Technical />
      <Project />
    </Box>
  )
}
