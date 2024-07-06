{
    // utility types
    // Pick
    type Person = {
        name: string;
        id: number;
        contactInfo: string;
        email: string;
    }

    type NameId = Pick<Person, "name" | "id">;

    // Omit
    type ContactInf = Omit<Person, "name" | "id">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Tufahel",
        id: 123,
        contactInfo: 'abc',
        email: 'tufahel'
    };

    // Record
    type MyObj = Record<string,unknown>  // Record<Key, Value>

    const user1: MyObj = {  // Record<Key = name, Value = 'ami'>
        name: 'ami',
        id: 13,
        student: true
    }
}