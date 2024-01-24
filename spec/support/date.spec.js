/**
 * date.js Jasmine Test File
 * @author Deshna Doshi
 */


const { date_conversion } = require('../../date');

describe ('Date Converter', () => {
    // Test Case 1: Correctly convert a valid calendar date to its US representation.
    it ('should convert a valid calendar date to its US representation', () => {
        const test_date = "19980118T230000"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("January 18, 1998, at 11 PM"); 
    }); 

    // Test Case 2: Check for the correct number of days in February for a leap year. 
    it ('should not allow a non-leap year Feburary to have 29 days', () => {

        const test_date = "20230229T122911"; 
        const result = date_conversion(test_date); // can't call date conversion here, bc it actually converts the date

        expect(result).toBe("This is an invalid date. "); 
    }); 

    // Test Case 3: Check for the correct number of days in February for a leap year. 
    it ('should allow a leap year Feburary to have 29 days', () => {

        const test_date = "20240229T111300"; 
        const result = date_conversion(test_date); // can't call date conversion here, bc it actually converts the date

        expect(result).toBe("February 29, 2024, at 11:13 AM"); 
    }); 

    // Test Case 4: Check for an appropriate entry for the month value. 
    it ('should not allow a month outside the range 1-12', () => {

        const test_date = "20001321T110000"; 
        const result = date_conversion(test_date); // can't call date conversion here, bc it actually converts the date

        expect(result).toBe("This is an invalid date. "); 
    }); 

    // Test Case 5: Check for an invalid format of entry. 
    it ('should not accept a date that does not follow the required format', () => {
        const test_date = "Y1998M10D05H12M24S12"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });

    // Test Case 6:The maximum number of days can only be 31 for the following months: Jan, Mar, May, Jul, Aug, Oct, Dec.
    it ('should not accept a month without 31 days to have 31 days', () => {
        const test_date = "18980931T000000"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });


})

