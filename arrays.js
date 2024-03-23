// let marks=[76,98,76,55,45];
// console.log(marks);
// for loop in arrays
// let heros=["ironman","thor","hulk","shaktiman","spiderman","antman"]
// // for (let idx=0; idx< heros.length; idx++){
// //     console.log(heros[idx]);
// // }



// // for of 
// for (let hero of heros){
//     console.log(hero);
// }


// let cities=["delhi","mumbai","lucknow","banaras","gurgaon"]
//  for (let city of cities){
//     console.log(city.toUpperCase());
//  }

// /* q-1 for a given array with makes of student ->[85,97,44,37,76,60] fine the average marks of the entire class./*

// let marks=[85,97 ,44, 37, 76,60];
// let sum=0;
//  for(let val of marks){
//     sum+=val;
//  }
//  let avg=sum/marks.length;
//  console.log(`avg marks of the class = ${avg}`);


// Let's practice
// for a given array with prices of 5 items ->[250,645,300,900,50] all items have an offer of 10% off on them .change the array to store final price after applying offer.
//  for of loop 
// let items=[250,645,300,900,50];
// let i=0;
//  for (let val of items){
//    console.log(`value at index ${i}=${val}`);
//    let offer=val/10;
//    items[i]=items[i]-offer;
//    console.log(`value after offer = ${items[i]}`);
//    i++;
//  }

// for loop 

// let items=[250,645,300,900,50];
// for (let i = 0; i<items.length; i++){
//    let offer = items[i]/10;
//    items[i]-=offer;
// }

// console.log(items);


// Arrays Methods

// Push(): add to end
// let foodItems=["potato","apple","banana","litchi","tomato"]
// foodItems.push("chips","burger","paneer");
// console.log(foodItems);

// Pop(); delete from end & return

// let foodItems=["potato","apple","banana","litchi","tomato"]
// console.log(foodItems);
// let deleteItem=foodItems.pop();
// console.log(foodItems);
// console.log("delete",deleteItem);

//to String ();converts array to string
// let foodItems=["potato","apple","banana","litchi","tomato"]
// console.log(foodItems);
// console.log(foodItems.toString());//to string ek new string return karta hai 

//Concat ();joins multiple arrays&returns result
//  let marvel_heroes=["thor","spiderman","ironman"];
//  let indian_heroes=["shaktiman","krish"];
//  let dc_heroes=["superman","batman"]; 

//  let heroes=marvel_heroes.concat(dc_heroes).concat(indian_heroes);
//  console.log(heroes);

// Unshift(): add to start 
// let marvel_heroes=["thor","spiderman","ironman"];
// marvel_heroes.unshift("antman");
 
// slice():returns a piece of the array 
//slice(startIdx,endIdx) ->original array ke under change nhi karta hai 

// let marvel_heroes=["thor","spiderman","ironman","antman","Dr.Strange"];
// console.log(marvel_heroes);

// console.log(marvel_heroes.slice(1,3));

// splice():change original arrya (add,remove,replace)
// splice(startIdx,delCount,newEl1....)

// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// Add Elment
// arr.splice(2,0,101);
// Delete Element
// arr.splice(3,1);
//Replace Elment
// arr.splice(3,1,104);



//Create an array to store companies->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//  a.Remove the first company from the array
// b.Remove Uber&Add Ola in its place
// c.Add Amazon at the end

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
companies.splice(2,1,"Ola")
companies.push("Amazon");