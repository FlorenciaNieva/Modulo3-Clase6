// Consigma:
// Crear una función removerDuplicados que tome como argumento un array 'array' y que devuelva un array con los mismos valores de array pero sin valores duplicados.

const removerDuplicados = (arr) => {
    let sinDuplicados = [];
    arr.forEach((num, index) => {
        console.log(index);
        if (!sinDuplicados.includes(num)) {
        sinDuplicados.push(num);
        }
    });
    return sinDuplicados;
};

console.log(removerDuplicados([1, 1, 1])); // [1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3])); // [1, 2 ,3]
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]

const removerDuplicados2 = (array) => {
    return array.reduce((acc, item) => {
        if (!acc.includes(item)) {
        acc.push(item);
        }
        return acc;
    }, []);
};

console.log(removerDuplicados2([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]