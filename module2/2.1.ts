{
    const kgToGram = (value:string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseInt(value)*1000;
            return convertedValue;
        }
        if (typeof value === 'number')
            return value*1000;
    }

    const result1 = kgToGram(1000) as number;
    const result2 = kgToGram('1000') as string;

    type CustomError = {
        message: string
    }

    try {

    }catch(error){
        console.log((error as CustomError).message);
    }
}