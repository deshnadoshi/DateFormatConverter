const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  date_input = "";  

  readline.question(`Enter a date of the format YYYYMMDDTHHMMSS`, full_date => {
    date_input = full_date; 
    readline.close();
  });

  console.log(date_input); 