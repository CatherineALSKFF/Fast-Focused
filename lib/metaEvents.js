import axios from 'axios';

const sendMetaEvent = async (metaEventData) => {
  const apiUrl = `https://graph.facebook.com/v14.0/${process.env.META_PIXELS_ID}/events?access_token=${process.env.META_PIXELS_ACCESS_TOKEN}`;

  try {
    const payload = {
      data: [
        {
          ...metaEventData,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          // Add other event data here as needed
        }
      ]
    };

    const response = await axios.post(apiUrl, payload);
    console.log('Meta event sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending Meta event:', error);
  }
};

export default sendMetaEvent;
