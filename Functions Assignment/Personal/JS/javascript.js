/**
 * Created with JetBrains WebStorm.
 * User: Emmanuel Barreto
 * Date: 9/26/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 26, 2013 //


//Joe Dalton
//Looks good

var   mySuit= parseInt(prompt()) ;                                    //Prompts user for value.
var    myACC= parseInt(prompt()) ;                                    //Prompts user for value.
var myPoints= parseInt(prompt()) ;                                    //Prompts user for value.



function myFinal (one, two, three) {                                  // function name, encapsulated parameters

    var   myGear= parseInt((one));                                    // Variable with parseInt
    var    myRun= parseInt((two));                                    // Variable with parseInt
    var  myTotal= parseInt((three));                                  // Variable with parseInt

    var myEquation1=myGear*myRun*myTotal;                             // Equation # 1
    var myEquation2=myGear*myTotal/myRun;                             // Equation # 2
    var myEquation3=myGear/myTotal*myRun;                             // Equation # 3

    var myResult= '';                                                 // Will send out the result of the equation.

    if(myGear>=300)  {myResult= myEquation1}                     // If myGear is greater or equal to than 300, then myResult will equal to myEquation1
    else if(myGear<300)   {myResult= myEquation2}                     // If myGear is greater or equal to than 300, then myResult will equal to myEquation2
    else if(myGear>10000) {myResult= myEquation3}                     // If myGear is greater or equal to than 300, then myResult will equal to myEquation3

    return myResult;                                                  // Returns value to the finished function

}                                                                     //

console.log (myFinal(mySuit, myACC, myPoints));                       // Prints out the function result
