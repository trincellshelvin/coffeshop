import '../styles/globals.css'; 
import '../styles/cart.css';
import '../styles/index.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS import
import 'next/font/google';


export default function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="coffeeShop">
      
      <Component {...pageProps} />
    </div>
  );
};

