'use client';

import Image from 'next/image';
import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import useBanner from '@hooks/useBanner';
import Banner1 from '@data/images/banner/Banner1.png';
import Banner2 from '@data/images/banner/Banner2.png';
import Banner3 from '@data/images/banner/Banner3.png';

const DUMMYIMAGELIST = [Banner1, Banner2, Banner3];

export default function Banner() {
  const { resImg, onLeft, onRight } = useBanner({ imgList: DUMMYIMAGELIST });

  return (
    <div className="relative flex justify-between items-center w-full h-full">
      <button
        className="flex items-center justify-center absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-black"
        type="button"
        onClick={onLeft}
        aria-label="Previous"
      >
        <MdArrowBack />
      </button>
      <Image src={resImg || ''} alt="banner" width={1920} height={450} />
      <button
        className="flex items-center justify-center absolute top-1/2 right-10 transform translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-black"
        type="button"
        onClick={onRight}
        aria-label="Next"
      >
        <MdArrowForward />
      </button>
    </div>
  );
}
