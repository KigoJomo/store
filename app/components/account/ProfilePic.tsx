'use client';

import { Squircle } from 'corner-smoothing';
import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {
  src: string;
  alt: string;
  radius?: number;
  className?: string;
  border?: boolean;
}

const ProfilePic: FC<ProfilePicProps> = ({
  src,
  alt,
  radius = 20,
  className,
  border = true,
}) => {
  const MD_WIDTH = 256;
  const SM_WIDTH = 64;
  const BORDER_WIDTH = 6;

  return (
    <>
      <div className="hidden md:flex items-center justify-center relative">
        <Squircle
          cornerRadius={radius}
          className={`shrink-0 z-[2] ${className}`}>
          <Image
            src={src}
            alt={alt}
            width={MD_WIDTH - BORDER_WIDTH}
            height={MD_WIDTH - BORDER_WIDTH}
            className={``}
          />
        </Squircle>

        {border && (
          <Squircle cornerRadius={radius*1.05} className="absolute z-[1]">
            <div
              className={`aspect-square bg-background-light`}
              style={{ width: MD_WIDTH }}></div>
          </Squircle>
        )}
      </div>

      {/* --------- MOBILE --------- */}

      <div className="flex md:hidden items-center justify-center relative">
        <Squircle
          cornerRadius={radius/3.2}
          className={`shrink-0 z-[2] ${className}`}>
          <Image
            src={src}
            alt={alt}
            width={SM_WIDTH - BORDER_WIDTH}
            height={SM_WIDTH - BORDER_WIDTH}
            className={``}
          />
        </Squircle>

        {border && (
          <Squircle cornerRadius={radius/3.01} className="absolute z-[1]">
            <div
              className={`aspect-square bg-background-light`}
              style={{ width: SM_WIDTH }}></div>
          </Squircle>
        )}
      </div>
    </>
  );
};

export default ProfilePic;
