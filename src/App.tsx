/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-mnie" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/oferta" element={<Pricing />} />
            <Route path="/opinie" element={<Reviews />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
