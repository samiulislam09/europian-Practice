const year = 1700;
if (year != NaN) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log('Leap year');
    } else {
        console.log('Not a leaap year');
    }
}