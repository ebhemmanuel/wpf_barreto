/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/20/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 20, 2013 //

// User must meet the criteria of being at least level 45, and gear level being at least lvl 40.

function myGear  () {
    var levelCap           = 50;
    var myLevel            =prompt("What level are you?") ;
    var gearLevel          =parseInt(prompt("What is the highest gear level"+" max is:"+myLevel));
    var gearTotal          = gearLevel+5;
    var returnMessage  ='';

if(myLevel>=45 && gearTotal>=40)     {returnMessage="Joining dungeon..."+"You are level "+myLevel+ " and your iGear level is, "+gearTotal+"."}
else                                {returnMessage="You do not meet the requirements."}

    return returnMessage;

}

console.log(myGear());







