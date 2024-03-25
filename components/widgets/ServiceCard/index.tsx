import React from 'react'
import Image from 'next/image';
import CardImage from '@/public/assets/icons/map-marker.svg';


interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,

  }) => {
    return (
        <div className="flex flex-col gap-6 items-center w-full max-w-[32rem] lg:max-w-[22.65rem]">
        <div className='flex items-center justify-center w-16 h-16 shadow-md shadow-[#CECECE] rounded-sm border border-[#F9F9F8 ] bg-bg-1000'>
        <Image src={CardImage} alt="car image" className='h-[6.5rem] w-[4.5]'/>
        </div>
        <div className='flex flex-col gap-3.5 w-full items-center'>
        <h1 className='font-bold text-xl text-bg-100'>{title}</h1>
        <p className='font-normal text-lg text-bg-200 text-center'>{description}</p>
        </div>
        </div>
    );
  };  


export default ServiceCard;