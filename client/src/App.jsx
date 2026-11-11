import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Lecturers } from './pages/Lecturers'
import { LecturerDetail } from './pages/LecturerDetail'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Booking } from './pages/Booking'
import { Checkout } from './pages/Checkout'
import { ThankYou } from './pages/ThankYou'
import { NotFound } from './pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timeout = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => window.clearTimeout(timeout)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lektori" element={<Lecturers />} />
          <Route path="lektori/:slug" element={<LecturerDetail />} />
          <Route path="registrace" element={<Register />} />
          <Route path="prihlaseni" element={<Login />} />
          <Route path="objednavka/:slug" element={<Booking />} />
          <Route path="pokladna/:slug" element={<Checkout />} />
          <Route path="dekujeme" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
