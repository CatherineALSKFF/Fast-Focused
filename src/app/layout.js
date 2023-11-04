"use client";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';



export default function Layout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        


      </body>
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
