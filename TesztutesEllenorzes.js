import { utesEllenorzes } from "./saktablapozicio.js";

function tesztek() {
  const tesztesetLista = [
    {
      poz1: "a1",
      poz2: "a1",
      vart: true,
    },
    {
      poz1: "a1",
      poz2: "b3",
      vart: false,
    },
    {
      poz1: "a1",
      poz2: "a7",
      vart: true,
    },
    {
      poz1: "a1",
      poz2: "h1",
      vart: true,
    },
    {
      poz1: "a1",
      poz2: "h8",
      vart: true,
    },
    {
      poz1: "h8",
      poz2: "a1",
      vart: true,
    },
    {
      poz1: "h1",
      poz2: "a8",
      vart: true,
    },
    {
      poz1: "",
      poz2: "",
      vart: false,
    },
    {
      poz1: "x123",
      poz2: "a2",
      vart: false,
    },
  ];

  for (let index = 0; index < tesztesetLista.length; index++) {
    let eredmeny = utesEllenorzes(
      tesztesetLista[index].poz1,
      tesztesetLista[index].poz2,
    );
    console.assert(
      eredmeny === tesztesetLista[index].vart,
      `poz1 = ${tesztesetLista[index].poz1}, poz2 = ${tesztesetLista[index].poz2}, elvárt: ${tesztesetLista[index].vart}, kapott: ${eredmeny}`,
    );
  }
  console.log("Minden teszt lefutott");
}

tesztek();
