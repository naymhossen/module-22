 /* paperRequirements */

function paperRequirements(paperQuantity){
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    if(paperQuantity <= 100){
        const page = paperQuantity * thirdBookPage ;
        return page;
    }
    else if(paperQuantity <= 300){
        const thirdBookPageCost = thirdBookPage * 300;
        const firstBookPageQuantity = paperQuantity - 300;
        const firstBookPageCost = firstBookPageQuantity * secondBookPage;
        const totalBookPage = thirdBookPage + firstBookPageCost ;
        return totalBookPage;
    }
    else{
        const thirdBookPageCost = 300 * firstBookPage;
        const secondBookPageCost = 200 * secondBookPage;
        const firstBookPageQuantity = paperQuantity - 300;
        const firstBookPageCost = firstBookPageQuantity + secondBookPageCost;
        const totalBookCost = firstBookPageCost + thirdBookPageCost + secondBookPageCost;
        return totalBookCost;
    }
}


const totalPage = paperRequirements(301)
console.log(totalPage);


