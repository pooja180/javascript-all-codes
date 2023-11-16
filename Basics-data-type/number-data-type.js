/*
 1. this number is javascript store as float value, however the dot is not display if there is no digits after 
decimal point output will be 5 but you gave 5.899 then output will be 5.899
*/

let value = 5; // output :- 5

let dValue = null; // output  -- 4.58

value = true; // weekly language example

/* ******************************** When you convert values into  Number  ***************************************** 

     Two convert values into number there two ways 
        1. function :- Number()
        2. constructor :- new Number()  (this convert number into object mostly not used code)
        
        
 */

/*

Imp Note :-
           When used as a function, Number(value) converts a string or other value to the Number type.
            If the value can't be converted, it returns NaN.
            that why following console values is NaN
        
        */

// ------------------------------   Output ----------------------------------
console.log(Number(undefined)); // NaN

console.log(Number(null)); // 0

console.log(Number(true)); // 1

console.log(Number(false)); //0

console.log(Number("3.34")); // 3.34 this number so you valid value of that number that why you get this output

console.log(Number("number")); // NaN this reason above in imp notes read carefully but this string does not have valid number that why get nan value

console.log(Number("#$748")); // NaN this reason above in imp notes read carefully

console.log(Number("\t 373.39")); // ignores leading and trailing whitespace

//
console.log(Number({})); // NaN

/*        Strings are converted by parsing them as if they contain a number literal like '133','5665' but
          Parsing failure results in NaN. There are some minor differences compared to an actual number literal:
          When converting the empty string to a number, NaN would arguably be a better result.
          The result 0 was chosen to help with empty numeric input fields, in line with what other
          programming languages did in the mid-1990s.1 

*/

console.log(Number("")); //0 ; the empty string is converted to 0. mdn document

console.log(Number([])); // 0

/****************************************  Parse Float  ************************************************** */

/*
        Que :- what difference between Number() and parseFloat() methods
        Ans:-

      

        parseFloat:-(ref - speaking js book and mdn)
                  1.parse function take string value as argument and return parsed float number .
                  2. converts str to string, trims leading whitespace, and then parses the longest prefix that
                    is a floating-point number. If no such prefix exists (e.g., in an empty string), NaN is
                    returned.
                  3.this method convert argument to string before parsing it ,thats why this less efficient for non-string values.
                  4.parseInt treat argument as string same time its gets NaN for actual numbers also 
                  E.g.below
                  4. Main use this method 
                      1.parseFloat() parses until the last legal character, meaning you get a result where you may not want one

                          E.g 
                          console.log(parseFloat("123@78")); // 123 above explanation

                           console.log(parseFloat("123.45#")); // 123.45 above explanation

                            console.log(Number("123%#")); // 0 

                  5.parseFloat() ignores leading (before string tab,space etc) whitespace and
                     stops before illegal characters (which include whitespace): accepted 0-9 ,. ,+,- e/E when parsing this only parse 

                  6.If the argument's first character can't start a legal number literal per the syntax above, parseFloat return NaN

                    console.log(parseFloat("tyy")); // NaN


*/

console.log(parseFloat(true)); //output: NaN because treat as parseFloat('true') you don't have number value for string true

console.log(Number(true)); // 1

console.log(parseFloat(null)); // NaN same explanation as above

console.log(Number(null)); // 0

console.log(parseFloat("")); // NaN above explanation

console.log(Number("")); // 0

console.log(parseFloat("tyy")); // NaN
