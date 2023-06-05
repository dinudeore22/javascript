for (let index = 0; index <= 10; index++) { // index = 11

    console.log(index); // 0 1  2 ... 10 

}

console.log("After loop");



console.log(`=================`);






console.log(`into 5`);
// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50

for (let index = 5; index <=50; index=index+5) { // index = 11

    console.log(index); // 0 1  2 ... 10


}


    


console.log("After loop");

// wap to 100 to 80 revedrse order by decremeting 1
// 100 99 98 97....80

for (let index = 100; index >=80; index--) {
    console.log(index); // 100 ..80
    
}
// wap to 17 table
// 17 ... 170

for (let index = 17; index <=170; index=index+17) {
   // console.log(index);// 17 ... 100
    
}

// 190   19
for (let index = 190; index >=19; index=index-19) {
    //console.log(index);
    
}

// 8  .. 80
for (let index = 8; index<=80; index= index+8) {
    console.log(index); // 8 ...80
    
}


// JavaScript = J a v a S c r  i  p  t

var str = "JavaScript"; // 9

for (let index = 0; index < str.length; index++) { // 0  1   2

     var char = str.charAt(index); // J  a v

     console.log(char);

}

// WAP to get reverse string

var str = "JavaScript"; // 9

for (let index = str.length; index > 0; index--) { // 0  1   2

     var char = str.charAt(index); // J  a v

     console.log(char); 
}