export function tablazatMegjelenit(lista) {
  let tbodyELem = document.querySelector("tbody");
  let tablazat = "<tr>";
    for (let index = 0; index < lista.length; index++) {
        tablazat += `     <th>${lista[index].nev}</th>
                          <th>${lista[index].nemzetiseg}</th>
                          <th>${lista[index].gyozelmek_szama}</th>
                      </tr>`;
        
    }
    tbodyELem.innerHTML = tablazat;
}
