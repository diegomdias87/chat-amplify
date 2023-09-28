export const getChatResponse = async (prompt: string): Promise<string> => {
  console.log('Prompt sent:', prompt); // Step 2: Add this line for logging

  const response = await fetch("https://dphnt0klca.execute-api.us-east-2.amazonaws.com/dev", {
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
  // return JSON.stringify(data);
  return data.body;
};
