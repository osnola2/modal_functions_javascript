export function Neg(prop1) {
  return 7 - prop1
}

export function Conj(prop1, prop2){
  return prop1&prop2
}

export function Box(prop1) {
  if (prop1 == 7) {
    return 7;
  } else return 0;
}

export function Diam(prop1) {
  return Neg(Box(Neg(prop1)));
}

export function Falsum1(prop1) {
  return 0;
}

export function Verum1(prop1) {
  return 1;
}

export const atoms_bit = [0, 1, 2, 3, 4, 5, 6, 7];


/*
atoms_bit.forEach((element1) => {
  atoms_bit.forEach((element2) => {
    console.log(element1, element2, Conj(element1, element2));
  });
});
*/