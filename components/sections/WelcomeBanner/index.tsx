"use client";
import React from 'react'
import Button from '@/components/widgets/Buttons';
import Image from 'next/image';
import BannerImage from '@/public/assets/images/welcomeBanner.webp';
import data from '@/dictionaries/en.json';
import "@/styles/globals.css"

const WelcomeBanner = () => {
  return (
    <div className='w-full max-w-screen-xl py-12 lg:py-24 px-3.5 lg:px-6 2xl:px-0'>
        <div className='flex w-full items-center gap-9 lg:gap-20 justify-between flex-col-reverse lg:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-3 lg:gap-6 max-w-[45rem] lg:max-w-[584px]'>
            <h1 className='font-bold text-4xl lg:text-6xl text-bg-100 '>{data.heroSection.heading}</h1>
            <p className='font-medium text-base lg:text-lg text-bg-200'>{data.heroSection.subheading}</p>
            <a
              href="/"
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

        <div className='Banner flex flex-1 w-full max-w-[45rem] lg:max-w-[30.5rem] xl:max-w-[38.5rem] min-h-[396px] h-[38rem] items-center lg:items-end justify-center lg:justify-end'>
        <Image src={BannerImage}
        alt='banner image'
        className=' w-full max-w-[25rem] lg:w-auto lg:max-w-[32rem] xl:max-w-[50rem] lg:pb-8 xl:pb-5'
        />
        </div>
    </div>
    </div>
  )
}

export default WelcomeBanner