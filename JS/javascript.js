//
//
//var testGrade = 100;
//
//if (testGrade == 100 ) {
//
//    console.log("Perfect")
//}      //Questions if it's 100, one = sign says it IS 100, two == asks if it is.
//
//    if (testGrade>69) {
//
//        console.log("Congrats.")
//
//        else {console.log("Damn.")}
//
//    }
//
////    if (testGrade<69)  {
////
////      console.log("Damn.")
////    }
////
////
////
//
//
//var testGrade = 100;
//
//if (testGrade>90 ) {
//    console.log("A")
//};
//
////Questions if it's 100, one = sign says it IS 100, two == asks if it is.
//
//else if (testGrade>80) {
//    console.log("B")
//    };
//
//else if (testGrade>70) {
//    console.log("C")
//    };
//
//else if (testGrade>60) {
//    console.log ("D")
//    };
//
//else {
//    console.log ("F")
//};
//
//
//
////&& means and
//
////if (testGrade>79 && testGrade<90){
////    console.log("B")
////}
////
////if (testGrade>69 && testGrade<80)
////
////{
////
////
////}
//
//
//if (testGrade>90) {
//
//    letterGrade ="A"
//
//
//}    ;
//
//
//// || means or
//if  (letterGrade=="C" || letterGrade=="A"){
//
//
//}   ;                   // This means either could be true. This or This { then this }
//
//
//
//                 letterGrade= ["A", "B", "C", "D","F"]    ;
//
//
//
//


 //for loops        as long as it's true, it keeps going. Once it's false, it stops.

//for ( i=0; i<=10; i++ ){
//
//    console.log(i);

//}

// Goes through the loop of the array. Includes all the items of the array.

//var array= [];
//
//array[0]= "happy";
//array[1]= "boom";
//
//
//
//for ( i=0; i<=array.length; i++ ){
//
//    console.log(array[i]);
//}

//Stat of the Functions and Examples

//Global variables can be used inside and outside of compartments. Don't use it as much as possible. Do not depend on gobal variables.

//data types parseint = intrature  parsestring

                      // V input value
//
//function firstFunction (number1, number2 ){
//
//    var productOfNum1andNum2;
//    productOfNum1andNum2 = parseInt(number1) * parseInt(number2)  ;
//
//    return    productOfNum1andNum2;
//
//
//}
//
//
//console.log(firstFunction(5,7));
//
//
//function secondFunction (number1, number2 )
//{
//return parseInt(number1) + parseInt(number2)  ;
//}
//
//console.log(secondFunction(5,7));


//Land types

//var randomValue = Math.random ();
//console.log(randomValue);
//
//function landSelection (percentChance) {
//
//    if(percentChance <.5){return "woods"}
//    else {return "jungle"}
//}
//
//console.log(landSelection(randomValue));
//
//for (i=0; i<=10; i++) {
//
//    console.log (landSelection(randomValue));
//}





//    var randomValue = Math.random ();
//or   //   var name = 1;                                                                                                //<- repeat this till 10   simple way to do it.

function landSelection () {
    var percentChance = Math.floor(Math.random()*10);
     var landArray = [ "Woods\t", "Jungle\t", "Grass\t", "Boom\t", "Water\t", "Snow\t", "Molten\t", "Swamps\t", "Caves\t", "Secret\t" ];
        var returnLand= '';
             if(percentChance ==0)  {returnLand= landArray[0]}
        else if(percentChance ==1)  {returnLand= landArray[1]}
        else if(percentChance ==2)  {returnLand= landArray[2]}
        else if(percentChance ==3)  {returnLand= landArray[3]}
        else if(percentChance ==4)  {returnLand= landArray[4]}
        else if(percentChance ==5)  {returnLand= landArray[5]}
        else if(percentChance ==6)  {returnLand= landArray[6]}
        else if(percentChance ==7)  {returnLand= landArray[7]}
        else if(percentChance ==8)  {returnLand= landArray[8]}
        else if(percentChance ==9)  {returnLand= landArray[9]}
                                                                                          //console.log(percentChance);
           return returnLand;
    }
//console.log(landSelection());

for (j=0; j<10; j++) {
     var rowOfLand = "";
         for (i=0; i<10; i++) if(i==1) { rowOfLand+= landSelection()}
    else {rowOfLand = rowOfLand  + landSelection();}
    console.log(rowOfLand)
}

//console.log(rowOfLand)
//    console.log(landSelection());


//        if(i==0) { rowOfLand+= landSelection()}



//properties are within an object, sometimes they are empty, sometimes they are full.
// It depends if they take parameters. How do you use, when do you use, what kind of parameters do you use.


//function cube (value) {
//
//    return value * value * Value
//
//
//
//
//}

//function cubeValues (value) {
//
//
//    var cube;
//
//    cube = value * value * value;
//
//    var returnValue= value + '*'+value+ '*'+value + '=' + cube;
//
//    return returnValue;
//
//}
//
//for (i=0; i<=10; i++)  {
//
//console.log (cubeValues(i));
//
//}
//
//
//function cubeValues (value) {
//
//
//    var cube;
//
//    cube = value * value * value;
//
//    var returnValue= value +'*'+value+'*'+value +'='+ cube;
//
//    return returnValue;
//
//}
//
//for (i=0; i<=10; i++)  {
//
//    console.log (cubeValues(i));
//
//}