import { ADATOK } from "./adatok.js";

import { tablazatMegjelenit } from "./tablazatMegjelenit.js";
tablazatMegjelenit(ADATOK);

import { rendezes } from "./fuggveny.js";
rendezes(ADATOK);

import { pozik  } from "./saktablapozicio.js";

pozik()

let nev = "Mágori Ferenc Ferdinánd";
let titleElem = document.querySelector("head title");
let footerElem = document.querySelector("footer p");
titleElem.innerHTML = nev;
footerElem.innerHTML += nev;
