//console.log('test');          /**Allows us to comment on the javascript**/
//
//var initialValue= 2;
//
//console.log(initialValue);
//
//initialValue = initialValue+5;
//
//console.log(initialValue)
//
//initialValue = initialValue-5;
//
//console.log(initialValue)
//
//initialValue = initialValue*5;
//
//console.log(initialValue)
//
//initialValue/=3; /**Same as previous, just shorter and cleaner**/
//
//console.log(initialValue)
//

//var length;
//var width;
//var height;
//var area;
//

//length=20;
//width=30;
//height=40;
//area=length*width*height;
//

//var radius=3;
//
//circ= radius*2*Math.PI;
//
//console.log(circ)

//console.log(area);                   /**Short hand way to show the result**/
//console.log(length*width*height)     /**Long version**/


//console.log(Math.PI)
//
//var salary= 10         //defining
//var raise=1.05;        //defining
//
//var firstyear= salary*raise;
//
//console.log(firstyear)
//
//var secondyear = firstyear*raise;
//
//console.log(secondyear);
//
//var thirdyear= secondyear*raise;
//
//
//console.log(thirdyear)  ;
//
//
//
//var initialSalary = 10
//
//initialSalary= initialSalary+ initialSalary *.05;
//
//initalSalary= initialSalary+ initialSalary *.05;
//
//initialSalary= initialSalary+ initialSalary *.05;
//
////Activity #1
//
//var isStudent = false;
//
//var firstName = "Emmanuel";
//
//var studentNames = [ "Boom", "Bam", "Brim", "Blam"] ;
//
//console.log(studentNames)
//
//console.log(studentNames[0]) ;


//Activity #2
//
//var a =2;
//
//a= a+3;
//
//var result =a+3;
//
//console.log(a);      // result is 5.
//
//console.log(result);     // result is 8.
//
//
//
//var yearBorn = 1989;
//var age =2013 - yearBorn;
//
//console.log(age)


//Are of a triangle

//var width = 4;
//var height = 5;
//
//var area = width * height;

//var area= (width * height) / 2;
//
//console.log (area)
//
//area = area/2
//
//console.log(area)

//Squareroot

//var number = 36

//var s = Math.sqrt (number);


//var remainder = 32 % 10;
//
//var remainderwat = 32 / 10;
//
//console.log(remainder);
//
//console.log(remainderwat) ;



//var quiz1 = 87;
//
//var quiz2 = 100;
//
//var quiz3 = 60;
//
//var quiz4 = 80;


//
//// average is the sum of hte items divided by the number of items
//
////var average = (quiz1 + quiz2+ quiz3 +quiz4)/4;
//
//var average = quiz1 + quiz2+ quiz3 +quiz4;
//
//console.log(average)
//
//   var average= average /4;
//
//console.log(average);



//var length= 7;
//var width = 6;
//var perimeter = length * 2 + width * 2;
//
//
////Using Arrays in Expressions
//
//console.log(perimeter);
//
//var orangeBins = [ 12, 13, 14];
//
//var total = orangeBins[0] + orangeBins[1] orangeBins [2];
//
//console.log(total);


//Concentrating Strings

//Concatenating = Combining strings
//Concatenating strings


//var firstName= "Emmanuel";
//var lastName= "Barreto";
//
////var fullName= firstName + lastName;
//
//var fullName= firstName + " " + lastName;
//
//console.log(fullName);

//quotation marks will add the character, they will not function in mathematical expressions.

//var a= "6";
//var b="7";
//
//var result = a + b;
//
//console.log(result);


//Assignment Operators

//var a = 3;
////a + 4;var
//
////a = a+ 4;
//// a++ // a--// a= a + 1 // a= a - 1//    shorthand way of reducing or increasing
//a+=4;
//
////You can change the operator "+" "*" "-" "/"
//
//console.log(a); // result is 7
//
//
//
//var test = 0  ;
//var confuse =5 ;
//test+=3;
//test+=confuse -1;
//test--;
//test+=confuse*(test-1);

//Control structure   - You can break the flow of your code, break the sequential flow of the code.

var testGrade = 100;

if (testGrade == 100 ) {

    console.log("Perfect")
}      //Questions if it's 100, one = sign says it IS 100, two == asks if it is.

    if (testGrade>69) {

        console.log("Congrats.")

        else {console.log("Damn.")}

    }

//    if (testGrade<69)  {
//
//      console.log("Damn.")
//    }
//
//
//


var testGrade = 100;

if (testGrade>90 ) {
    console.log("A")
};

//Questions if it's 100, one = sign says it IS 100, two == asks if it is.

else if (testGrade>80) {
    console.log("B")
    };

else if (testGrade>70) {
    console.log("C")
    };

else if (testGrade>60) {
    console.log ("D")
    };

else {
    console.log ("F")
};



//&& means and

//if (testGrade>79 && testGrade<90){
//    console.log("B")
//}
//
//if (testGrade>69 && testGrade<80)
//
//{
//
//
//}


if (testGrade>90) {

    letterGrade ="A"


}    ;


// || means or
if  (letterGrade=="C" || letterGrade=="A"){


}   ;                   // This means either could be true. This or This { then this }



                 letterGrade= ["A", "B", "C", "D","F"]    ;




