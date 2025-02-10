import '../styles/globals.css'; 
import '../styles/cart.css';
import 'tailwindcss/tailwind.css'; 
import { AuthProvider } from '../context/AuthContext'; // Adjust the path accordingly
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// Import BrowserRouter dynamically to disable SSR
//const BrowserRouter = dynamic(() => import('react-router-dom').then(mod => mod.BrowserRouter), { ssr: false });

// Import Navbar components dynamically to disable SSR
const HomeNavbar = dynamic(() => import('../components/Navbar').then(mod => mod.HomeNavbar), { ssr: false });
const SignupNavbar = dynamic(() => import('../components/Navbar').then(mod => mod.SignupNavbar), { ssr: false });
const LoginNavbar = dynamic(() => import('../components/Navbar').then(mod => mod.LoginNavbar), { ssr: false });
const CartNavbar = dynamic(() => import('../components/Navbar').then(mod => mod.CartNavbar), { ssr: false });
const CheckoutNavbar = dynamic(() => import('../components/Navbar').then(mod => mod.CheckoutNavbar), { ssr: false });

// const CombinedLogin = dynamic(() => import('./components/CombinedLogin'), { ssr: false });
// const AppRoutes = dynamic(() => import('../routes/AppRoutes'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  //Function to render the correct Navbar
  const renderNavbar = () => {
    switch (router.pathname) {
      case '/':
        return <HomeNavbar />;
      case '/signup':
        return <SignupNavbar />;
      case '/login':
        return <LoginNavbar />;
      case '/cart':
        return <CartNavbar />;
      case '/checkout':
        return <CheckoutNavbar />;
      default:
        return null;
    }
  };

  return (
    <AuthProvider>
        <div data-theme="coffeeShop">
          {renderNavbar()} {/* Render the appropriate Navbar based on the route */}
          <Component {...pageProps} />
          {/* <CombinedLogin /> */}
        </div>
    </AuthProvider>
  );
};
    
export default MyApp;
