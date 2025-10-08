import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <Link to="/about">About us</Link>
      <Link to="/contact">Connect with us</Link>
      <a href="https://www.facebook.com/ChitkaraU/">
        <FaFacebook />
      </a>
      <a href="https://x.com/ChitkaraU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/chitkarau/?hl=en">
        <FaInstagram />
      </a>
    </div>
  );
}
export default Footer;
