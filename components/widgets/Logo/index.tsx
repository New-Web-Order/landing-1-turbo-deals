import React, { FC } from 'react';
import NextImage from 'next/image';
import logo from '@/public/assets/images/Car.svg';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '', ...props }) => (
  <div className={className} {...props}>
    <NextImage
      src={logo}
      alt="Logo"
      // layout="responsive"
      width={100}
      height={100}
    />
  </div>
);

export default Logo;
