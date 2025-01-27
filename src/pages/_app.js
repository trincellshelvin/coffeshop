import '../styles/globals.css'; 
import '../styles/cart.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS import


export default function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="coffeeShop">
      
      <Component {...pageProps} />
    </div>
  );
};

