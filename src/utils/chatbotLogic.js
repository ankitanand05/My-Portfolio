import { chatbotResponses } from '../data/chatbotData';

export const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();
  
  // Check for greetings
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || 
      message.includes('start') || message === '') {
    return getRandomResponse(chatbotResponses.greetings);
  }

  // Check for specific topics
  for (const [topic, data] of Object.entries(chatbotResponses)) {
    if (topic === 'greetings' || topic === 'default') continue;
    
    if (data.keywords && data.keywords.some(keyword => message.includes(keyword))) {
      return data.response;
    }
  }

  // Default response
  return getRandomResponse(chatbotResponses.default);
};

const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
};

export const formatMessage = (text) => {
  // Convert markdown-like formatting to HTML
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/🔹/g, '•')
    .replace(/\n/g, '<br>');
};