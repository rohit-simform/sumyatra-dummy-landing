import "./Footer.scss";
import Image from 'next/image';
import { Images } from "../../../ThemeConfig/Images";
import Link from 'next/link';
import CurrentYear from '../CurrentYear/CurrentYear';

export default function Footer() {

  return (
    <footer className="footerWrapper">
      <div className="container">
        <div className="footer">
          <Image src={Images.logo} alt="Footer Logo" />
          <ul className="footerLinks">
            <li>
              <Link href="">Overview</Link>
            </li>
            <li>
              <Link href="">Join Wait-List</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="copyrightText">&#169; {<CurrentYear />} Sumyatra. All rights reserved.</div>
      </div>
    </footer>
  )
}
