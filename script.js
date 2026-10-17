console.log("Hello,Javascript!");

//==== variables=====

const brandName="safari";     // will never change
let price="1999";             // may change
let isInStock=true;

console.log(brandName);
console.log(price)
console.log(isInStock)

price="1500";                      //allowed changing price because it is let
console.log("NEW Price:",price)

// brandName="H&M"              //ERROR beacause const cannot be reassigned


//======Data Types====

const productName="Slim Fit Shirt";        //String
const rating=4.3;                      //number (int and float)
const reviewsCount=1000;               //number
const isWishlisted=false;              //boolean(true,false)
let size;                             //undefined(declare but no value)
const discountCoupon=null;            //null(intentinally empty)

console.log(typeof productName);
console.log(typeof rating);
console.log(typeof reviewsCount);
console.log(typeof isWishlisted);
console.log(typeof discountCoupon);


//=====Strings====

const firstName="Regilin";
const message="Welcome,"+{firstName}+"!";    //concatenation
const message2=`Welcome, ${firstName} !`;    //template literal

console.log(message);
console.log(message2);

const title="Mens casual shirt";
console.log(title.length)             //17
console.log(title.toUpperCase())     //MENS CASUAL SHIRT
console.log(title.toLowerCase())     //mens casual shirt
console.log(title.includes("shirt"))     //true
console.log(title.replace("Mens","Womens"))   //Womens casual shirt
console.log(title.slice(0,3));                //Men
console.log("    hello  ".trim())            //hello(removes space)


//====arithmetic operators===

let mrp=2000;
let discountPercent=40;
let discountAmount=mrp*discountPercent/100;
let finalPrice=mrp-discountAmount;

console.log("Discount:",discountAmount);      //800
console.log("Final Price:",finalPrice);       //1200

console.log(10+3);        //13
console.log(10-3);        //7
console.log(10*3);        //30
console.log(10/3);        //3.333333333335
console.log(10%3);        //1(remainder)
console.log(10**3);       //1000

//======shortcuts=====

let quantity=1;
quantity++;        //2(adds 1)
quantity+=3;       //5(quantity=quantity+3)
quantity--;        //4
console.log(quantity);      //4

//====comparison(always gives true or false)

console.log(5>3);     //true
console.log(5>=3);    //true
console.log(5===5);    //true(equal value AND type)
console.log(5==="5");     //false(number vs string)
console.log(5=="5");      //true(bad so avoid it)      
console.log(5!==3)        //true

//====logical=====

const isLoggedIn=true;
const hasItemsInCart=false;

console.log(isLoggedIn && hasItemsInCart);   //false(AND:both must be true)
console.log(isLoggedIn || hasItemsInCart);     //true(OR:atleast one true)
console.log(!isLoggedIn);                      //false(NOT:reverses)

//====Type Conversion====
//Everything typed in input is string so we have to convert the type

console.log("5"+3);    //53 string joining-not math
console.log(5+3);       //8
console.log(Number("abc"));    //NaN-not a number
console.log(parseInt("42px"));   //42
console.log(parseFloat("4.5 stars"))    //4.5
console.log(String(100));         //"100"

//=====Getting Inupt===Showing output====

const userName=prompt("what is your name?");   //popup input box
alert(`Hello,${userName},welcome to our store!`);    //popup msg

//===conditions and loops






