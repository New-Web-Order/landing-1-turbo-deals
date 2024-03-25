"use client";
import React from 'react';
import PriceCard from '@/components/widgets/PricingCard';
import Button from '@/components/widgets/Buttons';
import data from "@/dictionaries/en.json";

const PriceCardGrid = () => {
  return (
    <div className='flex flex-col items-center max-w-screen-xl gap-16 py-12 lg:py-16 px-3.5 lg:px-6 2xl:px-0 max-w-screen bg-blue-500'>
      <div className='flex flex-col items-center gap-6 '>
        <p className='font-semibold text-base lg:text-lg text-bg-300'>{data.priceCardsGrid.heading}</p>
        <h1 className='font-bold text-[1.875rem] text-center lg:text-4xl text-bg-100'>{data.priceCardsGrid.subheading}</h1>
          <div className='flex gap-1.5 lg:gap-6 max-w-screen bg-red-500'>
            <Button shape="filled" width={120}>
              Honda
            </Button>
            <Button shape="surface" width={120}>
              Toyota 
            </Button>
            <Button shape="surface" width={120}>
              Vego
            </Button>
            <Button shape="surface" width={120}>
              KIA
            </Button>
            <Button shape="surface" width={120}>
              BMW
            </Button>
            <Button shape="surface" width={120}>
              Mercedes 
            </Button>
          </div>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-6">
        {data.priceCardsGrid.pricingOptions.map((option, index) => (
          <PriceCard
            key={option.title}
            title={option.title}
            price={option.price} 
            lowPrice={option.lowPrice} 
            highPrice={option.highPrice} 
            buttonText={option.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default PriceCardGrid;
