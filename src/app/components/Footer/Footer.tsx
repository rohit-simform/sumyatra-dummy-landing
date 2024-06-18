import "./Footer.scss";
import Image from 'next/image';
import { Images } from "../../../ThemeConfig/Images";
import Link from 'next/link';
import CurrentYear from '../CurrentYear/CurrentYear';

export default function Footer({handelNavigation}) {

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
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>
        <div className="copyrightText">&#169; {<CurrentYear />} Sumyatra. All rights reserved.</div>
      </div>
    </footer>
  )
}
