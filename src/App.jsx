import { useDisclosure } from '@chakra-ui/react'
import './App.css'
import DrawerComp from './components/Drawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import MyLife from './components/MyLife'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <DrawerComp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Home />
      <MyLife />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
