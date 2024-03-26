"use client";
import React from 'react'
import Button from '@/components/widgets/Buttons';
import Image from 'next/image';
import BannerImage from '@/public/assets/images/WelcomeBanner.webp';
import BannerImageTwo from '@/public/assets/images/WelcomeBannerTwo.webp';
import data from '@/dictionaries/en.json';
import "@/styles/globals.css"

const WelcomeBanner = () => {
  return (
    <div className='w-full max-w-screen-xl py-12 lg:py-24 px-3.5 lg:px-6 2xl:px-0'>
        <div className='flex w-full items-center gap-9 lg:gap-20 justify-between flex-col-reverse lg:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-3 lg:gap-6 max-w-[45rem] lg:max-w-[36.5rem]'>
            <h1 className='font-bold text-4xl lg:text-6xl text-bg-100 '>{data.heroSection.heading}</h1>
            <p className='font-medium text-base lg:text-lg text-bg-200'>{data.heroSection.subheading}</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className='flex flex-col w-full lg:w-fit gap-x-1.5 lg:flex-row gap-y-3'
            >
              <Button shape="filled">
                {data.heroSection.buttonText}
              </Button>
              <Button shape="surface">
              Learn more
              </Button>
            </a>
        </div>
        <div className='flex w-full h-[24.75rem] items-center justify-center Banner lg:hidden max-w-[720px] pr-5'>
        <Image src={BannerImageTwo}
        alt='banner image'
        className='sm:max-w-[31.25rem]'
        />
        </div>

        <Image src={BannerImage}
        alt='banner image'
        className='hidden lg:block max-w-[550px] xl:max-w-[650px] 2xl:w-[100%]'
        />

    </div>
    </div>
  )
}

export default WelcomeBanner