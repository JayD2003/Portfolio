import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/button.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu state
  const [isDark, setIsDark] = useState(false); // Track current theme state

  // Load theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

    document.body.classList.toggle('dark', isDarkMode);
    setIsDark(isDarkMode);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.body.classList.toggle('light', isDark);
    document.body.classList.toggle('dark', !isDark);
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme); // Save the theme in localStorage
  };

  return (
    <>
      <div className="flex w-full justify-between items-center h-16">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-copy-primary">Logo</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex items-center lg:text-base rounded-full bg-main px-5 text-sm font-semibold text-copy-primary ring-1 shadow-lg shadow-mainbr ring-mainbr/20 backdrop-blur-sm dark:bg-main dark:text-copy-primary dark:ring-white/10 border-2 border-mainbr dark:border-mainbr">
            <li>
              <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section: Mobile Menu & Theme Toggle */}
        <div className="flex justify-end gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden group flex items-center rounded-full bg-main px-4 py-2 font-medium text-copy-primary ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-main dark:text-copy-primary dark:ring-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
            <svg
              viewBox="0 0 8 6"
              aria-hidden="true"
              className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
            >
              <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>

          {/* Theme Toggle Button */}
          <button
            className="group rounded-full px-3 py-2"
            onClick={handleThemeToggle}
          >
            {/* Sun Icon (Light Mode) */}
            <svg
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={`h-6 w-6 fill-teal-100 stroke-teal-500 transition group-hover:stroke-teal-700 ${isDark ? 'hidden' : ''}`}
            >
              <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
              <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
            </svg>

            {/* Moon Icon (Dark Mode) */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={`hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:block ${!isDark ? 'dark:hidden' : ''}`}
            >
              <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-main border-t border-mainbr backdrop-blur-sm dark:bg-main dark:border-mainbr">
          <ul className="flex flex-col items-center gap-4 py-4 text-copy-primary dark:text-copy-primary">
            <li>
              <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
