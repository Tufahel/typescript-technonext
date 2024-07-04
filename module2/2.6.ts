{
    const addCourseToSTudent = <T extends {name: string, id: number, email: string}> (student: T) => {
        const course = 'Next';

        return {
            ...student,
            course,
        }
    }

    const student3 = addCourseToSTudent({name: 'Samun', id: 678, email: 'samun@gmail.com'});

    const student1 = addCourseToSTudent({name: 'Tufahel', id: 123, email: 'tufa@gmail.com', devtype: 'junior'});
    const student2 = addCourseToSTudent({name: 'Fahim', id: 345, email: 'fahim@gmail.com', age: 23});
}