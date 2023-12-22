import React from 'react';

const policyData = [
    {
        title: "PRIVACY POLICY",
        content: "This privacy policy pertains to Fasting Focused, a product of Fasting Focused Official. References to 'Fasting Focused' in the following articles refer to Fasting Focused."
      },
      {
        title: "INFORMATION WE COLLECT",
        content: "We prioritize the confidentiality of your information and adhere to your data protection rights under the General Data Protection Regulation (GDPR). We collect the following types of information: Information you provide us directly: When you register for an account: Via Email - Your Full Name, password, and email address. Private Information: All content shared on Fasting Focused remains private. Communications between you and Fasting Focused, such as Service-related emails. Technical information we collect: Usage data from Fasting Focused's website and/or software, including IP address, mobile device identifier, metadata, operating system, browser details, and referring web pages. Information collected by third-party analytics tools to enhance our understanding of overall usage patterns."
      },
      {
        title: "HOW WE USE YOUR INFORMATION",
        content: "We use the information we collect to: Facilitate efficient access to your information. Personalize content and provide tailored experiences. Improve, test, and monitor the effectiveness of Fasting Focused. Develop and test new products and features. Monitor metrics such as visitor count, traffic, and demographic patterns. Diagnose and fix technology problems. Automatically update the Fasting Focused application on your device."
      },
      {
        title: "SHARING OF YOUR INFORMATION",
        content: "We do not rent or sell your information to third parties outside Fasting Focused without your consent. We may share anonymized or aggregated data with other parties. We may disclose your information without consent to comply with the law, protect our rights, prevent misuse, or address fraud."
      },
      {
        title: "HOW WE STORE YOUR INFORMATION",
        content: "We employ reasonable precautions to secure your personal information, but we cannot guarantee absolute security. You are responsible for maintaining password secrecy. After account termination, information may be retained for a commercially reasonable time."
      },
      {
        title: "CHILDREN’S PRIVACY",
        content: "Fasting Focused does not knowingly collect information from individuals under 13 years old. If such information is inadvertently collected, we promptly delete it upon discovery."
      },
      {
        title: "OTHER WEBSITES AND SERVICES",
        content: "Our Privacy Policy does not apply to third-party websites or services linked to or from Fasting Focused. Users interacting with third-party services do so at their own risk."
      },
      {
        title: "YOUR DATA PROTECTION RIGHTS UNDER GDPR",
        content: "Residents of the EEA have data protection rights. Requests related to personal information can be sent to support@fastingfocused.com"
      },
      {
        title: "CONTACT INFORMATION",
        content: "For inquiries about this Privacy Policy or the service, contact us at support@fastingfocused.com"
      },
      {
        title: "CHANGES TO OUR PRIVACY POLICY",
        content: "Fasting Focused may update this Privacy Policy, and continued use constitutes acceptance of modifications."
      }
];


const PolicyText = () => {
  return (
    <div className="px-3 description-section mt-[100px] text-[#CCC]">
      {policyData.map((section, index) => (
        <div key={index} className="my-2 px-3 description-texts text-[30px] mt-[70px]">
          <p className="mb-2 font-extrabold">{section.title}</p>
          <p className="mb-4 font-semibold text-[20px]">{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PolicyText;
