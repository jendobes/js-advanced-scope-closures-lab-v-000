// function retailPriceMaker(manufacturePrice){
//   return function(marketMultiplier){
//     return marketMultiplier * manufacturePrice;
//   }
// }



function produceDrivingRange(blockRange){
  return function(start, end) {
    let miles = parseInt(start) - parseInt(end)
    let span = Math.abs(blockRange - miles)
    return miles > blockRange ? `within range by ${span}` : `${span} blocks out of range`
    }
  }
