import { useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { CurrencySwitcher } from './components/CurrencySwitcher';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useStore } from './store/useStore';

// Lazy load components
const ProductPage = lazy(() => import('./components/ProductPage'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const ContactInfo = lazy(() => import('./components/ContactInfo'));
const PromotionalBanner = lazy(() => import('./components/PromotionalBanner'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

function App() {
  const { theme } = useStore();
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<LoadingFallback />}>
          <ProductPage />
          
          {/* Company Information Section */}
          <section className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Suspense fallback={<LoadingFallback />}>
                  <AboutUs />
                </Suspense>
              </div>
              <div className="lg:col-span-1">
                <Suspense fallback={<LoadingFallback />}>
                  <ContactInfo />
                </Suspense>
              </div>
              <div className="lg:col-span-1">
                <Suspense fallback={<LoadingFallback />}>
                  <PromotionalBanner />
                </Suspense>
              </div>
            </div>
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default App;