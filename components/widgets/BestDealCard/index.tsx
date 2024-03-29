import React from 'react'
import NextImage from 'next/image';
import CardImage from '@/public/assets/icons/map-marker.svg';


interface BestDealCardProps {
    title: string;
    description: string;
}

const BestDealCard: React.FC<BestDealCardProps> = ({
    title,
    description,

  }) => {
    return (
        <div className="flex gap-6 items-start sm:items-center lg:items-start ">
        <div className='flex items-center justify-center min-w-16 w-16 h-16 shadow-md shadow-[#CECECE] rounded-sm border border-[#F9F9F8 ] bg-bg-1000'>
        <NextImage src={CardImage} alt="car image" className='h-[6.5rem] w-[4.5]'/>
        </div>
        <div className='flex flex-col gap-3.5 w-full items-start lg:max-w-[17.315rem]'>
        <h1 className='font-bold text-sm sm:text-base lg:text-xl text-bg-100'>{title}</h1>
        <p className='font-normal text-xs sm:text-sm lg:text-lg text-bg-200'>{description}</p>
        </div>
        </div>
    );
  };  


export default BestDealCard;