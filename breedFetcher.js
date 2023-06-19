/* THE `fetchBreedDescription()` FUNCTION
 *
 * This function encapsulates the `request()` function that fetches data from
 * the internet. As the function is async it cannot be standalone (why?). It
 * takes two arguments, `breedName` and `callback`.
 *
 * It uses the callback to return data back to `index.js`. The callback can
 * return either the data or an error, which means that you must return `null`
 * for the other value, as shown below.
 */

// IMPORTS
const request = require("request");



// This function creates the final API search string, puts out a request to the
// TheCatAPI and retrieves cat breed information, and logs it to the console.
const fetchBreedDescription = function(breedName, callback) {


  // This is a URL offered by TheCatAPI. Specifically, it corresponds to
  // to this API `GET /breeds/search`. This API lets you search this website's
  // Cat Breed database. It returns data in JSON format.
  // Concatenate the API URL and the user-entered breed name in order to create
  // an API search string.
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


  // CALLBACK: INVOKE THE REQUEST FUNCTION
  request(apiURL, (error, response, body) => {

    // Error Handling: Invoke the callback and return the error.
    // Note: `if(error === true)` DOES NOT WORK. You must use `if (error)`.
    // Figure out why.
    if (error) {

      // If the request returns an error, invoke the callback and return the
      // `error` object and null for the `description` parameter.
      callback(error, null);

      // If the request goes through...
    } else {

      // Log the returned resource (i.e. the body) to console so we can see
      // what it looks like:
      // console.log(body);

      // Log its type to console (String)
      // console.log(`Type of Body Section: ${body}`);

      // Parse the JSON string into a JavaScript object and log it to console.
      const breedDataObj = JSON.parse(body);
      // console.log(breedDataObj);

      // Now that the JSON string has been converted into a JS Object, note
      // that it appears in the format of an array, which in turn has a single
      // element: the JSON object containing the data about the cat breed.
      // Return the breed's description:
      const breedDescription = breedDataObj[0].description;

      // If the request is successful, find the required data from the response,
      // and return null for the `error` and the data for `description`.
      callback(null, breedDescription);

    }

  });

};



// EXPORTS
module.exports = { fetchBreedDescription };