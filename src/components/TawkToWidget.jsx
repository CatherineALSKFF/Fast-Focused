'use client'
import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/65af9d218d261e1b5f56c301/1hkqvrin5";
    script.charset = "UTF-8";
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkToWidget;




// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/65af9d218d261e1b5f56c301/1hkqvrin5';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->