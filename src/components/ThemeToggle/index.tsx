import React, { useState, useEffect } from 'react';
import './index.css';

export const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        document.body.className = isDark ? 'dark-theme' : 'light-theme';
    }, [isDark]);

    const toggleTheme = (): void => {
        setIsDark(prev => !prev);
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? '☀️  Mode' : '🌙  Mode'}
        </button>
    );
};