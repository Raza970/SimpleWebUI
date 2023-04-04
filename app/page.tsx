"use client";
import Highlight from "@/components/Highlight/Highlight";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/header/cta/CTA";
import Features from "@/components/header/features/Features";
import FirstContainer from "@/components/header/firstcontainer/firstcontainer";
import Header from "@/components/header/header";
import Subitform from "@/components/subitform/Subitform";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <>
        <Header />
        <FirstContainer />
        <Highlight />
        <Features />
        <CTA />
        
        <Subitform />
        <Footer />
    </>
  );
}
