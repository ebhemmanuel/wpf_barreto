function landSelection(){
    var initValue= Math.random()*10;
    // console.log(initValue);
    var percentChange = Math.floor(initValue);
    // console.log(percentChange);

    var woods=0;
    var jungle=1;
    var swamp=2;
    var desert=3;
    var mountains=4;
    var dungeons=5;
    var hills=6;
    var tundra=7;
    var wasteland=8;
    var city=9;
    var  returnLandType;

    if(percentChange ==woods)
    {returnLandType= 'woods'}
    else if(percentChange == jungle)
    {returnLandType= 'jungle'}
    else if (percentChange==swamp){
        returnLandType= 'swamp'}
    else if (percentChange==desert){
        returnLandType= 'desert'}
    else if (percentChange==mountains){
        returnLandType= 'mountains'}
    else if (percentChange==dungeons){
        returnLandType= 'dungeons'}
    else if (percentChange==hills){
        returnLandType= 'hills'}
    else if (percentChange==tundra){
        returnLandType= 'tundra'}
    else if (percentChange==wasteland){
        returnLandType= 'wasteland'}
    else if (percentChange==city){
        returnLandType= 'city'}
    return returnLandType;
}

function tabGen (len){
    if(len>7){
        return '\t';
    } else if (len>3){
        return '\t\t';
    } else if (len <=3){
        return '\t\t\t';
    }


}


//character initial position
var yPos = 0;
var xPos = 0;
var endCon = true;
var arrayGroup = [yPos, xPos, world[yPos][xPos]];



//movement through our arrays

console.log(arrayGroup);

do {

    var movement = prompt("Move your character with direction (N, S, E, W, Q)");

    if (movement == "N" || movement == "n") {yPos--;}
    if (movement == "S" || movement == "s") {yPos++;}
    if (movement == "E" || movement == "e") {xPos++;}
    if (movement == "W" || movement == "w") {xPos--;}
    if (movement == "Q" || movement == "q") {endCon = false}
    if (xPos == -1) {xPos = 9}
    if (yPos == -1) {yPos = 9}
    if (xPos == 10) {xPos = 0}
    if (yPos == 10) {yPos = 0}


    var asterisk = world[yPos][xPos] + world[yPos][xPos].replace(world[yPos][xPos], "*");
    console.log(asterisk);

    var arrayGroup = [yPos, xPos, world[yPos][xPos]];

    console.log(arrayGroup);


//    console.log(xPos);
//    console.log(yPos);
//    console.log()
//    console.log(world[yPos][xPos]);

} while (endCon);



//console.log(landSelection());

var world = [];
for(j=0;j<10;j++){
//remove the rowOfLand variable and replace it with an Array
//    var rowOfLand='';
    world[j]=[];
    for(i=0;i<10;i++){
        world[j][i]=landSelection();
        //console.log(world[j][i]);

    }
}

var worldPresentationString ='';
for(outer=0;outer<10;outer++){
    worldPresentationString ='';
    for(inner=0;inner<10;inner++){
        worldPresentationString+=world[outer][inner];
        worldPresentationString+=tabGen(world[outer][inner].length);
        worldPresentationString+=asterisk;
    }
    console.log(worldPresentationString);

}






