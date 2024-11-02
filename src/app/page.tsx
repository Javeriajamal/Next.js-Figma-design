'use client'

import Link from "next/link";
import React from 'react'



export default function Home() {
  return (
    <>

        {/* section 1 **/}

    <section className="sec-1">
      <div className="sec1-text">
        <p className=" pro-beyond font-bold text-zinc-400 ml-2 font-inter text-lg">Pro.Beyond.</p>

        <div className="sec1-heading"><span className="font-thin font-inter">IPhone 14</span> Pro</div>

        <p className=" sec1-p text-sm text-gray-400 font-inter">Created to change everything for the better. For everyone</p>

        <div className="button hover:bg-white hover:text-black">
          <p>Shop Now</p>
        </div>

      </div>

      <div className="sec1-img">
        <img src="/images/Iphone Image.png" alt="iphone image" />
      </div>
    </section>

    {/* sec-2 */}

    <div className="sec-2">
      {/* left-section */}
      <div className="left-sec">
        <div className="upper-sec">
        <img src="/images/PlayStation.png" alt="playstation" />
        <div className="upper-text -scroll ml-0 font-sans">
          <h1 className="font-semibold text-6xl tracking-normal" ><span>Playstation</span> 5</h1>
          <p className="text-sm mt-7 text-gray-400 font-inter w-80">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation <br />experience.
          </p>
        </div>
        </div>

        <div className="lower-sec">
        <div className="left-box bg-neutral-200 -mt-4">
          <img src="/images/Headphone.png" alt="headphone" className="w-72 h-64 -ml-32 mt-4"/>
          <div className="leftbox-text font-inter">
            <h2 className="text-4xl font-semibold font-sans leading-snug mt-7 w-10"><span className="font-thin">Apple AirPods</span> Max</h2>
            <p className="text-sm mt-3 text-gray-400 font-inter w-44 leading-relaxed">
              Computational audio. Listen, its powerful
            </p>
          </div>
        </div>
        
        <div className="right-box bg-zinc-800">
          <img src="/images/apple vision.png" alt="apple vision pro" className="rightbox-img h-56 mt-12 -ml-52"/>
          <div className="rightbox-text font-inter">
          <h2 className="text-white text-4xl font-semibold font-sans leading-snug w-44 "><span className=" font-thin">Apple Vision</span> Pro</h2>
          <p className="text-gray-400 mt-3 text-sm w-36 leading-relaxed ">
          An immersive way to experience entertainment
          </p>
          </div>
        </div>
        </div>

      </div>
    
        {/* right-section */}
        <div className="right-sec">
          <div className="mac-text">
            <h1 className="font-bold text-8xl font-inter tracking-wide"> <span className="font-sans font-thin">Macbook</span> Air</h1>
            <p className="mac-p mt-4 text-base w-80 text-gray-400">
              The new 15 inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>
            <div className="button2">
              <p>Shop Now</p>
            </div>
          </div>
          <img src="/images/Macbook pro.png" alt="Macbook"/>
        </div>

    </div>

        {/* section 3 **/}

    <section className="sec-3">
      <div className="sec3-text">
        <h2 className="font-bold text-2xl mt-16 pt-8 ml-96 font-inter">
          Browse By Category
        </h2>
      </div>

        <div className="catergories">
          <div>
          <img src="/images/Category Card (1).png" alt="phone" />
          </div>
          <div>
          <img src="/images/Category Card 2.png" alt="smart watch" />
          </div>
          <div>
          <img src="/images/Category Card (3).png" alt="watch" />
          </div>
          <div>
          <img src="/images/Category Card (4).png" alt="watch" />
          </div>
          <div>
          <img src="/images/Category Card (5).png" alt="watch" />
          </div>
          <div>
          <img src="/images/Category Card (6).png" alt="watch" />
          </div>
        </div>

    </section>

        {/* section 4 **/}


    <section className="sec-4">
      <div className="panel">
        <p className="font-inter font-semibold text-black underline decoration-2">New Arrival</p>
        <p className="font-inter">Bestseller</p>
        <p className="font-inter">Featured Products</p>
      </div>

      <div className="first-4-boxes">
      <div className="box-content" id="box1">
        <img src="/images/Like.png" alt="heart icon" className=" heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer  h-16">
              <img src="/images/Iphone 14.png" alt="iphone image" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
              Apple iPhone 14 Pro Max 128GB Deep Purple
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9"> $900</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="box-content" id="box2">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer  h-16">
              <img src="/images/Camera.png" alt="Camera" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            Blackmagic Pocket Cinema Camera 6k
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$2535</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="box-content" id="box3">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer  h-16">
              <img src="/images/Smartwatch.png" alt="smart watch" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            Apple Watch Series 9 GPS 41mm Starlight Aluminium 
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$399</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="box-content" id="box4">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer  h-16">
              <img src="/images/Headphone.png" alt="smart watch" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            AirPods Max Silver Starlight Aluminium 
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$549</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>
      </div>

      <div className="last-4-boxes">
      <div className="box-content" id="box5">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer h-16">
              <img src="/images/Samsungwatch.png" alt="samsung watch" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            Samsung Galaxy Watch6 Classic 47mm Black
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$369</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="box-content" id="box6">
        <img src="/images/Like.png" alt="heart icon" className=" heart-icon heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer h-16">
              <img src="/images/GalaxyZflip.png" alt="Galaxy Z flip" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            Galaxy Z Fold5 Unlocked | 256GB | Phantom Black
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$1799</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="box-content" id="box7">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer h-16">
              <img src="/images/Earbuds.png" alt="Galaxy ear buds" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            Galaxy Buds FE Graphite
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$99.99</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="box-content" id="box8">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 mb-5 ml-60" />

            <div className="imageContainer h-16">
              <img src="/images/Apple ipad.png" alt="Apple ipad" />
            </div>
            <h1 className="title font-inter font-semibold text-lg text-center mt-32 h-10">
            Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021
            </h1>
            <p className="Price font-inter font-bold  text-2xl  h-2  mt-9">$398</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>
      </div>
    </section>

        {/** section 5 **/}

    <section className="sec-5">
      <div className="first-big-boxes">
        <div className="bigbox-content" id="bigbox-1">
            <div className="sec5-imageContainer ">
              <img src="/images/popular-products.png" alt="Apple items" className="h-5/6 w-full" />
            </div>
            <h1 className="title font-inter font-light text-4xl h-10 -mt-24 ml-7">
              Popular Products 
            </h1>

            <p className="description font-inter -mt-9 text-sm ml-7 text-neutral-400 w-72">iPad combines a magnificent 10.2 inch Retina display, incredible performance, multitasking and ease of use.</p>
            
            <button className="shopnow font-inter mb-6 ml-7"> Shop Now </button>
        </div>

        <div className="bigbox-content bg-neutral-50" id="bigbox-2">
            <div className="sec5-imageContainer ">
              <img src="/images/Ipadpro.png" alt="Ipad Pro" className="h-5/6 w-full" />
            </div>
            <h1 className="title font-inter text-4xl font-light h-10 -mt-5 ml-7">
            Ipad Pro
            </h1>

            <p className="description font-inter text-sm mt-4 ml-7 text-neutral-400 w-72 ">iPad combines a magnificent 10.2 inch Retina display, incredible performance, multitasking and ease of use.</p>
            
            <button className="shopnow font-inter mb-5 ml-7"> Shop Now </button>
        </div>
      </div>

      <div className="second-big-boxes">
        <div className="bigbox-content bg-neutral-200" id="bigbox-3">
            <div className="sec5-imageContainer ">
              <img src="/images/Samsung-galaxy.png" alt="Samsung galaxy" className="slider-img h-5/6 w-full ml-5" />
            </div>
            <h1 className="title font-inter font-light text-4xl h-10 -mt-6 ml-7">
            Samsung Galaxy
            </h1>

            <p className="description font-inter text-sm mt-4 ml-7 text-neutral-400 w-72">iPad combines a magnificent 10.2 inch Retina display, incredible performance, multitasking and ease of use.</p>
            
            <button className="shopnow font-inter mb-5 ml-7"> Shop Now </button>
        </div>

        <div className="bigbox-content bg-stone-900" id="bigbox-4">
            <div className="sec5-imageContainer">
              <img src="/images/Macbook pro.png" alt="Macbook pro" className="slider-img h-full w-full ml-5" />
            </div>
            <h1 className="title font-inter font-light text-white text-4xl h-10 -mt-10 ml-7">
            Macbook Pro
            </h1>

            <p className="description font-inter text-sm mt-5 ml-7 text-neutral-400 w-72">iPad combines a magnificent 10.2 inch Retina display, incredible performance, multitasking and ease of use.</p>
            
            <button className="macbook-shopnow font-inter mb-4 ml-7"> Shop Now </button>
        </div>
      </div>
    </section>

    {/* section 6 **/}

    <section className="sec-6">
      <h2 className="font-inter font-semibold text-2xl mt-28 ml-80 ">Discounts up to -50%</h2>

      <div className="sec6-boxes">

      <div className="sec6-content">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 -mt-2 ml-44" />

            <div className="imageContainer  h-16">
              <img src="/images/Iphone 14 Gold (1).png" alt="iphone image" className="-mt-2" />
            </div>
            <h1 className="title font-inter font-semibold text-base text-center mt-32 h-10">
            Apple iPhone 14 Pro 512GB Gold (MQ233)
            </h1>
            <p className="price font-inter font-semibold  text-2xl  h-2  mt-6">$1437</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="sec6-content">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 -mt-2 ml-44" />

            <div className="imageContainer h-16">
              <img src="/images/Headphone.png" alt="smart watch" />
            </div>
            <h1 className="title font-inter font-semibold text-base text-center mt-32 h-10">
            AirPods Max Silver Starlight Aluminium 
            </h1>
            <p className="Price font-inter font-semibold  text-2xl  h-2  mt-6">$549</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="sec6-content">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 -mt-2 ml-44" />

            <div className="imageContainer  h-16">
              <img src="/images/Smartwatch.png" alt="smart watch" />
            </div>
            <h1 className="title font-inter font-semibold text-base text-center mt-32 h-10">
            Apple Watch Series 9 GPS 41mm Starlight Aluminium 
            </h1>
            <p className="Price font-inter font-semibold  text-2xl  h-2  mt-6">$399</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>

      <div className="sec6-content">
        <img src="/images/Like.png" alt="heart icon" className="heart-icon h-8 w-8 -mt-2 ml-44" />

            <div className="imageContainer h-16">
              <img src="/images/Iphone 14 Gold (2).png" alt="iphone image" />
            </div>
            <h1 className="title font-inter font-semibold text-base text-center mt-32 h-10">
            Apple iPhone 14 Pro 1TB Gold (MQ2V3)
            </h1>
            <p className="Price font-inter font-semibold  text-2xl h-2  mt-6">$1499</p>
            
            <button className="buynow font-inter "> Buy Now </button>
      </div>
      </div>
    </section>

    <section className="sec-7">
      <div className="img-container">
      <img src="/images/sec-7-banner.png" alt="Desktop image" className="desktop-img w-screen absolute "/>

      <img src="/images/Banner 2.png" alt="mobile image" className="mobile-img w-screen absolute"/>

      <h1 className="font-inter text-7xl flex justify-center pt-48 font-thin text-white relative ">Big Summer <span className="font-semibold ml-4"> Sale</span> </h1>
      
      <p className="font-inter text-zinc-500 mt-4 relative flex justify-center">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

      <div className="flex justify-center mt-14">
      <button className="font-inter relative text-white border-2 px-12 py-3 rounded-md hover:bg-white hover:text-black">Shop Now</button>
      </div>
      </div>
    </section>


    </>
  );
}