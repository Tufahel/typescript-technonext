{
    // function with generics

    const createArray = (param: string) : string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param];
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bd');
    const resGenericObj = createArrayWithGeneric<object>({
        id: 12,
        name: 'Tufahel',
    });

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
        return [param1, param2];
    }

    const res = createArray('Bangladesh')
    const resTuple = createArrayWithTuple<number, {name: string}>(12, {
        name: 'Tufahel',
    });

    const addCourseToSTudent = <T> (student: T) => {
        const course = 'Next';

        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToSTudent({name: 'Tufahel', id: 123});
    const student2 = addCourseToSTudent({name: 'Fahim', age: 23});
}