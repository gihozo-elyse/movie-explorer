import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('darkMode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      console.log('Theme initialization:', { savedTheme, systemPrefersDark });
      
      // If we have a saved preference, use it, otherwise use system preference
      const initialTheme = savedTheme !== null ? savedTheme === 'true' : systemPrefersDark;
      
      console.log('Setting initial theme:', initialTheme);
      setDarkMode(initialTheme);
      
      // Apply the theme immediately
      if (initialTheme) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
      
      setIsMounted(true);
      
      // Add listener for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        console.log('System theme changed:', e.matches);
        if (!localStorage.getItem('darkMode')) {
          setDarkMode(e.matches);
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (error) {
      console.error('Error initializing theme:', error);
    }
  }, []);

  // Update the theme when darkMode changes
  useEffect(() => {
    if (!isMounted) return;
    
    console.log('Theme changed:', darkMode ? 'dark' : 'light');
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    try {
      localStorage.setItem('darkMode', darkMode);
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
