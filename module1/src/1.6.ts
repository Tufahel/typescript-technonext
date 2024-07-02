// Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, '2'); /// Wrong

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object ---> function ---> method

const poorUser = {
    name: 'Mezba',
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is: ${this.balance + balance}`;
    }
}

const ar : number[] = [2, 3, 4];

const powArray : number[] = ar.map((elem:number):number => elem*elem);