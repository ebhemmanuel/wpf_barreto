/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/20/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 20, 2013 //

// Unique User ID
function idNumber () {

    var buildingLetter = prompt ('Choose a letter from A to D:');
    var  roomNumber    = parseInt(prompt ('Choose a number that is 4 characters long:'));
    var  studentAge    = parseInt(prompt('Tell us your age:'))
    var sectionNumber  = prompt ('Choose a letter between F and G:');

    var  uniqueID      = buildingLetter+roomNumber*studentAge+sectionNumber;







