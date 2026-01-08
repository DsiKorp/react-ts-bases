function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC-123',
    username: 'El_Papi23',
  };
}

// "Envolviendo el objeto con paréntesis" porque, 
// al usar funciones de flecha en JavaScript, es esencial envolver el objeto que deseas
// retornar implícitamente en paréntesis. Esto evita que el intérprete confunda las llaves 
// del objeto con el cuerpo de la función, permitiéndote retornar el objeto de manera efectiva
const getUser2 = () => ({
  uid: 'ABC-123',
  username: 'El_Papi23',
});

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

console.log("for 1");

myNumbers.forEach(function (value) {
  console.log({ value });
});

console.log("for 2");

myNumbers.forEach((value) => {
  console.log(value);
});


console.log("for 3");

myNumbers.forEach(console.log);
