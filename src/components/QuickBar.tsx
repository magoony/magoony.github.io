"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function QuickBar() {
  const { theme } = useTheme();
  const quickActions = [
    { name: "진료예약", href: "#reservation", icon: "📅" },
    { name: "카카오톡 상담", href: "#kakao", icon: "💬" },
  ];

  return (
    <div
      className="py-2"
      style={{
        backgroundColor: `${theme.colors.secondary}DD`, // 85% opacity
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-[4px]">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <span
              className="font-medium"
              style={{ color: theme.colors.text.primary }}
            >
              안녕플란트 치과
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <ThemeSelector /> */}
            <div className="hidden md:flex space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="px-3 py-1 rounded text-xs transition-colors"
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
        </div>
      </div>
    </div>
  );
}
