"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ServiceCard from '@/components/widgets/ServiceCard';
import data from "@/dictionaries/en.json";
import ArrowOne from '@/public/assets/icons/arrowOne.svg';
import ArrowTwo from '@/public/assets/icons/arrowTwo.svg';
import columnArrowOne from '@/public/assets/icons/columnArrowOne.svg';
import columnArrowTwo from '@/public/assets/icons/columnArrowTwo.svg';


const BestServices = () => {

  const arrowImages = [ArrowOne, ArrowTwo];
  const columnArrows = [columnArrowOne, columnArrowTwo];

  const [currentArrows, setCurrentArrows] = useState(arrowImages);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCurrentArrows(columnArrows);
      } else {
        setCurrentArrows(arrowImages);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div className='w-full max-w-screen-xl py-12 lg:py-16 px-3.5 lg:px-6 2xl:px-0'>
      <div className='flex flex-col items-space gap-9 lg:gap-16'>
        <div className='flex flex-col gap-3 lg:gap-4 w-full items-center'>
          <p className='font-semibold text-base lg:text-lg text-bg-300'>{data.BestServices.heading}</p>
          <h1 className='font-bold text-[1.875rem] text-center lg:text-4xl text-bg-100'>{data.BestServices.subheading}</h1>
        </div>
        <div className='w-full flex flex-col items-center lg:justify-between lg:flex-row gap-y-12 '>
        {data.BestServices.services.map((services, index) => (
            <React.Fragment key={index}>
                <ServiceCard
              title={services.title}
              description={services.description}
               />
              {index < arrowImages.length && (
                  <Image
                  src={currentArrows[index]}
                   alt="right arrow" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestServices