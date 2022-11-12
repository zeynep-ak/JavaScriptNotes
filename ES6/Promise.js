// asynchronously

// Promise is a constructor function, so you need to use the new keyword to create one.

// It takes a function, as its argument, with two parameters - resolve and reject

// RESOLVE & REJECT

// A promise has three states: pending, fulfilled, and rejected

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }

    makeServerRequest.then(result => {
        console.log(result);
    });

    makeServerRequest.catch(error => {
        console.log(error);
    });
});