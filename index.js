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


  function produceDrivingRange(blockRange){
    return function(miles) {
      let span = Math.abs(blockRange - miles)
      return miles < blockRange ? `within range by ${span}` : `${span} blocks out of range`
      }
    }
