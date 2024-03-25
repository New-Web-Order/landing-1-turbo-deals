import React from 'react'
import Image from 'next/image'
import BestDealsImage from "@/public/assets/images/bestDeals.webp";
import BestDealCard from '@/components/widgets/BestDealCard';
import "@/styles/globals.css"
import data from "@/dictionaries/en.json";


const BestDeals = () => {
  return (
    <div className='w-full max-w-screen-xl flex flex-col lg:flex-row py-12 lg:py-16 px-3.5 lg:px-6 2xl:px-0 justify-between gap-20 '>
        <div className='flex flex-1 items-center justify-center w-full'>
        <Image src={BestDealsImage}
        alt='best-deals-car-image'
        className='w-full max-w-[25rem] lg:w-auto lg:max-w-[32rem] xl:max-w-[38.661rem]'
        />
        </div>
        <div className='flex flex-1 flex-col gap-10 items-start w-full lg:max-w-[26.313rem]'>
            <div className='flex flex-col gap-6 w-full items-start'>
                <p className='font-semibold text-base lg:text-lg text-bg-300'>{data.BestDeals.heading}</p>
                <h1 className='font-bold text-[1.875rem]  lg:text-4xl text-bg-100'>{data.BestDeals.subheading}</h1>
            </div>
            <div className='flex flex-col gap-11 w-full'>
            {data.BestDeals.deals.map((deals, index) => (
            <React.Fragment key={index}>
              <BestDealCard
              title={deals.title}
              description={deals.description}
               />
            </React.Fragment>
          ))}
            </div>
        </div>
    </div>
  )
}

export default BestDeals