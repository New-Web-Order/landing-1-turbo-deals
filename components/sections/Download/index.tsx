"use client";
import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import data from "@/dictionaries/en.json";
import DownloadImage from "@/public/assets/images/downloadSection.webp";
import AndroidSvg from '@/public/assets/icons/android.svg';
import AppleSvg from '@/public/assets/icons/apple.svg';

const index = () => {
  return (
    <div className='w-full max-w-screen-xl lg:py-16 '>
        <div className=' download flex w-full 2xl:rounded-xl items-center flex-col-reverse gap-11 lg:flex-row justify-between lg:gap-12 py-16 lg:py-0 lg:min-h-[30rem] lg:px-16'>
        <div className='flex flex-1 w-full items-start lg:w-fit gap-4 flex-col px-3.5 lg:max-w-[27rem]'>
            <h1 className='font-bold text-[1.875rem] lg:text-4xl text-bg-1200 text-left'>{data.Download.heading}</h1>
            <p className='font-medium text-base text-bg-1000'>{data.Download.subheading}</p>
            <div className='flex flex-col md:flex-row w-full gap-3 lg:w-fit'>
            <Link href="/">
              <button className='flex w-full cursor-pointer items-center justify-center rounded-md h-11 gap-1.5 bg-bg-1200 px-4 md:w-[8.188rem]'>
              <NextImage src={AndroidSvg}
        alt='android'
              />
              <div className='flex flex-col w-fit items-start'>
                <p className='font-semibold text-[0.563rem] text-bg-300'>GET IT ON</p>
                <p className='font-normal text-[0.72rem] text-black'>Google play</p>
              </div>
              </button>
            </Link>
            <Link href="/">

              <button className='flex w-full cursor-pointer items-center justify-center rounded-md h-11 gap-1.5 bg-bg-1200 px-4 md:w-[8.188rem]'>
              <NextImage src={AppleSvg}
        alt='apple'
               />
                <div className='flex flex-col w-fit items-start'>
                <p className='font-semibold text-[0.563rem] text-bg-300'>GET IT ON</p>
                <p className='font-normal text-[0.72rem] text-black'>Apple Store</p>
              </div>
              </button>
            </Link>

            </div>
        </div>
        <div className='flex w-fit items-center flex-1 '>
        <NextImage src={DownloadImage}
        alt='banner image'
        className=' w-[100%] max-w-[25rem] lg:max-w-[100%]'
        />
        </div>
        </div>
    </div>
  )
}

export default index