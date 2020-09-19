
//gets name, state and temperature from user and temperature from user
//makes sure name and state are capitalized

let name = prompt("Enter your first name")
name = name.charAt(0).toUpperCase()+name.slice(1)
let state = prompt("Enter a state. Either NE or FL").toUpperCase()
let temp = prompt("Enter the temperature in Fahrenheit")

// puts output messages in an array
msgArray = ["wear a warm coat, hat, scarf and gloves.","wear a warm coat but you won't need a hat, scarf or gloves.","wear your warmest coat, a warm hat, a scarf, and warm gloves.","wear a warm coat, hat and gloves. Maybe a scarf too."]

// Uses if else statements to give the user a message based on the temperature and state they input
if (state =="NE") {
    if (temp <= 32){
    NSB.MsgBox(`${name},${msgArray[0]}`)
    }
    else if (32<temp<=50) {
    NSB.MsgBox(`${name},${msgArray[1]}`)
    }}
else if (state =="FL"){
    if (32<= temp < 50){
    NSB.MsgBox(`${name},${msgArray[2]}`)
    }
    else if (50 <= temp <=70){
      NSB.MsgBox(`${name},${msgArray[3]}`)
    }}
