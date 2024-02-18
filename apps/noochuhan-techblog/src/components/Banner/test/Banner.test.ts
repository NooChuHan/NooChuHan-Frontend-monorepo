import { expect, it, describe } from '@jest/globals';
import { StaticImageData } from 'next/image';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';
import useBanner from '@hooks/useBanner';
import Banner1 from '@data/images/banner/Banner1.png';
import Banner2 from '@data/images/banner/Banner2.png';
import Banner3 from '@data/images/banner/Banner3.png';

describe('useBanner hook test', () => {
  const DUMMYIMAGELIST: StaticImageData[] = [Banner1, Banner2, Banner3];
  const lastIdx = DUMMYIMAGELIST.length - 1;
  it('Banner의 왼쪽 버튼을 누르면 index값이 -1 됩니다', () => {
    const hook = renderHook(() => useBanner({ imgList: DUMMYIMAGELIST }));
    // given
    act(() => {
      hook.result.current.setIndex(2);
    });

    // when
    act(() => {
      hook.result.current.onLeft();
    });

    // then
    expect(hook.result.current.index).toBe(1);
    expect(hook.result.current.resImg).toBe(DUMMYIMAGELIST[1]);
  });

  it('Banner의 오른쪽 버튼을 누르면 index값이 +1 됩니다', () => {
    const hook = renderHook(() => useBanner({ imgList: DUMMYIMAGELIST }));
    act(() => {
      hook.result.current.setIndex(1);
    });

    // when
    act(() => {
      hook.result.current.onRight();
    });

    // then
    expect(hook.result.current.index).toBe(2);
  });

  it('Banner의 state값이 0일 때 왼쪽 버튼을 누르면 state값이 마지막 값이 됩니다', () => {
    const hook = renderHook(() => useBanner({ imgList: DUMMYIMAGELIST }));
    act(() => {
      hook.result.current.setIndex(0);
    });

    // when
    act(() => {
      hook.result.current.onLeft();
    });

    // then
    expect(hook.result.current.index).toBe(lastIdx);
    expect(hook.result.current.resImg).toBe(DUMMYIMAGELIST[lastIdx]);
  });

  it('Banner의 state값이 마지막 값일 때 오른쪽 버튼을 누르면 state값이 0이 됩니다', () => {
    const hook = renderHook(() => useBanner({ imgList: DUMMYIMAGELIST }));
    act(() => {
      hook.result.current.setIndex(lastIdx);
    });

    // when
    act(() => {
      hook.result.current.onRight();
    });

    // then
    expect(hook.result.current.index).toBe(0);
  });
});
