"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function GoTop({scrollRef}: any) {
   //Go To Top
   const [goToTopArrow, setGoToTopArrow] = useState(false);
   const scrollTopFunction = () => {
    console.log('Testing');
       if (
       document.body.scrollTop > 50 ||
       document.documentElement.scrollTop > 50
       ) {
        console.log('Hello')
       setGoToTopArrow(true);
       } else {
       setGoToTopArrow(false);
       }
   };

   console.log(goToTopArrow);
   useEffect(() => {
       window.onscroll = () => scrollTopFunction();
   }, []);

   const handelGoToTop = () => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    goToTopArrow?
      <button
          className="scrollTop"
          onClick={() => handelGoToTop()}
        ><AiOutlineArrowUp />
      </button>:null    
  )
}
