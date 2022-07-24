module.exports = function toReadable(number) {
    const To19 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    let ten = (number - number % 10) / 10
    let num = number % 10
    let hung = (number - number % 100) / 100
    let teen = ((number - hung * 100) - number % 10) / 10
    let numm = number - hung * 100

    if (number < 20) {
        return (To19[number])
    } else if (number >= 20 && number % 10 === 0 && number < 100) {
        return (dozens[ten])
    } else if (number >= 20 && number % 10 !== 0 && number < 100) {
        return (`${dozens[ten]} ${To19[num]}`)
    } else if (hung > 0 && teen === 0 && num === 0) {
        return (`${To19[hung]} hundred`)
    } else if (hung > 0 && teen > 0 && num === 0) {
        return (`${To19[hung]} hundred ${dozens[teen]}`)
    } else if (hung > 0 && teen < 2 && num > 0) {
        return (`${To19[hung]} hundred ${To19[numm]}`)
    } else if (hung > 0 && teen >= 2 && num > 0) {
        return (`${To19[hung]} hundred ${dozens[teen]} ${To19[num]}`)
    }
}
