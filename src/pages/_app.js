import '../styles/globals.css'; 
import '../styles/cart.css';
import '../styles/index.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS import
import 'next/font/google';
import { AuthProvider } from './context/AuthContext'; // Adjust the path accordingly

import dynamic from 'next/dynamic';

const BrowserRouter = dynamic(() => import('react-router-dom').then(mod => mod.BrowserRouter), { ssr: false });
const CombinedLogin = dynamic(() => import('./components/CombinedLogin'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div data-theme="coffeeShop">
          <Component {...pageProps} />
          <CombinedLogin />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default MyApp;
