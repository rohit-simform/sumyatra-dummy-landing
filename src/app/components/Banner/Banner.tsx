"use client"
import { useEffect, useRef, useState } from 'react';
import "./Banner.scss";
import Image from 'next/image';
import { Images } from "../../../ThemeConfig/Images";
import { AiOutlineArrowUp } from "react-icons/ai";
import Button from '../Button/Button';
import GoTop from '../GoTop/GoTop';

export default function Banner({handelNavigation}: any) {
  const topRef= useRef<HTMLTableElement>(null);
  return (
    <>
    <section className="bannerWrapper" ref={topRef}>
      <Image src={Images.dotsbg} alt="patentOne"  className="patentOne"/>
      <Image src={Images.bgright} alt="patentTwo" className="patentTwo"/>
      <Image src={Images.bgbottom} alt="patentThree" className="patentThree"/>
      <div className="banner">
        <div className="titleWraper">
          <h2 className="title">Simplify your Path to</h2>
          <h2 className="title">Partner <span className="textBorder">Success.</span></h2>
        </div>
        <p className="subTitle">Empower your partner business to convert every strategy and action into meaningful results.</p>
        <Button onClick={() => handelNavigation()}>Join Wait-List</Button>
      </div>
    </section>
    <GoTop scrollRef={topRef} />
    </>
  )
}
