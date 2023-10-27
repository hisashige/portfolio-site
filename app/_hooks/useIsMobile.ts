import { useState, useEffect } from 'react';

export function useIsMobile(widthThreshold = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= widthThreshold);
    }

    handleResize();

    // ウィンドウのリサイズを検知して、isMobileを更新する
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [widthThreshold]);

  return isMobile;
}
