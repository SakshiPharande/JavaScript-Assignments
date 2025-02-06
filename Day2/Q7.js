/*
Complete the Q6 tasks with async/await.
*/
const delayedFetch = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      await new Promise(resolve => setTimeout(resolve, 2000)); // Delay
      return data;
    } catch (error) {
      throw error; 
    }
  };
  
  
  const fetchData = async () => {
    try {
      const data = await delayedFetch('https://reqres.in/api/users');
      console.log('Data received after delay:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  fetchData();
  