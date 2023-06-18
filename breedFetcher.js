/* M02 W05 CHALLENGE: CATS AS A SERVICE
 *
 * We didn't get to spend enough time with cats, don't you think?
 *
 * The last time we talked about cats, we learned how to use `fs` to read cat
 * breed information from text files stored on our local drive. The real goal
 * there wasn't to learn about cat breeds. It was about exploring the async
 * nature of Node, especially when dealing with I/O (input and output) of data.
 *
 * We had a very limited data set though, didn't we? Just two cat breeds! And
 * our information could also be outdated. Luckily, there's an HTTP API that
 * provides more extensive JSON data about Cats!
 *
 * It's called TheCatAPI and their slogan is awesome: "Cats as a Service,
 * Everyday is Caturday."
 *
 * Website: https://thecatapi.com/
 * API Docs: https://github.com/lighthouse-labs/cats-api/blob/main/README.md
 * Cat Breed Search API: https://api.thecatapi.com/v1/breeds/search?q=Breed-Name
 * (You can paste the last link into the browser an get back a JSON file.)
 *
 * The best part is that it's free, and there's no cat-ch!
 *
 *
 * THE `request` LIBRARY
 *
 * We'll be using the request library again, which we recently played with by
 * building a cool little Page Downloader. Our page downloader fetched HTML
 * content.
 *
 * HTML is not raw data. It's meant for displaying content in a browser. We
 * want raw data and JSON is great for that. We haven't yet used a JSON API to
 * fetch raw, structured data. This exercise will let us practice just that!
 *
 *
 * BREED DETAILS FETCHER
 *
 * As a proof of concept, let's build a command line app that makes it "easy"
 * for users to query this dataset from the terminal. Users can provide any
 * breed name, causing our application to fetch the information from the API
 * and print out a short description of that breed.
 *
 * Note: Warning! The documentation for TheCatAPI mentions that an API key is
 * required for deeper integration. However, we are using the API very lightly
 * and will not need to bother using an API Key.
 */


// IMPORTS
const request = require("request");


// GLOBAL STATE
// This is a URL offered by TheCatAPI. Specifically, it corresponds to
// to this API `GET /breeds/search`. This API lets you search this website's
// Cat Breed database. It returns data in JSON format.
const APIUrl = "https://api.thecatapi.com/v1/breeds/search?q=";



// This function creates the final API search string, puts out a request to the
// TheCatAPI and retrieves cat breed information, and logs it to the console.
const retrieveCatBreedData = function() {

  // CAPTURE AND SORT CLI INPUT
  // The user must enter the breed name as a CLI argument (to search for it).
  const breedName = process.argv[2];
  // Concatenate the API URL and the user-entered breed name in order to create
  // an API search string.
  const finalURL = APIUrl.concat(breedName);

};


retrieveCatBreedData();