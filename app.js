// // Question 1

// var date = new Date();
// document.write("<br>"+ date+"<br><br>");


// // Question 2

// var month = new Date().toString();
// var c = month.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January");
// }else if(c === "Feb"){
//     document.write("Current month: February");
// }else if(c === "Mar"){
//     document.write("Current month: March");
// }else if(c === "Apr"){
//     document.write("Current month: April");
// }else if(c === "May"){
//     document.write("Current month: May");
// }else if(c === "Jun"){
//     document.write("Current month: June");
// }else if(c === "Jul"){
//     document.write("Current month: July");
// }else if(c === "Aug"){
//     document.write("Current month: August");
// }else if(c === "Sep"){
//     document.write("Current month: September");
// }else if(c === "Oct"){
//     document.write("Current month: October");
// }else if(c === "Nov"){
//     document.write("Current month: November");
// }else if(c === "Dec"){
//     document.write("Current month: December");
// }

// // Question 3

// var day = new Date().toDateString().slice(0,3);
// document.write("<br><br>Today is "+day);


// // Question 4

// var funDay = new Date().toDateString().slice(0,3);

// if(funDay === "Sat" ||funDay === "Sun" ){
//     document.write("<br><br>"+"It’s Fun day");
// }

// // Question 5

// var date = new Date().getDay();
// if(date<16){
// document.write("<br><br>First fifteen days of the month");
// }else{
//     document.write("<br><br>Last days of the month");
// }

// // Question 6

// var todayDate = new Date();
// var todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// document.write("<br><br>Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since  January 1, 1970: " + todaymilli);
// document.write("<br> Elapsed minutes since  January 1, 1970: " + accurateMin);

// // Question 7

// var time = new Date().toTimeString().slice(0,8);
// document.write("<br><br>"+time);
// var tiMe = new Date().toTimeString().slice(0,8);
// if(tiMe>24 && tiMe<12 ){
// document.write("<br>Its AM");
// }
// else{
//     document.write("<br>Its PM");
// }


// // Question 8

// myDate = new Date(); 
// myDate.setFullYear(2020, 11, 31);
// document.write("<br><br>Later Date: "+myDate);


// // Question 9

// // Ramazan = new Date(); 
// // Ramazan.setFullYear(2015, 5, 18);
// // Year = new Date();
// // Year.setFullYear(2021,10,14);
// // remainingDays =new Date ();
// // remainingDays.setFullYear();

// // document.write("<br><br>Later Date: "+myRamazan);
// // document.write("<br><br>Later Date: "+myYear);
// // document.write("<br><br>Later Date: "+remainingDays);

// // Question 10


// var year2015 = new Date("2015 12 05");
// var sec2015 = year2015.getTime();
// var today = new Date();
// var sec2021 = today.getTime();
// var totalSec = sec2021-sec2015; 

// document.write("<br><br>On reference date "+year2015+"<br>");
// document.write(totalSec+" "+"seconds had passed since begining of 2015"+"<br><br><br>");

// // Question 11


// myDate = new Date();
// myDate.setHours(13,48,03)
// setDate = new Date();
// setDate.setHours(12,48,03);
// document.write("<br><br>Current Date: "+myDate);
// document.write("<br><br>One Hour Ago it was "+setDate);


// // Question 12


// myDate = new Date()
// myDate.setFullYear(2015,11,05);
// setDate = new Date();
// setDate.setFullYear(1915,11,05);
// document.write("<br><br>Current Date: "+myDate);
// document.write("<br><br>100 years back it was "+setDate);

// // Question 13

// var age = Number(prompt("Enter Your Age"));
// var year = new Date().getFullYear()-age;
// document.write("<br><br> Your Age is " +age);
// document.write("<br> Your Birth Year is " +year);


// // / Question 14

// var customerName = prompt("Enter YOur Name").toUpperCase();
// var month = prompt("Enter Month");
// var capMonth= month.charAt(0).toUpperCase()+month.slice(1);
// var num_of_units = Number(prompt("Enter No of Units"));
// var charges_per_unit = 16;
// var netAmount = (num_of_units * charges_per_unit);
// var latepaymentCharges =350;
// var grossAmount = netAmount +latepaymentCharges;

// document.write("<br><br>Customer Name: " + customerName);
// document.write("<br>Month: " + capMonth);
// document.write("<br>Number Of Units: " + num_of_units);
// document.write("<br>Charges Of Per Unit: " + charges_per_unit);
// document.write("<br><br>Net Amount Payable (within Due Date): " + netAmount);
// document.write("<br>Late Payment Charges: " + latepaymentCharges);
// document.write("<br>Gross Amount Payable (after Due Date): " + grossAmount); 