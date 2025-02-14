'use client';
import Link from 'next/link';
import { UserButton, SignInButton, useAuth } from '@clerk/nextjs';
import { SidebarTrigger } from '../ui/sidebar';

export default function NavBar() {
    const { isSignedIn, isLoaded } = useAuth();

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50  h-12 w-full  ">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <SidebarTrigger
                        className=' h-9 w-9  text-3xl cursor-pointer '
                    />
                    <Link href="/">
                        <span className="text-2xl font-bold cursor-pointer">Your Book</span>
                    </Link>
                </div>

                {!isLoaded ? (
                    <div className="text-gray-400">Loading...</div>
                ) : isSignedIn ?
                    <UserButton />
                    : (
                        <SignInButton />
                    )}
            </div>
        </nav>
    );
}
