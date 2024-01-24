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
    it ('should not accept a month with 31 days to have more than 31 days', () => {
        const test_date = "18980332T000000"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });

    // Test Case 7: The maximum number of days can only be 30 for the following months: Apr, Jun, Sep, Nov.
    it ('should not accept a month with 30 days to have more than 30 days', () => {
        const test_date = "09000931T000000"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });

    // Test Case 8: An unusually old, but valid date should be recognized and converted.
    it ('should accept an unusually old, but valid date', () => {
        const test_date = "09001213T000000"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("December 13, 900, at 12 AM"); 
    });

    // Test Case 9: An unusually future, but valid date should be recognized and converted.
    it ('should accept an unusually future, but valid date', () => {
        const test_date = "21021105T210030"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("November 5, 2102, at 9:00:30 PM"); 
    });

    // Test Case 10: A negative date is not acceptable. 
    it ('should not accept a negative date', () => {
        const test_date = "-20230227T120011"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });

    // Test Case 11: An hour value above 24 should be invalid. 
    it ('should not accept an hour value greater than 23', () => {
        const test_date = "20031105T255911"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });

    // Test Case 12: A minute value above 59 should be invalid. 
    it ('should not accept an minutes value greater than 59', () => {
        const test_date = "20031105T226011"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });

    // Test Case 13: A second value above 59 should be invalid. 
    it ('should not accept an seconds value greater than 59', () => {
        const test_date = "20031105T225971"; 
        const result = date_conversion(test_date); 

        expect(result).toBe("This is an invalid date. "); 
    });




})

