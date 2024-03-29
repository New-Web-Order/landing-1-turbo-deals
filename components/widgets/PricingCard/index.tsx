import React from 'react';
import Button from '@/components/widgets/Buttons';
import CardImage from '@/public/assets/images/cardmage.webp';
import NextImage from 'next/image';

interface Feature {
    text: string;
  }

interface PricingCardProps {
    title: string;
    price: string;
    lowPrice:string;
    highPrice:string;
    buttonText: string;
  }

  const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    lowPrice,
    highPrice,
    buttonText,

  }) => {
    return (
        <div className='flex flex-col p-6 rounded-lg w-fit max-w-[25rem] gap-6 bg-[#F9F9F8]'>
        <NextImage src={CardImage} alt="car image" className='h-[18.75rem] w-full'/>
        <div className='flex flex-col gap-y-5 w-full items-start'></div>
        <p className='text-xl font-bold text-bg-100'>{title}</p>
        <div className='flex w-fit gap-x-4 items-center'>
        <p className='text-lg font-bold text-primary-300'>{price}</p>
        <p className='text-lg font-bold text-bg-100'>{lowPrice}<span className='text-bg-300'>{highPrice}</span></p>
        </div>
        <Button shape="filled" className='w-full'>
        {buttonText}
        </Button>
        </div>
    );
  };


export default PricingCard;