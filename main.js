const path = require('path');

// TODO: Use path.join to join two file path segments
const segment1 = process.argv[2];
const segment2 = process.argv[3];

// Check if both segments are provided
if (!segment1 || !segment2) {
  console.error("Error: Please provide two file path segments as arguments.");
  process.exit(1);
}

// Use path.join to join two file path segments
const joinedPath = path.join(segment1, segment2);


// TODO: Print the resulting path to the console
console.log("Joined Path:", joinedPath);
