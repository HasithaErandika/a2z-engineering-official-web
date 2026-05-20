import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/shared/LoadingScreen';
import { CookieConsent } from './components/shared/CookieConsent';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/shared/ScrollToTop';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const AboutUs = lazy(() => import('./pages/AboutUs').then((m) => ({ default: m.AboutUs })));
const SolarSolutions = lazy(() =>
  import('./pages/SolarSolutions').then((m) => ({ default: m.SolarSolutions }))
);
const Products = lazy(() => import('./pages/Products').then((m) => ({ default: m.Products })));
const ProductDetails = lazy(() =>
  import('./pages/ProductDetails').then((m) => ({ default: m.ProductDetails }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const Portfolio = lazy(() => import('./pages/Portfolio').then((m) => ({ default: m.Portfolio })));
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const NewsMedia = lazy(() => import('./pages/NewsMedia').then((m) => ({ default: m.NewsMedia })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-brand-green" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col pt-20">
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/solar" element={<SolarSolutions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/news" element={<NewsMedia />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
