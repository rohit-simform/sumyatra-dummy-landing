import React from 'react'
import "./Navigation.scss";
import Image from 'next/image';
import { Images } from "../../../ThemeConfig/Images";
import Button from '../Button/Button';

export default function Navigation({handelNavigation}: any) {
  return (
    <section className="navWrapper">
       <div className="container">
        <div className="navbar">
          <div className="navbar__logo"><Image src={Images.logo} alt="Logo Image" /></div>
          <div className="navbar__btn">
            <Button variant="outline" onClick={() => handelNavigation()}>Join Wait-List</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
