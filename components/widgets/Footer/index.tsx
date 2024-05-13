"use client";
import React from 'react';
import Link from 'next/link';
import Logo from "@/components/widgets/Logo";
import { useRouter } from "next/navigation";
import data from "@/dictionaries/en.json";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NexthemeToggle from '@/components/widgets/next-theme-toggle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
};

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full flex justify-center py-9 px-3.5 lg:px-6 2xl:px-0 border-t border-fg-border '>
      <div className='w-full max-w-screen-xl'>
      <div className='flex flex-col w-full gap-6'>
        <div className='flex justify-between w-full flex-col lg:flex-row items-center gap-10'>
          <div className='flex flex-col items-center lg:items-start gap-6 max-w-[16.375rem]'>
          <div
                  onClick={() => router.push("/")}
                  className="flex flex-1 cursor-pointer items-center gap-x-1.5"
                >
                  
                  <Logo className="h-[1.406rem] w-[1.406rem]" />
                  <p className="font-bold text-2xl text-fg-text-contrast ">{data.Footer.logoText}</p>
          </div>
          <div >
                {data.Footer.address.map((address, index) => (
                  <div key={index} className="flex flex-col items-center lg:items-start gap-2">
                    <h1 className='font-bold text-base text-fg-text-contrast'>{address.heading}</h1>
                    <p className='font-medium text-sm text-fg-text hover:text-fg-text-contrast cursor-pointer'>{address.subheading}</p>
                  </div>
                ))}
          </div>
          <div>
                {data.Footer.contact.map((contact, index) => (
                  <div key={index} className='flex flex-col items-center lg:items-start gap-2'>
                  <h1 className='font-bold text-base text-fg-text-contrast'>{contact.heading}</h1>
                  <p className='font-medium text-sm text-fg-text cursor-pointer hover:text-fg-text-contrast'>{contact.subheading}</p>
                
                </div>
                ))}
          </div>

          
          <div className="flex items-center gap-3 text-fg-text">
            {data.Footer.SocialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-fg-text hover:text-primary-300"
              >
                {link.name === "facebook" && <FaFacebook />}
                {link.name === "instagram" && <FaInstagram />}
                {link.name === "twitter" && <FaXTwitter />}
                {link.name === "linkedin" && <FaLinkedin />}
                {link.name === 'youtube' && <FaYoutube />}
              </Link>
            ))}
          </div>
          
          </div>
          <div className='links grid grid-cols-2 md:grid-cols-4 gap-20 justify-center lg:w-fit lg:justify-center'>
  {data.Footer.links.map((link, index) => (
    <div key={index} className='flex flex-col items-center'>
      <Link href={link.href} className='font-semibold text-base text-fg-text hover:text-fg-text-contrast'>{link.text}</Link>
      <Link href={link.href} className='font-semibold text-base text-fg-text hover:text-fg-text-contrast'>{link.text}</Link>
      <Link href={link.href} className='font-semibold text-base text-fg-text hover:text-fg-text-contrast'>{link.text}</Link>
      <Link href={link.href} className='font-semibold text-base text-fg-text hover:text-fg-text-contrast'>{link.text}</Link>
      <Link href={link.href} className='font-semibold text-base text-fg-text hover:text-fg-text-contrast'>{link.text}</Link>
    </div>
  ))}
</div>

        </div>
        <div className='flex flex-col items-center w-full border-t border-fg-border lg:justify-between py-3 lg:flex-row gap-3 '>
              <p className='font-normal text-sm text-bg-200 hover:text-fg-text-contrast cursor-pointer'>{data.Footer.rights}</p>
              <div className='flex gap-6'>
              <p className='font-normal text-sm text-bg-200 hover:text-fg-text-contrast cursor-pointer'>{data.Footer.privacy}</p>
              <p className='font-normal text-sm text-bg-200 hover:text-fg-text-contrast cursor-pointer'>{data.Footer.terms}</p>
              </div>
      <NexthemeToggle/>

        </div>
      </div>

      
      </div>
    </div>
  )
}

export default Footer