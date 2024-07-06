{
    // mapped types

    const arrofNubmbers = [1,2,3];

    const arrofStrings: string[] = arrofNubmbers.map((number) => number.toString() );

    console.log(arrofStrings);

    type AreaNumber = {
        height: number;
        width: number;
    };

    // type AreaString = {
    //     height: string;
    //     width: string;
    // };

    // type AreaString = {
    //     [key in "height" | "width"]: string;
    // }

    type Height = AreaNumber["height"];

    // type AreaString = {
    //     [key in keyof AreaNumber]: string;
    // };

    type AreaGeneric<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaGeneric<{height: string; width: number}> = {
        height: "300",
        width: 12,
    }



}