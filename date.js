/**
 * date.js Assignment File
 * @author Deshna Doshi
 */


const { log } = require('node:console');

/**
 * Sets-up the input and output processing from the command line. 
 */
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
let date_input = "";  
let is_valid_format = false; 
let repeat_entry = true;
let log_message = ""; // This is to include information about the date. 
let date_validity = false; 
let final_string = ""; 


/**
 * Reads input from the command line. 
 */
function get_date(){
    log_message = ""; 
    readline.question(`Enter a date of the format YYYYMMDDTHHMMSS (or 'Q' to quit): `, full_date => {
        if (full_date.toLowerCase() === 'q'){
            repeat_entry = false;
            readline.close(); 

        } else {
            is_valid_format = check_input_date(full_date);  

            if (is_valid_format){
                // Can do all of the date checks here, then need to put the below in an if-statement
                date_validity = check_valid_date(full_date); 
                if (date_validity){
                    date_input = full_date; 
                    readline.pause();
                    final_string = date_conversion(date_input);
                } else {
                    log_message = ""; 
                    get_date(); 
                }
                
            } else {
                log_message = ""; 
                get_date(); 
            } 
        }
        

    });
}   

function check_valid_date(check_date){
    is_valid_date = true; // Assuming the format is valid, we can split up the date
    
    let year = parseInt(date_split(check_date).year);
    let month = parseInt(date_split(check_date).month);
    let day = parseInt(date_split(check_date).day);
    let hour = parseInt(date_split(check_date).hour);
    let min = parseInt(date_split(check_date).min);
    let sec = parseInt(date_split(check_date).sec); 

    // Check for year. 
    
    // if (year < 1900){
    //     log_message += "This is an unusually old date. "; 
    // } else if (year > 2100){
    //     log_message += "This is an unusually future date. "; 
    // }

    // Check for month and day. 
    if (month > 12 || month < 1){
        log_message = "This is an invalid date. "; 
        is_valid_date = false; 
    }

    if (day > 31 || day < 1){ 
        is_valid_date = false; // Basic check for date range (need to implement check for specific days)
    }


    if (match_month(year, month, day) == false){
        // Checks if the month matches the month
        is_valid_date = false; 
        log_message = "This is an invalid date. ";
    }

    
    console.log(log_message); 
    
    return is_valid_date; 

}

function match_month(year_num, month_num, days_num){
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        if (days_num > 31 || days_num <= 0){
            return false; 
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11){
        if (days_num > 30 || days_num <= 0){
            return false; 
        }
    } else if (month == 2){
        if (is_leap_year(year_num)){ // If February is a leap year, the days should be less than 29
            if (days_num > 29 || days_num < 0){
                return false; 
            }
        } else {
            if (days_num > 28 || days_num < 0){
                return false; 
            }
        }
    }

    return true; 
}

function is_leap_year (year_num){
    if (year_num % 4 == 0){
        if (year_num % 100 == 0){
            if (year_num % 400 == 0){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    return false;
}

/**
 * Determines if the entered date is of the correct format. 
 * @param {*} check_date The date entered by the user.  
 * @returns True if the date is valid, false otherwise. 
 */
function check_input_date(check_date){
    matched = false; 
    // YYYY MM DD T HH MM SS
    let date_regex = /[0-9][0-9][0-9][0-9][0-1][0-9][0-2][0-9]T[0-2][0-9][0-5][0-9][0-5][0-9]/;
    if (date_regex.test(check_date)){
        matched = true; 
    }

    if (!matched){
        log_message = "This is an invalid date. "; 
        console.log("Please enter a valid date."); 
    }

    return matched; 
}

/**
 * Creating a Date object from the command line input. 
 */
function date_conversion(cmd_input){

    if (!check_valid_date(cmd_input) || !check_input_date(cmd_input)){
        return log_message; 
    }

    date_info = cmd_input.substring(0, 8); // All of the data before the 'T', represents the date
    time_info = cmd_input.substring(9); // All of the data after the 'T', represents the time

    year = date_info.substring(0, 4); 
    month = date_info.substring(4, 6); 
    day = date_info.substring(6); 

    hour = time_info.substring(0, 2); 
    min = time_info.substring(2, 4); 
    sec = time_info.substring(4);

    // year = date_split(date_input).year;
    // month = date_split(date_input).month;
    // day = date_split(date_input).day;
    // hour = date_split(date_input).hour;
    // min = date_split(date_input).min;
    // sec = date_split(date_input).sec;

    date_arg = year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec; 

    date_obj = new Date(date_arg);  
    date_string = ""; 

    month = find_month(date_obj.getMonth()); 
    time_range = find_time_range(date_obj.getHours()); 
    hour = calc_hour(date_obj.getHours()); 
    min = calc_min(date_obj.getMinutes(), date_obj.getSeconds()); 
    sec = calc_sec(date_obj.getSeconds()); 

    date_string = month + " " + date_obj.getDate() + ", " + date_obj.getFullYear() + ", at " + hour + min + sec + " " + time_range; 
    console.log(date_string); 
    
    if (repeat_entry) { 
        get_date();
    } else {
        readline.close();
    }

    return date_string; 
     
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
        case 11:
            return "December";
            break; 
        default:
            return "";
    }

}

/**
 * Maps Date object's numbers to AM/PM. 
 * @param {} num The value of the hour in the Date object. 
 * @returns AM/PM depending on the hour. 
 */
function find_time_range(num){
    if (num >= 12){
        return "PM"; 
    } 

    return "AM"; 
}

/**
 * Transforms 24 hour format to 12 hour format. 
 * @param {} num The value of the hour in the Date object.
 * @returns The 12 hour format time.
 */
function calc_hour(num){
    if (num == 0){
        return 12; 
    }
    if (num > 12){
        return (num - 12); 
    }

    return num; 
}

/**
 * Formats the string for the minutes.
 * @param {} num The value of the minutes in the Date object.
 * @returns Formatted output for the minutes.
 */
function calc_min(num, seconds){
    if (num == 0 && seconds == 0){
        return ""; 
    } else if (num == 0){
        return ":0" + num; 
    }
    return ":" + num; 
}

/**
 * Formats the string for the seconds.
 * @param {} num The value of the seconds in the Date object.
 * @returns Formatted output for the seconds.
 */
function calc_sec(num){
    if (num == 0){
        return ""; 
    } 
    return ":" + num; 
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
console.log(log_message); 
log_message = ""; 


module.exports = { date_conversion };

// Example inputs: 
// 20031105T225911 = November 5, 2003, at 10:59:11 PM 
// 20101213T001500 = December 13, 2010, at 12:15 AM 
// 20101213T000000 = December 13, 2010, at 12 AM
// 20001913T292300 = Invalid
// 18981213T000000 = December 13, 1898, at 12 AM (old)
// 09001213T000000 = December 13, 900, at 12 AM (old)
// 20230229T225911 = February 29, 2023 at 10:59:11 PM (invalid)
// 20240229T225911 = February 29, 2024 at 10:59:11 PM 
// 21021105T225911 = November 5, 2102, at 10:59:11 PM (future)
// 20230227T120011 = February 27, 2023, at 12:00:11 PM (this might be an issue)  