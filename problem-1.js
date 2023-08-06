                        /* feetToInch */

function feetToInch (feet) {
        const inch = feet / 12;
        return inch; 
    }

    const tableFeet = 420;
    const  tableInch = feetToInch(tableFeet);
    console.log('This table', tableInch , 'Feet long.');