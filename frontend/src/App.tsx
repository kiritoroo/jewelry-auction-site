import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextProvider } from "./context/AuthContext";
import { AuthWrapper } from "@comp/AuthWrapper/AuthWrapper";

import IndexPage from "@page/IndexPage/IndexPage";
import AdsPage from "@page/AdsPage/AdsPage";
import AdPage from "@page/AdPage/AdPage";
import AccountPage from "@page/AccountPage/AccountPage";
import RegisterPage from "@page/RegisterPage/RegisterPage";
import CartPage from "@page/CartPage/CartPage";
export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AuthWrapper>
          <Router>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/account" element={<AccountPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/" element={<IndexPage />} />
                <Route path="/ad" element={<AdsPage />} />
                <Route path="/ad/:adId" element={<AdPage />} />

                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </AnimatePresence>
          </Router>
          <ToastContainer style={{ fontSize: 15 }} position="bottom-right" />
        </AuthWrapper>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
