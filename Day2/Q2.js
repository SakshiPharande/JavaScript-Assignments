/**
Using promises - write a function that fetches data from an API endpoint (GET
https://reqres.in/api/users ). Log the data into the console once it is received
*/


async function printUsersData(){
    const response = await fetch('https://reqres.in/api/users');

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }  
    
    const users = await response.json();
    console.log(users)
    return users;

    printUsersData().catch(error => {
        error.message; 
    });
}
printUsersData();

