/* DateForatted class simplifies the process of getting a formatted date and time.
How to use:
1- Make sure you include the link to the file before the link to the js file that is using this module. 
2- create an instance of the class. example: let df = new DateFormatted();

METHODS:
- getYear()
    ++ returns the full year 4 digits
- getMonth_long()
    ++ returns the full name of the month
- getMonth_short()
    ++ returns the short 3 letters version of the month, exmp: Jan
- getMonth_digits()
    ++ returns the month in a 2 digits format, expm: january will be 01
- getDate()
    ++ returns today's date in 2 digits format
- getDay_long()
    ++ returns today's full name, exmp: Sunday
- getDay_short()
    ++ returns today's short name version, exmp: Sun
- getTime12_long()
    ++ returns the time including hours, minutes, and seconds in 12 hours format
- getTime12_short()
    ++ returns the time including hours, and minutes in 12 hours format
- getTime24_long()
    ++ returns the time including hours, minutes, and seconds in 24 hours format
- getTime24_short()
    ++ returns the time including hours, and minutes in 24 hours format
*/

class DateFormatted{

  today = new Date();
  month = ["January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"];

  day = ["Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"];
  
  getDay_long(){
    return this.day[today.getDay()]
  }
  getDay_short(){
    return this.day[today.getDay()].slice(0,3);
  }
  getDate(){
    return ("0" + today.getDate()).slice(-2);
  }
  getMonth_long(){
    return this.month[today.getMonth()];
  }
  getMonth_short(){
    return this.month[today.getMonth()].slice(0,3);
  }
  getMonth_digits(){
    return ("0" + (today.getMonth()+1)).slice(-2);
  }
  getYear(){
    return today.getFullYear();
  }
  getTime12_long(){
    h= ("0" + today.getHours()).slice(-2);
    m = ("0" + today.getMinutes()).slice(-2);
    s = ("0" + today.getSeconds()).slice(-2);
    if (today.getHours() > 12){
      dayPeriod = "PM";
      h= ("0" + (today.getHours() - 12)).slice(-2);
    }
    else {
      dayPeriod = "AM";
    }
      return `${h}:${m}:${s} ${dayPeriod}`;
  }
  getTime24_long(){
    h= ("0" + today.getHours()).slice(-2);
    m = ("0" + today.getMinutes()).slice(-2);
    s = ("0" + today.getSeconds()).slice(-2);
      return `${h}:${m}:${s}`;
  }
  getTime12_short(){
    return `${this.getTime12_long().slice(0,5)} ${this.getTime12_long().slice(-2)}`;
  }

  getTime24_short(){
    return this.getTime12_long().slice(5);
  }

}
