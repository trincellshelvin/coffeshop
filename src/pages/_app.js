import '../styles/globals.css'; // Global CSS should be imported here
import 'tailwindcss/tailwind.css'; // Tailwind CSS import


export default function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="coffeeShop">
      
      <Component {...pageProps} />
    </div>
  );
};

