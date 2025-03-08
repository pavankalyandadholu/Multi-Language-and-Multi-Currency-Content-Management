import { lazy, Suspense } from 'react';

// Lazy load components
const ProductPage = lazy(() => import('../components/ProductPage'));
const AboutUs = lazy(() => import('../components/AboutUs'));
const ContactInfo = lazy(() => import('../components/ContactInfo'));
const PromotionalBanner = lazy(() => import('../components/PromotionalBanner'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

function Home() {
  return (
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
  );
}

export default Home;
