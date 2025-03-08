import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import { formatCurrency } from '../utils/currency';
import { Product } from '../types';
import { useState, useEffect } from 'react';
import { products } from '../config/products';

interface RecommendedProductsProps {
  updateProductId: (id: number) => void;
  productId: number;
}

export function RecommendedProducts({updateProductId, productId}: RecommendedProductsProps) {
  const { i18n } = useTranslation();
  const { currency } = useStore();
  const [formattedPrices, setFormattedPrices] = useState<{[key: string]: string}>({});
  const recommendedProducts: Product[] = products.filter( p=>p.id!=productId+1)

  useEffect(() => {
    recommendedProducts.forEach(async (product) => {
      const price = await formatCurrency(product.price, currency);
      setFormattedPrices(prev => ({ ...prev, [product.id]: price }));
    });
  }, [currency]);

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {recommendedProducts.map((product) => (
        <div key={product.id} onClick={()=>updateProductId(+product.id-1)} className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name[i18n.language]}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 dark:text-gray-300">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name[i18n.language]}
                </a>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {formattedPrices[product.id]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}