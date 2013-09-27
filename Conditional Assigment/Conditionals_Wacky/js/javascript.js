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
//Emmanuel Barreto // Thursday September 12, 2013 //




    var reqNow                 = parseInt(prompt('How much do you get per kill? Enter a number between 0-50'))            // Added first prompt.
    var approvalMessage        = [ 'You'+'re'+' gaining '+reqNow*2+' per level. You'+'re'+' still too low.','You'+'re'+' gaining '+reqNow*2.2+' per level. You'+'re'+' getting better','You'+'re'+' gaining '+reqNow*2.5+' per level. You'+'re'+' almost there.', 'You'+'re'+' gaining '+reqNow*3+' per level. You'+'re'+' about done!' ];                                                             // Variables will prompt result.

var returnMessage          = '';                                    // This will push out the results to a variable.

     if(reqNow >10)            {returnMessage= approvalMessage[0]}          // Added a conditional to push out "You're too low".
     else if(reqNow <25)       {returnMessage= approvalMessage[1]}          // Added a conditional to push out "You're getting better."
     else if(reqNow <35)       {returnMessage= approvalMessage[2]}     // Added a conditional to push out "You're almost there."
     else if(reqNow <45)       {returnMessage= approvalMessage[3]}


















































