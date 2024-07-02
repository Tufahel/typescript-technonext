{
    // Type Alias

    type Student = {
        name: string;
        id: number;
        contact: string;
        gender: string
    }

    const student1: Student = {
        name: 'hi',
        id: 123,
        contact: '50/A',
        gender: 'male',
    };

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;
    
}