const person = { name: "Mickey", surname: "Mouse", gender: "F", dateBirth: "16/1/1928" }

const fiscalCode = (p) => {
    const vowels = /^[aeiou]$/i;

    const surname = p.surname.split('');
    const name = p.name.split('');

    const surnameWithoutVowels = surname.filter(letter => !letter.match(vowels));
    const nameWithoutVowels = name.filter(letter => !letter.match(vowels));

    // nom au moins 3 lettres = RAHER
    if (surname.length > 2) {
        // nom sans voyelles au moins 3 lettres = RHRRS
        if (surnameWithoutVowels.length > 2) {
            surnameWithoutVowels.splice(3, surnameWithoutVowels.length - 3)
            code = surnameWithoutVowels.join('')
        }

        //nom sans voyelles moins de 3 lettres = RH
        else if (surnameWithoutVowels.length < 3) {
            surnameWithoutConsonants = surname.filter(letter => letter.match(vowels))

            switch (surnameWithoutVowels.length) {
                // nom consonne 1 consonne = R
                case 1:
                    for (let i = 0; i < 2; i++) {
                        surnameWithoutVowels.push(surnameWithoutConsonants[i])
                    }
                    code = surnameWithoutVowels.join('')
                    break;

                // nom consonne 2 = RH
                case 2:
                    surnameWithoutVowels.push(surnameWithoutConsonants[0])
                    code = surnameWithoutVowels.join('')
                    break;
            }

        }
    }
    else if (surname.length < 3) {
        surname.push('x')
        code = surname.join('')
    }

    //PRENOM
    if (name.length > 2) {

        //3 consonnes
        if (nameWithoutVowels.length === 3) {
            nameWithoutVowels.splice(3, nameWithoutVowels.length - 3)
            code += nameWithoutVowels.join('')
        }

        //plus de 3 consonnes
        else if (nameWithoutVowels.length > 3) {
            nameWithoutVowels.splice(1, 1)

            if (nameWithoutVowels.length > 3) {
                do {
                    nameWithoutVowels.pop()
                }
                while (nameWithoutVowels.length > 3)
            }

            code += nameWithoutVowels.join('')

        }
        //moins de 3 consonnes
        else if (nameWithoutVowels.length < 3) {
            nameWithoutConsonants = name.filter(letter => letter.match(vowels))

            switch (nameWithoutVowels.length) {
                // prenom consonne 1 consonne = R
                case 1:
                    for (let i = 0; i < 2; i++) {
                        nameWithoutVowels.push(nameWithoutConsonants[i])
                    }
                    code += nameWithoutVowels.join('')
                    break;

                // prenom consonne 2 = RH
                case 2:
                    nameWithoutVowels.push(nameWithoutConsonants[0])
                    code += nameWithoutVowels.join('')
                    break;
            }
        }
    }
    else if (name.length < 3) {
        nameWithoutConsonants = name.filter(letter => letter.match(vowels))
        nameWithoutVowels.push(nameWithoutConsonants[0])

        nameWithoutVowels.push('x')
        code += nameWithoutVowels.join('')

    }

    //Date
    const oldDate = p.dateBirth.toString().split('/');
    const temp = oldDate[0]
    oldDate[0] = oldDate[1]
    oldDate[1] = temp
    oldDate.join(",").replaceAll(",", "/")

    const date = new Date(oldDate)

    const year = new Date(date).getFullYear().toString().split('').splice(2, 2).join('')
    code += year

    const month = new Date(date).getMonth()


    switch (month) {
        case 0:
            code += "a"
            break;

        case 1:
            code += "b"
            break;

        case 2:
            code += "c"
            break;

        case 3:
            code += "d"
            break;

        case 4:
            code += "e"
            break;

        case 5:
            code += "h"
            break;

        case 6:
            code += "l"
            break;

        case 7:
            code += "m"
            break;

        case 8:
            code += "p"
            break;

        case 9:
            code += "r"
            break;

        case 10:
            code += "s"
            break;

        case 11:
            code += "t"
            break;
    }

    //homme + jour naissance
    const day = new Date(date).getDate()

    if (p.gender == "M") {
        if (day < 10) {
            const newDay = day.toString().split('')
            const tempDay = newDay[0]
            newDay[0] = 0
            newDay[1] = tempDay
            const finalDay = newDay.join('')

            code += finalDay
        }
        else {
            code += day
        }
    }
    else if (p.gender == "F") {
        if (day < 10) {
            const newDay = day.toString().split('')
            const tempDay = newDay[0]
            newDay[0] = 4
            newDay[1] = tempDay
            const finalDay = newDay.join('')

            code += finalDay
        }
        else {
            const finalDay = day + 40
            code += finalDay
        }
    }

    code = code.toUpperCase()

    return code
}

console.log(fiscalCode(person))