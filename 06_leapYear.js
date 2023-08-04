
var leapYear = function(year){
  if (year%4==0) {
    console.log(`${year} is the Leap year`);
  } else {
    if (year%4!==0) {
        console.log(`${year} is not a leap year`);
    }
  }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear(undefined);
leapYear("Twenty twenty");
leapYear(NaN);
leapYear(1750);
