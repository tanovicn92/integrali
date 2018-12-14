function prikaziFunkcije() {
  let x = document.getElementById("FunkcijeDIV");
  let funk = document.getElementById("funk");
  if (x.style.display === "none") {
    x.style.display = "block";
	funk.innerText="Sakrij funkcije";
  } else {
    x.style.display = "none";
	document.getElementById("funk").innerText="Prikaži funkcije";
  }
}
function prikaziIntegrale() {
  let y = document.getElementById("IntegraliDIV");
  let integrali = document.getElementById("integrali");
  if (y.style.display === "none") {
    y.style.display = "block";
	integrali.innerText="Sakrij integrale";
  } else {
    y.style.display = "none";
	integrali.innerText="Prikaži integrale";
  }
}