function prikaziRazdvojene() {
  let x = document.getElementById("RazdvojeneDIV");
  let razdvojene = document.getElementById("razdvojene");
  if (x.style.display === "block") {
    x.style.display = "none";
	razdvojene.innerText="Prikaži d.j. koje razdvajaju promenljive";
  } else {
    x.style.display = "block";
	document.getElementById("razdvojene").innerText="Sakrij d.j. koje razdvajaju promenljive";
  }
}
function prikaziRazdvojene1() {
  let x = document.getElementById("Razdvojene1DIV");
  let razdvojene1 = document.getElementById("razdvojene1");
  if (x.style.display === "block") {
    x.style.display = "none";
	razdvojene1.innerText="Prikaži prvi zadatak";
  } else {
    x.style.display = "block";
	document.getElementById("razdvojene1").innerText="Sakrij prvi zadatak";
  }
}
function prikaziRazdvojene2() {
  let x = document.getElementById("Razdvojene2DIV");
  let razdvojene2 = document.getElementById("razdvojene1");
  if (x.style.display === "block") {
    x.style.display = "none";
	razdvojene2.innerText="Prikaži drugi zadatak";
  } else {
    x.style.display = "block";
	document.getElementById("razdvojene2").innerText="Sakrij drugi zadatak";
  }
}
function prikaziRazdvojeneResenja1() {
  let x = document.getElementById("RazdvojeneResenja1DIV");
  let razdvojeneResenja1 = document.getElementById("razdvojeneResenja1");
  if (x.style.display === "block") {
    x.style.display = "none";
	razdvojeneResenja1.innerText="Prikaži rešenje prvog zadatka";
  } else {
    x.style.display = "block";
	document.getElementById("razdvojeneResenja1").innerText="Sakrij rešenje prvog zadatka";
  }
}
function prikaziRazdvojeneResenja2() {
  let x = document.getElementById("RazdvojeneResenja2DIV");
  let razdvojeneResenja2 = document.getElementById("razdvojeneResenja2");
  if (x.style.display === "block") {
    x.style.display = "none";
	razdvojeneResenja2.innerText="Prikaži rešenje drugog zadatka";
  } else {
    x.style.display = "block";
	document.getElementById("razdvojeneResenja2").innerText="Sakrij rešenje drugog zadatka";
  }
}
function prikaziHomogene() {
  let x = document.getElementById("HomogeneDIV");
  let Homogene = document.getElementById("homogene");
  if (x.style.display === "block") {
    x.style.display = "none";
	Homogene.innerText="Prikaži homogene d.j.";
  } else {
    x.style.display = "block";
	document.getElementById("homogene").innerText="Sakrij homogene d.j.";
  }
}
function prikaziHomogene1() {
  let x = document.getElementById("Homogene1DIV");
  let Homogene1 = document.getElementById("homogene1");
  if (x.style.display === "block") {
    x.style.display = "none";
	Homogene1.innerText="Prikaži prvi zadatak";
  } else {
    x.style.display = "block";
	document.getElementById("homogene1").innerText="Sakrij prvi zadatak";
  }
}
function prikaziHomogene2() {
  let x = document.getElementById("Homogene2DIV");
  let Homogene2 = document.getElementById("homogene1");
  if (x.style.display === "block") {
    x.style.display = "none";
	Homogene2.innerText="Prikaži drugi zadatak";
  } else {
    x.style.display = "block";
	document.getElementById("homogene2").innerText="Sakrij drugi zadatak";
  }
}
function prikaziHomogeneResenja1() {
  let x = document.getElementById("HomogeneResenja1DIV");
  let HomogeneResenja1 = document.getElementById("homogeneResenja1");
  if (x.style.display === "block") {
    x.style.display = "none";
	HomogeneResenja1.innerText="Prikaži rešenje prvog zadatka";
  } else {
    x.style.display = "block";
	document.getElementById("homogeneResenja1").innerText="Sakrij rešenje prvog zadatka";
  }
}
function prikaziHomogeneResenja2() {
  let x = document.getElementById("HomogeneResenja2DIV");
  let HomogeneResenja2 = document.getElementById("homogeneResenja2");
  if (x.style.display === "block") {
    x.style.display = "none";
	HomogeneResenja2.innerText="Prikaži rešenje drugog zadatka";
  } else {
    x.style.display = "block";
	document.getElementById("homogeneResenja2").innerText="Sakrij rešenje drugog zadatka";
  }
}



function prikaziDiferencijalne() {
  let t = document.getElementById("DiferencijalneDIV");
  let diferencijalne = document.getElementById("diferencijalne");
  if (t.style.display === "block") {
    t.style.display = "none";
	diferencijalne.innerText="Prikaži  diferencijalne jednačine";
  } else {
    t.style.display = "block";
	diferencijalne.innerText="Sakrij diferencijalne jednačine";
  }
}