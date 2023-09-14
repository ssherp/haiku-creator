import axios from 'axios';

const saveHaikuEndpoint = '/api/save-haiku'; 


const haikuData = {
  haikuText: "Your haiku text here",
  createdAt: new Date().toISOString(), 
  image: "URL to image",
};

axios.post(saveHaikuEndpoint, haikuData)
  .then((response) => {
    console.log('Haiku saved successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error saving haiku:', error);
  });
