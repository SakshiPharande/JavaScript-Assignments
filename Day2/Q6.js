/**
Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
the data has been received in the fetch.
*/

const delayedFetch = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setTimeout(() => {
            resolve(data);
          }, 2000);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  // Example usage:
  delayedFetch('https://reqres.in/api/users')
    .then(data => {
      console.log('Data received after delay (2 seconds):');
      console.log(data);    
    })
    .catch(error => {
      console.error('Error:', error);
    });
  