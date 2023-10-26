// Parameters - I need to create 2 function each named 'celsiusToFahrenheit' and 'fahrenheitToCelsius' to convert temperatures between 
//              celsius and fahrenheit. I am given 2 formulas to return the converted values: Fahrenheit = (Celsius * 1.8) + 32 & 
//              Celsius = (Fahrenheit - 32) / 1.8. Also, I am given another function to create called 'convertTemperature' that takes
//              a temperature value and a unit string ("C" for Celsius or "F" for Fahrenheit) as parameters.
// Results - User inputs 2 values (a number and temp unit) and depending on the the given inputs, the appropriate function will convert the 
//             temp to the other unit and return the result.
// Examples - User will input (43, "C") and function will return (109.4, "F")
// Pseudocode - Using the given parameters, I will create 3 functions. 2 functions will be specifically to return their perspective temperature
//              conversion formulas. 1 function will serve as the function that receives the user input and directs the function to call on 1
//              of the functions with the temp conversion formula. I need to make sure to add an error message if user incorrectly gives invalid
//              values. I will use if else statements to ensure the proper formula will be used based on user inputs. I will ensure decimal 
//              place equals 1. 


function celsiusToFahrenheit(tempValue) {
    return ((tempValue * 1.8) + 32).toFixed(1);
  }
  function fahrenheitToCelsius(tempValue) {
    return ((tempValue - 32) / 1.8).toFixed(1);
  }
  
  function convertTemperature(tempValue, unitString) {
    if (unitString === "C") {
        return celsiusToFahrenheit(tempValue);
    } else if (unitString === "F") {
        return fahrenheitToCelsius(tempValue); 
    } else if (typeof tempValue !== "number" || (unitString !== "F" && typeof unitString !== "C")) {
        return "Error! Please use numberic value e.g. 5 for tempValue. Use F for fahrenheit or C for celsius.";
    }
  }
  
  console.log(convertTemperature(60, "F"));
  console.log(convertTemperature(23, "C"));