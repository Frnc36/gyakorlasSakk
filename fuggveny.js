import { tablazatMegjelenit } from "./tablazatMegjelenit.js";

export function rendezes(lista) {
  const szamlalo = {
    nev: 0,
    nemzetiseg: 0,
    gyozelmek_szama: 0,
  };
  const RENDEZESEK = document.querySelectorAll("th");
  RENDEZESEK.forEach(function (th) {
    th.addEventListener("click", function (event) {
      console.log(event.target.id);
      let kulcs = event.target.id;
      switch (event.target.id) {
        /* case "nev":
          lista.sort(function (a, b) {
            return a.nev > b.nev ? 1 : -1;
          });
          tablazatMegjelenit(lista);
          break;
        case "nem":
          lista.sort(function (a, b) {
            return a.nemzetiseg > b.nemzetiseg ? 1 : -1;
          });
          tablazatMegjelenit(lista);
          break; */
        case "gyo":
          if (szamlalo[kulcs] % 2 == 0) {
            lista.sort(function (a, b) {
              return a.gyozelmek_szama - b.gyozelmek_szama;
            });
            szamlalo[kulcs]++;
          } else {
            lista.sort(function (a, b) {
              return b.gyozelmek_szama - a.gyozelmek_szama;
            });
            szamlalo[kulcs]++;
          }
          tablazatMegjelenit(lista);
          break;

        default:
          if (szamlalo[kulcs] % 2 == 0) {
            lista.sort(function (a, b) {
              return a[kulcs] > b[kulcs] ? 1 : -1;
            });
            szamlalo[kulcs]++;
          } else {
            lista.sort(function (a, b) {
              return a[kulcs] < b[kulcs] ? 1 : -1;
            });
            szamlalo[kulcs]++;
          }
          tablazatMegjelenit(lista);
          break;
      }
    });
  });
}
