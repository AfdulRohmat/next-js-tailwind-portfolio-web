import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
