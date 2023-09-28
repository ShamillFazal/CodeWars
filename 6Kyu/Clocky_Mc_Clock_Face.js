var whatTimeIsIt = function(angle) {
    // Divide degrees by minutes in 12 hour period
    // create variables for hours and minute
    // if number great then 60 add 1 hour
    // return hour + minutes in correct format
    // 1 minute = 0.5 degrees
    
    const totalMinutes = Math.floor(angle * 2);
    
    let minutes = Math.floor((angle * 2) % 60);
    let hours = Math.floor(totalMinutes / 60);
    let hoursStr;
    let minutesStr;
  
    if (hours < 10) {
      hoursStr = "0" + hours.toFixed(0);
    } else {
      hoursStr = hours.toFixed(0).toString();
    }
    
    if (minutes < 10) {
      minutesStr = "0" + minutes.toFixed(0);
    } else {
      minutesStr = minutes.toFixed(0).toString();
    }
    
    if (hours === 0) {
      hoursStr = "12";
    }
  
    return hoursStr + ":" + minutesStr;
  }