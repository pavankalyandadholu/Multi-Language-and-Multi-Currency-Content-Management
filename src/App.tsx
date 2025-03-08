import { useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { useStore } from './store/useStore';
import { routes } from './routes/routes';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingSpinner } from './components/common/LoadingSpinner';

function AppContent() {
  const { theme } = useStore();
  const element = useRoutes(routes);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        {element}
      </Suspense>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;