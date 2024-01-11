// hooks/useSendMetaEvent.js
import axios from 'axios';
import CryptoJS from 'crypto-js';

const useSendMetaEvent = () => {
  const hashData = (data) => {
    return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
  };

  const sendMetaEvent = async (metaEventData) => {
    const apiUrl = `https://graph.facebook.com/v14.0/${process.env.NEXT_PUBLIC_META_PIXELS_ID}/events?access_token=${process.env.NEXT_PUBLIC_META_PIXELS_ACCESS_TOKEN}`;

    try {
      const payload = {
        data: [metaEventData]
      };

      await axios.post(apiUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error sending Meta event:', error);
    }
  };

  return { sendMetaEvent, hashData };
};

export default useSendMetaEvent;
