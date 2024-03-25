"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Logo from "@/components/widgets/Logo";
import { useRouter } from "next/navigation";
import data from "@/dictionaries/en.json";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full flex justify-center py-9 px-3.5 lg:px-6 2xl:px-0 '>
      <div className='w-full max-w-screen-xl'>
      <div className='flex flex-col w-full'>
        <div className='flex justify-between w-full flex-col lg:flex-row items-center gap-10'>
          <div className='flex flex-col items-center lg:items-start gap-6 max-w-[16.375rem]'>
          <div
                  onClick={() => router.push("/")}
                  className="flex flex-1 cursor-pointer items-center gap-x-1.5"
                >
                  
                  <Logo className="h-[1.406rem] w-[1.406rem]" />
                  <p className="font-bold text-2xl text-[#21201C] ">{data.Footer.logoText}</p>
          </div>
          <div >
                {data.Footer.address.map((address, index) => (
                  <div key={index} className="flex flex-col items-center lg:items-start gap-2">
                    <h1 className='font-bold text-base text-bg-100'>{address.heading}</h1>
                    <p className='font-medium text-sm text-bg-200'>{address.subheading}</p>
                  </div>
                ))}
          </div>
          <div>
                {data.Footer.contact.map((contact, index) => (
                  <div key={index} className='flex flex-col items-center lg:items-start gap-2'>
                  <h1 className='font-bold text-base text-bg-100'>{contact.heading}</h1>
                  <p className='font-medium text-sm text-bg-200'>{contact.subheading}</p>
                
                </div>
                ))}
          </div>

          
          <div className="flex items-center gap-3 text-bg-200">
            {data.Footer.SocialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#0E7490]"
              >
                {link.name === "facebook" && <FaFacebook />}
                {link.name === "instagram" && <FaInstagram />}
                {link.name === "twitter" && <FaXTwitter />}
                {link.name === "linkedin" && <FaLinkedin />}
                {/* {link.name === 'youtube' && <FaYoutube />} */}
              </Link>
            ))}
          </div>
          
          </div>
          <div className='links flex w-full flex-wrap gap-y-8 gap-x-20 justify-center lg:w-fit lg:justify-center'>
              <div className='flex flex-col w-fit gap-3 items-center'>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
              </div>
              <div className='flex flex-col w-fit gap-3 items-center'>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
              </div>
              <div className='flex flex-col w-fit gap-3 items-center'>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
              </div>
              <div className='flex flex-col w-fit gap-3 items-center'>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
                <Link href="/" className='font-semibold text-base text-bg-200'>{data.Footer.linktext}</Link>
              </div>


          </div>

        </div>
        <div></div>
      </div>
      </div>
    </div>
  )
}

export default Footer