//10
function getTimeDifferences(date1, date2) {
    const oneMinute = 60 * 1000; 
    const oneHour = oneMinute * 60; 
    const oneDay = oneHour * 24; 
    const oneWeek = oneDay * 7; 
    const oneMonth = oneDay * 30; 
    const oneYear = oneDay * 365; 
  
    const [d1, m1, y1] = date1.split(/-|\//);
    const [d2, m2, y2] = date2.split(/-|\//);
    const dateObject1 = new Date(y1, m1 , d1);
    const dateObject2 = new Date(y2, m2 , d2);
  
    const diffMilliseconds = Math.abs(dateObject1 - dateObject2);
    const diffMinutes = Math.floor(diffMilliseconds / oneMinute);
    const diffHours = Math.floor(diffMilliseconds / oneHour);
    const diffDays = Math.floor(diffMilliseconds / oneDay);
    const diffWeeks = Math.floor(diffMilliseconds / oneWeek);
    const diffMonths = Math.floor(diffMilliseconds / oneMonth);
    const diffYears = Math.floor(diffMilliseconds / oneYear);
  
    const years = diffYears;
    const months = diffMonths - diffYears * 12;
    const weeks = diffWeeks - diffMonths * 4;
    const days = diffDays - diffWeeks * 7;
    const hours = diffHours - diffDays * 24;
    const minutes = diffMinutes - diffHours * 60;
  
    return `${years} year ${months} month ${weeks} week ${days} day ${hours} hour ${minutes} minute`;
  }
  
  const date1 = '01-07-2018';
const date2 = '03/05/2020';
const differences = getTimeDifferences(date1, date2);
console.log(differences);

