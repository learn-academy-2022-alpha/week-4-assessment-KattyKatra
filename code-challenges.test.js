// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

//Create function named colorShuffle
//input is an array of color names
//removes first color in array
//shuffles remaining values in array
//outputs new array with original i=0 removed and others randomized

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('colorShuffle', () => {
  const expected = ["purple", "blue", "green", "yellow", "pink"]
  it('removes first item in array and shuffles remaining values'), () => {
    expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected)
  )
  };
  const expected = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it('removes first item in array and shuffles remaining values'), () => {
      expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(expect.arrayContaining(expected));
  };
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

const colorShuffle = (array) => {
  let firstColor = array.shift()
  let currentIndex = array.length, randomIndex
    while (currentIndex != 0){
      randomIndex = math.floor(Math.random() * currentIndex)
      currentIndex --
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}
colorShuffle(array)
console.log(array);

// Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder. I don't understand this way of doing Jest (granted I can't seem to get Jest normally) and hunting error after error after error for things that shouldn't be an issue (missing a semicolon at the end of a line) is making this even harder/disheartening

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//Create function called minMax
//Input is an array of Numbers
//Isolates highest and lowest value and filters rest
//Outputs [lowest and highest]

// a) Create a test with expect statements for each of the variables provided.
//
describe("minMax", () => {
  it("returns an array of the minimum and maximum numbers"), () => {
    expect(minMax([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90])
    expect(minMax([109, 5, 9, 67, 8, 24])).toEqual([5, 109])
  }
})

// Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder. <- I keep getting this error instead of the undefined error and it's causing every test to fail regardless. What am I doing wrong? Doing two assessments a week is starting to get to me I think.
const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

const minMax = (array) => {
  let min = array[0], max = array[0]

for (let i = 1; i < array.length; i++) {
  let value = array[i]
  min = (value < min) ? value : min
  max = (value > max) ? value : max
}

return [min, max]
}
// console.log(minMax(nums1));
// console.log(minMax(nums2));


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//create function called noDupe
//Inputs two arrays of Numbers
//combines both arrays and filters out duplicate Numbers
//outputs new array

// a) Create a test with an expect statement using the variables provided.

describe("noDupe", () => {
  it("returns the values of two arrays as one with no duplicate numbers"), () => {
    expect(noDupe([3, 7, 10, 5, 4, 3, 3], [7, 8, 2, 3, 1, 5, 4])).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  }
})

//ReferenceError: describe is not defined. Jest is out to get me I swear

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
//
function noDupe(array) {
    let a = array.concat()
    for(let i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1)
        }
    }

    return a
}
const newArray = noDupe(testArray1.concat(testArray2))
console.log(newArray);

//If anything and I do mean anything, will take me down in this course, it WILL be Jest. I'm confident in my coding most of the time, but testing with Jest is such a weak spot for me that it's mild murder every week. I know that the jest tests don't work for my code, but my code works for the challenges most of the time. Maybe I'm over thinking it or maybe I'm hitting a wall there since there isn't a work around I can find. 
