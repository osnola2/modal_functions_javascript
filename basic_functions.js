function Conj(prop1, prop2) {
    if (prop1 == prop2) {
      return prop1;
    }
    if (prop1 == 0 || prop2 == 0) {
      return 0;
    }
    if (prop1 == 1) {
      return prop2;
    }
    if (prop2 == 1) {
      return prop1;
    }
    if (
      (prop1 == 5 && prop2 == 4) ||
      (prop2 == 5 && prop1 == 4) ||
      (prop1 == 5 && prop2 == 9)
    ) {
      return 2;
    }
    if (prop2 == 5 && prop1 == 9) {
      return 2;
    }
    if (prop1 == 5 && prop2 == 3) {
      return 0;
    }
    if (prop2 == 5 && prop1 == 3) {
      return 0;
    }
    if (prop1 == 5 && (prop2 == 6 || prop2 == 2)) {
      return prop2;
    }
    if (prop2 == 5 && (prop1 == 6 || prop1 == 2)) {
      return prop1;
    }
    if (prop1 == 4 && prop2 == 9) {
      return 3;
    }
    if (prop2 == 4 && prop1 == 9) {
      return 3;
    }
    if (prop1 == 4 && prop2 == 2) {
      return 0;
    }
    if (prop2 == 4 && prop1 == 2) {
      return 0;
    }
    if (prop1 == 4 && (prop2 == 6 || prop2 == 3)) {
      return prop2;
    }
    if (prop2 == 4 && (prop1 == 6 || prop1 == 3)) {
      return prop1;
    }
    if (prop1 == 9 && prop2 == 6) {
      return 0;
    }
  
    if (prop2 == 9 && prop1 == 6) {
      return 0;
    }
    if (prop1 == 9 && (prop2 == 2 || prop2 == 3)) {
      return prop2;
    }
    if (prop2 == 9 && (prop1 == 2 || prop1 == 3)) {
      return prop1;
    }
    if (prop1 == 6 && (prop2 == 2 || prop2 == 3)) {
      return 0;
    }
    if (prop2 == 6 && (prop1 == 2 || prop1 == 3)) {
      return 0;
    }
    if (prop1 == 2 && prop2 == 3) {
      return 0;
    }
    if (prop2 == 2 && prop1 == 3) {
      return 0;
    }
  }
  
  function Box(prop1) {
    if (prop1 == 1) {
      return 1;
    } else return 0;
  }
  
  function Neg(prop1) {
    if (prop1 == 1) {
      return 0;
    }
    if (prop1 == 5) {
      return 3;
    }
    if (prop1 == 4) {
      return 2;
    }
    if (prop1 == 9) {
      return 6;
    }
    if (prop1 == 2) {
      return 4;
    }
    if (prop1 == 6) {
      return 9;
    }
    if (prop1 == 3) {
      return 5;
    }
    if (prop1 == 0) {
      return 1;
    }
  }
  function Diam(prop1) {
    return Neg(Box(Neg(prop1)));
  }
  
  function Falsum1(prop1) {
    return 0;
  }
  
  function Verum1(prop1) {
    return 1;
  }
  
  atoms = [0, 2, 3, 4, 5, 6, 9, 1];
  
  atoms.forEach((element1) => {
    atoms.forEach((element2) => {
      console.log(element1, element2, Conj(element1, element2));
    });
  });
  
  console.log(typeof atoms);
  