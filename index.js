// function retailPriceMaker(manufacturePrice){
//   return function(marketMultiplier){
//     return marketMultiplier * manufacturePrice;
//   }
// }



function produceDrivingRange(blockRange){
  return function(start, end) {
    let miles = parseInt(end) - parseInt(start)
    let span = Math.abs(blockRange - miles)
    return miles < blockRange ? `within range by ${span}` : `${span} blocks out of range`
    }
  }

  function produceTipCalculator() {
    function(){

    }
  }

  function createDriver() {
    let driverId = 0
    return class {
      constructor() {
        this.id = ++driverId
      }
    }
  }
