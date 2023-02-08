'use strict'

// -----task1----------------------

const durationBetweenDates = (dateStart = '31 Jan 2022', dateEnd = '03 Feb 2021', scale = 'days') => {
    let d1 = new Date(dateStart);
    let d2 = new Date(dateEnd);

    let difference = d2.getTime() - d1.getTime();

    if (scale === 'days') {
        let totalDays = Math.abs(Math.round(difference / (1000 * 60 * 60 * 24)));
        return (totalDays + ' days');

    } else if (scale === 'hours') {
        let totalDays = Math.abs(Math.round(difference / (1000 * 60 * 60)));
        return (totalDays + ' hours');

    } else if (scale === 'minutes') {
        let totalDays = Math.abs(Math.round(difference / (1000 * 60)));
        return (totalDays + ' minutes');
    }
    else if (scale === 'seconds') {
        let totalDays = Math.abs(Math.round(difference / 1000));
        return (totalDays + ' seconds');
    }
}
console.log(durationBetweenDates())

// -----task2----------------------

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
}

function optimizer(data) {

   const entries = Object.entries(data);

   return Object.fromEntries (
    entries.map(([key, value]) => {
        return [key.toLowerCase(), Number(value).toFixed(2)];
    })
   );
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) 


// -----task3-1----------------------

function recursiveOddSumTo(number) {
    let sum = 0;

    if (number === 0) {
        return sum;
    } else if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    }
    sum = number + recursiveOddSumTo(number - 1);
    return sum;
}

console.log(recursiveOddSumTo(10))

// -----task3-2----------------------

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(iterativeOddSumTo(10)) 






