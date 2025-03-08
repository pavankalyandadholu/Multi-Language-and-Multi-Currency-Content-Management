import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useStore } from '../store/useStore';

export function ThemeSwitcher() {
  const { theme, setTheme } = useStore();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {theme === 'light' ? (
        <SunIcon className="h-5 w-5 text-gray-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-400" />
      )}
    </button>
  );
}