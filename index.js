
// const message = "Java-Sc,ript - це цікаво";
// console.log(message.split(" "));



// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit === true) {
//   console.log(`${fruit} is a red fruit!`);
// }
// const serhii = {};
// serhii.name = 'serii';
// serhii.age = 38;

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong"));

// serhii.height = 185;
// console.log(serhii);

// const raisa = 359;
// switch (raisa)
// {
//     case 20:
//         alert('fgge kgjnbc');
//         break;
//     case 35:
//         alert('ooyeeee');
//         break;
//     case 85:
//         alert('you are old');
//         break;
//     default:
//         alert('you are lacky');
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };


// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys = key;
//   values.push(apartment[key]);
// };
// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
    
//     values.push(apartment[key]);
//   }
    
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


function getProductPrice(productName) {
  // Change code below this line
for (let product of products) {
  if ("Scanner" === product.name) {
     console.log(product.price);
  }
 
}

  // Change code above this line
}
