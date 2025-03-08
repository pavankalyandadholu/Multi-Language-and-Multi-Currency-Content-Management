import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../utils/currency';
import { useStore } from '../store/useStore';

interface PromotionalBannerProps {
  bgColor?: string;
  price?: number;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ 
  bgColor = 'bg-gradient-to-r from-blue-500 to-indigo-600',
  price = 99.99
}) => {
  const { t } = useTranslation();
  const [formattedPrice, setFormattedPrice] = useState('');
  const { currency } = useStore();

  useEffect(() => {
    formatCurrency(price, currency).then((data)=>setFormattedPrice(data));
  }, [currency]);

  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className={`${bgColor} h-full relative p-6`}>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            {t('promotions.title')}
          </h2>
          <h3 className="text-lg text-white/90 mb-4">
            {t('promotions.subtitle')}
          </h3>
          <p className="text-white/80 mb-6 text-sm">
            {t('promotions.description')}
          </p>
          <div className="space-y-4">
            <div className="text-xl font-bold text-white flex items-center gap-2">
              <span>{t('promotions.specialOffer')}</span>
              <span className="text-yellow-300">{formattedPrice}</span>
            </div>
            <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-sm">
              {t('promotions.ctaButton')}
            </button>
          </div>
        </div>
        {/* Decorative diagonal lines */}
        <div className="absolute top-0 right-0 w-32 h-full transform rotate-12 translate-x-16 bg-white/10" />
        <div className="absolute top-0 right-0 w-16 h-full transform rotate-12 translate-x-24 bg-white/5" />
      </div>
    </div>
  );
};

export default PromotionalBanner; 