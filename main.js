function prikaziFunkcije() {
  let x = document.getElementById("FunkcijeDIV");
  let funk = document.getElementById("funk");
  if (x.style.display === "block") {
    x.style.display = "none";
	funk.innerText="Prikaži funkcije";
  } else {
    x.style.display = "block";
	document.getElementById("funk").innerText="Sakrij funkcije";
  }
}
function prikaziIntegrale() {
  let y = document.getElementById("IntegraliDIV");
  let integrali = document.getElementById("integrali");
  if (y.style.display === "block") {
    y.style.display = "none";
	integrali.innerText="Prikaži integrale";
  } else {
    y.style.display = "block";
	integrali.innerText="Sakrij integrale";
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
function prikaziEkstreme() {
  let y = document.getElementById("EkstremiDIV");
  let ekstremi = document.getElementById("ekstremi");
  if (y.style.display === "block") {
    y.style.display = "none";
	ekstremi.innerText="Prikaži ekstreme";
  } else {
    y.style.display = "block";
	ekstremi.innerText="Sakrij ekstreme";
  }
}
function prikaziJednacine() {
  let y = document.getElementById("JednacineDIV");
  let jednacine = document.getElementById("jednacine");
  if (y.style.display === "block") {
    y.style.display = "none";
	jednacine.innerText="Prikaži sisteme jednačina";
  } else {
    y.style.display = "block";
	jednacine.innerText="Sakrij sisteme jednačina";
  }
}
function prikaziRelacije() {
  let y = document.getElementById("RelacijeDIV");
  let relacije = document.getElementById("relacije");
  if (y.style.display === "block") {
    y.style.display = "none";
	relacije.innerText="Prikaži relacije i funkcije";
  } else {
    y.style.display = "block";
	relacije.innerText="Sakrij relacije i funkcije";
  }
}
function prikaziNizove() {
  let y = document.getElementById("NizoviDIV");
  let nizovi = document.getElementById("nizovi");
  if (y.style.display === "block") {
    y.style.display = "none";
	nizovi.innerText="Prikaži nizove i redove";
  } else {
    y.style.display = "block";
	nizovi.innerText="Sakrij nizove i redove";
  }
}
function prikaziTejlora() {
  let y = document.getElementById("TejlorDIV");
  let tejlor = document.getElementById("tejlor");
  if (y.style.display === "block") {
    y.style.display = "none";
	tejlor.innerText="Prikaži Tejlorov i Maklorenov polinom";
  } else {
    y.style.display = "block";
	tejlor.innerText="Sakrij Tejlorov i Maklorenov polinom";
  }
}
function prikaziTeoreme() {
  let y = document.getElementById("TeoremeDIV");
  let teoreme = document.getElementById("teoreme");
  if (y.style.display === "block") {
    y.style.display = "none";
	teoreme.innerText="Prikaži teoreme diferencijalnog računa";
  } else {
    y.style.display = "block";
	teoreme.innerText="Sakrij teoreme diferencijalnog računa";
  }
}
function prikaziVerovatnocu() {
  let y = document.getElementById("VerovatnocaDIV");
  let verovatnoca = document.getElementById("verovatnoca");
  if (y.style.display === "block") {
    y.style.display = "none";
	verovatnoca.innerText="Prikaži verovatnoću";
  } else {
    y.style.display = "block";
	verovatnoca.innerText="Sakrij verovatnoću";
  }
}
function prikaziOstale() {
  let y = document.getElementById("OstaliDIV");
  let ostali = document.getElementById("ostali");
  if (y.style.display === "block") {
    y.style.display = "none";
	ostali.innerText="Prikaži ostale zadatke";
  } else {
    y.style.display = "block";
	ostali.innerText="Sakrij ostale zadatke";
  }
}