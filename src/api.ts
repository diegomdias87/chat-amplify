export const getChatResponse = async (prompt: string): Promise<string> => {
  // Step 2: Add this line for logging
  console.log('Prompt sent:', prompt);

  const response = await fetch("https://926ljsicr2.execute-api.us-east-1.amazonaws.com/dev", {
    method: 'GET', // Change this to a GET request
    // Optionally, you can include headers if needed
    // headers: {
    //   'Content-Type': 'application/json',
    //   // Remove 'x-api-key' header
    //   // 'x-api-key': API_KEY,
    // },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response from API.');
  }

  const data = await response.json();
  return data.response;
};

// Add another function for making POST requests if needed
export const sendPrompt = async (prompt: string): Promise<string> => {
  const response = await fetch("https://926ljsicr2.execute-api.us-east-1.amazonaws.com/dev", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Remove 'x-api-key' header
      // 'x-api-key': API_KEY,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response from API.');
  }

  const data = await response.json();
  return data.response;
};
