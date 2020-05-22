'use strict'

class Hospital {
  constructor(nom, maximPacients, maximMetges) {
    this.nomHospital = nom;
    this.maximPacients = maximPacients;
    this.pacientsIngressats = [];
  }

    ingressarPacient(pacient) {  // mètode ingressarPacient
      if (pacient != null && (this.pacientsIngressats.length < this.maximPacients))
        this.pacientsIngressats.push(pacient);
    }

    donarDaltaPacient(llitPacient) { // mètode donarDaltaPacient
      alert("S'ha donat d'alta el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

    morirPacient(llitPacient) {  // mètode morirPacient
      alert("Encara que s'ha fet tot el que s'ha pogut, el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " ha mort de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

}
