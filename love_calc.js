prompt('What is Your name?')
prompt('What is his or her name?')

var lovescore = Math.random() * 100
lovescore = Math.floor(lovescore) + 1 //1-100 score, without 0 number

if (lovescore > 100) {
alert("Your love score is " + lovescore + "%" + "and it is amazing")
}

if (lovescore > 30 && lovescore <= 70) {
alert("Your love score is " + lovescore + "%" + " and it is nice")
}

else {
alert("Your love score is " + lovescore + "%")
}