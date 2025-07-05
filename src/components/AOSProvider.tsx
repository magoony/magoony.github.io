'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
      once: false,
      easing: 'ease-out-cubic',
      offset: 200,
    });
  }, []);

  return <>{children}</>;
}