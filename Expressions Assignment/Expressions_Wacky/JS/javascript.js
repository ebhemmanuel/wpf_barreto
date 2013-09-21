/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/20/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 20, 2013 //

// Unique User ID
function calorieIntake () {

    var yourWeight     = parseInt (prompt('What is your weight? (lb):'));
    var   myCarbs      = parseInt(prompt ('How many carbs do you intake a day:'));
    var  myAge         = parseInt(prompt('Tell us your age:'))
    var equationTime   = yourWeight/myCarbs*myAge

    var  result        = "I'm "+myAge+" years old, I weigh "+yourWeight+" and I intake "+myCarbs+" amount of carbs a day. Making it a total of "+equationTime+" calories.";







