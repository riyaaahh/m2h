import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import Business from './pages/Business'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="business" element={<Business />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
