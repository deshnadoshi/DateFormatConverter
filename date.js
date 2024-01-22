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
 * Converts the date from command line input to a Date object. 
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