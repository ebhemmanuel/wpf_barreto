/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/12/13
 * Time: 8:29 PM
 * To change this template use File | Settings | File Templates.
 */
//Emmanuel Barreto // Thursday September 12, 2013 //

//Dog Years

//Sparky's Age

var sparkysDob = 2007;

var age = 2013 - sparkysDob;

var humanYears = "In human years Sparky is " + age +  " years old. \n";

console.log(); console.log(humanYears);

age*=7;

var dogYears = "However, dog years Sparky is " + age +  " years old. \n";


console.log(dogYears)  ;


//Slice of Pie part 1

var sliceOfpie = "Slice of Pie Part I \n"

console.log(sliceOfpie);

var pizzaSlices = 12;

var partyPeople = 5;

var pizzaOrder = 1;

var result = "Each person ate "+ pizzaSlices / partyPeople * pizzaOrder + " slices of pizza at the party";

console.log(result+"\n");


//Slice of Pie part 2

var sliceOfpieII = "Slice of Pie Part II \n"  ;

console.log(sliceOfpieII) ;


var leftOverpizza = (pizzaSlices % partyPeople);

var sparkyGets = "Sparky got " + leftOverpizza + " slices of pizza." ;

console.log(sparkyGets+"\n");

//Average Shopping Bill

var groceryShopping = [ 22, 60, 100, 70, 40];

var total = groceryShopping [0] + groceryShopping [1] + groceryShopping [2] + groceryShopping [3] + groceryShopping [4];

var average = total / 5;

console.log("You have spent a total of $" + total + " on groceries over 5 weeks. " + "\nThat is an average of $"+ average + " per week. \n");



// Discounts

var originalPrice= 5.95;


var megaPack= "Mega Pack of Altoids" ;

var discount = .03;

var discountVar= 3;

var salesTax = .07;

var costAfter = originalPrice - (originalPrice * discount ) ;

var afterTax =  costAfter + (costAfter * salesTax)   ;


 console.log ( "Your" + megaPack + " was originally $" + originalPrice + ", but after a " + discountVar + "% discount, it is now $" + costAfter + " without tax, and $" + afterTax + " with tax."  )





