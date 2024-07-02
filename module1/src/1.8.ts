{
    // destructuring

    const user = {
        id: 123,
        name: {
            firstName: 'ok',
            middleName: 'joke',
            lastName: 'rock',
        },
        contact: '1234567',
    };

    const {
        contact,
        name: {middleName},
    } = user ;

    const friends : string[] = ['ami', 'tumi', 'se', 'ke'];

    const [,, bestFriend, ...rest] = friends;
}