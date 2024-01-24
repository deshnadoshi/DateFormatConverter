# ECE452: Software Engineering Assignment 1
#### Deshna Doshi, dd1035, 206009273
### Algorithm Design Description: 

1. Test methods in **date.spec.js** contain comments regarding description of test case. Functions in **date.js** contain comments regarding functionality. 

2. User will be prompted to enter a date until 'q' or 'Q' is entered. (Program can be terminated via Ctrl-C or via 'q'/'Q'). 

#### Valid vs. Invalid Date Constraints

1. Dates entered in a format that do not follow YYYYMMDDTHHMMSS exactly are considered invalid. This parameter also handles issues with entering negative dates. 

2. Leap years and non-leap years are considered in determining if a date is valid/invalid (specifically, applying to dates in February). 

3. Hour values larger than 23, minute values larger than 59, and seconds values larger than 59 are considered invalid.

4. Month values beyond 1-12 are considered invalid. Days beyond the specific number of days for each month are considered invalid. 

5. Unusually old and unusually future dates are accepted, as there are no business policies that would suggest these dates would be invalid. Only future dates upto four digits are valid. Only old dates upto the year 0 are valid. 

#### Date Formatting Implementations

1. In times where the minutes and/or seconds are 00, these portions will be truncated. Barring the case where minutes are 00 and seconds are non-zero. See the examples below for a clarification. 

i.e. 20230124T023900 will be January 24, 2023, at 2:39 AM

i.e. 20230124T020000 will be January 24, 2023, at 2 AM

i.e. 20230124T020016 will be January 24, 2023, at 2:00:16 AM  


2. Leading zeros in years or days are truncated. 

i.e. 08920124T023900 will be January 24, 892, at 2:39 AM

i.e. 20230108T023900 will be January 8, 2023, at 2:39 AM











