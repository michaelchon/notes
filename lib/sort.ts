export const sort = (array: Record<string, any>[], field: string) => {
    const newArray = [...array];

    let temp: any;

    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - 1 - i; j++) {
            if (newArray[j][field] > newArray[j + 1][field]) {
                temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }

    return newArray;
};
