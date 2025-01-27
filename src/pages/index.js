import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  HeroSection from './components/HeroSection';
import Button from './components/Button';

const CallToActionSection = ({ handleClick }) => (
  <section className="cta-button relative flex items-center justify-center min-h-screen">
    <video src="/fallingcoffeebeans.mp4" loop autoPlay muted className="absolute w-full h-full object-cover top-0 left-0"></video>
    <div className="relative z-10 text-center">
      <Button
        label="Sign Up Now"
        handleClick={handleClick}
      />
    </div>
  </section>
);

export default function Home() {
  const router = useRouter();

  function handleCtaClick() {
    console.log('CTA button clicked!');
    router.push('/signup');
  }

  return (
    <div data-theme="coffeeShop" className="text-chocolate-brown min-h-screen flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <CallToActionSection handleClick={handleCtaClick} />
      <footer className="footer relative z-10 bg-white text-chocolate-brown text-center py-4">
        <Footer />
      </footer>
    </div>
  );
}
