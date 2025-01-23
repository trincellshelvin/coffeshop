// /pages/_app.js
import '../styles/globals.css';
import Navbar from './components/Navbar'; // Import the Navbar component

export default function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="coffeeShop">
      <Navbar /> {/* Include the Navbar component */}
      <Component {...pageProps} />
    </div>
  );
};
