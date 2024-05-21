const requiredCredits = 120;

const currentCredits = prompt("How many credits do you have?");

if (currentCredits >= requiredCredits){
    console.log("Woohoo! You have enough credits to graduate!");
} else if (currentCredits >= 90){
    console.log(`You're close you only need ${requiredCredits - currentCredits} more credits to graduate!`);
} else { console.log(`You have a long way to go! You need to earn ${requiredCredits - currentCredits} more credits to graduate!`)};
