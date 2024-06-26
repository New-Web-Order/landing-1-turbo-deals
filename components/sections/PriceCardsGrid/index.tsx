"use client";
import React from 'react';
import PriceCard from '@/components/widgets/PricingCard';
import Button from '@/components/widgets/Buttons';
import data from "@/dictionaries/en.json";
import "@/styles/globals.css";

const PriceCardGrid = () => {
  return (
    <div className='flex flex-col items-center max-w-screen-xl gap-16 py-12 lg:py-16 px-3.5 lg:px-6 2xl:px-0 max-w-screen'>
      <div className='relative flex flex-col w-full'>
        <div className='flex gap-y-6 flex-col items-center w-full pb-20'>
        <p className='font-semibold text-base lg:text-lg text-fg-solid'>{data.priceCardsGrid.heading}</p>
        <h1 className='font-bold text-[1.875rem] text-center lg:text-4xl text-fg-text-contrast'>{data.priceCardsGrid.subheading}</h1>
        </div>
          <div className='absolute bottom-[0] w-full flex gap-1.5 lg:gap-6 overflow-x-auto mt-6 justify-start md:justify-center custom-margin no-scrollbar'>
          {data.priceCardsGrid.buttons.map((button, index) => (
             <Button key={index} shape={index === 0 ? "filled" : "surface"} width={120}>
              {button}
            </Button>
          ))}
          </div>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-6">
        {data.priceCardsGrid.pricingOptions.map((option, index) => (
          <PriceCard
            key={index}
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
