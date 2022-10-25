const number = num => {
    let phone = '(xxx) xxx-xxxx'

    num.forEach(element => {
        phone = phone.replace('x', element)
    });

    return phone
}

console.log(number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"