/* export function lepesek() {
  let lepesek = document.querySelectorAll("input");
  for (let index = 0; index < lepesek.length; index++) {
    //console.log(lepesek[index]);
  }
  return lepesek;
}

export function utesEllenorzes(params) {}
 */

/* export function okGomb() {
  let gombElem = document.querySelector("button");
  let inputElemek = document.querySelectorAll("input");
  gombElem.addEventListener("click", function () {
    lepesek(inputElemek);
  });
}

export function lepesek(inputElemek) {
  for (let index = 0; index < inputElemek.length; index++) {
    console.log(inputElemek[index].value);
  }
} */

export function pozik() {
  let lep1Elem = document.getElementById("pozicio1");
  let lep2Elem = document.getElementById("pozicio2");
  let gombElem = document.querySelector("button");
  gombElem.addEventListener("click", function () {
    let lep1v = lep1Elem.value;
    let lep2v = lep2Elem.value;
    let eredmeny = utesEllenorzes(lep1v, lep2v);
    if (eredmeny === true) {
        console.log("Ütik egymást");
    } else {
        console.log("nem");
        
    }
  });
}

export function utesEllenorzes(lep1v, lep2v) {
  let oszlop1 = lep1v[0];
  let sor1 = lep1v[1];

  let oszlop2 = lep2v[0];
  let sor2 = lep2v[1];

  switch (oszlop1) {
    case "a":
      oszlop1 = 1;
      break;
    case "b":
      oszlop1 = 2;
      break;
    case "c":
      oszlop1 = 3;
      break;
    case "d":
      oszlop1 = 4;
      break;
    case "e":
      oszlop1 = 5;
      break;
    case "f":
      oszlop1 = 6;
      break;
    case "g":
      oszlop1 = 7;
      break;
    case "h":
      oszlop1 = 8;
      break;
  }

  switch (oszlop2) {
    case "a":
      oszlop2 = 1;
      break;
    case "b":
      oszlop2 = 2;
      break;
    case "c":
      oszlop2 = 3;
      break;
    case "d":
      oszlop2 = 4;
      break;
    case "e":
      oszlop2 = 5;
      break;
    case "f":
      oszlop2 = 6;
      break;
    case "g":
      oszlop2 = 7;
      break;
    case "h":
      oszlop2 = 8;
      break;
  }

  if (oszlop1 === oszlop2 || sor1 === sor2) {
    //console.log("ütik egymást");
    return true;
  } else if (Math.abs(oszlop1 - oszlop2) === Math.abs(sor1 - sor2)) {
    return true;
  } else {
    return false;
  }
}
