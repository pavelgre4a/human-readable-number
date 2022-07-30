module.exports = function toReadable (number) {
    let singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let doubleDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let doubleDigitsRounded = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tripleDigits = ['hundred'];

    if (number < 10) {
        return singleDigits[number];

    } else if (number >= 10 && number < 20) {
        return doubleDigits[number - 10];

    } else if (number >= 20 && number < 100 && Number(number.toString().charAt(1)) == 0) {
        return doubleDigitsRounded[Number(number.toString().charAt(0))];

    } else if (number >= 20 && number < 100 && Number(number.toString().charAt(1)) !== 0) {
        return doubleDigitsRounded[Number(number.toString().charAt(0))], singleDigits[Number(number.toString().charAt(1))];

    } else if (number >= 100) {
        let tripleDigitsHundreds = singleDigits[Number(number.toString().charAt(0))] + ' ' + tripleDigits[0];
        let tripleDigitsOther = number - (100 * Number(number.toString().charAt(0)));

        // console.log(tripleDigitsOther);

        if (tripleDigitsOther == 0) {
            return tripleDigitsHundreds;

        } else if (tripleDigitsOther < 10 && tripleDigitsOther > 0) {
            return tripleDigitsHundreds, singleDigits[tripleDigitsOther];
    
        } else if (tripleDigitsOther >= 10 && tripleDigitsOther < 20) {
            return tripleDigitsHundreds, doubleDigits[tripleDigitsOther - 10];
    
        } else if (tripleDigitsOther >= 20 && tripleDigitsOther < 100 && Number(tripleDigitsOther.toString().charAt(1)) == 0) {
            return tripleDigitsHundreds, doubleDigitsRounded[Number(tripleDigitsOther.toString().charAt(0))];
    
        } else if (tripleDigitsOther >= 20 && tripleDigitsOther < 100 && Number(tripleDigitsOther.toString().charAt(1)) !== 0) {
            return tripleDigitsHundreds, doubleDigitsRounded[Number(tripleDigitsOther.toString().charAt(0))], singleDigits[Number(tripleDigitsOther.toString().charAt(1))];

        }

    }

}