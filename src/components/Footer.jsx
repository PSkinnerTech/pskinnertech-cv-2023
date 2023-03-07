import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { footerLinks } from '../constants';
import { logo, menu, close, linkedin, twitter, github } from '../assets';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-color-footer section__padding">
      <div className="my-8 w-full text-center mb-6">
        <h1 className="text-4x1 font-bold">Check Out My Blog</h1>
      </div>
      <a href="https://blog.patrickskinner.tech" target="_blank">
        <div className="flex justify-center items-center p-4 border border-white text-center mb-6 cursor-pointer">
          BLOG
        </div>
      </a>
      <div className="flex justify-center items-center mb-8">
        <a
          href="https://twitter.com/PSkinnerTech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" className="h-8 w-8 mx-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/patrickaskinner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="h-8 w-8 mx-2" />
        </a>
        <a
          href="https://github.com/pskinnertech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="h-8 w-8 mx-2" />
        </a>
      </div>
    </div>
  );
};
<script
  src="https://kit.fontawesome.com/e7d1f38974.js"
  crossorigin="anonymous"
></script>;
export default Footer;
