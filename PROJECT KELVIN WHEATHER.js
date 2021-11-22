// PROJECT KELVIN WHEATHER
//this variable store temperature in kelvin degree
const kelvin=0;
//this stament calculate the convertion from kelvin to celcius
celcius=kelvin-273;
//this stament calculate the convertion from kelvin to fahrenheit
let fahrenheit=celcius*(9/5)+32;
//this line of code rounds the value from celsius to integer 
fahrenheit=Math.floor(fahrenheit);
//this line of code show the conversation value form the forecast
console.log(`The temperature is ${fahrenheit} is degrees fahrenheit.`);

//this line of code calculate the conversation from celcius to Newton
let Newton=celcius*(33/100);
Newton=Math.floor(Newton);
console.log(`in the newton scale is ${Newton}`);
