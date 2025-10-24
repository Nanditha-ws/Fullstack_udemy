// 1. function getMilk(money)
function getMilk(money, costPerBottle) //2nd method
 {
    console.log("leaveHouse");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy "+calBottles(money , 1.5)+" bottles of milk");


    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    // 1. console.log("the change is "+calcChange(money, 1.5));
    // or
    return calcChange(money,costPerBottle); //2nd method
    }
    function calBottles(startingMoney , costPerBottle){
        var numberOfBottles= Math.floor(startingMoney/costPerBottle);
        return numberOfBottles;

    }
    function calcChange(startingAmount, costPerBottle){
        var change = startingAmount % costPerBottle;
         return change;
    }
   
    // 1. getMilk(5);
    console.log("this is the change"+getMilk(5 , 1.5)); //2nd method
    