import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatPhoneNumber } from '../utils/formatters';

const ContactInfo: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {t('contact.title')}
      </h2>
      <div className="space-y-6">
        {/* Phone Section */}
        <div className="space-y-2">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="ml-2 text-gray-900 dark:text-white font-medium">
              {t('contact.phone')}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 pl-7">
            {formatPhoneNumber(t('contact.phoneNumber'), i18n.language)}
          </p>
        </div>

        {/* Email Section */}
        <div className="space-y-2">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="ml-2 text-gray-900 dark:text-white font-medium">
              {t('contact.email')}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 pl-7">
            {t('contact.emailAddress')}
          </p>
        </div>

        {/* Address Section */}
        <div className="space-y-2">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-gray-900 dark:text-white font-medium">
              {t('contact.address')}
            </span>
          </div>
          <div className="text-gray-600 dark:text-gray-300 space-y-1 pl-7">
            <p>{t('contact.streetAddress')}</p>
            <p>{t('contact.cityStateZip')}</p>
            <p>{t('contact.country')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 