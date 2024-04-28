"use client"
import React, { useState, useEffect } from 'react';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      fitnessGoal: '',
      gender: '',
      ageRange: '',
      trainingDuration: '',
      trainingHistory: '',
      name: '',
      email: '',
      WhatsAppNumber: '',
      country: '',
      profession: '',
      instagram: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState(false);
  
    const [canProceed, setCanProceed] = useState(false);
  
    useEffect(() => {
      // Enable the Next button if the current field is filled
      switch(step) {
        case 1: case 2: case 3:
          setCanProceed(!!formData[step === 1 ? 'fitnessGoal' : step === 2 ? 'gender' : 'ageRange']);
          break;
        case 4:
          setCanProceed(!!formData.trainingDuration);
          break;
        case 5:
          setCanProceed(!!formData.trainingHistory);
          break;
        case 6:
          setCanProceed(Object.keys(formData).every(key => formData[key] !== ''));
          break;
        default:
          setCanProceed(false);
      }
    }, [formData, step]);
  
    const handleNext = () => {
      if (canProceed && step < 6) setStep(step + 1);
    };
  
    const handleBack = () => {
      if (step > 1) setStep(step - 1);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async () => {
      if (step === 6 && canProceed) { // Ensure all data is filled and it's the final step
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
  
          if (!response.ok) {
            setSubmissionError(true);
            throw new Error('Failed to submit form data');
          }
          setSubmitted(true);
          setSubmissionError(false);

  
          // Clear the form after submission or handle response data
          console.log('Form submitted successfully:', await response.json());
          setFormData({
            fitnessGoal: '',
            gender: '',
            ageRange: '',
            trainingDuration: '',
            trainingHistory: '',
            name: '',
            email: '',
            WhatsAppNumber: '',
            country: '',
            profession: '',
            instagram: ''
          });
        //   alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionError(true);
        }
      }
    };
    

    if (submitted) {
        return <div className='shadow-lg py-[100px] rounded-[20px] bg-[#B3F0C465] '>
             <h2 className="text-center text-2xl font-bold my-5 ">We will contact you soon! </h2>
             <p className='my-3'>Login and choose a program that will help you reach your goals</p>
             <a className="  btn bg-[#C2FFD3]  hover:bg-[#B3F0C465] text-black font-bold  px-4  rounded-[30px] mx-3  " href="/api/auth/login?returnTo=/programs" >
                      JOIN NOW
                    </a>
             </div>;
      }
    
      if (submissionError) {
        return <h2 className="text-center text-2xl font-bold text-red-500 mt-5">There was an error sending your information. Please try again.</h2>;
      }

  const handleOptionSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (step < 6) setStep(step + 1); // Automatically move to the next step upon selection
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return renderSelect("fitnessGoal", ["Lose Weight", "Gain Muscle", "Improve Fitness"]);
      case 2:
        return renderSelect("gender", ["Male", "Female", "Other"]);
      case 3:
        return renderSelect("ageRange", ["18-25", "26-35", "36-older gentlepeople"]);
      case 4:
      case 5:
      case 6:
        return renderTextInput(step);
      default:
        return <h2>Register Now</h2>;
    }
  };

  const renderSelect = (name, options) => (
    <>
      <label htmlFor={name} className="block mb-2 text-lg font-semibold">{name.replace(/([A-Z])/g, ' $1').trim()}</label>
      <div className="flex space-x-2">
        {options.map(option => (
          <button key={option} onClick={() => handleOptionSelect(name, option)}
                  className={`rounded-[20px] px-4 py-2 font-medium shadow-lg w-full text-center ${
                    formData[name] === option ? 'border-[1px] border-[#C2FFD3]' : 'bg-[#262828F7] text-white'}`}>
            {option}
          </button>
        ))}
      </div>
    </>
  );

  const renderTextInput = (step) => {
    const fields = {
      4: { name: 'trainingDuration', placeholder: 'How long have you been training?', type: 'text' },
      5: { name: 'trainingHistory', placeholder: 'Describe your training history', type: 'textarea' },
      6: { name: 'personalInfo', type: 'personalInfo' } // Personal info inputs are grouped in step 6.
    };
    const field = fields[step];

    if (field.type === 'textarea') {
      return (
        <>
          <label htmlFor={field.name} className="block mb-2 text-lg font-semibold">Your Training History and Current Routine</label>
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="rounded-[20px] p-2 bg-white border border-gray-300 w-full h-32"
          />
        </>
      );
    } else if (field.type === 'personalInfo') {
      return (
        <div className="space-y-4">
          {["name", "email", "WhatsAppNumber", "country", "profession", "instagram"].map(info => (
            info === "profession" ? (
              <textarea
              type={info === "email" ? "email" : info === "WhatsAppNumber" ? "tel" : "text"}

                key={info}
                name={info}
                value={formData[info]}
                onChange={handleChange}
                placeholder={`Your ${info.charAt(0).toUpperCase() + info.slice(1)}`}
                className="rounded-[20px] p-2 bg-white border border-gray-300 w-full"
                rows="4"
              />
            ) : (
              <input
                key={info}
                type="text"
                name={info}
                value={formData[info]}
                onChange={handleChange}
                placeholder={`Your ${info.charAt(0).toUpperCase() + info.slice(1)}`}
                className="rounded-[20px] p-2 bg-white border border-gray-300 w-full"
              />
            )
          ))}
        </div>
      );
    } else {
      return (
        <>
          <label htmlFor={field.name} className="block mb-2 text-lg font-semibold">{field.placeholder}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="rounded-[20px] p-2 bg-white border border-gray-300 w-full"
          />
        </>
      );
    }
  };

  const calculateProgress = () => {
    return (step - 1) / 6 * 100;
  };

  return (
    <div className='form-container mx-auto px-4 py-8 w-3/4 max-w-4xl text-white'>
      <h2 className="text-4xl font-bold mb-12 text-center ">Register Now</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-6">
        <div className="bg-[#C2FFD3] h-2.5 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      {renderFormStep()}
      <div className="navigation-buttons mt-4 flex justify-between">
        {step > 1 && <button onClick={handleBack} className='btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] w-1/4'>Back</button>}
        {step < 6 && (
  <button
    onClick={handleNext}
    disabled={!canProceed}
    className={`btn font-bold py-2 px-4 rounded-[30px] w-1/4 text-black ${canProceed ? 'bg-[#C2FFD3] hover:bg-[#B3F0C465]' : 'bg-[#B3F0C465]'}`}
  >
    Next
  </button>
)}
{step ===6 && <button onClick={handleSubmit} 
className={`btn text-center  font-bold py-2  rounded-[30px] w-1/4 text-black ${canProceed ? 'bg-[#C2FFD3] hover:bg-[#B3F0C465]' : 'bg-[#B3F0C465]'}`}
 disabled={!canProceed}>
        Submit
      </button>}
      </div>
      
    </div>
  );
};

export default Form;





























// import React, { useState, useEffect } from 'react';

// const Form = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fitnessGoal: '',
//     gender: '',
//     ageRange: '',
//     trainingDuration: '',
//     trainingHistory: '',
//     name: '',
//     email: '',
//     WhatsAppNumber: '',
//     country: '',
//     profession: '',
//     instagram: ''
//   });

//   const [canProceed, setCanProceed] = useState(false);

//   useEffect(() => {
//     // Check if the current form field is filled to enable the Next button
//     switch(step) {
//       case 1:
//       case 2:
//       case 3:
//         setCanProceed(!!formData[step === 1 ? 'fitnessGoal' : step === 2 ? 'gender' : 'ageRange']);
//         break;
//       case 4:
//         setCanProceed(!!formData.trainingDuration);
//         break;
//       case 5:
//         setCanProceed(!!formData.trainingHistory);
//         break;
//       case 6:
//         setCanProceed(!!formData.name && !!formData.email && !!formData.WhatsAppNumber && !!formData.country && !!formData.profession && !!formData.instagram);
//         break;
//       default:
//         setCanProceed(false);
//     }
//   }, [formData, step]);

//   const handleNext = () => {
//     if (canProceed && step < 6) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleOptionSelect = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//     if (step < 6) setStep(step + 1); // Automatically move to the next step upon selection
//   };

//   const renderFormStep = () => {
//     switch (step) {
//       case 1:
//         return renderSelect("fitnessGoal", ["Lose Weight", "Gain Muscle", "Improve Fitness"]);
//       case 2:
//         return renderSelect("gender", ["Male", "Female", "Other"]);
//       case 3:
//         return renderSelect("ageRange", ["18-25", "26-35", "36-older gentlepeople"]);
//       case 4:
//       case 5:
//       case 6:
//         return renderTextInput(step);
//       default:
//         return <h2>Register Now</h2>;
//     }
//   };

//   const renderSelect = (name, options) => (
//     <>
//       <label htmlFor={name} className="block mb-2 text-lg font-semibold">{name.replace(/([A-Z])/g, ' $1').trim()}</label>
//       <div className="flex space-x-2">
//         {options.map(option => (
//           <button key={option} onClick={() => handleOptionSelect(name, option)}
//                   className={`rounded-[20px] px-4 py-2 font-medium shadow-lg w-full text-center ${
//                     formData[name] === option ? 'border-[1px] border-[#C2FFD3]' : 'bg-[#262828F7] text-white'}`}>
//             {option}
//           </button>
//         ))}
//       </div>
//     </>
//   );

//   const renderTextInput = (step) => {
//     const fields = {
//       4: { name: 'trainingDuration', placeholder: 'How long have you been training?', type: 'text' },
//       5: { name: 'trainingHistory', placeholder: 'Describe your training history', type: 'textarea' },
//       6: { name: 'personalInfo', type: 'personalInfo' } // Personal info inputs are grouped in step 6.
//     };
//     const field = fields[step];

//     if (field.type === 'textarea') {
//       return (
//         <>
//           <label htmlFor={field.name} className="block mb-2 text-lg font-semibold">Your Training History and Current Routine</label>
//           <textarea
//             name={field.name}
//             value={formData[field.name]}
//             onChange={handleChange}
//             placeholder={field.placeholder}
//             className="rounded-[20px] p-2 bg-white border border-gray-300 w-full h-32"
//           />
//         </>
//       );
//     } else if (field.type === 'personalInfo') {
//       return (
//         <div className="space-y-4">
//           {["name", "email", "WhatsAppNumber", "country", "profession", "instagram"].map(info => (
//             info === "profession" ? (
//               <textarea
//                 key={info}
//                 name={info}
//                 value={formData[info]}
//                 onChange={handleChange}
//                 placeholder={`Your ${info.charAt(0).toUpperCase() + info.slice(1)}`}
//                 className="rounded-[20px] p-2 bg-white border border-gray-300 w-full"
//                 rows="4"
//               />
//             ) : (
//               <input
//                 key={info}
//                 type="text"
//                 name={info}
//                 value={formData[info]}
//                 onChange={handleChange}
//                 placeholder={`Your ${info.charAt(0).toUpperCase() + info.slice(1)}`}
//                 className="rounded-[20px] p-2 bg-white border border-gray-300 w-full"
//               />
//             )
//           ))}
//         </div>
//       );
//     } else {
//       return (
//         <>
//           <label htmlFor={field.name} className="block mb-2 text-lg font-semibold">{field.placeholder}</label>
//           <input
//             type={field.type}
//             name={field.name}
//             value={formData[field.name]}
//             onChange={handleChange}
//             placeholder={field.placeholder}
//             className="rounded-[20px] p-2 bg-white border border-gray-300 w-full"
//           />
//         </>
//       );
//     }
//   };

//   const calculateProgress = () => {
//     return (step - 1) / 6 * 100;
//   };

//   return (
//     <div className='form-container mx-auto px-4 py-8 w-3/4 max-w-4xl'>
//       <h2 className="text-2xl font-bold mb-8 text-center">Register Now</h2>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-6">
//         <div className="bg-[#C2FFD3] h-2.5 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
//       </div>
//       {renderFormStep()}
//       <div className="navigation-buttons mt-4 flex justify-between">
//         {step > 1 && <button onClick={handleBack} className='btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] w-1/4'>Back</button>}
//         {step < 6 && (
//   <button
//     onClick={handleNext}
//     disabled={!canProceed}
//     className={`btn font-bold py-2 px-4 rounded-[30px] w-1/4 text-black ${canProceed ? 'bg-[#C2FFD3] hover:bg-[#B3F0C465]' : 'bg-[#B3F0C465]'}`}
//   >
//     Next
//   </button>
// )}
//       </div>
//     </div>
//   );
// };

// export default Form;
