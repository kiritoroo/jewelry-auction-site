import React from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import IndexPage from "./pages/IndexPage/IndexPage"
import AdsPage from "./pages/AdsPage/AdsPage"
import AdPage from "@page/AdPage/AdPage"

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
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/ad" element={<AdsPage/>}/>
            <Route path="/ad/:adId" element={<AdPage/>}/>
          </Routes>
        </AnimatePresence>
      </Router>
    </QueryClientProvider>
  )
}