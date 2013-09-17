/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/12/13
 * Time: 8:29 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 12, 2013 //

// Stuff your Face I

function Division () {
    var myWeight          = 255;   // =prompt('Set the Initial Value')
    var approvalMessage   = [ "The competitor qualifies for the heavyweight division.", "The competitor needs to gain some weight!"];
    var returnGrade       = '';

            if(myWeight >249)                    {returnGrade= approvalMessage[0]}
       else if(myWeight <248)                    {returnGrade= approvalMessage[1]}

    return returnGrade; }

console.log(Division());



// Celsius to Fahrenheit converter

//   F to C Deduct 32, then multiply by 5, then divide by 9
//   C to F Multiply by 9, then divide by 5, then add 32

function myTemperature () {
    var theTemp            = 66;
    var enterType          = "C"; // =prompt('Set the Initial Value')
    var tempConversion     = [ (theTemp-32)*5/9, (theTemp*9/5)+32 ];
    var typeTemp           = [ enterType=="F", enterType=="C" ];
    var returnTemperature  = '';

         if(typeTemp[0])                    {returnTemperature= tempConversion[0]}
    else if(typeTemp[1])                    {returnTemperature= tempConversion[1]}

         if(typeTemp[0])                    {return "The temperature is " +returnTemperature+ " degrees Celsius.";}
        else                                {return "The temperature is " + returnTemperature+ " degrees Fahrenheit."}

     }

console.log(myTemperature());


// Grade Letter Calculator

function myMathGrade () {
    var numberGrade = 97;   // =prompt('Set the Initial Value')
    var gradeSystem = [ "A", "B", "C", "D", "F"];
    var returnGrade = '';

         if(numberGrade >89)                    {returnGrade= gradeSystem[0]}
    else if(numberGrade >79 && numberGrade<90 ) {returnGrade= gradeSystem[1]}
    else if(numberGrade >69 && numberGrade<80 ) {returnGrade= gradeSystem[2]}
    else if(numberGrade >59 && numberGrade<70 ) {returnGrade= gradeSystem[3]}
    else if(numberGrade <59 )                   {returnGrade= gradeSystem[4]}

    return "You have a "+ numberGrade+"%"+ ", which means you have earned an "+returnGrade+" in the class!";   }

console.log(myMathGrade());


// Tire Pressure I

function tirePressure () {
    var tireSystem    = [ 20, 20, 40, 35];
    var theInspection = [ "The tires pass spec!", "Get your tires checked out!"];
    var returnCheck   = '';

         if(tireSystem[0]==tireSystem[1] &&
            tireSystem[2]==tireSystem[3])      {returnCheck= theInspection[0]}
            else                               {returnCheck= theInspection[1]}

    return returnCheck;   }


console.log(tirePressure());


