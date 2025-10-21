import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

// Add dark mode class to HTML element on initial load
const root = createRoot(document.getElementById('root'));

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('darkMode');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme !== null ? savedTheme === 'true' : systemPrefersDark;

// Apply theme class immediately to prevent flash of incorrect theme
if (initialTheme) {
  document.documentElement.classList.add('dark');
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.classList.remove('dark');
  document.documentElement.setAttribute('data-theme', 'light');
}

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
