/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/27/13
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/12/13
 * Time: 8:29 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 27, 2013 //



            var mySystem    = [ 5, 10, 30, 60];                                                                   // Added main var.

            var myResults = [ mySystem[0]+mySystem[2]/mySystem[0], mySystem[3]*mySystem[1]+mySystem[0]];          // Added my array with results.

            var returnPhase   = '';

            if(mySystem[0]<=mySystem[1] && mySystem[2]<=mySystem[3])               {returnPhase= myResults[0]}   // Returns first equation in the array.
            else                                                                   {returnPhase= myResults[1]}   // Return second equation.




console.log(returnPhase);                                                                                        // Added console log.





