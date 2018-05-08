// function retailPriceMaker(manufacturePrice){
//   return function(marketMultiplier){
//     return marketMultiplier * manufacturePrice;
//   }
// }


function produceDrivingRange(blockRange){
  return function(miles) {
    return (miles < blockRange ? `within range by ${blockRange - miles}` : `${miles - blockRange} out of range`)
    }
  }
}
