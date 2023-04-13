// 
//              ~ Question - 1 ~
// 
//          Given a rating, display a star (*) for each full rating and
//          a full-stop (.) for each half rating.
// 
//
// 
// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += "*"
//         if (i !== Math.floor(rating) - 1) {
//             ratings += " "
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += " .";
//     }
//     return ratings;
// }
// 
// console.log(showRating(3.5))
// 
// 
// 
//              ~ Question - 2 ~
// 
//          Given an array of numbers, return the prices sorted
//          by low to high.
// 
// 
// 
// function sortLowToHigh(numbers) {
//     numbers.sort(function(a, b){
//         if(a > b) return 1;
//         if(a < b) return -1;
//     });
//     return numbers;
// }
// 
// console.log(sortLowToHigh([20, 40, 10, 30, 20000, 50, 10, 1000]))
// 
// 
// or
// 
// 
// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => a - b);
// }
// 
// console.log(sortLowToHigh([20, 40, 10, 30, 20000, 50, 10, 1000]));
// 
// 
// 
//              ~ Question - 3 ~
// 
//          Given an array of objects, return the prices sorted 
//          by high to low.
// 
// 
// 
// function sortHighToLow(numbers) {
//     return numbers.sort((a, b) => b.price - a.price)
// }

// console.log(sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//     ])
// );
// 
// 
// 
//              ~ Question - 4 ~
// 
//          Find all the posts by a single user
// 
//          Call this API "xxx" and return all the posts by any
//          given user id.
// 
// 
// 


//              ~ Question - 5 ~
// 
//          First 6 Incomplete Todos
// 
//          Call this API "xxx" and return the first 6 incomplete
//          todo's from the result.
// 
// 
// 
