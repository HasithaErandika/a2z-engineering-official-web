import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LoadingScreen } from './components/shared/LoadingScreen';
import { CookieConsent } from './components/shared/CookieConsent';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/shared/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { SolarSolutions } from './pages/SolarSolutions';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { ServicesPage } from './pages/ServicesPage';
import { Portfolio } from './pages/Portfolio';
import { ContactPage } from './pages/ContactPage';
import { NewsMedia } from './pages/NewsMedia';

import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col pt-20">
        <Navbar />

        
        <main className="flex-grow">
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
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
