// IMPORTS
const { fetchBreedDescription } = require("../breedFetcher.js");
const { assert } = require("chai");


// TEST FOR `breedFetcher.js`
describe("fetchBreedDescription", () => {
  it("This test returns a string description for a valid breed, via a callback.", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {

      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});