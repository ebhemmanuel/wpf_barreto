/**
 * Created with JetBrains WebStorm.
 * User: Emmanuel Barreto
 * Date: 9/20/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 26, 2013 //


//(condition1>condition2) ? console.log(condition1) : console.log(condition2);


//There are no parameters being passed into this function 
//I would restructure it like this
// function myStartTime(startDay, location){
//     var returnValue =  "My start date was " +  startDay +" at " + location +"."; 
//     return returnValue;
//     }
// var startPrompt =  prompt("What was your school start date? Enter full date |day month #,  year ");
// var school = prompt( "What school?" )
// console.log(myStartTime(startPrompt,school));
//



function myStart () {                                                                     //Start of the function form

    var startDay= "My start date was " +                                                  //  Start Date variable
        prompt("What was your school start date? Enter full date |day month #,  year ");  //
    var whereAt = " at " + prompt( "What school?" )+".";                                  //  Which school?

    return startDay+""+whereAt;                                                           //  Both variables together for the return
}

console.log(myStart())                                                                    //  Prints out the function
