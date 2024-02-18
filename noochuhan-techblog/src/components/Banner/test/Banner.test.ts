import { expect, it, describe, beforeEach } from '@jest/globals';
import useBanner from '../../../hooks/useBanner';

describe('useBanner hook test', () => {
  const imgList = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  const { setImg, setIndex, onLeft, onRight, index, resImg } = useBanner();

  beforeEach(() => {
    setImg(imgList);
  });

  it('Banner의 왼쪽 버튼을 누르면 index값이 -1 됩니다', () => {
    // given
    setIndex(1);

    // when
    onLeft();

    // then
    expect(index).toBe(0);
    expect(resImg).toBe(imgList[0]);
  });

  it('Banner의 오른쪽 버튼을 누르면 index값이 +1 됩니다', () => {
    // given
    setIndex(1);

    // when
    onRight();

    // then
    expect(index).toBe(2);
  });

  it('Banner의 state값이 0일 때 왼쪽 버튼을 누르면 state값이 마지막 값이 됩니다', () => {
    // given
    setIndex(0);

    // when
    onLeft();

    // then
    const lastIdx = imgList.length - 1;
    expect(index).toBe(lastIdx);
    expect(resImg).toBe(imgList[lastIdx]);
  });

  it('Banner의 state값이 마지막 값일 때 오른쪽 버튼을 누르면 state값이 0이 됩니다', () => {
    // given
    setIndex(imgList.length - 1);

    // when
    onRight();

    // then
    expect(index).toBe(0);
  });
});
