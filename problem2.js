                /* centimeterToMeter */

function centimeterToMeter (centimeter){
    const metter = centimeter / 100;
    return metter
}

const tableCentimeter = 1000;
const tableMetter = centimeterToMeter(tableCentimeter);
console.log(tableMetter);