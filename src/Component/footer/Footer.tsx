import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
const Footer = () => {
  return (
    <footer className="footer bg-slate-950 text-white text-base-content p-10">
      <aside>
        <p className="text-2xl font-bold">
          Dream Sports
          <br />
          <img className="w-20" src={logo} alt="" />
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Sport Facility</a>
        <a className="link link-hover">Sport Trainer</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/contact-us" className="link link-hover">
          Contact Us
        </Link>
        <Link to="/about-us" className="link link-hover">
          About Us
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social Platform</h6>
        <a className="link link-hover">Facbook</a>
        <a className="link link-hover">Instagram</a>
      </nav>
    </footer>
  );
};

export default Footer;
