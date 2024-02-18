'use client';

import { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Props {
  imgList: StaticImageData[];
}

export default function useBanner({ imgList }: Props) {
  const [img, setImg] = useState<StaticImageData[]>(imgList);
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
