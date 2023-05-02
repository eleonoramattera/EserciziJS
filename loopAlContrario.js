for (let i = 0; i < 5; i++) {
  // console.log(i); // 0 1 2 3 4
}

for (let i = 4; i >= 0; i++) {
  // console.log(i);// loop infinito
}
// i i = 4 quindi parte da 4
// i >=0
//i++ incrementa ma i è maggiore di 4 quindi va da 4 in su creando un loop infinito perchè non ha una condizione che lo blocca
// la condizione dovrebbe essere i>=0 ma se i = 4 è i>0 e quindi da 4 aumenta sempre con i++

for (let i = 4; i >= 0; i--) {
  console.log(i); // 4 3 2 1 0
}
// i = 4 quindi parte da 4
// i >=0
// i-- quindi decrementa e va da 4 a 0
