function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var x= 365;
    var y= 52;
    var z=12 ;
    var totalYears=90;
    
    var totalDays=x * totalYears;
    var totalWeeks= y * totalYears;
    var totalMonths=z * totalYears;
    var currentDays= totalDays - (age * x);
    var currentWeeks= totalWeeks - (age * y);
    var currentMonths= totalMonths - (age * z);
    console.log("You have "+ currentDays+" days, "+currentWeeks+" weeks, and "+currentMonths+" months left.");
   
    
    
/*************Don't change the code below**********/
}
 lifeInWeeks(56);
