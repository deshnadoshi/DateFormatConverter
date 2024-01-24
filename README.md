# ECE452: Software Engineering Assignment 1

### Algorithm Design Description: 

Test methods in date.spec.js contain comments regarding description of test case. Functions in date.js contain comments regarding functionality. 

User will be prompted to enter a date until 'q' or 'Q' is entered. (Program can be terminated via Ctrl-C or via 'q'/'Q'). 

#### Valid vs. Invalid Date Constraints

Dates entered in a format that do not follow YYYYMMDDTHHMMSS exactly are considered invalid. 

Leap years and non-leap years are considered in determining if a date is valid/invalid (specifically, applying to dates in February). 

#### Date Formatting Implementations

In times where the minutes and/or seconds are 00, these portions will be truncated. Barring the case where minutes are 00 and seconds are non-zero. See the examples below for a clarification. 
i.e. 20230124T023900 will be January 24, 2023, at 2:39 AM
i.e. 20230124T020000 will be January 24, 2023, at 2 AM
i.e. 20230124T020016 will be January 24, 2023, at 2:00:16 AM

Leading zeros in years or single-digit days are truncated. 
i.e. 08920124T023900 will be January 24, 892, at 2:39 AM
i.e. 20230108T023900 will be January 8, 2023, at 2:39 AM









