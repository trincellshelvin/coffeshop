import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="relative z-10 bg-opacity-75 bg-transparent py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/steampunkcybercafelogo.jpg" alt="Steampunk Cyber Cafe" className="logo w-10 h-10" />
                    <span className="text-chocolate-brown text-2xl font-semibold">Steampunk Cyber Cafe</span>
                </Link>
                <div className="flex space-x-6 text-chocolate-brown">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/menu" className="hover:underline">Menu</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <Link href="/findus" className="hover:underline">Find Us</Link>
                </div>
            </div>
        </nav>
    );
}

