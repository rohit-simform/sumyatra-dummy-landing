"use client"
import Banner from "./components/Banner/Banner";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Platform from "./components/Platform/Platform";
import React, { useRef } from 'react';
export default function Home() {

const navRef = useRef<HTMLTableElement>();
const handelNavigation = () => {
    navRef.current?.scrollIntoView({behavior : 'smooth'})
}
  return (
    <>
      <Navigation handelNavigation={handelNavigation}/>
      <Banner handelNavigation={handelNavigation}/>
      <Platform handelNavigation={handelNavigation}/>
      <ContactUs navRef={navRef}/>
      <Footer />
    </>
 
  );
}
