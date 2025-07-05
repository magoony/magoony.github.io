'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { ThemeName } from '@/lib/themes';

export default function ThemeSelector() {
  const { themeName, setTheme, availableThemes } = useTheme();

  return (
    <select
      value={themeName}
      onChange={(e) => setTheme(e.target.value as ThemeName)}
      className="text-sm px-2 py-1 rounded border"
      style={{
        backgroundColor: availableThemes[themeName].colors.surface,
        color: availableThemes[themeName].colors.text.primary,
        borderColor: availableThemes[themeName].colors.border,
      }}
    >
      {Object.entries(availableThemes).map(([key, theme]) => (
        <option key={key} value={key}>
          🎨 {theme.name}
        </option>
      ))}
    </select>
  );
}