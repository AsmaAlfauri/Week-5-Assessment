// console.log('GOOD LUCK 👩‍💻 👨‍💻')
// /* Q1:
// Create a function called hello
// thats take a name
// and return Hello + the name that insert 
// return null if the name is empty string or null

// Ex:  hello("") => null    
// Ex:  hello("Jouza") => "HELLO Jouza !"
// Ex:  hello("Alex") => "HELLO Alex !"
// Ex:  hello(null) => null
// hello


function hello(str) {
  if (str === "") {
    return "null"
  }
  return "hello" + " " + str
}
console.log(hello('Asma'))
console.log(hello(""))


// /* Q2:
// Create a function called calculateTax
// that take number of salees and the amount of tax
// and return amount of sales you did + the amonut of tax you should pay
// + the amount of net sales left after the tax paid

// Ex: calculateTax(500,0.16) 
// => "You got 500 JD from sales, 
// you should pay 80 JD for tax and 
// you will have 420 JD as net sales."
// Ex: calculateTax(315,0.10) 
// => "You got 315 JD from sales, 
// you should pay 31.5 JD for tax and 
// you will have 283.5 JD as net sales."
// Ex: calculateTax(100,0.15) 
// => "You got 100 JD from sales, 
// you should pay 15 JD for tax and
//  you will have 85 JD as net sales."
// */

function calculateTax(num, amount) {
  var tax = num * amount
  var total = num - tax
  return "You got " + num + " JD from sales, you should pay " + tax + 'JD for tax and you will have ' +
    total + ' JD as net sales.'
}
console.log(calculateTax(315, 0.10))


// /* Q3:
// Using while
// Create a function called repeatChar
// that takes 2 parameters string and number,
// and return the character number of times with space depends on the nubmer that pass
// ** Important: You should didn,t have extra space or comma at the end
// ** Important: the character one time capital letter and one time small letter if n
// odd start with capital letter 
// ** Important: you should solve this question using while

// Ex: repeatChar("a",2); => "a, A"
// Ex: repeatChar("C",5); => "C, c, C, c, C"
// */

function repeatChar(str, no) {
  var output = ''
  while (no > 0) {
    output += str + " ,"
    no -= 1
  }
  return output
}
console.log(repeatChar("a", 3))


// /* Q4:
// Using recursion 
// Create a function called stringToCapital
// that takes a string 
// and return the same string but convert it to upper case
// ** Important: you should solve this question using recursion
// ** Important: you should haven't any problem if there is a symbol

// Ex: stringToCapital("My Name Is: Alex !") 
// => "MY NAME IS: ALEX !"
// Ex: stringToCapital("Are you a student in coding ACADEMY by ORANGE ?") 
// => "ARE YOU A STUDENT IN CODING ACADEMY BY ORANGE ?"
// */

function stringToCapital(str) {
  var str1 = str.toUpperCase()
  return str1
}
console.log(stringToCapital("asma"))

function stringToCapital(str) {
  var lengthStr = str.length
  if (lengthStr === 0) {
    return ""
  }
  return stringToCapital(str.length - 1)
}
console.log(stringToCapital('asmaa'))






function power(no, pw) {
  if (pw == 0) {
    return 1
  }
  return no * power(no, pw - 1)
}
console.log(power(2, 4))

// Good luck :)