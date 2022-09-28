import { createContext } from '@builder.io/qwik';

export const ThemeContext = createContext<{ mode: 'dark' | 'light' }>('theme-context');
