import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-full border-t bg-white pb-12 pt-12">
    <div className="w-full container mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
        <Link to="/about" className="uppercase px-3">
          About Us
        </Link>
        <Link to="/policy" className="uppercase px-3">
          Privacy Policy
        </Link>
        <Link to="/terms-condition" className="uppercase px-3">
          Terms & Conditions
        </Link>
        <Link to="/contact-us" className="uppercase px-3">
          Contact Us
        </Link>
      </div>
      <div className="uppercase pb-6">&copy; myblog.com</div>
    </div>
  </footer>
);

export default Footer;
