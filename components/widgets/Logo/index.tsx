import React, { FC } from 'react';
import NextImage from 'next/image';
import logo from '@/public/assets/icons/turbo-deas-logo.svg';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '', ...props }) => (
    <NextImage
      src={logo}
      alt="Logo"
      width={100}
      height={100}
      className='w-9 h-9'
    />
);

export default Logo;
