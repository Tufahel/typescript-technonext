{
    type GenericArray<T> = Array<T>;

    const rolls: GenericArray<number> = [1,2,3,4];

    const mentors: GenericArray<string> = ['ami', 'tumi', 'se'];

    const bolldozar: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{name: string; id: number}> = [
        {
            name: 'ok',
            id: 3,
        },
        {
            name: 'pk',
            id: 6,
        }
    ];

    type GenericTuple<X,Y> = [X,Y]

    const human: GenericTuple<string, string> = ['Mr. X', 'Mrs. X'];

    const userWithId: GenericTuple<number,{name: string, id: number} > = [123, {name: 'tufahel', id: 3}];
    
}