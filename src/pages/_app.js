import '../styles/globals.css'; 
import '../styles/cart.css';
import '../styles/index.css';
import 'tailwindcss/tailwind.css'; 
import { AuthProvider } from './context/AuthContext'; // Adjust the path accordingly
import dynamic from 'next/dynamic';

// Import BrowserRouter dynamically to disable SSR
const BrowserRouter = dynamic(() => import('react-router-dom').then(mod => mod.BrowserRouter), { ssr: false });

// Import Navbar components dynamically to disable SSR
const HomeNavbar = dynamic(() => import('./components/Navbar').then(mod => mod.HomeNavbar), { ssr: false });
const SignupNavbar = dynamic(() => import('./components/Navbar').then(mod => mod.SignupNavbar), { ssr: false });
const LoginNavbar = dynamic(() => import('./components/Navbar').then(mod => mod.LoginNavbar), { ssr: false });
const CartNavbar = dynamic(() => import('./components/Navbar').then(mod => mod.CartNavbar), { ssr: false });
const CheckoutNavbar = dynamic(() => import('./components/Navbar').then(mod => mod.CheckoutNavbar), { ssr: false });

const CombinedLogin = dynamic(() => import('./components/CombinedLogin'), { ssr: false });
const AppRoutes = dynamic(() => import('../routes/AppRoutes'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div data-theme="coffeeShop">
          <HomeNavbar /> 
          <SignupNavbar />
          <LoginNavbar />
          <CartNavbar/>
          <CheckoutNavbar />
          <AppRoutes />
          <Component {...pageProps} />
          <CombinedLogin />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default MyApp;
