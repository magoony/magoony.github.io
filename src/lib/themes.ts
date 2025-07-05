export type Theme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    border: string;
    shadow: string;
  };
};

export const themes: Record<string, Theme> = {
  light: {
    name: '라이트',
    colors: {
      primary: '#2563eb', // blue-600
      secondary: '#f3f4f6', // gray-50
      background: '#ffffff',
      surface: '#f9fafb', // gray-50
      text: {
        primary: '#1f2937', // gray-800
        secondary: '#6b7280', // gray-500
        accent: '#2563eb', // blue-600
      },
      border: '#e5e7eb', // gray-200
      shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    },
  },
  dark: {
    name: '다크',
    colors: {
      primary: '#3b82f6', // blue-500
      secondary: '#374151', // gray-700
      background: '#111827', // gray-900
      surface: '#1f2937', // gray-800
      text: {
        primary: '#f9fafb', // gray-50
        secondary: '#d1d5db', // gray-300
        accent: '#60a5fa', // blue-400
      },
      border: '#374151', // gray-700
      shadow: '0 1px 3px 0 rgb(0 0 0 / 0.3)',
    },
  },
};

export type ThemeName = keyof typeof themes;