import React from 'react';

const termsData = [
  {
    title: "TERMS AND CONDITIONS",
    content: "You are using a website operated by Fasting Focused. Referred to as “Fasting Focused” or “we” in this agreement. By accessing or using the Fasting Focused Website, the Fasting Focused Service, or any applications however accessed, you agree to be bound by the following terms and conditions which consist of the following policies: General Terms of Use, Acceptable Use, Privacy Policy (and together, are the “Terms and Conditions”). The Service is owned or controlled by Fasting Focused. These Terms and Conditions affect your legal rights and obligations. If you do not agree to be bound by all of these Terms and Conditions, do not access or use the Service. There may be times when we offer a special feature that has its own terms and conditions that apply in addition to these Terms and Conditions. In those cases, the terms specific to the special feature shall apply to the extent there is a conflict with these Terms and Conditions."
  },
  {
    title: "CONTACT FASTING FOCUSED",
    content: "If you have any questions regarding these Terms and Conditions, or if you have any questions, complaints, claims, or other legal concerns relating to Fasting Focused or its business, please contact support@fastingfocused.com"
  },
  {
    title: "DEFINITIONS",
    content: "“Account” – a registered user account with Fasting Focused. “Fasting Focused” is the website owned and distributed by Fasting Focused. “Fasting Focused Service” – Fasting Focused provides the service of a platform where users can access fitness coaching content and ideas. “Fasting Focused Website” – website www.fastingfocused.com “Content” means any data, text, files, information, usernames, images, graphics, photos, profiles, links, and other content or materials. “Product” means any digital or physical fitness or related product purchased through the Fasting Focused website. “Seller” – means the brand you are purchasing from."
  },
  {
    title: "GENERAL TERMS OF USE",
    content: "You must create an Account to use the Service. You must be at least 16 years old to use the Service. You must use the Fasting Focused website and Service only in accordance with our Acceptable Use Policy. You are responsible for any activity that occurs through your Account. You agree that you will not solicit, collect, or use the login credentials of other Fasting Focused users. You are responsible for keeping your password secret and secure. Any links shared on Fasting Focused are your responsibility. You must not engage in illegal or unauthorized activities. You are solely responsible for your conduct and Content. You must not change, modify, or alter the Service."
  },
  {
    title: "RIGHTS & OWNERSHIP",
    content: "Fasting Focused does not claim ownership of any Content you post on the Service. You grant Fasting Focused a license to use the Content you post on the Service. Fasting Focused Content is protected by intellectual property laws. The Fasting Focused name and logo are trademarks of Fasting Focused. You agree that Fasting Focused is not responsible for third-party Content."
  },
  {
    title: "PAYMENTS",
    content: "All subscription payments are handled through Stripe and are under their terms and conditions. All web subscription payments are handled by Stripe and are bound by these terms and conditions. [Note: Ensure that the payment information and details are accurate and up-to-date.]"
  },
  {
    title: "SUBSCRIPTION INFO",
    content: "Our subscription model will auto renew every month until you press “cancel subscription” through your account, or notify the team that you wish to cancel."
  },
  {
    title: "DISCLAIMER",
    content: "Before embarking on the fitness programs offered by Fasting Focused, it is crucial to consult your doctor or GP, especially if you have allergies or health issues. Seek professional health advice tailored to your specific circumstances. Fasting Focused makes no guarantees regarding the accuracy, completeness, or suitability of the information in the app. The content is subject to professional differences of opinion and potential human errors. Fasting Focused disclaims responsibility for any losses resulting from actions taken or reliance on the information provided in the app. Users are responsible for independently verifying the information's currency, accuracy, completeness, reliability, and relevance to their individual circumstances. Pregnancy: Consult your health professional before following the fitness plan if you are pregnant or breastfeeding. Before initiating any new diet or exercise regimen, consult your doctor and obtain clearance for any changes. By signing up for this app, you acknowledge that your participation is voluntary, and you are solely responsible for your results. Take full responsibility for your health, life, well-being, and that of your family, including unborn children. Results may vary for individuals, and health, fitness, and nutrition success depend on various factors, including personal background, dedication, desire, and motivation. Fasting Focused is designed to help integrate fitness into your life, but it should not be used as medical advice. Consult your doctor before starting any nutrition or workout plans, especially if you are at risk of conditions like heart disease, bad cholesterol, obesity, high blood pressure, chest pain, and bone/joint problems. If you experience discomfort during in-app exercises, stop immediately and consult your doctor. By signing up, you acknowledge the risks and agree to be solely responsible for any physical injuries during workouts."
  },
  {
    title: "REFUND POLICY",
    content: "As Fasting Focused is a digital product, as soon as you subscribe, you have access to the program you paid for. Therefore, you hereby acknowledge that your purchase cannot be canceled, and the Seller is not obliged to provide you with a refund. Only in the case where you fail to receive the contents of coaching program you paid for (consultation, workout program) are you entitled to a full or partial refund."
  },
  {
    title: "ACCEPTABLE USE POLICY",
    content: "This policy outlines the terms for accessing and using the Service. It applies to all users and visitors. Your use of our site implies acceptance and agreement to comply with the policies in this document, forming part of our Terms and Conditions."
  },
  {
    title: "SUSPENSION AND TERMINATION",
    content: "By breaching our terms of use, your account could face suspension or termination, and it will be up to the team to decide which action we deem appropriate."
  },
  {
    title: "CHANGES TO THE ACCEPTABLE USE POLICY",
    content: "We may revise this acceptable use policy at any time by amending this page."
  }
];


const Termstext = () => {
  return (
    <div className="px-3 description-section mt-[100px] text-[#CCC]">
      {termsData.map((section, index) => (
        <div key={index} className="my-2 px-3 description-texts text-[30px] mt-[70px]">
          <p className="mb-2 font-extrabold">{section.title}</p>
          <p className="mb-4 font-semibold text-[20px]">{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Termstext;
