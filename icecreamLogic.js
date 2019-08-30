function IceCreamFactory() {
    const cont =0;
    const flov = 0;
    const totalAmount = 0;
   const IceCream_A = [{
        con: "Plain Cone",
        price: 10,
        flov: "Strawberry"
    },
    {
        con: "Suger Cone",
        price: 30,
        flov: "Vanilla"
    },
    {
        con: "Paper Cup",
        price: 20,
        flov: "chocolate"
    }];


    function addConCost() {
        IceCream_A.forEach(IceCream_A => {
            cont += IceCream_A.con
     });
     return cont;
    }
    function addFlovsCost() {
        IceCream_A.forEach(IceCream_A => {
            flov +=  IceCream_A.flov
     });
     return flov;

    }

    function addIceCreamCost() {
        IceCream_A.forEach(addIceCreamCost);
        totalAmount += IceCream_A.price;

        return totalAmount;
    }





    return {
        addIceCreamCost,
        addConCost,
        addFlovsCost

    }

}