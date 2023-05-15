"use client";
import Highlight from "@/components/Highlight/Highlight";
// import Quater1 from "@/components/Quater1/quater1";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/header/cta/CTA";
import Features from "@/components/header/features/Features";
import FirstContainer from "@/components/header/firstcontainer/firstcontainer";
import Header from "@/components/header/header";
import Subitform from "@/components/subitform/Subitform";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <>
        <Header />
        <FirstContainer />
        <Highlight />
        <Features />
        <CTA />
        
        <Subitform />
        <Footer />
        {/* Quater 1 detail */}
        
    </>
  );
}
