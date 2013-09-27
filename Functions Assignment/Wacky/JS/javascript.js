/**
 * Created with JetBrains WebStorm.
 * User: Emmanuel Barreto
 * Date: 9/20/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 26, 2013 //


//(condition1>condition2) ? console.log(condition1) : console.log(condition2);

function myFunk () {
    var varOne=parseInt(prompt('Choose between 2 or 3'));                             // Prompts user for value
    var varTwo=  [varOne==2, varOne==3]                                               // Gives meaning to variable
    var varEqua= [varOne*1024, varOne*2056]                                           // An array that decides which equation to choose

    var returnEquation='';                                                            // Returns Equation

