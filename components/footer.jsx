import React from "react";
import Image from "next/image";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-between text-white mt-8">
      <div>©All rights reserved by Casper</div>
      <div className="flex items-center space-x-4">
        <div className="relative h-8 w-8">
          <Image src="/img/facebook.svg" layout="fill" alt="social-icon" />
        </div>
        <div className="relative h-8 w-8">
          <Image src="/img/instagram.svg" layout="fill" alt="social-icon" />
        </div>
        <div className="relative h-8 w-8">
        <a href="https://twitter.com/CasperDeFi_">
          <Image src="/img/twitter.svg" layout="fill" alt="social-icon" />
          </a>
        </div>
        <div className="relative h-8 w-8">
          <Image src="/img/telegram.svg" layout="fill" alt="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
