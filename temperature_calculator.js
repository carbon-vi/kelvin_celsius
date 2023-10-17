// kelvin is very different from celsius

const kelvin = 293

// kelvin is 273 degrees more than celsius

const celsius = kelvin - 273

let fahrenheit = celsius * (9/5) + 32

// fahrenheit is (9/5) + 32 degrees more than celsius

fahrenheit = Math.floor(fahrenheit) 
/* you need to use the
.floor() method if you want to get a intejer
number */ 

console.log(`The temperature is ${celsius} degrees celsius`)

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`)

let newton = celsius * (33/100)

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees newton`)
