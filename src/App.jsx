import { useDisclosure } from '@chakra-ui/react'
import DrawerComp from './components/Drawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import MyLife from './components/MyLife'
import Skills from './components/Skills'
import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import ProjectsComponent from './components/Projects'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <DrawerComp isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Home />
      {/* <MyLife /> */}
      <Skills />
      <ProjectsComponent />
      <Footer />
    </>
  )
}

export default App
