// Задача 3. Фільтрація масиву чисел

function filterArray(numbers, value) {
  
    let newArray = [];
    for (let item of numbers) {
        if (Number(item)> Number(value)) {
            newArray.push(item);
        }
        continue;
    }
    return newArray;

}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
