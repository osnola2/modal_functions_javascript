import { Neg } from "./basic_functions_bitwise.mjs"
import { atoms_bit } from "./basic_functions_bitwise.mjs"


export function Falsum(prop1, prop2){
    return 0
};
    
export function Verum(prop1, prop2){   
        return 7
}

// These arguments are dummy, and they should be. Same for falsum above.

export function Conj(prop1, prop2){
    return prop1 & prop2
}

export function Disj(prop1, prop2){
    return Neg(Neg(prop1) & Neg(prop2))
}

export function Imp(prop1, prop2){
    return Disj(Neg(prop1), prop2)
}
export function Cimp(prop1, prop2){
    return Imp(prop2, prop1)}

export function Eq(prop1, prop2){
    return Conj(Imp(prop1, prop2), Cimp(prop1, prop2))
}

export function Xor(prop1, prop2){
    return Eq(Neg(prop1), prop2)
}
export function Nimp(prop1, prop2){
    return Neg(Imp(prop1, prop2))
}

export function Ncimp(prop1, prop2){
    return Neg(Cimp(prop1, prop2))
}
export function Pr1(prop1, prop2){
    return prop1
}

export function Pr2(prop1, prop2){
    return prop2
}
export function Neg1(prop1, prop2){
    return Neg(prop1)
}
export function Neg2(prop1, prop2){
    return Neg(prop2)
}

export function Shef(prop1, prop2){
    return Neg(Conj(prop1, prop2))
}
export function Peir(prop1, prop2){
    return Neg(Disj(prop1, prop2))
}


export const tau2_bit = [Falsum, Peir, Ncimp, Neg1, Nimp, Neg2, Xor, Shef, Conj, Eq, Pr2, Imp, Pr1, Cimp, Disj, Verum]

//console.log(Disj(6, 9))
/*
tau2_bit.forEach((fun) => {atoms_bit.forEach((element1) => {
    atoms_bit.forEach((element2) => { if (element1 != element2){
      console.log(fun.name, element1, element2, "___________", fun(element1, element2))};
    });
  })
  })

console.log(0==0)
*/