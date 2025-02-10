'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { UserButton, SignInButton, useAuth } from '@clerk/nextjs'


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isSignedIn } = useAuth();

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="text-2xl font-bold cursor-pointer">MyBrand</span>
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <ul className={`md:flex gap-6 absolute md:static bg-gray-900 md:bg-transparent w-full left-0 md:w-auto md:flex-row flex-col items-center transition-all ${isOpen ? 'top-16' : '-top-96'}`}>
                    <li><Link href="/" className="block py-2 px-4 hover:text-gray-300">Home</Link></li>
                    <li><Link href="/about" className="block py-2 px-4 hover:text-gray-300">About</Link></li>
                    <li><Link href="/services" className="block py-2 px-4 hover:text-gray-300">Services</Link></li>
                    <li><Link href="/contact" className="block py-2 px-4 hover:text-gray-300">Contact</Link></li>
                    <li> {isSignedIn ? <UserButton /> : <SignInButton />} </li>
                </ul>
            </div>
        </nav>
    );
}
