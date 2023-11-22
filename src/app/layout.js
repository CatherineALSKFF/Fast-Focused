"use client";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';


export default function Layout({ children }) {
  const router = useRouter();

  
  return (
    <html lang="en">
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















// "use client";
// // import { Inter } from 'next/font/google'
// import './globals.css'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { useRouter } from 'next/navigation';
// // const inter = Inter({ subsets: ['latin'] })


// export default function Layout({ children }) {
//   const router = useRouter();

//   return (

//     <html lang="en">
//     <body>{children}</body>
//   </html>
    
       
    
      
    
//   )
// }
