// alert("connected")

var input = prompt("Enter a year")
if (input <=0) {
  alert("enter valid number")
}else{
var leapYear = function(year) {
  return ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0) && (year !== 0))
};
  if (leapYear(input) === true) {
    alert("LeapYear")
  }else {
    alert("not a leap year")
  }
}
