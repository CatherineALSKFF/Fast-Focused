"use client";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';


export default function Layout({ children }) {
  const router = useRouter();

  
  return (
    <html lang="en">
      <title>Fasting Focused</title>
      <link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16"></link>
  
     
      <UserProvider>
       
        <body>
          <Navbar />
          {children}
          <Footer />



        </body>
      </UserProvider>
    </html>
  );
}

