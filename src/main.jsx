import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme.js'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "projects",
    element: <Projects />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
