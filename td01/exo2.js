function Etudiant(nom, prenom, numeroetudiant, dateNaissance){
    this.nom = nom;
    this.prenom = prenom;
    this.numeroetudiant = numeroetudiant;
    this.dateNaissance = dateNaissance;
    this.presenter = function(){
    console.log("Je suis " + this.nom + " " + this.prenom + "mon numero étudiant est " + this.numeroetudiant +
    + " et je suis nés le " + this.dateNaissance);
    };

    direAge = function(){
        var annee = date.getFullYear();
        var age =  annee - dateNaissance[2];
        console.log("il a " + this.age + "");
        return age;
    };

    var et1 = new Etudiant("Jean", "Roger", 198745249, [21,8,1975]);
    var et2 = new Etudiant("dupuis", "Michel", 14879249, [11,11,1991]);

    et1.presenter();
    et2.presenter();
    }