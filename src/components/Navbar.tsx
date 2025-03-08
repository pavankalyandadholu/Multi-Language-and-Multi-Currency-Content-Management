import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CurrencySwitcher } from './CurrencySwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('appName')}
            </h1>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <CurrencySwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar; 