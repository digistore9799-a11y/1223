/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600/20 selection:text-blue-700">
        {/* Subtle Ambient Background Animation on White */}
        <AmbientBackground />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <Hero />

          {/* About Me Section */}
          <About />

          {/* Personal Interests Section */}
          <Interests />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
