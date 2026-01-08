// Hero es la importación de la interfaz Hero
// type Cuando se importan interfaces o tipos, es recomendable usar 
// la palabra reservada type, ayuda a la transpilación y a la lectura del código
// para especificar que es un tipo de dato
import { heroes, type Hero, Owner } from '../data/heroes.data';

// se renombra heroes a misHeroes para evitar conflictos
// import { heroes as misHeroes } from '../data/heroes.data';

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  console.log(`id ${id}`);

  //codigo para remplazar el | undefined y lanzar un error en la firma del metodo
  // if (!hero) {
  //   throw new Error(`No existe un héroe con el id ${id}`);
  // }

  return hero;
};

console.log(getHeroById(6));

/**
 *  getHeroesByOwner => Hero[]
 * Filtra héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeración Owner
 * @returns Array de héroes pertenecientes al propietario especificado
 */

// getHeroesByOwner en varias lineas
// (hero) => hero.owner === owner es una función anonima de flecha y un callback
export const getHeroesByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
  return heroesByOwner;
};

// getHeroesByOwner en una sola línea retorna sin return
export const getHeroesByOwner2 = (owner: Owner) =>
  heroes.filter((hero) => hero.owner === owner);

//NO: console.log( getHeroesByOwner('Marvel') );
