const myname = 'johny'
let age = 35
console.log(myname)
console.log(age)

// for loop

    //   start.    stop    step
for (let i = 1 ; i <= 10 ; i++) {
    console.log(i)
}

//while loop
let count = 1
while (count <= 10){
    console.log(count)
    count++
}

// infinite loop
while (true){
    console.log('test')
}

// for loops

const names = ['johnny', 'bobby', 'grisha']
    for (const name of names) [
        console.log(name)
    ]
    //for each method 
     names.forEach((name) => console.log(name))


     // for loops continue break
    

const names = ['johnny', 'bobby', 'grisha']
    for (const name of names){{
        if (name === 'bobby')
            continue
        }
        console.log(name)
    }

    const names = ['johnny', 'bobby', 'grisha']
    for (const name of names){{
        if (name === 'bobby')
            break
        }
        console.log(name)
    }

    const person = {
        name: 'johny',
        age: 35,
        city: 'holon'
    }
    //for in loop

    for (const key in person ){
        console.log(person[key])
    }