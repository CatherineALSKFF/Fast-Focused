"use client";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export default function Layout({ children }) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const enableGA = process.env.NEXT_PUBLIC_ENABLE_GA === 'true';

  return (
    <html lang="en">
      <head>
        <title>Fasting Focused</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16" />

        {/* Conditional Google Analytics */}
        {enableGA && googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <UserProvider>
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
 

  );
}



















// import { useRouter } from 'next/navigation';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './globals.css';
// import { UserProvider } from '@auth0/nextjs-auth0/client';
// import Head from 'next/head';


// export default function Layout({ children }) {
//   const router = useRouter();

  
//   return (
//     <html lang="en">
//       <title>Fasting Focused</title>
//       <link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16"></link>
  
     
//       <UserProvider>
       
//         <body>
//           <Navbar />
//           {children}
//           <Footer />



//         </body>
//       </UserProvider>
//     </html>
//   );
// }

