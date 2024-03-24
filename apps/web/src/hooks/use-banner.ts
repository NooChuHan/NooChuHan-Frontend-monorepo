'use client';

import { useState } from 'react';

interface BannerProps {
  imgList: string[];
}

export default function useBanner({ imgList }: BannerProps): {
  setImg: (img: string[]) => void;
  setIndex: (index: number) => void;
  onLeft: () => void;
  onRight: () => void;
  index: number;
  resImg: string;
} {
  const [img, setImg] = useState<string[]>(imgList);
  const [index, setIndex] = useState(0);

  const onLeft = () => {
    if (index === 0) {
      setIndex(img.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onRight = () => {
    if (index === img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return {
    setImg,
    setIndex,
    onLeft,
    onRight,
    index,
    resImg: img[index],
  };
}
