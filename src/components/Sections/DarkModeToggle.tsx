import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-4 right-4 z-50 flex items-center justify-center rounded-full bg-gray-200 p-2 shadow-md 
                 transition-all duration-300 hover:bg-gray-300 dark:bg-darkBlue dark:hover:bg-lightBlue"
    >
      {isDarkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
    </button>
  );
};

export default DarkModeToggle;
