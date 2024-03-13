'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Screen/Home/Header";
import Footer from "./Screen/Home/Footer";
import Content from "./Screen/Home/Content";


export default function Home() {


  return (
   
    <main >
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
