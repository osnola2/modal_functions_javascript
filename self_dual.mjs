import {
  atoms_bit,
  Conj,
  Diam,
  Box,
  Neg,
  Verum1,
  Falsum1,
} from "./basic_functions_bitwise.mjs";
import {
  Imp,
  Cimp,
  Nimp,
  Ncimp,
  Neg1,
  Neg2,
  Peir,
  Shef,
  Pr1,
  Pr2,
  Eq,
  Xor,
  Verum,
  Falsum,
  tau2_bit,
} from "./binary_functions_bitwise.mjs";
import { ratsa_relations } from "./ratsa_rel_bitwise.mjs";

const rel = ratsa_relations[2];

console.log(rel);

for (let fun of tau2_bit) {
  console.log(fun.name, rel[0][0], rel[1][0], fun(rel[0][0], rel[1][0]));
}

/*for (let fun of tau2_bit){
    for (let col1 of rel){
        for (let col2 of rel){
            console.log(fun.name, col1, col2,  col1[0], col2[0], col1[1], col2[1], fun(col1[0], col2[0]), fun(col1[1], col2[0]))
        }
    }
}*/

/*for (let fun of tau2_bit) {
  for (let col1 of rel) {
    for (let col2 of rel) {
      if (
        ([fun(col1[0], col2[0]), fun(col1[1], col2[1])][0] == 7 &&
          [fun(col1[0], col2[0]), fun(col1[1], col2[1])][1] == 7) ||
        ([fun(col1[0], col2[0]), fun(col1[1], col2[1])][0] == 0 &&
          [fun(col1[0], col2[0]), fun(col1[1], col2[1])][1] == 0)
      ) {
        console.log(fun.name);
      }
    }
  }
}*/


for (let fun of tau2_bit) {
  for (let col1 of rel) {
    for (let col2 of rel) {
      if (
        ([fun(col1[0], col2[0]), fun(col1[1], col2[1])][0] == 7 &&
          [fun(col1[0], col2[0]), fun(col1[1], col2[1])][1] == 7) ||
        ([fun(col1[0], col2[0]), fun(col1[1], col2[1])][0] == 0 &&
          [fun(col1[0], col2[0]), fun(col1[1], col2[1])][1] == 0)
      ) {
        console.log(fun.name);
      }
    }
  }
}




