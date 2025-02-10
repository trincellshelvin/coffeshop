import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { HeroSectionWithButton } from '../components/HeroSection';
import Loading from '../components/Loader'; // Ensure correct path to Loader

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleCtaClick() {
    console.log('CTA button clicked!');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/signup');
    }, 3000); // Simulate loading for 3 seconds
  }

  return (
    <div data-theme="coffeeShop" className="text-chocolate-brown min-h-screen flex flex-col justify-between">
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <>
          <HeroSectionWithButton buttonLabel={"Signup Now"} handleCtaClick={handleCtaClick} />
          <footer className="footer relative z-10 bg-white text-chocolate-brown text-center py-4">
            <Footer />
          </footer>
        </>
      )}
      <button onClick={handleCtaClick} className="m-4 p-2"></button>
    </div>
  );
}

export default Home;