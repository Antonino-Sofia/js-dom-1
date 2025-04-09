console.log("Antonino");
//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
//BONUS
//Facciamo accendi e spegni:
//Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
//Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
//E così via...

//immagine
const bulbElement = document.getElementById("bulb");
console.log(bulbElement);
//bottone
buttonElement = document.getElementById("switch");
console.log(buttonElement);
//esercizio di default
buttonElement.addEventListener("click", function () {
  console.log("click bottone");

  console.log(bulbElement.src);
  console.log(bulbElement.id);
  console.log(bulbElement.alt);

  bulbElement.src = "img/yellow_lamp.png";
  bulbElement.alt = "Lamapadina accesa";
});
//BONUS
document.getElementById("switch").addEventListener("click", accendiLampadina);

function accendiLampadina() {
  console.log("accendi lampadina");
  const bulbElement = document.getElementById("bulb");
  console.log(bulbElement);
  //BOTTONE
  const buttonElement = document.getElementById("switch");
  console.log(buttonElement);

  bulbElement.src = "img/yellow_lamp.png";
  bulbElement.alt = "Lampadina accesa";
  buttonElement.innerText = "Spegni";

  buttonElement.removeEventListener("click", accendiLampadina);
  buttonElement.addEventListener("click", spegniLampadina);
}
