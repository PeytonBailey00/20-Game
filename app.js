alert("Welcome to 20!")
alert("The aim of the Game is to get as close to 20 without going over!")

var ready = prompt("Are you ready?")

if (ready == "yes") {
    alert("Awesome! Lets get started!")
} else if (ready == "no") {
    alert("Too bad.")
}

alert("Alright. So we're both going to draw numbers from 0 to 10. We can draw a maximum of 5 numbers, because 5 is all we should need.") 
alert("I will always stop drawing numbers once I reach 16, but you can go draw all 5 cards no matter how many points you have. But remember, try to stay under 20!")
alert("Also, be sure to pay attention to your screen to see what your total is. And type `yes` if you need another number.")
alert("Ok. Lets go!")

do {

    var cPoints = 0
    var myPoints = 0
    
    alert("I'll go first.")

    var cTotal = 0


    do {
        var cNextN = Math.floor(Math.random() * 11)
        var cTotal = cNextN + cTotal
        alert(`My next number is ${cNextN}. My total is now ${cTotal}.`)
    } while (cTotal < 16)

    if ((cTotal > 16) && (cTotal <= 20)) {
        alert(`I will stop at ${cTotal}.`)
    } else if (cTotal > 20) {
        alert(`My score is over 20. You win.`)
        var myPoints = myPoints + 1
        var cScoreOver = prompt("would you like to play again?");
    }

    do {

        alert("Ok. Your turn.")

        var myNum1 = Math.floor(Math.random() * 11) 
        var myTotal = myNum1
        console.log(myTotal);
        alert(`Your first number is ${myTotal}.`);
        var myNum2 = Math.floor(Math.random() * 11)
        var myTotal = myNum1 + myNum2
        alert(`Your second number is ${myNum2}.Your total is ${myTotal}.`);
        console.log(myTotal);
        var nextNumQ = prompt(`. Would you like to pick another number?`);
    
        do {
            var nextNum = Math.floor(Math.random() * 11)
            alert(`Your next number is ${nextNum}.`)
            var myTotal = myTotal + nextNum
            var nextNumQ = prompt(`Your total is now ${myTotal}. Would you like to pick another number?`)
        } while (nextNumQ != "no") 

        if (myTotal > 20) {
            alert(`Your score is over 20. I win.`)
        var cPoints = cPoints + 1
        var myScoreOver = prompt("would you like to play again?");
        } 
        if (nextNumQ != "yes") {
            alert(`Ok. Your Final Total is ${myTotal}.`)
        }
        if (((myTotal > cTotal) && (myTotal <= 20) && (cTotal < 20))) {
            alert(`Ok. I got ${cTotal}, and you got ${myTotal}. You Win!`)
            var myPoints = myPoints + 1
            var win = prompt("Would you like to play again?")
        } else if (((cTotal > myTotal) && (cTotal <= 20) && (myTotal < 20))) {
            alert(`Ok. I got ${cTotal}, and you got ${myTotal}. You Lose!`)
            var cPoints = cPoints + 1
            var lose = prompt("Would you like to play again?")
        } else if (myTotal == cTotal) {
            alert(`Our totals are the same. Nobody wins. No points.`)
            var tie = prompt("Would you like to play again?")
        } 

    } while ((cTotal > 16) && (cTotal <= 20))

} while (((((win != "no") && (lose != "no") &&  (tie != "no") &&  (cScoreOver != "no") &&  (myScoreOver != "no")))))

if (((((win != "yes") &&  (lose != "yes") &&  (tie != "yes") &&  (cScoreOver != "yes") &&  (myScoreOver != "yes"))))) {
    alert(`Ok. Game over. The Final score was ${cPoints} Points for me, and ${myPoints} Points for you.`)
} 