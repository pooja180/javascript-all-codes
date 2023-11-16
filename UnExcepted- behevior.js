/*

UnExcepted Chrome console behavior 
If you're running console.log() from a JS file, this undefined line should not be appended.

If you're running console.log() from the console itself, undefined line appending 
his is why: In the console you can type a name of a variable (for example try typing window) and it prints info about it.
When you run any void function (like console.log) from the console, it also prints out info about the return value, undefined in this case.

        find answer why:-
        67


        The console will print the result of evaluating an expression. The result of evaluating console.log() is undefined 
        since console.log does not explicitly return something. It has the side effect of printing to the console.

        You can observe the same behavior with many expressions:

        > var x = 1;
        undefined;

        A variable declaration does not produce a value so again undefined is printed to the console.

        As a counter-example, expressions containing mathematical operators do produce a value which is printed to the console instead of undefined:

        > 2 + 2;
        4

*/
