{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 14;
     
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }

    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({isAdult});

    // nullish coaleasing operator

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest";
    console.log({result1});

    // const isAuthenticated = "";
    // const result2 = isAuthenticated ? isAuthenticated : "Guest";
    // console.log({result2});

    type User = {
        name: string;
        address: {
            city: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user: User = {
        name: 'Tufahel',
        address: {
            city: 'sylhet',
            presentAddress: 'barlekha',
        },
    };

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address';

    console.log({permanentAddress});


}