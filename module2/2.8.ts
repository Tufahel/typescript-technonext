{
    // promise

    const getTodo = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    }

    getTodo();

    type Something = {something: string};

    const createPromise = () => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {something: "something"};
            if(data){
                resolve(data);
            } else{
                reject('failed to load data');
            }
        })
    }

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
    }

    showData();
    //
}