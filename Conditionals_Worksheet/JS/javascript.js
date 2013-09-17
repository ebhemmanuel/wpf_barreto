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
    var myWeight          = prompt('Enter your weight(lb):');   // =prompt('Set the Initial Value')
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
    var theTemp           = prompt('Enter the tempature value in Celsius:');   // =prompt('Set the Initial Value')
    var tempConversion    = [ theTemp-=32*5/9, theTemp*=9/5+35 ];
    var returnTemperature = '';

    if(theTemp ()+"F")                    {returnTemperature= tempConversion[0]}
    else if(theTemp ()+"C")                    {returnTemperature= tempConversion[1]}

    return returnTemperature; }

console.log(myTemperature());



// Last Chance for Gas!



// Grade Letter Calculator

function myMathGrade () {
    var numberGrade = prompt('Enter the Grade # for math:');   // =prompt('Set the Initial Value')
    var gradeSystem = [ "A", "B", "C", "D", "F"];
    var returnGrade = '';

         if(numberGrade >89)                    {returnGrade= gradeSystem[0]}
    else if(numberGrade >79 && numberGrade<90 ) {returnGrade= gradeSystem[1]}
    else if(numberGrade >69 && numberGrade<80 ) {returnGrade= gradeSystem[2]}
    else if(numberGrade >59 && numberGrade<70 ) {returnGrade= gradeSystem[3]}
    else if(numberGrade <59 )                   {returnGrade= gradeSystem[4]}

    return returnGrade;   }

console.log(myMathGrade());

function myEnglishGrade () {
    var numberGrade = prompt('Enter the Grade # for English:');
    var gradeSystem = [ "A", "B", "C", "D", "F"];
    var returnGrade = '';

         if(numberGrade >89)                    {returnGrade= gradeSystem[0]}
    else if(numberGrade >79 && numberGrade<90 ) {returnGrade= gradeSystem[1]}
    else if(numberGrade >69 && numberGrade<80 ) {returnGrade= gradeSystem[2]}
    else if(numberGrade >59 && numberGrade<70 ) {returnGrade= gradeSystem[3]}
    else if(numberGrade <59 )                   {returnGrade= gradeSystem[4]}

    return returnGrade;   }


console.log(myEnglishGrade());

function myHistoryGrade () {
    var numberGrade = prompt('Enter the Grade # for History:');
    var gradeSystem = [ "A", "B", "C", "D", "F"];
    var returnGrade = '';

         if(numberGrade >89)                    {returnGrade= gradeSystem[0]}
    else if(numberGrade >79 && numberGrade<90 ) {returnGrade= gradeSystem[1]}
    else if(numberGrade >69 && numberGrade<80 ) {returnGrade= gradeSystem[2]}
    else if(numberGrade >59 && numberGrade<70 ) {returnGrade= gradeSystem[3]}
    else if(numberGrade <59 )                   {returnGrade= gradeSystem[4]}

    return returnGrade;   }


console.log(myHistoryGrade());

// Check the Login


// Tire Pressure I



// Movie Ticket Price
