"use client";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export default function Layout({ children }) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const enableGA = process.env.NEXT_PUBLIC_ENABLE_GA === 'true';
  const tiktokPixelId= process.env.TIKTOK_PIXELS_ID

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

        {/* TikTok Pixel */}
        {tiktokPixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(w,d,t){
                  w.TiktokAnalyticsObject=t;
                  var ttq=w[t]=w[t]||[];
                  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],
                  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
                  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
                  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},
                  ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
                  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date;
                  var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
                  var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                  ttq.load('${tiktokPixelId}'); ttq.page();
                }(window, document, 'ttq');
              `,
            }}
          />
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

