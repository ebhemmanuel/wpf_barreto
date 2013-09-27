/**
 * Created with JetBrains WebStorm.
 * User: Emmanuel Barreto
 * Date: 9/26/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 26, 2013 //

var   mySuit= parseInt(prompt()) ;                                    //Prompts user for value.
var    myACC= parseInt(prompt()) ;                                    //Prompts user for value.
var myPoints= parseInt(prompt()) ;                                    //Prompts user for value.



function myFinal (one, two, three) {                                  // function name, encapsulated parameters

    var   myGear= parseInt((one));                                    // Variable with parseInt
    var    myRun= parseInt((two));                                    // Variable with parseInt
    var  myTotal= parseInt((three));                                  // Variable with parseInt

    var myEquation1=myGear*myRun*myTotal;                             // Equation # 1
    var myEquation2=myGear*myTotal/myRun;                             // Equation # 2