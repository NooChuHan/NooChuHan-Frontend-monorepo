'use client';

import Image from 'next/image';
import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import useBanner from '@/hooks/use-banner';

export default function Banner({
  imgList,
}: {
  imgList: string[];
}): JSX.Element {
  const { resImg, onLeft, onRight } = useBanner({ imgList });

  return (
    <div className="relative flex justify-between items-center w-full h-full">
      <button
        aria-label="Previous"
        className="flex items-center justify-center absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-black"
        onClick={onLeft}
        type="button"
      >
        <MdArrowBack />
      </button>
      <Image alt="banner" height={450} src={resImg} width={1920} />
      <button
        aria-label="Next"
        className="flex items-center justify-center absolute top-1/2 right-10 transform translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-2 rounded-md hover:bg-white hover:bg-opacity-50 hover:text-black"
        onClick={onRight}
        type="button"
      >
        <MdArrowForward />
      </button>
    </div>
  );
}
