'use client'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function SuccessPage() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <div>User not found</div>;

  const userName = user.name || user.nickname || user.email; // Fallbacks if name isn't available

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        
      <h1 className="text-4xl font-bold mb-4 text-[#B3F0C465]">Thank You for Your Purchase, {userName}!</h1>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="#B3F0C465"
  class="h-8 w-8">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>
      <p className="my-3 mt-5 text-3xl  mb-6">We're thrilled to be part of your journey towards a healthier, happier life!</p>
      <p className="text-xl text-[#CCC]">
        At Fasting Focused, we're dedicated to helping you achieve your health and fitness goals. Our expertly designed programs and supportive community are here to guide you every step of the way. Stay tuned for exciting updates and tips to maximize your journey with us. Here's to a better, more vibrant life!
      </p>
    </div>
  );
}

