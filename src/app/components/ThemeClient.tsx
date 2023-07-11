"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import FooterSection from "../components/FooterSection";

const ThemeClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      {children}
      <FooterSection />
    </ThemeProvider>
  );
};

export default ThemeClient;
