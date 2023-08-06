function ticketPrice (ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const resTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price
    }
    else if(ticketQuantity <= 200){
        const first100TicketPrice = 100 * first100Rate;
        const resTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = resTicketQuantity * second100Rate
        const totalTicketPrice = first100TicketPrice + restTicketPrice;
        return totalTicketPrice;
    }
    else{
        const first100TicketPrice = 100 * first100Rate;
        const second100TicketPrice = 100 * second100Rate;
        const resTicketQuantity =  ticketQuantity - 200;
        const restTicketPrice = resTicketQuantity * resTicketRate;
        const totalCost = restTicketPrice + first100TicketPrice + second100TicketPrice;
        return totalCost;
    }
}

const totalTicketPrice = ticketPrice(250)
console.log(totalTicketPrice);