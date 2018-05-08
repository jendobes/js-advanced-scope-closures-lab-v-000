// function retailPriceMaker(manufacturePrice){
//   return function(marketMultiplier){
//     return marketMultiplier * manufacturePrice;
//   }
// }


function produceDrivingRange(range){
  return function(miles) {
    return miles < range
  }
}
