function alphabetPosition(text) {
    let alhpavite = {
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'e': '5',
        'f': '6',
        'g': '7',
        'h': '8',
        'i': '9',
        'j': '10',
        'k': '11',
        'l': '12',
        'm': '13',
        'n': '14',
        'o': '15',
        'p': '16',
        'q': '17',
        'r': '18',
        's': '19',
        't': '20',
        'u': '21',
        'v': '22',
        'w': '23',
        'x': '24',
        'y': '25',
        'z': '26'
    };
    let str = text.toLowerCase();
    text = '';
    for (let i in str) {
        if (str[i] = alhpavite[str[i]]) {
            text += alhpavite[str[i]] + " ";
        }
    }
    text = text.trim();


    return text;
}
let a=alphabetPosition('The sunset sets at twelve o\' clock.');
console.log(a);