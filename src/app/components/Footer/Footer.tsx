import "./Footer.scss";
import Image from 'next/image';
import { Images } from "../../../ThemeConfig/Images";
import CurrentYear from '../CurrentYear/CurrentYear';
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Footer({handelNavigation, handelPlatform}: any) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <footer className="footerWrapper">
      <div className="container">
        <div className="footer">
          <Image src={Images.logo} alt="Footer Logo" />
          <ul className="footerLinks">
            <li>
              <p onClick={() => handelPlatform()}>Overview</p>
            </li>
            <li>
              <p onClick={() => handelNavigation()}>Join Wait-List</p>
            </li>
            <li>
              <p onClick={onOpenModal}>Privacy Policy</p> {/* onClick={() => setShowTost(true)} */}
            </li>
          </ul>
        </div>
        <div className="copyrightText">&#169; {<CurrentYear />} Sumyatra. All rights reserved.</div>
        {/* {showTost && (<div className="tostNotification">Something went wrong  <span className="clostTost" onClick={() => setShowTost(false)}><AiOutlineCloseCircle /></span></div>)} */}
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="customModal">
          <div className="title">
          <h2>Privacy Policy</h2>
          </div>
          <div className="content">
            <div>
              <div>
                <h3>Introduction</h3>
                <p>Welcome to Sumyatra! We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect and use your data when you use our services on www.sumyatra.com (Sumyatra.com). By using our company website Sumyatra.com, you acknowledge that you accept the policies outlined in this Privacy Policy.</p>
              </div>
            </div>
            <p>Information We Collect</p>
            <div>
              <ul>
                  <li>Personal Information:</li>
                  <ul>
                    <li>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide your personal information when:</li>
                    <ul>
                      <li>You sign up for our service or join our waitlist.</li>
                      <li>You send us an email message</li>
                      <li>You sign up for marketing emails</li>
                    </ul>
                  </ul>
                  <li>Usage Data:</li>
                  <ul>
                    <li>We automatically collect data about your interactions with our website, including IP addresses, browser type, device information, and pages visited. </li>
                  </ul>
              </ul>
              <h2>How We Use Your Information</h2>
              <ul>
                <li>Service Provision:</li>
                <ul>
                  <li>We use your personal information to provide our services, fulfill your requests, process transactions, and communicate with you.</li>
                </ul>
                <li>Improvement and Analytics:</li>
                <ul>
                  <li>We analyze usage data to improve our website, enhance user experience, and optimize our services.</li>
                </ul>
                <li>Legal Compliance:</li>
                <ul>
                  <li>We may use or share your data to comply with applicable laws and regulations, to a) comply with legal processes, b) to respond to requests from law enforcements for national security requirements, c) to enforce our terms and conditions, and d) to protect our operations, and IP. 
                  </li>
                </ul>
              </ul>
              <h2>Your Rights </h2>
              <ul>
                <li>Access and Control:</li>
                <ul>
                  <li>You can access, update, or delete your personal information by contacting us.</li>
                  <li>You have the right to opt out of marketing communications.</li>
                </ul>
                <p>You may exercise these rights regarding your personal data by contacting us according to the information in section “Contact Us.”</p>
                <li>Cookies and Tracking Technologies:</li>
                <ul>
                  <li>We use cookies for analytics and site functionality. You can manage cookie preferences in your own browser settings.</li>
                </ul>
              </ul>
             <h3>Changes to this Policy</h3>
             <p>We may update this privacy policy periodically. Any changes will be posted on our website.</p>
             <h3>Contact Us</h3>
             <p>If you have any questions or concerns about our privacy practices, please contact us at support@sumyatra.com</p>
            </div>
          </div>
          <div className="footer"></div>
        </div>
        
      </Modal>
    </footer>
  )
}
