'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Archivo_Black, Black_And_White_Picture, Red_Rose } from '@next/font/google';
import { blue, blueGrey } from '@mui/material/colors';

export default function Header() {
  return (
    <>
    <div className="header">
      <div className="logo">
        <img src="/images/Logo.png" alt="Logo" />
      </div>

      <ul className="header-buttons">
        <div className="nav-search">

          <Image
            src="/images/Search.png"
            alt="search icon"
            width={24}
            height={24}
            className="absolute mx-3 my-4"
          />
          
          <input type="text"
          placeholder="Search"
          className="search-input bg-neutral-100 text-white" />
            
        </div>
          
        <li>
          <Link href="/" className="text-black font-semibold align-middle">Home</Link>
        </li>
        <li>
          <Link href="#" className="align-middle">About</Link>
        </li>
        <li>
          <Link href="#" className="align-middle">Contact Us</Link>
        </li>
        <li>
          <Link href="#" className="align-middle">Blog</Link>
        </li>
        
        <img src="/images/Icons.png" alt="icons" className="w-32 h-7 mr-40" />          

      </ul>





    </div>

    </>
  );
}