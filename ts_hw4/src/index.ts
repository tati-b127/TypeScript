// TASK 1

type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};
function getHouse(): House {
    // const house = {} as House;   // 1. ручное приведение as типа к House, не подсвечивает ошибки отсутствия необходимых свойств объекта (apartmentCount, buildInfo)
    const house: House = {
        street: 'Pushkina', 
        apartmentCount: 76,
        buildInfo: {             
            year: 1996,
            material: 'rocks',
            }
    }
    // house.street = 'Pushkina';
    // house.apartmentCount = 76;

    // house.buildInfo = {             // 5. При выводе в консоль не находит свойство year, т.к. const house = {} as House может не иметь полного совпадения
    //     year: 1996,
    //     material: 'rocks',
    //     };

    return house;
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `);
}

handleHouse();


// TASK 2

type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = { 
    name: 'Bobik',
    bark: () => 'bark!',
}

/*
Expected:

whatDoesThePetSay(cat) -> 'meow'
whatDoesThePetSay(dog) -> 'bark'

*/

function whatDoesThePetSay(pet: Dog | Cat): string {
    console.log(typeof pet.meow)
    if (isCat(pet)) return pet.meow()
    if (isDog(pet)) return pet.bark()

    if (pet.meow) return pet.meow()
    if (pet.bark) return pet.bark()

    if (typeof pet === 'Cat')
    // return 'Nothing :(' 
}

function isCat(pet: Cat): pet is Cat {
    return true
}
function isDog(pet: Dog): pet is Dog {
    return true
}



whatDoesThePetSay(cat) //?
whatDoesThePetSay(dog) //?
