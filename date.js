const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
date_input = "";  
is_valid_format = true; 

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

function date_conversion(){
    date_info = date_input.substring(0, 8); // All of the data before the 'T', represents the date
    time_info = date_input.substring(9); // All of the data after the 'T', represents the time

    console.log(date_info); // delete later
    console.log(time_info); // delete later

}

get_date(); 

// Example input to use: 11110011T110011