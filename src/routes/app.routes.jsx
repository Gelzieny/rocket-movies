import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Datails } from '@/pages/Datails'
import { Profile } from '@/pages/Profile'
// import { NewMovie } from '@/pages/NewMovie'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<Datails />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/create" element={<NewMovie />} /> */}
      {/* <Route path="/change/:id" element={<NewMovie />} /> */}
    </Routes>
  )
}
