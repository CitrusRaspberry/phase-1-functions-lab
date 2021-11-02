function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((end - start) * 264);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
   if (distance > 2500) {
     return 'cannot travel that far';
   } else if (distance > 2000) {
     return 25;
   } else {
     return (Math.max(distance - 400, 0) * 0.02);
   }
}
