
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/custom/navBar";
import { dark, } from "@clerk/themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YourBook",
  description: "Manage your daily tasks and notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <ClerkProvider
          appearance={{
            baseTheme: [dark,],
          }}
        >
          <SidebarProvider
            defaultOpen={false}
          >
            <AppSidebar />
            <main
              className="flex flex-col flex-1 overflow-hidden "
            >


              <NavBar />
              {children}
            </main>

          </SidebarProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
