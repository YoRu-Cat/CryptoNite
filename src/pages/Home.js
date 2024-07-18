import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import ParticlesComponent from "../components/Particles";

const Home = () => {
  return (
    <CryptoProvider>
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
      </main>
    </CryptoProvider>
  );
};

export default Home;
