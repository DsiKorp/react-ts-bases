// <number> generico para evitar el tipo de dato unknown
// tambien se puede sin <number> y dejar en .then((myMoney: number) pero es inseguro
const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // ! Yo quiero mi dinero!!
    resolve(100);
    // reject('Mi amigo se perdió');
  }, 2000); // 2 segundos
});

myPromise
// .then((myMoney: number)
  .then((myMoney: number) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log('Pues a seguir con mi vida');
  });
