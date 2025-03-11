"use client"
import { useEffect } from "react";
import Home from "./home";


const Beranda = () => {
  useEffect(() => {
      document.title = "Romadhon Aji S | Portofolio"
  }, [])
  return (
    <>
      <Home />
      
    </>
  );
}

export default Beranda;