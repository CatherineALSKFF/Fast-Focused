import React, { useState, useEffect } from 'react';


const ProgramsDetails = () => {
    const [isStandard, setIsStandard] = useState(true); // Boolean state to track the title
    const [isVisible, setIsVisible] = useState(false);
    const [animateTitle, setAnimateTitle] = useState(false);
    const [animatePhrases, setAnimatePhrases] = useState(false); // New state for phrases animation

    const WhatsAppIcon = () => (

        <svg xmlns="http://www.w3.org/2000/svg" fill='#D3FCDE' height="20" width="20" viewBox="0 0 448 512" style={{ verticalAlign: 'middle' }}>
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
    );

    const MealIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill='#D3FCDE' height="20" width="20" viewBox="0 0 448 512" style={{ verticalAlign: 'middle' }}>
            <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
        </svg>
    )

    const WorkoutIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill='#D3FCDE' height="20" width="25" viewBox="0 0 448 512" style={{ verticalAlign: 'middle' }}>
        <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/>
        </svg>
    )

    const standardPhrases = [
        <div className="flex items-center"><WhatsAppIcon /><span> Initial consult call and instant initiation</span></div>,
        <div className="flex items-center"><MealIcon /><span> Versatile meal plan – which guides, not limits! </span></div>,
        <div className="flex items-center"><WorkoutIcon /><span> Customized training program (workaround injury) </span></div>,
        "Monthly alterations to program based on progress made",

    ];

    const comprehensivePhrases = [
        <div className="flex items-center"><WhatsAppIcon /><span> 1 on 1 coaching with me as your personal trainer</span></div>,
        <div className="flex items-center"><MealIcon /><span> Fluid customized versatile meal plan (focus on health) </span></div>,
        <div className="flex items-center"><WorkoutIcon /><span> Fluid customized training program (always in motion for best result) </span></div>,

        "(whatsapp) Weekly video consult keeping you accountable! ",
        "Focus on your knowledge of the Fasting Focused method moving forward",
        "Train along side me if visiting the UAE!"
    ];

    const toggleTitle = () => {
        setIsStandard(!isStandard);
        setAnimateTitle(true);
        setAnimatePhrases(true); // Trigger the phrases animation
        setTimeout(() => {
            setAnimateTitle(false);
            setAnimatePhrases(false); // Reset animation state
        }, 600);
    };



    const checkScroll = () => {
        const element = document.querySelector('.programs-details');
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


    const dynamicDescription = isStandard ? standardPhrases : comprehensivePhrases;

    return (
        <div className={`mt-[200px] mb-[80px] programs-details ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
            <div className='flex items-center justify-center text-center'>
                <h1 className={`text-[#CCC] font-extrabold mb-0 text-[25px] sm:text-[35px] ${animateTitle ? 'fadeInPrograms' : ''}`}>
                    {isStandard ? 'STANDARD' : 'COMPREHENSIVE'}
                </h1>
                <button onClick={toggleTitle} className='ml-4 transform hover:scale-110 flex items-center'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#C2FFD3">
                        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg>
                </button>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                {dynamicDescription.map((phrase, index) => (
                    <div key={index} className='bg-[#5C5E5E] w-[250px] h-[250px] flex items-center justify-center m-6 rounded-[30px] text-[#D3FCDE] text-center p-4 shadow-lg transform hover:scale-110 hover-programs-desc'>
                        <span className={animatePhrases ? 'fadeInPrograms' : ''}>
                            {phrase}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProgramsDetails;
