import {atoms_bit, Conj, Diam, Box, Neg, Verum1, Falsum1} from "./basic_functions_bitwise.mjs"
import {Imp, Cimp, Nimp, Ncimp, Neg1, Neg2, Peir, Shef, Pr1, Pr2, Eq, Xor, Verum, Falsum, tau2_bit} from "./binary_functions_bitwise.mjs"
import { ratsa_relations } from "./ratsa_rel_bitwise.mjs"

//atoms_bit.forEach(element => {console.log(element)
    
//});

console.log(atoms_bit)
tau2_bit.forEach(element => {console.log(element.name, element(7,5))
    
});

ratsa_relations.forEach(element => {
    console.log(element)
    
});

//console.log(typeof(atoms_bit))
console.log(typeof(ratsa_relations))
console.log(ratsa_relations[2].includes(ratsa_relations[2][1]))
console.log(ratsa_relations[2][0], typeof(ratsa_relations[2][0]))
console.log(ratsa_relations[2].includes([0, 7]))

console.log(ratsa_relations[2][1])
console.log(ratsa_relations[2][0].map((col) => Neg(col)), "bla")




console.log(ratsa_relations[0][0], Neg(ratsa_relations[0]), Neg(Neg(ratsa_relations[0])) )
console.log(ratsa_relations[2][0], ratsa_relations[2][0].map((col) => Neg(col)))

console.log(ratsa_relations[2][0])
console.log(ratsa_relations[2][1])
console.log(ratsa_relations[2][0].map((col) => Neg(col)))

console.log(ratsa_relations[2][0].map((col) => Neg(col)) == ratsa_relations[2][1], "why")
console.log(Object.values(ratsa_relations[2][0].map((col) => Neg(col))) === Object.values(ratsa_relations[2][1]))

console.log(Object.values(ratsa_relations[2][0].map((col) => Neg(col))))
console.log(Object.values(ratsa_relations[2][1]))



const target = ratsa_relations[2][0].map((col) => Neg(col))

for (let i of ratsa_relations[2]){
    console.log("= target", i, i.length, i[0] == target[0] && i[1] == target[1])
}