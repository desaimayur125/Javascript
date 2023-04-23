//7
function getMonthNameFromDate(dateString) {
    const dateParts = dateString.split(/[-/]/);
    const monthIndex = parseInt(dateParts[1], 10) -1 ;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthIndex];
  }
  
  console.log(getMonthNameFromDate('01-07-2020'));
