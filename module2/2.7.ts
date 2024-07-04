{
    // generic constraint with keyof operator

    type Vehicle ={
        bike: string;
        car: string;
        bus: string;
    }

    type Owner = "bike" | "car" | "owner"; // manually

    type Owner2 = keyof Vehicle;

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'tufahel',
        id: 234,
    }

    const car = {
        model: 'toyota',
        engine: 'hvv'
    }

    const res = getPropertyValue(car, 'engine');

}