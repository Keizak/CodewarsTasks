function createPhoneNumber(numbers)
{
    let str = String(numbers);
    let newstr = str.replace(/[,]/g, '')

    if (newstr.length == 10)
    {
    let number = "("+newstr[0]+newstr[1]+newstr[2]+') '+newstr[3]+newstr[4]+newstr[5]+'-'+
        newstr[6]+newstr[7]+newstr[8]+newstr[9];
        return number;
    }
    else
        return (console.log("please \n" +
            "The required number of numbers 10"))

}
let a = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])