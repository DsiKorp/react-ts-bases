const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman',
  rango: 'Soldado',
};

console.log('1. person', person);

// destructuración de name, pero se le cambia el nombre a ironmanName
const { name:ironmanName, age:edad, key } = person;
console.log("2");
console.log({ironmanName, edad, key});

//const { key, name: ironmanName, age } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;
//console.log({ ironmanName, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
  //rank: string | undefined;
}

const useContext = ({ key, name, age, rank = 'sin rango' }: Hero) => {
  return {
    keyName: key,
    user: {
      name, 
      age,
    },
    rank: rank,
  }
}
// name y age doble destructurados
const { rank, keyName, user: { name, age } } = useContext(person);
console.log("3")
console.log({rank, keyName, name, age});

// const useContext = ({ key, name, age, rank = 'sin rango' }: Hero) => {
//   return {
//     keyName: key,
//     user: {
//       name,
//       age,
//     },
//     rank,
//   };
// };

// const context = useContext(person);
// console.log("Context")
// console.log(context)

// const {
//   rank,
//   keyName,
//   user,
//   // user: { name },
// } = useContext(person);
// const { name } = user;

// console.log({ rank, keyName, name });
