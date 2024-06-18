import "./Footer.scss";
import Image from 'next/image';
import { Images } from "../../../ThemeConfig/Images";
import CurrentYear from '../CurrentYear/CurrentYear';
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Footer({handelNavigation}: any) {
  const[showTost, setShowTost] = useState(false)
  return (
    <footer className="footerWrapper">
      <div className="container">
        <div className="footer">
          <Image src={Images.logo} alt="Footer Logo" />
          <ul className="footerLinks">
            <li>
              <p>Overview</p>
            </li>
            <li>
              <p onClick={() => handelNavigation()}>Join Wait-List</p>
            </li>
            <li>
              <p>Privacy Policy</p> {/* onClick={() => setShowTost(true)} */}
            </li>
          </ul>
        </div>
        <div className="copyrightText">&#169; {<CurrentYear />} Sumyatra. All rights reserved.</div>
        {/* {showTost && (<div className="tostNotification">Something went wrong  <span className="clostTost" onClick={() => setShowTost(false)}><AiOutlineCloseCircle /></span></div>)} */}
      </div>
     
    </footer>
  )
}
