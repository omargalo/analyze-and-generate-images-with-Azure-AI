
const axios = require('axios');

async function analyzeImage(imageUrl) {
  const subscriptionKey = '9b34ef48ef184bc0b98218f378bf59cc';
  const endpoint = 'https://cvazureomar.cognitiveservices.azure.com/vision/v4.0/analyze';

  const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': 'Celebrities,Landmarks',
    'language': 'en'
  };

  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey
  };

  const data = {
    'url': imageUrl
  };

  try {
    const response = await axios.post(endpoint, data, { params, headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  analyzeImage
};
