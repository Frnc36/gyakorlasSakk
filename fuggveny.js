import { tablazatMegjelenit } from "./tablazatMegjelenit.js";

export function rendezes(lista) {
  const RENDEZESEK = document.querySelectorAll("thead tr th");
  RENDEZESEK.forEach(function (th) {
    th.addEventListener("click", function (event) {
      console.log(event.target.id);
      switch (event.target.id) {
        case "nev":
          lista.sort(function (a, b) {
            return a.nev > b.nev ? 1 : -1;;
          });
          tablazatMegjelenit(lista);
          break;
        case "nem":
          lista.sort(function (a, b) {
            return a.nemzetiseg > b.nemzetiseg ? 1 : -1;;
          });
          tablazatMegjelenit(lista);
          break;
        case "gyo":
          lista.sort(function (a, b) {
            return a.gyozelmek_szama > b.gyozelmek_szama ? 1 : -1;
          });
          tablazatMegjelenit(lista);
          break;

        default:
          break;
      }
    });
  });
}
