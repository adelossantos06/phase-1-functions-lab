
function distanceFromHqInBlocks(passangerLocation) {
    const HQ = 42;
    const greaterThanFortyTwo = (passangerLocation - HQ);
    const lessThanFortyTwo = (HQ - passangerLocation);
    return (greaterThanFortyTwo > 0 ? greaterThanFortyTwo : lessThanFortyTwo)
};


function distanceFromHqInFeet(feetDistance) {
    return (distanceFromHqInBlocks(feetDistance)) * 264
}


function distanceTravelledInFeet(start, destination) {
    return (distanceFromHqInBlocks(destination) - distanceFromHqInBlocks(start)) * 264
}


function calculatesFarePrice(start, destination) {
    const travelledInFeet = distanceTravelledInFeet(start, destination);
    if (travelledInFeet < 400) {
        return 0
    } else if (travelledInFeet > 400 && travelledInFeet < 2000) {
        return (travelledInFeet - 400) * .02
    } else if (travelledInFeet > 2000 && travelledInFeet < 2500) {
        return 25
    } else if (travelledInFeet > 2500) {
        return 'cannot travel that far'
    }
}

