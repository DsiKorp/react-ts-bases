const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;

console.log({ trunks });

const returnsArrayFn = () => {
  return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

// Tarea:

/*
 al usar as const, le indicas a TypeScript que el arreglo es inmutable y debe ser 
 tratado como una tupla, lo que le permite inferir tipos específicos para cada elemento. 
 Esto es fundamental para garantizar la seguridad de tipos en tu código. 
 */
const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
  ] as const;
};

const [name, setName] = useState('Goku');
console.log(name); // Goku
setName('Vegeta'); // Imprime "Vegeta"
