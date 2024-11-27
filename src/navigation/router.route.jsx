import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<h1>Desde el home</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
