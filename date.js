const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  date_input = "";  

  readline.question(`Enter a date of the format YYYYMMDDTHHMMSS`, full_date => {
    is_valid_format = check_input_date(full_date); 
    if (is_valid_format){
        date_input = full_date; 
        readline.close();

    } else {

    }
    
  });

  function check_input_date(check_date){
    matched = false; 
    let date_regex = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]T[0-9][0-9][0-9][0-9][0-9][0-9]/;
    // this regex is jsut checking for the correct pattern of numbers, need to check for appropriate value
    // also need ot determine what an acceptable date is 
    if (date_regex.test(check_date)){
        matched = true; 
    }

    return matched; 
  }

  console.log(date_input); 
