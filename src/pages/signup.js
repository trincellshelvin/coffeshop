// src/pages/signup.jsx
import { useRouter } from 'next/router';
import SignupForm from './components/SignupForm';
import { SignupNavbar } from './components/Navbar';
import Footer from './components/Footer';

const Signup =() =>{
    const router = useRouter();
    function handleSignup() {
        alert('Sign up clicked!');
        router.push('/signin');
    }
    return (
        <div>
            <SignupNavbar />
            <SignupForm buttonLabel="Sign Up" handleSignup={() => console.log('Sign up clicked!')} />
            <Footer />
        </div>
    );
}

export default Signup;