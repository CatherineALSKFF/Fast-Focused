import React, { useState, useEffect } from 'react';

const AboutImage = () => {
  const firstImage = 'https://uc590dfa6601b5c141cc8f63b693.previews.dropboxusercontent.com/p/thumb/ACK7KN1KZCZsiOLkw3ms4AVKLGVjRYF0CVd9HI2vlrrzyzJ0ckib2mBLFO7HG0-a7SS3TjtJlIa6YnUeTOYppU0FRe1_9ZeDtYblypcPTn3rThdQXNRJ2sMkBjC7t7xW1CPqaSaEghM0Jnx57TxYxWJUHoPwXhc90ncvH9mhu9dhPUNhXADERheqV1jWG6rUt1Pi6PCtAHP6O8jSpHKUX28oLZ3I3ciLSDe4iASVpniRXga2x9-dfBXa3SGa73gpI_cNEVn0m7wd7JM2QkG2EvyqZZ4I7L6GofThPwC4wiErJzLnQWY9k7tTEQnIA2_dD_5kS4ypDZNGFXMM0vvw_6dM69yGhtqJl2rV3okaf7QMHKBtSZcLbiEJEm1B674sDP3AJYlbCY0Plc6Nx0zrkG98yE39nh9HOi3UFtaAD6nCZEkGD0JB0bOngADxfq9D3XbP38DMKpW4Fqp_3LPHIkmyeINHbVBD89hL_6u6iSJ6M_VBzKQzH2tVVLNp4PrML1N2LoiG54G4K54igeOweed3Pqb6uA6X1kchHuLLTzxN6fMGnBn6H2-PWPFYzH4JnPvqOLlRzYyIm1HZHPKerMGNnsj7qBvlcSmiocZd0SX0_UFdN-AkAA9Ungs4ZkzxDbJT9ndTtVZh-4jS-WTzEcktsrC5QpR79mTVvZtAe5PMoD0lBGC27ee6tPk9IY-zAUBehGFeT8FVMTzJg4Ogdfyk/p.png';
  const secondImage = 'https://ucd1fa4a70da47a9427a93451fe7.previews.dropboxusercontent.com/p/thumb/ACLxepOnOgdbsq8EdzemtuF3Xm7J8IYdA3M2Fuh0ldzWWs8tEj8iYbB-4RzwaG_GQoxhjyoxJ8qcpRLVa29xEBDiJrI03uu04JTEzA3-Etbbp9NB0SZoCtD854UlnrcRS9h7rTd8J8XZoBSelvKOWlQqlY0OeZEED8Eadr8y9EpXQoskXUpK-iyDYilbpfa8Lxc11bXXXmV-4TVRs4r241y6BHg_duw6nN-y0Fy67TqccptdKcC77_82E9n0b9FOYTE06IPdCjND0pDSJCYPqdbvzQ9ZzOoVFvZKOfNje7Jsk_yZ3aFCGMjd_YJ5lHX6ePMnW3kFTjTrYi6NIAEOPWDsWB-o8NLY_If_kignIXlUwcP0Cx_ZEHuLV79nIHu0DLyg5FwqNh3F0ja1aDXuFNuF-KjQpBhA0l-Fl_qNt7myQfLTCGDjow3m0cmR-ms0ZO9ZHvexnve_vmosvHcKdZLhIwMjzwkVhcb7KMDB4STYjxCE9Sj-UkR7yeGfHXhbh98wRNqsl9XCpdgFiBYTIL0teBX_c7xwRNfF3Bwz8tTxCjGCKD2egAp2rl-25LMXSxE9KuURLiPfY03c40sWY-8GcJobc0pKrQJb0O_4EuH-eok2eKCgJZkFDK5fJDIAOfQCljrg7wl8H5Aw9AFVM6bL20WYLUqEiCvtk8OyO9ugJCuTm5xnJzdd5WZQBVNvHPklLaDBFN3vDldGW-X_8SqSh1Xg_rI4F3mxm071BfopHk5daoKrrxKLI9UIot2mM6Q/p.png';
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.about-image');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visible = elementPosition < viewportHeight / 2;
      setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="mt-[100px] p-3 flex justify-center align-center about-image">
      <img
        src={firstImage}
        alt="First"
        className={`rounded-[30px] shadow-lg transform transition duration-500 ease-in-out ${isVisible ? 'scale-100' : 'scale-0'}`}
        style={{ width: '100%', maxWidth: '400px', marginRight: '20px' }}
      />
      <img
        src={secondImage}
        alt="Second"
        className={`rounded-[30px] shadow-lg transform transition duration-500 ease-in-out ${isVisible ? 'scale-100' : 'scale-0'}`}
        style={{ width: '100%', maxWidth: '400px' }}
      />
    </div>
  );
};

export default AboutImage;




