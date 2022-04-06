const first = [0, 2, 4, 6, 8, 8];
const second = [1, 2, 3, 4, 5, 6];

//1
const getHashTags = (str) => {
    const result = str.split(' ').sort((a, b) => b.length - a.length).splice(0, 3).map(value => `#${value}`)
    return result
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));

//2
const removeDuplicate = (arr) => {
    arr.map((value, index) => { arr[index] == arr[index - 1] ? arr.splice(index, 1) : '' })
    return arr
}

const tab = [0, 2, 4, 6, 8, 8]

console.log(removeDuplicate(tab))

//3
const intersection = (arr, arr2) => {
    const finalArr = arr.filter(element => arr2.includes(element));
    return finalArr
}

console.log(intersection(first, second))

//4
const arrayDiff = (arr, arr2) => {
    const finalArr = arr.filter(element => !arr2.includes(element))
    return finalArr
}

console.log(arrayDiff(first, second))