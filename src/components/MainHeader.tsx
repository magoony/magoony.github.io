'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function MainHeader() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainMenuItems = [
    { name: '병원소개', href: '/about' },
    { name: '왜 안녕플란트인가?', href: '/why' },
    { name: '임플란트', href: '/implant' },
    { name: '치아교정', href: '/orthodontics' },
    { name: '소아치과', href: '/pediatric' },
    { name: '심미치료', href: '/cosmetic' },
    { name: '일반진료', href: '/general' },
    { name: '커뮤니티', href: '/community' },
    { name: '진료안내 & 오시는길', href: '/info' },
  ];

  const quickActions = [
    { name: '진료예약', href: '#reservation', icon: '📅' },
    { name: '카카오톡 상담', href: '#kakao', icon: '💬' },
    { name: '유튜브', href: '#youtube', icon: '📺' },
    { name: '오시는길', href: '#location', icon: '📍' },
  ];

  return (
    <div 
      className="shadow-sm"
      style={{ 
        backgroundColor: theme.colors.background,
        boxShadow: theme.colors.shadow,
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme.colors.primary }}
            >
              <span 
                className="font-bold text-sm"
                style={{ color: theme.colors.background }}
              >
                🦷
              </span>
            </div>
            <span 
              className="text-lg font-bold"
              style={{ color: theme.colors.text.accent }}
            >
              LOGO
            </span>
          </Link>
          
          <nav className="hidden lg:flex space-x-4">
            {mainMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors font-medium text-sm whitespace-nowrap hover:opacity-80"
                style={{ color: theme.colors.text.primary }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: theme.colors.text.primary }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden pb-4 border-t"
            style={{ borderColor: theme.colors.border }}
          >
            <nav className="flex flex-col space-y-2 pt-4">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors py-2 hover:opacity-80"
                  style={{ color: theme.colors.text.primary }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div 
                className="pt-4 border-t mt-4"
                style={{ borderColor: theme.colors.border }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      href={action.href}
                      className="px-3 py-2 rounded text-sm transition-colors text-center"
                      style={{
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.background,
                      }}
                    >
                      {action.icon} {action.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}