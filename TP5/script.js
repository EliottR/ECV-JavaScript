const first = [0, 2, 4, 6, 8, 8];
const second = [1, 2, 3, 4, 5, 6];

//1
const getHashTags = (str) => {
    const result = str.split(' ').sort((a, b) => b.length - a.length).splice(0, 3).map(value => `#${value}`)
    return result
}

//2
const removeDuplicate = (arr) => {
    arr.map((value, index) => { arr[index] == arr[index - 1] ? arr.splice(index, 1) : '' })
    return arr
}

const tab = [0, 2, 4, 6, 8, 8]

//3
const intersection = (arr, arr2) => {
    const finalArr = arr.filter(element => arr2.includes(element));
    return finalArr
}

//4
const arrayDiff = (arr, arr2) => {
    const finalArr = removeDuplicate([...arr.filter(element => !arr2.includes(element)), ...arr2.filter(element => !arr.includes(element))])
    return finalArr
}

//5
const combinations = (...elements) => {
    const comb = elements.reduce((prev, current) => prev * current)
    return comb
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(removeDuplicate(tab))
console.log(intersection(first, second))
console.log(arrayDiff(first, second))
console.log(combinations(2, 3, 4, 5))