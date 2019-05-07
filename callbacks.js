// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return String(word) + "s"
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	let newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

var alphabet = ''
var letters = ['a', 'b', 'c', 'd']
forEach(letters, function(char) {
  alphabet += char
})
console.log(alphabet)

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	let newArray = []
  array.forEach(item => {
    newArray.push(callback(item))
  })
  return newArray
}

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  var acc = initialValue;
	array.forEach(item => {
    acc = callback(acc, item)
  })
  return acc;
}

var nums = [4, 1, 3];
var add = function(a, b) { 
  return a + b; 
}
console.log(reduce(nums, add, 0))


//Extension 3
function intersection(...arrays) {
  return arrays.reduce((acc, nextValue) => {
    console.log('nextValue', nextValue)
    console.log('acc', acc)
    
    return acc.filter(item => nextValue.indexOf(item) > -1)
    
  }, arrays.shift());
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return arrays.reduce((acc, nextValue) => {
    console.log('nextValue', nextValue)
    console.log('acc', acc)
    
		var missing = nextValue.filter(item => acc.indexOf(item) < 0)
    return acc.concat(missing)
  }, arrays.shift());
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let obj = {};
	array1.forEach((item, index) => {
    if (callback(item) == array2[index]) { 
      obj[item] = array2[index] 
    }
  })
  return obj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let obj = {};
  arrVals.forEach((item,index) => {
    obj[item] = arrCallbacks.map(callback => callback(item))
  })
  return obj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
