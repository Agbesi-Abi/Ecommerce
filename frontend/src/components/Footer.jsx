import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="w-full  py-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start gap-14 text-sm">
        
        {/* Logo and Description */}
        <div className="flex-1">
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="text-gray-600">
            This is a simple dummy text of printing and typesetting industry. This is a simple dummy text of printing and typesetting industry.
          </p>
        </div>
        
        {/* Company Section */}
        <div className="flex-1">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="flex-1">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+233 242 076 797</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <hr  />
        <p className="py-5 text-sm text-center text-gray-600">
          © 2024 foreveryou.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
