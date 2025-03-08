import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { languages } from '../config/languages';
import { useStore } from '../store/useStore';
import { clsx } from 'clsx';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const { setLanguage } = useStore();
  
  const handleLanguageChange = async (code: string) => {
    await i18n.changeLanguage(code);
    setLanguage(code);
    const langConfig = languages.find(lang => lang.code === code);
    document.documentElement.dir = langConfig?.dir || 'ltr';
    document.documentElement.lang = code;
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700">
        <GlobeAltIcon className="h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
        {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-600">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(language.code)}
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {language.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}