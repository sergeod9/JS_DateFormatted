# JS_DateFormatted
DateForatted class simplifies the process of getting a formatted date and time.
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
