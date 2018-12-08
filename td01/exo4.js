var Personne = {
    nom: "",
    prenom: "",
    dateNaissance: [1, 1, 1977],

    init: function(nom, prenom, dateNaissance, taille,){
        this.nom
        = nom;
        this.prenom
        = prenom;
        this.dateNaissance = dateNaissance; 
        this.taille = taille;},

        direAge = function(){
            var annee = date.getFullYear();
            var age =  annee-dateNaissance[2];
            console.log("il a " + this.age);}
        
    };


    var Professeur = Object.create(Personne); // On crée la référence à l’objet Personne
    Professeur.mail = null;

    Professeur.initProfesseur = function(nom, prenom, dateNaissance, mail){
        // On appelle la fonction de l’objet Personne
        this.init(nom, prenom, dateNaissance);

        this.mail = mail;
    }

    var prof1 = Object.create(Professeur);
prof1.initProfesseur("Durand", "Kevin", [26, 7, 1991], "durand@gmail.com");
var prof2 = Object.create(Professeur);
prof2.initProfesseur("Jean", "Roger", [11, 4, 1997], "jean@gmail.com");