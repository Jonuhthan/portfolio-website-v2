import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export const metadata = {
  link: "/favicon.ico",
  title: "Jonathan Lam",
  description: "My personal portfolio page!",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
