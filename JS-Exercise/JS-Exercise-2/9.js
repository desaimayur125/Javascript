//9 
function convertUnixTimestamp(timestamp) {
    const dateObject = new Date(timestamp * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'long ',
    };
    return dateObject.toLocaleString('en-US', options);
  }
  const timestamp = 1607518718;
const dateAndTime = convertUnixTimestamp(timestamp);
console.log(dateAndTime); 


