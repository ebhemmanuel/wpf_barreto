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
     var landArray    = [ "Woods", "Jungle", "Grass", "Boom", "Water", "Snow", "Molten", "Swamps", "Caves", "Secret" ];
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
//
//
//

//function tabGen (len) {
//    if(len >7)        {return '\t';}
//    else if(len >3)        {return '\t\t';}
//    else if(len <=3)       {return '\t\t\t';}
//}
//
//var worldString = '';
//
//for(o=0;o<10;o++) {
//
//    worldString = '';
//
//    for(i=0;i<10;i++) {
//
//        worldString+=worldMap[o][i];
//        worldString+=tabGen(worldMap[o][i].length);
//
//
//    }

//    console.log(worldString);



//     function  myLocation () {

//    var x           = 0;
//    var y           = 0;
////    var endCondition= true;
//
//    var myCor  = [x, y];
//    var goHere =  'E';
//    var direction= [goHere=="N", goHere=="S", goHere=="W", goHere=="E", goHere=="Q", goHere==''];
//
//       var returnYCor= myCor[0];
//       var returnXCor= myCor[1];
//
//         if (direction[0])                 {returnYCor= myCor[0]-=1}
//    else if (direction[1])                 {returnYCor= myCor[1]+=1}
//    else if (direction[2])                 {returnXCor= myCor[2]-=1}
//    else if (direction[3])                 {returnXCor= myCor[3]+=1}
//         if (direction[4] || direction[5]) {endCondition=false}

do {

         var movement = prompt("Move your character with direction (N, S, E, W, Q)");
         var arrayGroup = [yPos, xPos, world[yPos][xPos]];
         var asterisk = world[yPos][xPos] + world[yPos][xPos].replace(world[yPos][xPos], "*");

         if (movement == "N" || movement == "n") {yPos--;}
         if (movement == "S" || movement == "s") {yPos++;}
         if (movement == "E" || movement == "e") {xPos++;}
         if (movement == "W" || movement == "w") {xPos--;}
         if (movement == "Q" || movement == "q" || movement=='') {endCon = false}
         if (xPos == -1) {xPos = 9}
         if (yPos == -1) {yPos = 9}
         if (xPos == 10) {xPos = 0}
         if (yPos == 10) {yPos = 0}

         var myLoc= worldString[yPos][xPos];

//         return
//
//     }

    console.log()
//

var worldString = '';

for(o=0;o<10;o++) {

    worldString= '';

    for(i=0;i<10;i++) {

        worldString+=landSelection();
        worldString+=myLocation()





    }

    console.log(worldString);
}






////
//
//
//
//var worldMap =[''];
//
//for (j=[0]; j<10; j++) {
//
//     worldMap[j]=[];
//
//      for (i=0;i<10;i++)     {
//
//          worldMap[j][i]=landSelection();
//          worldMap[j][i]+="*";
//
//         if(i==1) { worldMap+= landSelection()}
//         else {worldMap = worldMap + landSelection();}
//          console.log(worldMap);
//}







//do while and switch

//console.log('Start');
//
//
//function password () {
//
//var initPass='';
//var secondPass='';
//var validLength=false;
//
//
//
//do {
//
//    initPass = prompt( 'Enter Pass') ;
//
//    if (initPass.length >= 8 && initPass.length <= 12)
//
//            {validLength=true;}
//
//
//}
//
//while (validLength==false);
//
//secondPass=prompt('Renter');
//if (secondPass==initPass){console.log('They match')}
//else {console.log ('You dun goofed')}
//
//}
//
//console.log(password())














//Removing rowOfLand to replace it with an array
//     var rowOfLand = "";

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

//  Wednesday September 18, 2013  - Condiontals - Switches -  Loops -> while ( while it's true, we don't know when a condition will be met )



//   Work with Sorting our world

// Keep going, Prompt for (X,Y) - what is your x cordd what is your y, return landtype at position    < Initial Value, place a starting spot too.

//Allow the user to move north, south, west, and east. Or quit. Log the landtype at location + [x,y] values.

//Handle Edges by telling the user to return back one step as he has reached the edge of the map, or push him to the start of the row. (Restart)













//    var firstVar  =  2;
//    var secondVar =  3;
//    var thirdVar  = -5;
//    var myEquation= firstVar * secondVar + thirdVar;
//
//    if (thirdVar <0 )  {myEquation= firstVar*secondVar-thirdVar}
//
//        console.log(myEquation);
//
//
//     var firstVar  =2*i;
//     var secondVar =3*i;
//
//
//        var result =[];
//
//     for(i=0; i<10; i++) {
//
//         firstInc=firstVar+=2;
//
//
//   }
//
//     return firstInc;
//
//
//     for(j=0; j<1; j++) {
//
//
//         secondInc=3;
//
//
//     }
//
//         return  secondInc;
//
//
//
//
//
//     for (b=0; b<1; b++) {
//
//         for(d=0; d<10; d++) {
//
//               thirdInc=thirdVar+=1;
//
//
//         }
//
//         return thirdInc;
//
//
//
//     }
//
//     console.log(myLoop())



































