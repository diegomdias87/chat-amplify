export const getChatResponse = async (prompt: string): Promise<string> => {
  console.log('Prompt sent:', prompt); // Log the prompt being sent to the API

  const response = await fetch("https://1admknyn3i.execute-api.us-east-1.amazonaws.com/dev", {
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

  console.log('Response received:', data.response); // Log the response received from the API

  return data.response;
};
