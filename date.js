// STUFF TO DO
// will need to check for date validity before doing all the conversions
// so it needs to be checked at the same time as input redos


/**
 * Sets-up the input and output processing from the command line. 
 */
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
date_input = "";  
is_valid_format = false; 

/**
 * Reads input from the command line. 
 */
function get_date(){
    readline.question(`Enter a date of the format YYYYMMDDTHHMMSS: `, full_date => {
        is_valid_format = check_input_date(full_date);  

        if (is_valid_format){
            date_input = full_date; 
            readline.close();
            date_conversion();
        } else {
            get_date(); 
        } 

    });
}   

/**
 * Determines if the entered date is of the correct format. 
 * @param {*} check_date The date entered by the user.  
 * @returns True if the date is valid, false otherwise. 
 */
function check_input_date(check_date){
    matched = false; 
    // YYYY MM DD T HH MM SS
    let date_regex = /[0-9][0-9][0-9][0-9][0-1][0-9][0-2][0-9]T[0-9][0-9][0-5][0-9][0-5][0-9]/;
    if (date_regex.test(check_date)){
        matched = true; 
    }

    if (!matched){
        console.log("Please enter a valid date."); 
    }

    return matched; 
}

/**
 * Creating a Date object from the command line input. 
 */
function date_conversion(){
    year = date_split(date_input).year;
    month = date_split(date_input).month;
    day = date_split(date_input).day;
    hour = date_split(date_input).hour;
    min = date_split(date_input).min;
    sec = date_split(date_input).sec;

    date_arg = year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec; 
    console.log(date_arg); 

    const date_obj = new Date(date_arg);  
    const date_string = ""; 
    // In the date object, Month is 0 indexed, Hours, Sec, Min all start at 0. 

    month = find_month(date_obj.getMonth()); 
    date_string = month + " " + date_obj.getDate() + ", " + date_obj.getFullYear() + ", at "; 
    
    

     
}

/**
 * Maps Date object's numbers to month string. 
 * @param {} num The value of the month in the Date object. 
 * @returns The full name of the month. 
 */
function find_month(num){
    switch (num){
        case 0:
            return "January"; 
            break; 
        case 1: 
            return "February"; 
            break; 
        case 2: 
            return "March"; 
            break; 
        case 3:
            return "April";
            break;
        case 4: 
            return "May";
            break; 
        case 5: 
            return "June"; 
            break; 
        case 6: 
            return "July"; 
            break; 
        case 7:
            return "August"; 
            break; 
        case 8:
            return "September";
            break;
        case 9: 
            return "October"; 
            break;
        case 10:
            return "November"; 
            break;
        default:
            return "December";
    }

}



/**
 * Splits the date apart into year, month, day, hour, minute, and second. 
 * @param {} cmd_input The date entered by the user. 
 * @returns The different components of the date (such as, year, month, etc.). 
 */
function date_split(cmd_input){
    date_info = cmd_input.substring(0, 8); // All of the data before the 'T', represents the date
    time_info = cmd_input.substring(9); // All of the data after the 'T', represents the time

    year = date_info.substring(0, 4); 
    month = date_info.substring(4, 6); 
    day = date_info.substring(6); 

    hour = time_info.substring(0, 2); 
    min = time_info.substring(2, 4); 
    sec = time_info.substring(4); 

    return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        min: min,
        sec: sec
    };

}


get_date(); 

// Example input to use: 20031105T225911 = November 5, 2003, at 10:59:11 PM 