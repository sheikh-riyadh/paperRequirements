function paperRequirements(copyOfQuantity1, copyOfQuantity2, copyOfQuantity3) {
    const resultOfQuantity1 = copyOfQuantity1 * 100;
    const resultOfQuantity2 = copyOfQuantity2 * 200;
    const resultOfQuantity3 = copyOfQuantity3 * 300;
    const total = resultOfQuantity1 + resultOfQuantity2 + resultOfQuantity3;

    return total;
}

const total = paperRequirements(100, 50, 150);
console.log("You will need a total of", total + " pages");