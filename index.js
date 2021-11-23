const returnFirstTwoDrivers = function (array) {
    let newArray = array.slice(0,2);
    return newArray;
};

const returnLastTwoDrivers= function (array) {
    let newArray = array.slice((array.length - 2));
    return newArray
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int;
    };
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
};