import { useContext } from 'react';
import { ThemeContext } from './themeContext';

export function useTheme() {
  const context = useContext(ThemeContext);

  // 🛡️ Error Safety Guard: ផ្តល់ដំណឹងភ្លាមៗបើភ្លេច Wrap Provider
  if (!context) {
    throw new Error('useTheme() ត្រូវតែប្រើនៅខាងក្នុង <ThemeProvider> ប៉ុណ្ណោះ!');
  }

  return context;
}