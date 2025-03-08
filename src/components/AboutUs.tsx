import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {t('aboutUs.title')}
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          {t('aboutUs.history')}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t('aboutUs.mission')}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t('aboutUs.values')}
        </p>
      </div>
    </div>
  );
};

export default AboutUs; 