// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;}

function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  const blocksTravelled = Math.abs(startBlock - endBlock);
  return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare = 0;

  if (distance <= 400) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    fare = 25;
  } else {
    return 'cannot travel that far';
  }

  return fare;
}
