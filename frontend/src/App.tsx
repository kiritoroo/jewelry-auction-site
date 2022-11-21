import React from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import IndexPage from "@page/IndexPage/IndexPage"
import AdsPage from "@page/AdsPage/AdsPage"
import AdPage from "@page/AdPage/AdPage"
import LoginPage from "@page/LoginPage/LoginPage"
import RegisterPage from "@page/RegisterPage/RegisterPage"

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Router >
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>

            <Route path="/" element={<IndexPage/>}/>
            <Route path="/ad" element={<AdsPage/>}/>
            <Route path="/ad/:adId" element={<AdPage/>}/>
          </Routes>
        </AnimatePresence>
      </Router>
    </QueryClientProvider>
  )
}