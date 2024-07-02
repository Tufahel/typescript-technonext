{
    // nullable types / unknown

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    };

    searchName(null);

    // unknown type

    const getSpeed = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string'){
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('wrong input');
        }
    }
    getSpeed(333);

    // never
    
    // function throwError(msg: string) {
    //     throw new Error(msg);
    // }

    // throwError('It is an error');
}