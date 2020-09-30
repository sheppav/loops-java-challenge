const names = [
    "Annika",
    "Charles",
    "Simon",
    "Gupta",
    "Jordan",
    "Michael",
    "Steve",
    "Jo",
    "Sam",
    "Matt",
    "Ollie",
    "Becky",
    "Naomi",
    "Sally"
];
// 1. Loop through the names and printall names that are 5 or fewer characters long
//make a loop
//make sure it loops the whole array length
//filter names if its 5 characters or less
//console log those names

//for (let i = 0; i < names.length; i++) {
    //if (names [i].length <= 5) {
      //  console.log  (names[i])
    //}
//}

// 2. Loop through the names and build a new array of names that begin with "J"
//make a loop
//make sure it loops the whole array length
//filter names that start with J
//console log those names

// for (let i = 0; i < names.length; i++) {
//    if (names [i].startsWith ("J")) {
 //       console.log  (names[i])
 //   }
 //   }


 // 3. Loop through the names and build a new array of names which contain the letter "O"
// make a loop
//make sure it loops the whole array length
//filter the names that contain the letter o
//console log those names


 for (let i = 0; i < names.length; i++) {
    if (names [i].includes ("o")) {
        console.log  (names[i])
    }
}