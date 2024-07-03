{
    // interface

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    };

    type UserWithRole1 = User1 & {role: string};

    interface UserWithRole2 extends User2 {
        role: string;
    }

    
    const user1: UserWithRole2 = {
        name: "Tufahel",
        age: 100,
        role: "manager",
    }

    const user2: User2 = {
        name: "Tufahel",
        age: 29,
    }


    // In js, array is one kind of object, function is also one kind of object

    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number;
    }

    const rollNumber1: Roll1 = [1,2,3];
    const rollNumber2: Roll2 = [1,2,3];

    type Add1 = (num1: number, num2: number) => number;
    const add: Add1 = (num1, num2) => num1 + num2;

    interface Add2 {
        (num1: number, num2: number) : number;
    }

    // Suggested with array and function use type alias. With array you may use interface.

}