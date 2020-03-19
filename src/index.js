const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = "";
    while(expr !== "") {
        let num = expr.substring(0, 10);
        if(num === "*".repeat(10)) {
            str += " ";
        }
        else {
            let sym = "";
            num = Number(num);
            while(num) {
                sym = ((num % 100 === 10)? "." : "-") + sym;
                num = Math.floor(num / 100);
            }
            str += (MORSE_TABLE[sym]);
        }
        expr = expr.substring(10);
    }
    return str;
  }

module.exports = {
    decode
}
