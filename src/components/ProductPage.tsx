import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/currency';
import { Product } from '../types';
import { RecommendedProducts } from './RecommendedProducts';
import { useState, useEffect } from 'react';
import { products } from '../config/products';

export default function ProductPage() {
  const { t, i18n } = useTranslation();
  const { currency } = useStore();
  const [formattedPrice, setFormattedPrice] = useState('');
  const [productId,setProductId]= useState(0)
  const mockProduct: Product =products[productId]

  useEffect(() => {
    formatCurrency(mockProduct.price, currency).then((data)=>setFormattedPrice(data));
  }, [currency, mockProduct.price]);
  function updateProductId(id: number) {
    setProductId(id);
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Product Image */}
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          <img
            src={mockProduct.image}
            alt={mockProduct.name[i18n.language]}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {mockProduct.name[i18n.language]}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900 dark:text-white">
              {formattedPrice}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {mockProduct.description[i18n.language]}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <div className="text-base text-gray-700 dark:text-gray-300">
                {t('product.inventory', { count: mockProduct.inventory })}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {t('product.addToCart')}
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          {t('product.recommendedProducts')}
        </h2>
        <RecommendedProducts productId={productId} updateProductId={updateProductId}  />
      </div>
    </div>
  );
}