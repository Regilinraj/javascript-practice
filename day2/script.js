//===conditions and loops
//if,else if,else

//      if (condition){
           //runs when condition is true
//      }else if(anotherCondition){
           //runs when the first was false and this is true
//      }else{
           //runs when everything above was false
//      }


console.log("-----1.if/else------");

const cartTotal=1200;
if (cartTotal>=999){
    console.log("Free Delvery!");
}else{
    console.log("Delivery charge: $.99");
}

//-------else if(ladder)------

console.log("--------2.else if-----")

const rating=4.3;
if (rating>4.5){
    console.log("Excellent");
}else if (rating>=4){
    console.log("Very Good");
}else if (rating>=3){
    console.log("good");
}else{
    console.log("below average");
}

