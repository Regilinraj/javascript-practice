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

//---combining conditions-----

console.log("--------3.&& || !-------");

const isLoggedIn=true;
const hasCoupon=false;
const age=25;

if (isLoggedIn && cartTotal>500){
    console.log("You can place the order");
}

if (hasCoupon || cartTotal>1000){
    console.log("You get a discount");
}

if (!isLoggedIn){
    console.log("Please login first");
}

if (age>=18 && age<=60){
    console.log("Age is in the allowed range");
}

//--------4.TRUTHY AND FALSY Values-----

console.log("-------4.Truth/false------")

const userName="";

if (userName){
    console.log("Hello"+userName);
}else{
    "Please enter your name,name is empty";
}

console.log(Boolean(0));     //false
console.log(Boolean(""));    //false
console.log(Boolean(null));     //false
console.log(Boolean(NaN));      //false
console.log(Boolean(undefined));     //false
console.log(Boolean("0"));          //true(non empty string)
console.log(Boolean([]));           //true(empty array is truthy)



//--------switch case------

const category="shoes";

switch (category){
    case "shirts":
        console.log("Showing shirts");
        break;
    case "shoes":
        console.log("showing shoes");
        break;
    case "watches":
        console.log("showing watches");
        break;
    default:
        console.log("showing all products");
}

//-------another example for switch case----

const orderStatus="shipped";

switch (orderStatus){
    case "placed":
        console.log("Your order is placed");
        break;
    case "shipped":
        console.log("Your order is on the way");
        break;
    case "delivered":
        console.log("Your order is delivered")
        break;
    case "cancelled":
        console.log("Your order is cancelled");
        break;
    default:
        console.log("unknown status");
}

//---------for loop-----

for (let i=1;i<=5;i++){
    console.log("round "+i);
}

for (let i=5;i>=1;i--){
    console.log("reverse round "+i)
}

for (i=2;i<=10;i+=2){
    console.log("Even "+i)
}

