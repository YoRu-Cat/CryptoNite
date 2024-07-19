import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import ParticlesComponent from "../components/Particles";
import Footer from "../components/Footer";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <ParticlesComponent id="particles" />
          <main
            className="w-full h-full  flex flex-col first-letter:
    content-center items-center relative text-white font-nunito scrollbar-none
    "
          >
            <div className="w-screen h-screen bg-gray-300 fixed -z-20" />
            <Logo />
            <Navigation />
            <Outlet />
            <Footer />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
