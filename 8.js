//8
function dateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
  
    const [d1, m1, y1] = date1.split('/');
    const [d2, m2, y2] = date2.split('/');
    const dateObject1 = new Date(y1, m1 , d1);
    const dateObject2 = new Date(y2, m2 , d2);
  
    const diffMilliseconds = Math.abs(dateObject1 - dateObject2);
    const diffDays = Math.floor(diffMilliseconds / oneDay);
  
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays - years * 365 - months * 30;
    
  
    return `${years} year ${months} month ${days} day`;
  }
  const date1 = '01/07/2018';
const date2 = '03/05/2020';
const difference = dateDifference(date1, date2);
console.log(difference); 